import{_ as t,r as l,o as i,c as A,d as a,a as s,w as o,b as n,f as u}from"./app-24315640.js";const y={},d=s("h1",{id:"_3-4-mecanismos-alternativos-de-sincronizacion",tabindex:"-1"},"3.4 Mecanismos alternativos de sincronización",-1),m={class:"table-of-contents"},v=s("h2",{id:"_3-4-1-semaforos",tabindex:"-1"},"3.4.1. Semáforos",-1),B=s("p",null,[n("Otro posible mecanismos para sincronizar hilos son los "),s("code",null,"semáforos"),n(". Un semáforo es un mecanismo para permitir, o restringir, el acceso a recursos compartidos en un entorno de multiprocesamiento, con varios hilos ejecutándose de forma concurrente.")],-1),E={href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/concurrent/Semaphore.html",target:"_blank",rel:"noopener noreferrer"},D=u(`<p>Los semáforos se emplean para permitir el acceso a diferentes partes de programas (llamados secciones críticas) donde se manipulan variables o recursos que deben ser accedidos de forma especial. Según el valor con que son inicializados se permiten a más o menos procesos utilizar el recurso de forma simultánea.</p><p>El funcionamiento de los semáforos se basa en el uso de dos métodos, así como en el valor inicial <code>permits</code> con el que se crea el semáforo:</p><ul><li>release(): Ejecutado por un hilo para liberar el semáforo cuando el hilo ha terminado de ejecutar la sección crítica. Por defecto se incrementa la variable <code>permits</code> en 1, aunque puede recibir un valor e incrementarla en esa cantidad.</li><li>acquire(): Ejecutado por un hilo para acceder al semáforo. Para que un hilo pueda tomar el control del semáforo y no quedarse bloqueado, la variable <code>permits</code>debe tener un valor mayor que cero. También puede recibir un valor, por lo que <code>permits</code> tendrá que ser mayor que dicho valor.</li><li>permits: Se inicializa a la cantidad de recursos existentes o hilos que queramos que puedan acceder simultáneamente. Así, cada proceso, al ir solicitando un recurso, verificará que el valor del semáforo sea mayor de 0; si es así es que existen recursos libres, seguidamente acaparará el recurso y restará el valor del semáforo. Cuando el semáforo alcance el valor 0, significará que todos los recursos están siendo utilizados, y los procesos que quieran solicitar un recurso deberán esperar a que el semáforo sea positivo (algún hilo haga un release).</li></ul><div class="custom-container info"><p class="custom-container-title">Mutex</p><p>Un tipo simple de semáforo es el binario, que puede tomar solamente los valores 0 y 1.</p><p>Se inicializan en 1 y son usados cuando sólo un proceso puede acceder a un recurso a la vez. Se les suele llamar mutex.</p><p>Tienen un funcionamiento similar a synchronized, funcionando en exclusión mutua (<strong>mut</strong>ual <strong>ex</strong>clusion).</p></div><p>Veamos un ejemplo en el que varios Productores y Consumidores acceden de forma simultánea a un objeto compartido</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">class</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">Almacen</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#9C3EDA;">private</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">final</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">int</span><span style="color:#90A4AE;"> MAX_LIMITE </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">20</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#9C3EDA;">private</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">int</span><span style="color:#90A4AE;"> producto </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">0</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#9C3EDA;">private</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">Semaphore</span><span style="color:#90A4AE;"> productor </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">Semaphore</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">MAX_LIMITE</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#9C3EDA;">private</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">Semaphore</span><span style="color:#90A4AE;"> consumidor </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">Semaphore</span><span style="color:#39ADB5;">(</span><span style="color:#F76D47;">0</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#9C3EDA;">private</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">Semaphore</span><span style="color:#90A4AE;"> mutex </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">Semaphore</span><span style="color:#39ADB5;">(</span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">producir</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">String</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">nombreProductor</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">    System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">nombreProductor </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> intentando almacenar un producto</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;font-style:italic;">try</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// En el ejemplo, hasta 20 productores pueden acceder a la vez      </span></span>
<span class="line"><span style="color:#90A4AE;">        productor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">acquire</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// Sin embargo, sólo 1 (consumidor/productor) a la vez podrá actualizar </span></span>
<span class="line"><span style="color:#90A4AE;">        mutex</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">acquire</span><span style="color:#39ADB5;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">        producto</span><span style="color:#39ADB5;">++;</span></span>
<span class="line"><span style="color:#90A4AE;">        System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">nombreProductor </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> almacena un producto. </span><span style="color:#39ADB5;">&quot;</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Almacén con </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> producto </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">producto </span><span style="color:#39ADB5;">&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">?</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> productos.</span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> producto.</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">));</span></span>
<span class="line"><span style="color:#90A4AE;">        mutex</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">release</span><span style="color:#39ADB5;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">        Thread</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">sleep</span><span style="color:#39ADB5;">(</span><span style="color:#F76D47;">500</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">      </span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">catch</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">InterruptedException</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">ex</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">      Logger</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getLogger</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">Almacen</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">class</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getName</span><span style="color:#39ADB5;">()).</span><span style="color:#6182B8;">log</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">Level</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">SEVERE</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">null,</span><span style="color:#90A4AE;"> ex</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">finally</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">      </span><span style="color:#90A4AE;font-style:italic;">// El productor permite que un consumidor pueda acceder</span></span>
<span class="line"><span style="color:#90A4AE;">      consumidor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">release</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">consumir</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">String</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">nombreConsumidor</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">    System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">nombreConsumidor </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> intentando retirar un producto</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;font-style:italic;">try</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// En el ejemplo siempre tiene que llegar un consumidor antes que un productor</span></span>
<span class="line"><span style="color:#90A4AE;">        consumidor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">acquire</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// Sin embargo, sólo 1 (consumidor/productor) a la vez podrá actualizar </span></span>
<span class="line"><span style="color:#90A4AE;">        mutex</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">acquire</span><span style="color:#39ADB5;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">        producto</span><span style="color:#39ADB5;">--;</span></span>
<span class="line"><span style="color:#90A4AE;">        System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">nombreConsumidor </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> retira un producto. </span><span style="color:#39ADB5;">&quot;</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Almacén con </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> producto </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">producto </span><span style="color:#39ADB5;">&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">?</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> productos.</span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> producto.</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">));</span></span>
<span class="line"><span style="color:#90A4AE;">        mutex</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">release</span><span style="color:#39ADB5;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">        Thread</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">sleep</span><span style="color:#39ADB5;">(</span><span style="color:#F76D47;">500</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">catch</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">InterruptedException</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">ex</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">      Logger</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getLogger</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">Almacen</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">class</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getName</span><span style="color:#39ADB5;">()).</span><span style="color:#6182B8;">log</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">Level</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">SEVERE</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">null,</span><span style="color:#90A4AE;"> ex</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">finally</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">      </span><span style="color:#90A4AE;font-style:italic;">// El consumidor avisa para que un productor pueda volver a dejar productos.</span></span>
<span class="line"><span style="color:#90A4AE;">      productor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">release</span><span style="color:#39ADB5;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#39ADB5;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-4-2-mecanismos-de-alto-nivel" tabindex="-1">3.4.2. Mecanismos de alto nivel</h2><p>Java, en su paquete <code>java.util.concurrent</code> proporciona varias clases <code>thread-safe</code> que nos permiten acceder a los elementos de colecciones y tipos de datos sin preocuparnos de la concurrencia.</p><p>Es un paquete muy amplio que contiene multitud de clases que podemos utilizar en nuestros desarrollos multihilo para simplificar la complejidad de los mismos.</p><h3 id="colas-concurrentes" tabindex="-1">Colas concurrentes</h3><p>La interfaz <strong>BlockingQueue</strong> define una cola <code>FIFO</code> que bloquea hilos que intentan extraer un elemento si la cola está vacía, hasta que vuelva a haber elementos. También permite establecer un número máximo de elementos, de marea que se bloquean los procesos cuando intentan añadir por encima de ese límite, a la espera que se extraigan.</p><p>Las clases LinkedBlockingQueue, ArrayBlockingQueue, SynchronousQueue, PriorityBlockingQueue y DelayQueue implementan la interfaz BlockingQueue.</p><h3 id="colecciones-concurrentes" tabindex="-1">Colecciones concurrentes</h3><p>El uso de colecciones simultáneas es una forma recomendada de crear estructuras de datos compatibles con procesos. Dichas colecciones incluyen ConcurrentHashMap, ConcurrentSkipListMap, ConcurrentSkipListSet, CopyOnWriteArraylist y CopyOnWriteArraySet.</p><p><strong>ConcurrentMap</strong> es una subinterfaz de <code>java.util.Map</code> con operaciones atómicas para eliminar o reemplazar pares clave/valor existentes o añadir pares clave/valor no existentes. ConcurrentHashMap es la versión thread-safe análoga a HashMap.</p><h3 id="variables-atomicas" tabindex="-1">Variables atómicas</h3><p>El paquete <code>java.util.concurrent.atomic</code> incluye clases que proporcionan acciones atómicas sobre tipos de datos básicos. Tenemos AtomicBoolean, AtomicInteger, AtomicDouble, .... y proporcionan métodos para recuperar su valor, incrementar, decrementar, etc.</p><h2 id="_3-4-3-executors-callables-y-future" tabindex="-1">3.4.3 Executors, Callables y Future</h2><p>Existen muchas aproximaciones y librerías que permiten en uso y gestión de hilos desde un programa. Una de las que nos ofrece Java como parte del JDK es la interfaz Executors.</p><p><code>Executors</code> nos va a permitir definir un pool de threads (un conjunto de hilos) que se encargarán de ejecutar las tareas, pero con un límite en cuanto al número de hilos creados y gestionando el la JVM la cola de hilos que serán ejecutados en ese pool.</p><p>Se sale del ámbito de este módulo estudiar y analizar el funcionamiento de Executors y todas sus posibilidades. Aquí os dejo un enlace a un artículo que lo explica con un ejemplo muy ilustrativo.</p>`,21),b={href:"https://jarroba.com/multitarea-e-hilos-en-java-con-ejemplos-ii-runnable-executors/",target:"_blank",rel:"noopener noreferrer"},f=s("p",null,[s("code",null,"Callable"),n(" viene a poner solución a uno de los problemas que tenemos con la interfaz Runnable, la posibilidad de devolver un valor desde este método.")],-1),q=s("p",null,[n("Si se necesita que un proceso devuelva datos al finalizar, se debe crear una clase que implemente la interfaz Callable y defina un método "),s("code",null,"call()"),n(" que desempeñe la misma función que run() en Runnable. En este caso se tendrán que crear los procesos de forma diferente; la clase Thread no acepta un objeto Callable como argumento. Por contra, la clase Executors ofrece diversos métodos estáticos que crean un proceso a partir de su clase Callable.")],-1),h=s("p",null,[s("code",null,"Future"),n(" es una interfaz que implementa el objeto que devuelve el resultado de la ejecución de un Callable. Se puede seguir ejecutando una aplicación hasta que necesite obtener el resultado del hilo "),s("em",null,"Callable"),n(", momento en el que se invoca el método get() en la instancia Future. Si el resultado ya está disponible se recoge y en caso contrario se bloqueará en la llamada hasta que su método call() devuelva el resultado.")],-1);function _(g,x){const r=l("DownloadPDF-component"),c=l("DocumentCover-component"),e=l("router-link"),p=l("ExternalLinkIcon");return i(),A("div",null,[a(r),a(c,{titulo:"3.4 Mecanismos alternativos de sincronización"}),d,s("nav",m,[s("ul",null,[s("li",null,[a(e,{to:"#_3-4-1-semaforos"},{default:o(()=>[n("3.4.1. Semáforos")]),_:1})]),s("li",null,[a(e,{to:"#_3-4-2-mecanismos-de-alto-nivel"},{default:o(()=>[n("3.4.2. Mecanismos de alto nivel")]),_:1}),s("ul",null,[s("li",null,[a(e,{to:"#colas-concurrentes"},{default:o(()=>[n("Colas concurrentes")]),_:1})]),s("li",null,[a(e,{to:"#colecciones-concurrentes"},{default:o(()=>[n("Colecciones concurrentes")]),_:1})]),s("li",null,[a(e,{to:"#variables-atomicas"},{default:o(()=>[n("Variables atómicas")]),_:1})])])]),s("li",null,[a(e,{to:"#_3-4-3-executors-callables-y-future"},{default:o(()=>[n("3.4.3 Executors, Callables y Future")]),_:1})])])]),v,B,s("blockquote",null,[s("p",null,[n("Especificación de "),s("a",E,[n("java.util.concurrent.Semaphore"),a(p)])])]),D,s("p",null,[s("a",b,[n("Executors: Ejemplo supermercado"),a(p)])]),f,q,h])}const S=t(y,[["render",_],["__file","alternatives.html.vue"]]);export{S as default};
