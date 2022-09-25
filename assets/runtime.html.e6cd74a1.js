import{_ as i,r as o,o as y,c as A,d as a,a as s,w as t,b as n,f as e}from"./app.5801f089.js";const d={},u=s("h1",{id:"_2-1-creacion-rapida-de-procesos-con-java-con-runtime",tabindex:"-1"},"2.1. Creaci\xF3n r\xE1pida de procesos con Java con Runtime",-1),m={class:"table-of-contents"},B=n("2.1.1. Creaci\xF3n r\xE1pida de procesos"),D=n("2.1.2 Propiedades del sistema y comandos del sistema"),v=s("h2",{id:"_2-1-1-creacion-rapida-de-procesos",tabindex:"-1"},"2.1.1. Creaci\xF3n r\xE1pida de procesos",-1),E=s("p",null,"La clase java.lang.Runtime se usa principalmente para interactuar con el JRE de Java. Esta clase proporciona m\xE9todos para lanzar procesos, llamar al recolector de basura (Garbage Collector), saber la cantidad de memoria disponible y libre, etc.",-1),b={href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Runtime.html",target:"_blank",rel:"noopener noreferrer"},g=n("Especificaci\xF3n java.lang.Runtime"),h=s("p",null,[n("Cada aplicaci\xF3n en Java tiene acceso a una \xFAnica instancia de "),s("em",null,"java.lang.Runtime"),n(" a trav\xE9s del m\xE9todo "),s("code",null,"Runtime.getRuntime()"),n(" que devuelve la instancia "),s("strong",null,"singleton"),n(" de la clase Runtime.")],-1),f={class:"custom-container question"},q=s("p",{class:"custom-container-title"},"Patrones de dise\xF1o: Singleton",-1),_=s("p",null,"\xBFQu\xE9 son los patrones de dise\xF1o? \xBFQu\xE9 es y para qu\xE9 se usa el patr\xF3n de dise\xF1o singleton?",-1),S=s("p",null,"Investiga c\xF3mo realizar una clase que siga el patr\xF3n de dise\xF1o singleton.",-1),j={href:"https://refactoring.guru/es/design-patterns/java",target:"_blank",rel:"noopener noreferrer"},C=n("Refactoring.Guru Patrones de dise\xF1o"),k=e(`<p>El m\xE9todo que nos interesa a nosotros para la creaci\xF3n de procesos es</p><blockquote><p>public Process exec(String command) throws IOException</p></blockquote><p>Veamos un ejemplo sencillo de uso de este m\xE9todo</p><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">static</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">main</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">String</span><span style="color:#39ADB5;">[]</span><span style="color:#90A4AE;"> args</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> throws IOException </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// Launch notepad app</span></span>
<span class="line"><span style="color:#90A4AE;">    Runtime</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getRuntime</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">exec</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">notepad.exe</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// This way always works</span></span>
<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// String separator = System.getProperty(&quot;file.separator&quot;);</span></span>
<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// Runtime.getRuntime()</span></span>
<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">//    .exec(&quot;c:&quot;+separator+&quot;windows&quot;+separator+&quot;notepad.exe&quot;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// This way used to work (UNIX style paths)</span></span>
<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// Runtime.getRuntime().exec(&quot;c:/windows/notepad.exe&quot;);</span></span>
<span class="line"><span style="color:#39ADB5;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Se puede observar que en el par\xE1metro que pasamos al m\xE9todo <code>exec</code> indicamos el programa que queremos ejecutar. En este caso, como el <em>notepad</em> se encuentra en el PATH del sistema, no es necesario indicar la ruta donde se encuentra el programa. En otro caso, s\xED tendr\xEDamos que hacerlo.</p><div class="pagebreak"></div><h2 id="_2-1-2-propiedades-del-sistema-y-comandos-del-sistema" tabindex="-1">2.1.2 Propiedades del sistema y comandos del sistema</h2><p>Si tenemos pensado desarrollar aplicaciones que funcionen en diferentes SO tendremos que enfrentarnos a la problem\xE1tica del funcionamiento diferente de los distintos SO.</p><p>Vamos a ver algunos ejemplos que pueden servir como gu\xEDa para otros problemas similares a los expuestos.</p><div class="custom-container danger"><p class="custom-container-title">File separator</p><p>Para indicar las rutas en un sistema los sistemas UNIX emplean el caracter <strong>/</strong> como separador mientras que los sistemas Windows usan el caracter <strong>\\</strong> . En resumen, / en *X y \\ en Windows.</p><p>\xBFC\xF3mo podemos hacer entonces que nuestras aplicaciones sean independientes del SO en el que se ejecutan?</p><p>Para este tipo de cuestiones vamos a utilizar de forma recurrente las propiedades del sistema mediante <code>System.getProperty(String propName)</code>. Estas propiedades se configuran con el propio sistema operativo, aunque las podemos modificar usando los par\xE1metros de ejecuci\xF3n de la m\xE1quina virtual</p><blockquote><p>String separator = System.getProperty(&quot;file.separator&quot;);</p></blockquote><p>o</p><blockquote><p>-Dfile.separator</p></blockquote><p>Aunque siempre es una buena pr\xE1ctica usar el caracter <strong>/</strong> en las rutas ya que Java es capaz de convertirlas al sistema en el que se ejecuta.</p></div><p>Si lo que queremos es ejecutar un comando del SO, tenemos que hacerlo, al igual que si lo hacemos manualmente, a trav\xE9s del shell del sistema, donde volvemos a encontrar la dicotom\xEDa entre sistemas UNIX y sistemas Windows.</p><p>Vamos a ver el c\xF3digo que, a trav\xE9s de las propiedades del sistema, nos permite obtener un listado de los archivos existentes en la carpeta personal del usuario.</p><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#90A4AE;font-style:italic;">// Primero obtenemos la carpeta del usuario</span></span>
<span class="line"><span style="color:#9C3EDA;">String</span><span style="color:#90A4AE;"> homeDirectory </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> System</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProperty</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">user.home</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#9C3EDA;">boolean</span><span style="color:#90A4AE;"> isWindows </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> System</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProperty</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">os.name</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">)</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">toLowerCase</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">startsWith</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">windows</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#39ADB5;font-style:italic;">if</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">isWindows</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">    Runtime</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getRuntime</span><span style="color:#39ADB5;">()</span></span>
<span class="line"><span style="color:#90A4AE;">      </span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">exec</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">String</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">format</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">cmd.exe /c dir %s</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> homeDirectory</span><span style="color:#39ADB5;">));</span></span>
<span class="line"><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">else</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">    Runtime</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getRuntime</span><span style="color:#39ADB5;">()</span></span>
<span class="line"><span style="color:#90A4AE;">      </span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">exec</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">String</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">format</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">sh -c ls %s</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> homeDirectory</span><span style="color:#39ADB5;">));</span></span>
<span class="line"><span style="color:#39ADB5;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container info"><p class="custom-container-title">Modo shell no interactivo</p><p>Como se puede observar, tanto para Windows como UNIX se ha usado el modificador <strong>c</strong> del comando. Este modificador indica que se abra un shell, se ejecute el comando recibido y se cierre el proceso del shell.</p></div><p>A continuaci\xF3n podemos ver un ejemplo de respuesta ante la pulsaci\xF3n de un bot\xF3n, en una app gr\xE1fica, paraabrir una p\xE1gina en el navegador. Tenemos c\xF3mo se har\xEDa en sistemas *X y comentado una de las formas de hacerlo en Windows.</p><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#90A4AE;font-style:italic;">// Calling app example</span></span>
<span class="line"><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">mouseClicked</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">MouseEvent</span><span style="color:#90A4AE;"> e</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">  </span><span style="color:#90A4AE;font-style:italic;">// Launch Page</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;font-style:italic;">try</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// Linux version</span></span>
<span class="line"><span style="color:#90A4AE;">    Runtime</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getRuntime</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">exec</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">open http://localhost:8153/go</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// Windows version</span></span>
<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// Runtime.getRuntime().exec(&quot;explorer http://localhost:8153/go&quot;);</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">catch</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">IOException</span><span style="color:#90A4AE;"> e1</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// Don&#39;t care</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#39ADB5;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container question"><p class="custom-container-title">System properties</p><p>Vamos a crear nuestro primer programa en Java, que no va a ser tan sencillo como pueda parecer</p><p>Usando m\xE9todos de las clases System y Runtime hacer un programa que muestre</p><ul><li>todas las propiedades establecidas en el sistema operativo y sus valores.</li><li>memoria total, memoria libre, memoria en uso y los procesadores disponibles</li></ul><p>Mira los m\xE9todos que proporcionan las clases Runtime y system. Intenta obtener una lista u otra estructura de datos que te permita recorrer las propiedades para ir mostrando sus nombres y valores.</p></div><details class="custom-container details"><summary>Soluci\xF3n propuesta para la actividad anterior</summary><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#9C3EDA;">long</span><span style="color:#90A4AE;"> freeMemory </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> Runtime</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getRuntime</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">freeMemory</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#9C3EDA;">long</span><span style="color:#90A4AE;"> availableMemory </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> Runtime</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getRuntime</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">totalMemory</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#9C3EDA;">long</span><span style="color:#90A4AE;"> usedMemory </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> availableMemory </span><span style="color:#39ADB5;">-</span><span style="color:#90A4AE;"> freeMemory</span><span style="color:#39ADB5;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;font-style:italic;">/*** Runtime.getRuntime() usage ***/</span></span>
<span class="line"><span style="color:#90A4AE;font-style:italic;">// Show system information</span></span>
<span class="line"><span style="color:#90A4AE;font-style:italic;">// Memory will be shown in MBytes formatted with 2-decimal places</span></span>
<span class="line"><span style="color:#9C3EDA;">DecimalFormat</span><span style="color:#90A4AE;"> megabytes </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">DecimalFormat</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">#.00</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Available memory in JVM(Mbytes): </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span></span>
<span class="line"><span style="color:#90A4AE;">        megabytes</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">format</span><span style="color:#39ADB5;">((</span><span style="color:#9C3EDA;">double</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;">availableMemory</span><span style="color:#39ADB5;">/(</span><span style="color:#F76D47;">1024</span><span style="color:#39ADB5;">*</span><span style="color:#F76D47;">1024</span><span style="color:#39ADB5;">)));</span></span>
<span class="line"><span style="color:#90A4AE;">System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Free memory in JVM(Mbytes): </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span></span>
<span class="line"><span style="color:#90A4AE;">        megabytes</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">format</span><span style="color:#39ADB5;">((</span><span style="color:#9C3EDA;">double</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;">freeMemory</span><span style="color:#39ADB5;">/(</span><span style="color:#F76D47;">1024</span><span style="color:#39ADB5;">*</span><span style="color:#F76D47;">1024</span><span style="color:#39ADB5;">)));</span></span>
<span class="line"><span style="color:#90A4AE;">System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Used memory in JVM(Mbytes): </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span></span>
<span class="line"><span style="color:#90A4AE;">        megabytes</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">format</span><span style="color:#39ADB5;">((</span><span style="color:#9C3EDA;">double</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;">usedMemory</span><span style="color:#39ADB5;">/(</span><span style="color:#F76D47;">1024</span><span style="color:#39ADB5;">*</span><span style="color:#F76D47;">1024</span><span style="color:#39ADB5;">)));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Processors in the system: </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> Runtime</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getRuntime</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">availableProcessors</span><span style="color:#39ADB5;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;font-style:italic;">/*** System.getProperties() usage ***/</span></span>
<span class="line"><span style="color:#90A4AE;font-style:italic;">// Show each pair of property:value from System properties</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;font-style:italic;">// 1st. As a lambda expression using anonymous classes</span></span>
<span class="line"><span style="color:#90A4AE;">System</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProperties</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">forEach</span><span style="color:#39ADB5;">((</span><span style="color:#90A4AE;">k</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;">v</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">-&gt;</span><span style="color:#90A4AE;"> System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">k </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> =&gt; </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> v</span><span style="color:#39ADB5;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;font-style:italic;">// 2nd. As a Map.entrySet </span></span>
<span class="line"><span style="color:#39ADB5;font-style:italic;">for</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">Map</span><span style="color:#39ADB5;">.</span><span style="color:#9C3EDA;">Entry</span><span style="color:#39ADB5;">&lt;</span><span style="color:#9C3EDA;">Object</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">Object</span><span style="color:#39ADB5;">&gt;</span><span style="color:#90A4AE;"> entry </span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#90A4AE;"> System</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProperties</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">entrySet</span><span style="color:#39ADB5;">())</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">Object</span><span style="color:#90A4AE;"> key </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> entry</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getKey</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">Object</span><span style="color:#90A4AE;"> val </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> entry</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getValue</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">    System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">&gt; </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> key </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> =&gt; </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> val</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#39ADB5;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;font-style:italic;">// 3rd. As a Map.keySet</span></span>
<span class="line"><span style="color:#39ADB5;font-style:italic;">for</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">Object</span><span style="color:#90A4AE;"> key </span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#90A4AE;"> System</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProperties</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">keySet</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">toArray</span><span style="color:#39ADB5;">())</span></span>
<span class="line"><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">    System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">&gt;&gt; </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> key</span><span style="color:#39ADB5;">+</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">:</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;">System</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProperty</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">key</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">toString</span><span style="color:#39ADB5;">()));</span></span>
<span class="line"><span style="color:#39ADB5;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;font-style:italic;">// Other methods found by students, based on a Properties object methods.</span></span>
<span class="line"><span style="color:#9C3EDA;">Properties</span><span style="color:#90A4AE;"> prop </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> System</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProperties</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#39ADB5;font-style:italic;">for</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">String</span><span style="color:#90A4AE;"> propName</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#90A4AE;"> prop</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">stringPropertyNames</span><span style="color:#39ADB5;">())</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">  System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">propName </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">:</span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> System</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProperty</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">propName</span><span style="color:#39ADB5;">));</span></span>
<span class="line"><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">        </span></span>
<span class="line"><span style="color:#90A4AE;font-style:italic;">// Or directly to the console using </span></span>
<span class="line"><span style="color:#90A4AE;">prop</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">list</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">);</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,18),x={class:"custom-container info"},F=s("p",{class:"custom-container-title"},"Formato num\xE9rico",-1),R=s("p",null,"Todos los lenguajes de programaci\xF3n tienen varias formas de mostrar la informaci\xF3n al usuario. Cuando se trata de mostrar informaci\xF3n a a trav\xE9s de la consola, tenemos un par de alternativas para formatear la informaci\xF3n num\xE9rica.",-1),w={href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/text/DecimalFormat.html",target:"_blank",rel:"noopener noreferrer"},P=n("NumberFormat"),M=e(`<p>Si usamos la clase NumberFormat o cualquiera de sus descendientes podemos controlar con bastante precisi\xF3n c\xF3mo se ver\xE1n los n\xFAmeros, usando patrones.</p><div class="language-java ext-java"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#9C3EDA;">DecimalFormat</span><span style="color:#90A4AE;"> numberFormat </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">DecimalFormat</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">#.00</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;font-style:italic;">// Si usamos hashes en vez de ceros permitimos que .30 se vea como 0.3</span></span>
<span class="line"><span style="color:#90A4AE;font-style:italic;">// (los d\xEDgitos adicionales son opcionales)</span></span>
<span class="line"><span style="color:#90A4AE;">System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">numberFormat</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">format</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">number</span><span style="color:#39ADB5;">));</span></span>
<span class="line"></span></code></pre></div>`,2),N={href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Formatter.html",target:"_blank",rel:"noopener noreferrer"},O=n("System.out.printf"),V=e(`<p>Heredado de la sintaxis de la funci\xF3n printf de C, podemos utilizar la sintaxis de java.util.Formatter para configurar c\xF3mo ser\xE1 visualizada la informaci\xF3n.</p><div class="language-java ext-java"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#90A4AE;">System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">printf</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;">\\n</span><span style="color:#91B859;">$%10.2f</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;">shippingCost</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;font-style:italic;">// % rellena con hasta 10 posiciones los n\xFAmeros</span></span>
<span class="line"><span style="color:#90A4AE;font-style:italic;">// para justificarlos a la derchan.</span></span>
<span class="line"><span style="color:#90A4AE;">System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">printf</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">%n$%.2f</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;">shippingCost</span><span style="color:#39ADB5;">);</span></span>
<span class="line"></span></code></pre></div>`,2);function I(J,W){const r=o("DownloadPDF-component"),c=o("DocumentCover-component"),p=o("router-link"),l=o("ExternalLinkIcon");return y(),A("div",null,[a(r),a(c,{titulo:"2.1. Creaci\xF3n de procesos con Java con Runtime"}),u,s("nav",m,[s("ul",null,[s("li",null,[a(p,{to:"#_2-1-1-creacion-rapida-de-procesos"},{default:t(()=>[B]),_:1})]),s("li",null,[a(p,{to:"#_2-1-2-propiedades-del-sistema-y-comandos-del-sistema"},{default:t(()=>[D]),_:1})])])]),v,E,s("blockquote",null,[s("p",null,[s("a",b,[g,a(l)])])]),h,s("div",f,[q,_,S,s("p",null,[s("a",j,[C,a(l)])])]),k,s("div",x,[F,R,s("ul",null,[s("li",null,[s("a",w,[P,a(l)])])]),M,s("ul",null,[s("li",null,[s("a",N,[O,a(l)])])]),V])])}const L=i(d,[["render",I],["__file","runtime.html.vue"]]);export{L as default};
