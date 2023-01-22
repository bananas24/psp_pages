import{_ as p,a as m,b}from"./gantt_parallel.6004ac09.js";import{_,r as t,o as v,c as y,d as o,a as e,w as n,e as r,b as s,f as i}from"./app.33df6748.js";const h={},A=e("h1",{id:"_1-2-concurrencia",tabindex:"-1"},"1.2. Concurrencia",-1),S={class:"table-of-contents"},q=s("1.2.1. Concurrencia vs Paralelismo"),f=s("Monoproceso"),E=s("Multiprogramaci\xF3n"),j=s("Paralelismo"),g=s("1.2.2. Sistemas distribuidos"),k=s("1.2.3. Ventajas e inconvenientes"),P=s("1.2.4. Condiciones de Bernstein"),x=s("Seg\xFAn el diccionario de la "),D={href:"https://dle.rae.es/concurrencia?m=form",target:"_blank",rel:"noopener noreferrer"},B=s("RAE"),z=s(" una de las acepciones de concurrencia es"),F=i('<blockquote><p>Coincidencia, concurso simult\xE1neo de varias circunstancias.</p></blockquote><p>Si cambiamos circunstancias por <code>procesos</code>, ya tendr\xEDamos una definici\xF3n cercana a lo que significa concurrencia en el mundo digital</p><p>Si nos fijamos, no es la primera vez que surge la palabra <code>proceso</code> en este texto, y es que los procesos son una pieza fundamental del puzle, por no decir la parte m\xE1s importante.</p><h2 id="_1-2-1-concurrencia-vs-paralelismo" tabindex="-1">1.2.1. Concurrencia vs Paralelismo</h2><p>Ahora que ya sabemos qu\xE9 es un proceso, vamos a ver la relaci\xF3n que \xE9stos tienen con el hardware en el que se ejecutan.</p><h3 id="monoproceso" tabindex="-1">Monoproceso</h3><p>Por mucho que tengamos varios procesos procesos ejecut\xE1ndose a la vez, si s\xF3lo tenemos un microprocesador para atenderlos a todos, estas tareas nunca van a poder ejecutarse a la vez.</p><p>Una posibilidad ser\xEDa la ejecuci\xF3n secuencias de las tareas en el sistema. Se empieza a ejecutar una tarea y, hasta que esta no finaliza, el sistema no empieza a ejecutar la siguiente. Esto se corresponder\xEDa con sistemas que s\xF3lo son capaces de hacer una tarea a la vez, algo raro hoy en d\xEDa.</p><p><img src="'+b+'" alt="Secuential execution of tasks (monoprocessor system)"></p>',9),L=e("h3",{id:"multiprogramacion",tabindex:"-1"},"Multiprogramaci\xF3n",-1),C=e("p",null,[s("Para que los procesos no tengan que esperar a que todos los dem\xE1s se ejecuten, los sistemas aprovechan y exprimen los recursos al m\xE1ximo, permitiendo la ilusi\xF3n de que varios procesos se ejecutan de forma simult\xE1nea. Esto es lo que se conoce como "),e("code",null,"multitarea"),s(".")],-1),w=e("p",null,"En estos sistemas, se aprovecha el dise\xF1o de los sistemas operativos modernos, y de las operaciones que realizan los procesos que no requieren el uso del procesador (esperar a una operaci\xF3n de E/S, una interacci\xF3n con el usuario, la recepci\xF3n de informaci\xF3n desde la red, etc.) para poder ejecutar otros procesos. La ejecuci\xF3n se multiplexa en el tiempo.",-1),I=e("p",null,[e("img",{src:p,alt:"Concurrent execution of tasks (monoprocessor system)"})],-1),N=e("p",null,"Como se puede observar en las dos im\xE1genes anteriores (aunque se trata s\xF3lo de un modelo), el tiempo de uso total del procesador es igual en ambos casos, es decir, que el sistema tardar\xE1 el mismo tiempo en completar todas las tareas. Sin embargo, la sensaci\xF3n es que todas las tareas se est\xE1n realizando a la vez.",-1),V=e("h3",{id:"paralelismo",tabindex:"-1"},"Paralelismo",-1),M=e("p",null,[s("Con el avance de la tecnolog\xEDa ahora la gran mayor\xEDa de dispositivos, desde los equipos de escritorio, port\xE1tiles, dispositivos m\xF3viles, ... hasta los dispositivos IoT, tienen capacidades de multiproceso, es decir, tienen m\xE1s de un procesador para poder realizar varias tareas a la vez de forma real, no simulada. A este tipo de ejecuci\xF3n es a lo que llamamos "),e("code",null,"paralelismo"),s(".")],-1),U=e("p",null,[e("img",{src:m,alt:"Parallel execution of tasks (dual processor system)"})],-1),T=i('<p>En este caso, a mayor n\xFAmero de unidades de proceso, menor tiempo tardar\xE1n las tareas en completarse y mayor ser\xE1 la sensaci\xF3n de rapidez que notar\xE1 el usuario. Este es uno de los retos de los sistemas operativos, planificar adecuadamente las tareas para minimizar los tiempos de ejecuci\xF3n, de espera y el uso de los recursos del sistema, el procesador principalmente.</p><div class="custom-container question"><p class="custom-container-title">n\xFAcleos vs hilos</p><p>Si hab\xE9is comprado un procesador hace poco, o est\xE1is al d\xEDa en cuanto al hardware, sabr\xE9is que una de las caracter\xEDsticas de los procesadores es su <strong>n\xFAmero de n\xFAcleos</strong> (4, 8, 16).</p><p>Pero adem\xE1s, al n\xFAmero de n\xFAcleos lo acompa\xF1a otra caracter\xEDstica que es el n\xFAmero de <strong>hilos o threads</strong>, que suele ser el doble que el de n\xFAcleos.</p><p>\xBFQu\xE9 implicaci\xF3n tienen los threads de un procesador con respecto a la concurrencia? \xBFSi un equipo tiene 8 n\xFAcleos / 16 hilos significa eso que puede ejecutar 16 procesos a la vez?</p></div><h2 id="_1-2-2-sistemas-distribuidos" tabindex="-1">1.2.2. Sistemas distribuidos</h2><blockquote><p>&quot;Un sistema distribuido es una colecci\xF3n de computadores independientes que aparecen ante los usuarios como un \xFAnico sistema coherente&quot;</p><p>&quot;Andrew S. Tanembaum&quot;</p></blockquote><p>Posiblemente el ejemplo m\xE1s famoso y conocido de sistema distribuido sea <code>Internet</code>.Internet aparece ante los usuarios como un enorme repositorio de documentos, es decir, como un \xFAnico sistema capaz de proveer casi cualquier tipo de informaci\xF3n o servicio que se necesite. No obstante, sabemos que est\xE1 compuesta por millones de equipos ubicados en localizaciones diferentes e interconectados entre s\xED.</p><p>Nace de la necesidad de compartir recursos. Actualmente el m\xE1ximo exponente de este tipo de sistemas es el <code>Cloud Computing</code> o servicios en la nube. Un sistema es distribuido cuando los componentes software est\xE1n distribuidos en la red, se comunican y coordinan mediante el paso de mensajes.</p><p>Las caracter\xEDsticas de este tipo de sistemas son::</p><ul><li>Concurrencia: ejecuci\xF3n de programas concurrentes.</li><li>Inexistencia de un reloj global. Implica sincronizarse con el paso de mensajes.</li><li>Fallos independientes: cada componente del sistema puede fallar sin que perjudique la ejecuci\xF3n de los dem\xE1s.</li></ul><h2 id="_1-2-3-ventajas-e-inconvenientes" tabindex="-1">1.2.3. Ventajas e inconvenientes</h2><p>Ventajas del procesamiento paralelo:</p><ul><li>Ejecuci\xF3n simult\xE1nea de tareas.</li><li>Disminuye el tiempo total de ejecuci\xF3n</li><li>Resuelve problemas complejos y de grandes dimensiones.</li><li>Utilizaci\xF3n de recursos no locales distribuidos en la red</li><li>Disminuci\xF3n de costos, aprevechando los recursos distribuidos, no es necesario gastar en un \xFAnico supercomputardor, se puede alcanzar el mismo poder de computaci\xF3n con equipos m\xE1s modestos distribuidos.</li></ul><p>Inconvenientes del procesamiento paralelo:</p>',12),O=e("li",null,"Los compiladores y entornos de programaci\xF3n para sistemas paralelos son m\xE1s complicados de desarrollar.",-1),R=e("li",null,"Los programas paralelos son m\xE1s dif\xEDciles de escribir",-1),H=e("li",null,"Hay mayor consumo de energ\xEDa",-1),J=e("li",null,"Mayor complejidad en el acceso a datos",-1),Q=s("Complejidad a la hora de la comunicaci\xF3n y sincronizaci\xF3n de las diferentes subtareas. "),Y=i('<p>Ventajas de la programaci\xF3n distribuida</p><ul><li>Se comparten recursos y datos</li><li>Crecimiento bajo demanda</li><li>Mayor flexibildad para distribuir la carga</li><li>Alta disponibilidad</li><li>Soporte de aplicaciones distribuidas</li><li>Filosof\xEDa abierta y hetereog\xE9nea</li></ul><div class="custom-container question"><p class="custom-container-title">Escalado de sistemas</p><p>Con escalado nos referimos a la posibilidad de incrementar las capacidades de un sistema.</p><p>Investiga las diferencias, ventajas e inconvenientes del <code>escalado horizontal</code> y el <code>escalado vertical</code>.</p></div><p>Inconvenientes de la programaci\xF3n distribuida</p><ul><li>Aumenta la complejidad</li><li>Se necesita software nuevo especializado</li><li>Problemas derivados de las comunicaciones (perdidas, saturaciones, etc.)</li><li>Problemas de seguridad, ataques DDoS</li></ul><p>Ejemplos de utilizaci\xF3n de la programaci\xF3n paralela y distribuida</p><ul><li>Estudios meteorol\xF3gicos</li><li>Estudios del genoma humano</li><li>Modelado de la biosfera</li><li>Predicciones s\xEDsmicas</li><li>Simulaci\xF3n de mol\xE9culas</li></ul>',7),G={class:"custom-container info"},K=e("p",{class:"custom-container-title"},"Ejemplo de programaci\xF3n paralela y distribuida",-1),W={href:"https://setiathome.berkeley.edu/sah_about.php",target:"_blank",rel:"noopener noreferrer"},X=s("B\xFAsqueda de inteligencia extraterrestre - Proyecto SETI"),Z=i(`<h2 id="_1-2-4-condiciones-de-bernstein" tabindex="-1">1.2.4. Condiciones de Bernstein</h2><p>Una vez que sabemos qu\xE9 es un programa concurrente y las distintas arquitecturas hardware que pueden soportarlo, vamos a ver qu\xE9 partes de un programa se pueden ejecutar de forma concurrente y cu\xE1les no.</p><p>Si observamos el siguiente c\xF3digo, queda claro que la primera instrucci\xF3n se debe ejecutar antes que la segunda para que el resultado sea siempre el mismo (para los mismos datos de entrada).</p><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#90A4AE;">x </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> x </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">y </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> x </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Sin embargo, en un c\xF3digo como el siguiente el \xF3rden en el que se ejecuten las instrucciones no influye en el resultado final (valor de las variables). En este caso se pueden ejecutar las tres sentencias a la vez incrementando la velocidad de procesamiento.</p><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#90A4AE;">x </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">y </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">2</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">z </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">3</span><span style="color:#39ADB5;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A.J. Bernstein defini\xF3 unas condiciones para determinar si dos conjuntos de instrucciones S<sub>i</sub> y S<sub>j</sub> se pueden ejecutar concurrentemente.</p><p>Para poder determinar si dos conjuntos de instrucciones se pueden ejecutar concurrentemente, se definen en primer lugar los siguientes conjuntos</p><ul><li>L(S<sub>k</sub>) = {a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>, ...} como el conjunto de lectura formado por todas las variables cuyos valores se leen durante la ejecuci\xF3n de las instrucciones del conjunto k.</li><li>E(S<sub>k</sub>) = {b<sub>1</sub>, b<sub>2</sub>, b<sub>3</sub>, ...} como el conjunto de escritura formado por todas las variables cuyos valores se actualizan durante la ejecuci\xF3n de las instrucciones del conjunto k.</li></ul><p>Para que dos conjuntos de instrucciones S<sub>i</sub> y S<sub>j</sub> se puedan ejecutar concurrentemente, se deben cumplir estas tres condiciones de forma simult\xE1nea.</p><ul><li>L(S<sub>i</sub>) \u2229 E(S<sub>j</sub>)</li><li>E(S<sub>i</sub>) \u2229 L(S<sub>j</sub>)</li><li>E(S<sub>i</sub>) \u2229 E(S<sub>j</sub>)</li></ul><div class="custom-container question"><p class="custom-container-title">Cuales de estas instrucciones se pueden ejecutar de forma concurrente</p><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#90A4AE;">a </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> x </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> y</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">b </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> z </span><span style="color:#39ADB5;">-</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">c </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> a </span><span style="color:#39ADB5;">-</span><span style="color:#90A4AE;"> b</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">w </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> c </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>Primero deber\xEDamos obtener los conjuntos L y E para cada sentencia</p><blockquote><p>L(S<sub>1</sub>) = {x, y}</p><p>E(S<sub>1</sub>) = {a}</p></blockquote><blockquote><p>L(S<sub>2</sub>) = {z}</p><p>E(S<sub>2</sub>) = {b}</p></blockquote><blockquote><p>L(S<sub>3</sub>) = {a, b}</p><p>E(S<sub>3</sub>) = {c}</p></blockquote><blockquote><p>L(S<sub>4</sub>) = {c}</p><p>E(S<sub>4</sub>) = {w}</p></blockquote><p>Y ahora aplicarlas entre cada par de sentencias</p><blockquote><p>L(S<sub>1</sub>) \u2229 E(S<sub>2</sub>) = \u2205 E(S<sub>1</sub>) \u2229 L(S<sub>2</sub>) = \u2205 E(S<sub>1</sub>) \u2229 E(S<sub>2</sub>) = \u2205 // S\xED se pueden ejecutar concurrentemente</p></blockquote><blockquote><p>L(S<sub>1</sub>) \u2229 E(S<sub>3</sub>) = \u2205 E(S<sub>1</sub>) \u2229 L(S<sub>3</sub>) = {a} \u2260 \u2205 E(S<sub>1</sub>) \u2229 E(S<sub>3</sub>) = \u2205 // NO se pueden ejecutar concurrentemente</p></blockquote><blockquote><p>L(S<sub>1</sub>) \u2229 E(S<sub>4</sub>) = \u2205 E(S<sub>1</sub>) \u2229 L(S<sub>4</sub>) = \u2205 E(S<sub>1</sub>) \u2229 E(S<sub>4</sub>) = \u2205 // S\xED se pueden ejecutar concurrentemente</p></blockquote><blockquote><p>L(S<sub>2</sub>) \u2229 E(S<sub>3</sub>) = \u2205 E(S<sub>2</sub>) \u2229 L(S<sub>3</sub>) = {b] \u2260 E(S<sub>2</sub>) \u2229 E(S<sub>3</sub>) = \u2205 // NO se pueden ejecutar concurrentemente</p></blockquote><blockquote><p>L(S<sub>2</sub>) \u2229 E(S<sub>4</sub>) = \u2205 E(S<sub>2</sub>) \u2229 L(S<sub>4</sub>) = \u2205 E(S<sub>2</sub>) \u2229 E(S<sub>4</sub>) = \u2205 // S\xED se pueden ejecutar concurrentemente</p></blockquote><blockquote><p>L(S<sub>3</sub>) \u2229 E(S<sub>4</sub>) = \u2205 E(S<sub>3</sub>) \u2229 L(S<sub>4</sub>) = {c} \u2260 \u2205 E(S<sub>3</sub>) \u2229 E(S<sub>4</sub>) = \u2205 // NO se pueden ejecutar concurrentemente</p></blockquote>`,24);function $(ee,se){const c=t("DownloadPDF-component"),u=t("DocumentCover-component"),a=t("router-link"),l=t("ExternalLinkIcon"),d=t("Badge");return v(),y("div",null,[o(c),o(u,{titulo:"1.2. Concurrencia"}),A,e("nav",S,[e("ul",null,[e("li",null,[o(a,{to:"#_1-2-1-concurrencia-vs-paralelismo"},{default:n(()=>[q]),_:1}),e("ul",null,[e("li",null,[o(a,{to:"#monoproceso"},{default:n(()=>[f]),_:1})]),e("li",null,[o(a,{to:"#multiprogramacion"},{default:n(()=>[E]),_:1})]),e("li",null,[o(a,{to:"#paralelismo"},{default:n(()=>[j]),_:1})])])]),e("li",null,[o(a,{to:"#_1-2-2-sistemas-distribuidos"},{default:n(()=>[g]),_:1})]),e("li",null,[o(a,{to:"#_1-2-3-ventajas-e-inconvenientes"},{default:n(()=>[k]),_:1})]),e("li",null,[o(a,{to:"#_1-2-4-condiciones-de-bernstein"},{default:n(()=>[P]),_:1})])])]),e("p",null,[x,e("a",D,[B,o(l)]),z]),F,r(`
\`\`\`mermaid
gantt
title Secuential execution of tasks (monoprocessor system)
dateFormat s
axisFormat %S
section Processor 1
Process 1       :done, t1, 0, 4s
Process 2     : active, t2, after t1, 5s
Process 3     : crit, t3, after t2, 2s
Process 4    : t4, after t3, 5s
\`\`\`
`),L,C,w,I,r(`
\`\`\`mermaid
gantt
title Concurrent execution of tasks (monoprocessor system)
dateFormat s
axisFormat %S
section Processor 1
Process 1  :done, t1, 0, 2s
Process 2  :active, t2, after t1, 2s
Process 3  :crit, t3, after t2, 2s
Process 4  : t4, after t3, 1s
Process 1  :done, t5, after t4, 2s
Process 2  :active, t6, after t5, 1s
Process 4  : t7, after t6, 3s
Process 2  :active, t8, after t7, 2s
Process 4  : t9, after t8, 1s
\`\`\`
`),N,V,M,U,r(`
\`\`\`mermaid
gantt
title Parallel execution of tasks (dual processor system)
dateFormat s
axisFormat %S
section Processor 1
Process 1  :done, t1, 0, 2s
Process 2  :active, t2, after t1, 2s
Process 1  :done, t5, after t2, 2s
Process 2  :active, t6, after t5, 1s
Process 2  :active, t8, after t6, 2s
section Processor 2
Process 3  :crit, t3, 0, 2s
Process 4  : t4, after t3, 1s
Process 4  : t7, after t4, 3s
Process 4  : t9, after t7, 1s
\`\`\`
`),T,e("ul",null,[O,R,H,J,e("li",null,[Q,o(d,{type:"danger",text:"cuidado",vertical:"middle"})])]),Y,e("div",G,[K,e("p",null,[e("a",W,[X,o(l)])])]),Z])}const ne=_(h,[["render",$],["__file","concurrency.html.vue"]]);export{ne as default};
