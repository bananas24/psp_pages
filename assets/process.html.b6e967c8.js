import{_ as p,a as u,b as d,c as m,d as v}from"./threads_vs_process.7f2c90ed.js";import{_ as g,r as i,o as b,c as k,d as n,a as e,w as o,b as s,f as t}from"./app.108f91ed.js";const h={},f=e("h1",{id:"_1-1-procesos-programas-hilos",tabindex:"-1"},"1.1. Procesos, Programas, hilos",-1),_={class:"table-of-contents"},y=s("1.1.1. Procesos y programas"),q=s("1.1.2. Programaci\xF3n concurrente"),j=s("\xBFPara qu\xE9?"),x=s("Comunicaci\xF3n y sincronizaci\xF3n entre procesos"),P=s("1.1.3. Servicios e hilos"),C=s("Programa secuencial (Arquitectura Von Newmann)"),w=s("Programa concurrente"),S=s("Hilos vs procesos"),z=t('<h2 id="_1-1-1-procesos-y-programas" tabindex="-1">1.1.1. Procesos y programas</h2><p>Un <code>programa</code> no es m\xE1s que un conjunto de instrucciones u \xF3rdenes que le indican a un dispositivo qu\xE9 acciones debe realizar con los datos recibidos.</p><div class="custom-container tip"><p class="custom-container-title">Caja negra</p><p>Seg\xFAn la visi\xF3n de un sistema como caja negra, un programa le indica al sistema c\xF3mo obtener unos datos de salida a partir de unos datos de entrada.</p></div><p>Sin embargo, un <code>proceso</code> es un programa en ejecuci\xF3n. Esto es, un proceso es una entidad activa y un programa es una entidad pasiva.</p><p>El proceso, por tanto, est\xE1 representado por el contador del programa, el valor de los registros, la pila, el <em>c\xF3digo ejecutable</em>, su estado, ... todo lo necesario para la ejecuci\xF3n del programa por parte del SO.</p><p><img src="'+p+'" alt="Proceso en memoria"></p><p>Cada proceso es una entidad independiente. Cuando un programa se ejecuta, el sistema operativo crea un proceso. Si ese mismo programa se vuelve a ejecutar, se crear\xEDa un proceso distinto, teniendo en memoria dos instancias del mismo programa. Pero es importante recalcar que los dos procesos son independientes.</p><h2 id="_1-1-2-programacion-concurrente" tabindex="-1">1.1.2. Programaci\xF3n concurrente</h2><p>Podemos decir que dos procesos son concurrentes cuando la primera instrucci\xF3n de uno de los procesos se ejecuta despu\xE9s de la primera y antes de la \xFAltima de otro proceso.</p><p>La planificaci\xF3n alternando los instantes de ejecuci\xF3n, <code>multitarea</code>, hace que los procesos se ejecuten de forma concurrente. Tambi\xE9n la disponibilidad de varias unidades de proceso, <code>multiproceso</code>, permite la ejecuci\xF3n simult\xE1nea o paralela de procesos en el sistema.</p><p><img src="'+u+'" alt="Concurrencia vs paralelismo"></p><div class="custom-container tip"><p class="custom-container-title">Concurrencia</p><p>A los dos escenarios descritos anteriormente es a lo que vamos a denominar, de forma general, <strong>concurrencia</strong>.</p></div><h3 id="\xBFpara-que" tabindex="-1">\xBFPara qu\xE9?</h3><p>Las principales razones por las que se utiliza una estructura concurrente son:</p><ul><li>Optimizar la utilizaci\xF3n de los recursos: Podremos simultanear las operaciones de E/S en los procesos. La CPU estar\xE1 menos tiempo ociosa.</li><li>Proporcionar interactividad a los usuarios (y animaci\xF3n gr\xE1fica).</li><li>Mejorar la disponibilidad: Servidor que no realice tareas de forma concurrente, no podr\xE1 atender peticiones de clientes simult\xE1neamente.</li><li>Conseguir un dise\xF1o conceptualmente m\xE1s comprensible y mantenible: El dise\xF1o concurrente de un programa nos llevar\xE1 a una mayor modularidad y claridad.</li><li>Aumentar la protecci\xF3n: Tener cada tarea aislada en un proceso permitir\xE1 depurar la seguridad de cada proceso y poder finalizarlo en caso de mal funcionamiento sin que suponga la ca\xEDda del sistema.</li></ul><p>Adem\xE1s, los actuales avances tecnol\xF3gicos hacen necesario tener en cuenta la concurrencia en el dise\xF1o de las aplicaciones para aprovechar su potencial. Los nuevos entornos hardware son:</p><ul><li>Microprocesadores con m\xFAltiples n\xFAcleos que comparten la memoria principal del sistema.</li><li>Entornos multiprocesador con memoria compartida.</li><li>Entornos distribuidos y servicios cloud.</li></ul><h3 id="comunicacion-y-sincronizacion-entre-procesos" tabindex="-1">Comunicaci\xF3n y sincronizaci\xF3n entre procesos</h3><p>Cuando varios procesos se ejecutan concurrentemente puede haber procesos que colaboren para un determinado fin mientras que puede haber otros que compitan por los recursos del sistema.</p><p>En ambos casos se hace necesaria la introducci\xF3n de mecanismos de comunicaci\xF3n y sincronizaci\xF3n entre procesos.</p><p>:::info Programaci\xF3n concurrente Precisamente del estudio de esos <strong>mecanismos de sincronizaci\xF3n y comunicaci\xF3n</strong> trata la programaci\xF3n concurrente y este m\xF3dulo de PSP. :::</p><p>Si pensamos en la forma en la que un proceso puede comunicarse con otro, se nos plantean estas dos:</p><ul><li>Intercambio de mensajes: Es la forma que se utiliza habitualmente cuando los procesos se encuentran en m\xE1quinas diferentes. Los procesos intercambian informaci\xF3n siguiendo un protocolo previamente establecido.</li><li>Recursos (o memoria) compartidos: S\xF3lo se puede utilizar cuando los dos procesos se encuentran en la misma m\xE1quina y permite la sincronizaci\xF3n de los procesos en funci\xF3n del valor o estado de un recurso compartido.</li></ul><p>Tambi\xE9n podemos ver el tipo de comunicaci\xF3n en funci\xF3n de la sincron\xEDa que mantengan los procesos durante la comunicaci\xF3n:</p><ul><li>S\xEDncrona: El emisor queda bloqueado hasta que el receptor recibe el mensaje. Ambos se sincronizan en el momento de la recepci\xF3n del mensaje.</li><li>As\xEDncrona: El emisor contin\xFAa con su ejecuci\xF3n inmediatamente despu\xE9s de emitir el mensaje, sin quedar bloqueado.</li></ul><h2 id="_1-1-3-servicios-e-hilos" tabindex="-1">1.1.3. Servicios e hilos</h2><p>Un programa, como ya hemos dicho, se compone de un conjunto de sentencias (operaciones y verificaciones) y un flujo de ejecuci\xF3n. La l\xEDnea de flujo de control establece, de acuerdo con la estructura del propio programa y de los datos que maneja, el orden en que deben ejecutarse las sentencias.</p><p>Atendiendo al n\xFAmero de l\xEDneas de flujo de control que tiene un programa, los procesos pueden ser:</p><ul><li>Secuenciales: Poseen un \xFAnico flujo de control (monohilo)</li><li>Concurrentes: Poseen varios hilos de ejecuci\xF3n (multihilo).</li></ul><h3 id="programa-secuencial-arquitectura-von-newmann" tabindex="-1">Programa secuencial (Arquitectura Von Newmann)</h3><p>Cuando empezamos a programar, usamos el estilo de programaci\xF3n cl\xE1sico, en el que se sigue el modelo conceptual de Von Newmann</p><p>Los programas secuenciales presentan una l\xEDnea simple de control de flujo. Las operaciones de este tipo de programas est\xE1n estrictamente ordenados como una secuencia temporal lineal.</p><p>El comportamiento del programa es solo funci\xF3n de la naturaleza de las operaciones individuales que constituye el programa y del orden en que se ejecutan (determinado por el conjunto de entradas que recibe).</p><p>En los programas secuenciales, el tiempo que tarda cada operaci\xF3n en ejecutarse no tiene consecuencias sobre el resultado.</p><p><img src="'+d+'" alt="Sequential flowchat example"></p><p>La comprobaci\xF3n del correcto funcionamiento (<code>verificaci\xF3n</code> o <code>depuraci\xF3n</code>) de un programa secuencial es sencilla:</p><ul><li>Cada sentencia produce la respuesta correcta.</li><li>Las sentencias se ejecutan en el orden esperado.</li></ul><p>De aqu\xED surgen algunos de los m\xE9todos b\xE1sicos de pruebas de sistemas, como el de <em>caja blanca</em>.</p><h3 id="programa-concurrente" tabindex="-1">Programa concurrente</h3><p>En los programas concurrentes existen m\xFAltiples l\xEDneas de control de flujo. Las sentencias que constituyen el programa no se ejecutan siguiendo un \xF3rden que corresponda a una secuencia temporal lineal.</p><p>En los programas concurrentes el concepto de secuencialidad entre sentencias continua siendo muy importante. Sin embargo en los programas concurrentes es de orden parcial, mientras que, tal y como hemos comentado anteriormente, en los programas secuenciales era de orden estricto.</p><p><img src="'+m+`" alt="Concurrent flowchat example"></p><p>En los programas concurrentes la <em>secuencializaci\xF3n</em> entre procesos concurrentes se llama <strong>sincronizaci\xF3n</strong>.</p><p>Este orden parcial implica que los programas concurrentes no tienen porqu\xE9 ser deterministas, es decir, que ante el mismo conjunto de datos de entrada no siempre se va a obtener el mismo resultado.</p><div class="custom-container danger"><p class="custom-container-title">Indeterminismo</p><p>Que existan diferentes salidas para el mismo conjunto de datos de entrada no significa necesariamente que un programa concurrente sea incorrecto.</p></div><p>Si observamos el siguiente ejemplo de pseudoc\xF3digo</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestClass</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> x<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testMethod1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            x<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testMethod2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            x<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sequential</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token function">testMethod1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">testMethod2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">parallel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">// cobegin-coend means that both methods are run simultaneously</span>
        <span class="token comment">// These sentences doesn&#39;t exist in Java. They are used for </span>
        <span class="token comment">// sample purposes</span>
        cobegin
            <span class="token function">testMethod1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">testMethod2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        coend
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: question \xBFQu\xE9 valor tendr\xE1 x tras ejecutar el m\xE9todo sequential?</p><p>\xBFQu\xE9 valor tendr\xE1 x tras ejecutar el m\xE9todo parallel? :::</p><p>::: info Rese\xF1a hist\xF3rica La naturaleza y los modelos de interacci\xF3n entre procesos de un programa concurrente fueron estudiados y descritos por <strong>Dijkstra</strong> (1968), Brinch <strong>Hansen</strong> (1973) y <strong>Hoare</strong> (1974).</p><p>Estos trabajos constituyeron los principios en que se basaron los sistemas operativos multiproceso de la d\xE9cada de los 70 y 80. :::</p><p>El indeterminismo inherente a los programas concurrentes hace que su an\xE1lisis y validaci\xF3n sea m\xE1s complejo. No obstante, para la comprobaci\xF3n del correcto funcionamiento (<code>verificaci\xF3n</code> o <code>depuraci\xF3n</code>) de un programa concurrente se requiere comprobar los mismos aspectos que en los programas secuenciales, pero con los siguientes nuevos aspectos:</p>`,52),E=e("li",null,"Las sentencias se pueden validar individualmente solo si no est\xE1n acopladas por variables compartidas.",-1),L=s("Cuando existen variables compartidas, los efectos de interferencia entre las sentencias concurrentes pueden ser muy variados y la validaci\xF3n es muy dif\xEDcil. "),A=e("li",null,[s("Siempre que la secuencialidad entre tareas se lleve a cabo por sentencias expl\xEDcitas de "),e("strong",null,"sincronizaci\xF3n"),s(", el tiempo es un elemento que no influye sobre el resultado")],-1),B=t('<div class="custom-container warning"><p class="custom-container-title">Importante</p><p>Estos tres aspectos que se acaban de describir forman la base de toda la programaci\xF3n concurrente.</p><p>\u{1F441}\uFE0F Conocerlos, entenderlos y saber aplicarlos es a lo que dedicaremos una parte importante de este curso.</p></div><h3 id="hilos-vs-procesos" tabindex="-1">Hilos vs procesos</h3><p>Un hilo no es m\xE1s que cada una de esas l\xEDneas de flujo que puede tener un proceso ejecut\xE1ndose de forma concurrente. Un procesos es una unidad pesada de ejecuci\xF3n.</p><p>As\xED, un proceso estar\xE1 formado por, al menos, un hilo de ejecuci\xF3n, el hilo principal. Si el proceso tiene varios hilos, cada uno es una unidad de ejecuci\xF3n ligera.</p><table><thead><tr><th style="text-align:left;">Procesos</th><th style="text-align:left;">Hilos</th></tr></thead><tbody><tr><td style="text-align:left;">Constan de uno o m\xE1s hilos</td><td style="text-align:left;">Un hilo siempre existe dentro de un proceso</td></tr><tr><td style="text-align:left;">Son independientes unos de otros</td><td style="text-align:left;">Comparten los recursos del proceso de forma directa</td></tr><tr><td style="text-align:left;">Son gestionados por el SO</td><td style="text-align:left;">Son gestionados por el proceso</td></tr><tr><td style="text-align:left;">Se comunican a trav\xE9s del SO</td><td style="text-align:left;">La comunicaci\xF3n la controla el proceso</td></tr></tbody></table><p><img src="'+v+'" alt="Threads vs Processes"></p><p>En la imagen anterior se puede observar la relaci\xF3n existente entre la creaci\xF3n de un thread y la de su proceso asociado.</p><ul><li>El proceso define un espacio de memoria en el que reside. Los hilos comparten ese espacio de memoria. Dentro de ese espacio de memoria cada hilo tiene su espacio reservado, pero todos pueden compartir la memoria global del proceso y los recursos (ficheros, sockets, etc.) que el proceso tenga abiertos.</li><li>Como ya hemos visto, cada proceso tiene su PCB con informaci\xF3n relativa al proceso.</li><li>Los hilos, de forma similar, tienen su TCB (Thread Control Block) en el que guardan la informaci\xF3n espec\xEDfica de cada hilo (Contador de programa, puntero a la pila, estado del thread, registros y un puntero al PCB).</li></ul><p>::: info Servicios Un servicio es un proceso que, normalmente, es cargado durante el arranque del sistema operativo. Al no necesitar interacci\xF3n con el usuario, los servicios suelen ejecutarse en forma de *<em>demonios</em>, quedan su ejecuci\xF3n en <em>segundo plano</em>.</p><p>Recibe el nombre de servicio ya que es un proceso que queda a la espera de que otro le pida que realice una tarea. Como deben atender las solicitudes de varios procesos, los servicios suelen ser programas multihilo. :::</p>',10);function T(D,M){const c=i("DownloadPDF-component"),r=i("DocumentCover-component"),a=i("router-link"),l=i("Badge");return b(),k("div",null,[n(c),n(r,{titulo:"1.1. Procesos, programas, hilos"}),f,e("nav",_,[e("ul",null,[e("li",null,[n(a,{to:"#_1-1-1-procesos-y-programas"},{default:o(()=>[y]),_:1})]),e("li",null,[n(a,{to:"#_1-1-2-programacion-concurrente"},{default:o(()=>[q]),_:1}),e("ul",null,[e("li",null,[n(a,{to:"#\xBFpara-que"},{default:o(()=>[j]),_:1})]),e("li",null,[n(a,{to:"#comunicacion-y-sincronizacion-entre-procesos"},{default:o(()=>[x]),_:1})])])]),e("li",null,[n(a,{to:"#_1-1-3-servicios-e-hilos"},{default:o(()=>[P]),_:1}),e("ul",null,[e("li",null,[n(a,{to:"#programa-secuencial-arquitectura-von-newmann"},{default:o(()=>[C]),_:1})]),e("li",null,[n(a,{to:"#programa-concurrente"},{default:o(()=>[w]),_:1})]),e("li",null,[n(a,{to:"#hilos-vs-procesos"},{default:o(()=>[S]),_:1})])])])])]),z,e("ul",null,[E,e("li",null,[L,n(l,{type:"danger",text:"cuidado",vertical:"middle"})]),A]),B])}const V=g(h,[["render",T],["__file","process.html.vue"]]);export{V as default};
