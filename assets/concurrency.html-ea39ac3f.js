import{_ as p,a as m,b}from"./gantt_parallel-4671b441.js";import{_ as v,r as i,o as y,c as _,d as a,a as e,w as n,b as s,e as r,f as t}from"./app-c6e2823e.js";const A={},h=e("h1",{id:"_1-2-concurrencia",tabindex:"-1"},"1.2. Concurrencia",-1),S={class:"table-of-contents"},q={href:"https://dle.rae.es/concurrencia?m=form",target:"_blank",rel:"noopener noreferrer"},f=t('<blockquote><p>Coincidencia, concurso simultáneo de varias circunstancias.</p></blockquote><p>Si cambiamos circunstancias por <code>procesos</code>, ya tendríamos una definición cercana a lo que significa concurrencia en el mundo digital</p><p>Si nos fijamos, no es la primera vez que surge la palabra <code>proceso</code> en este texto, y es que los procesos son una pieza fundamental del puzle, por no decir la parte más importante.</p><h2 id="_1-2-1-concurrencia-vs-paralelismo" tabindex="-1">1.2.1. Concurrencia vs Paralelismo</h2><p>Ahora que ya sabemos qué es un proceso, vamos a ver la relación que éstos tienen con el hardware en el que se ejecutan.</p><h3 id="monoproceso" tabindex="-1">Monoproceso</h3><p>Por mucho que tengamos varios procesos procesos ejecutándose a la vez, si sólo tenemos un microprocesador para atenderlos a todos, estas tareas nunca van a poder ejecutarse a la vez.</p><p>Una posibilidad sería la ejecución secuencias de las tareas en el sistema. Se empieza a ejecutar una tarea y, hasta que esta no finaliza, el sistema no empieza a ejecutar la siguiente. Esto se correspondería con sistemas que sólo son capaces de hacer una tarea a la vez, algo raro hoy en día.</p><p><img src="'+b+'" alt="Secuential execution of tasks (monoprocessor system)"></p>',9),E=e("h3",{id:"multiprogramacion",tabindex:"-1"},"Multiprogramación",-1),g=e("p",null,[s("Para que los procesos no tengan que esperar a que todos los demás se ejecuten, los sistemas aprovechan y exprimen los recursos al máximo, permitiendo la ilusión de que varios procesos se ejecutan de forma simultánea. Esto es lo que se conoce como "),e("code",null,"multitarea"),s(".")],-1),j=e("p",null,"En estos sistemas, se aprovecha el diseño de los sistemas operativos modernos, y de las operaciones que realizan los procesos que no requieren el uso del procesador (esperar a una operación de E/S, una interacción con el usuario, la recepción de información desde la red, etc.) para poder ejecutar otros procesos. La ejecución se multiplexa en el tiempo.",-1),k=e("p",null,[e("img",{src:p,alt:"Concurrent execution of tasks (monoprocessor system)"})],-1),x=e("p",null,"Como se puede observar en las dos imágenes anteriores (aunque se trata sólo de un modelo), el tiempo de uso total del procesador es igual en ambos casos, es decir, que el sistema tardará el mismo tiempo en completar todas las tareas. Sin embargo, la sensación es que todas las tareas se están realizando a la vez.",-1),P=e("h3",{id:"paralelismo",tabindex:"-1"},"Paralelismo",-1),D=e("p",null,[s("Con el avance de la tecnología ahora la gran mayoría de dispositivos, desde los equipos de escritorio, portátiles, dispositivos móviles, ... hasta los dispositivos IoT, tienen capacidades de multiproceso, es decir, tienen más de un procesador para poder realizar varias tareas a la vez de forma real, no simulada. A este tipo de ejecución es a lo que llamamos "),e("code",null,"paralelismo"),s(".")],-1),B=e("p",null,[e("img",{src:m,alt:"Parallel execution of tasks (dual processor system)"})],-1),z=t('<p>En este caso, a mayor número de unidades de proceso, menor tiempo tardarán las tareas en completarse y mayor será la sensación de rapidez que notará el usuario. Este es uno de los retos de los sistemas operativos, planificar adecuadamente las tareas para minimizar los tiempos de ejecución, de espera y el uso de los recursos del sistema, el procesador principalmente.</p><div class="custom-container question"><p class="custom-container-title">núcleos vs hilos</p><p>Si habéis comprado un procesador hace poco, o estáis al día en cuanto al hardware, sabréis que una de las características de los procesadores es su <strong>número de núcleos</strong> (4, 8, 16).</p><p>Pero además, al número de núcleos lo acompaña otra característica que es el número de <strong>hilos o threads</strong>, que suele ser el doble que el de núcleos.</p><p>¿Qué implicación tienen los threads de un procesador con respecto a la concurrencia? ¿Si un equipo tiene 8 núcleos / 16 hilos significa eso que puede ejecutar 16 procesos a la vez?</p></div><h2 id="_1-2-2-sistemas-distribuidos" tabindex="-1">1.2.2. Sistemas distribuidos</h2><blockquote><p>&quot;Un sistema distribuido es una colección de computadores independientes que aparecen ante los usuarios como un único sistema coherente&quot;</p><p>&quot;Andrew S. Tanembaum&quot;</p></blockquote><p>Posiblemente el ejemplo más famoso y conocido de sistema distribuido sea <code>Internet</code>.Internet aparece ante los usuarios como un enorme repositorio de documentos, es decir, como un único sistema capaz de proveer casi cualquier tipo de información o servicio que se necesite. No obstante, sabemos que está compuesta por millones de equipos ubicados en localizaciones diferentes e interconectados entre sí.</p><p>Nace de la necesidad de compartir recursos. Actualmente el máximo exponente de este tipo de sistemas es el <code>Cloud Computing</code> o servicios en la nube. Un sistema es distribuido cuando los componentes software están distribuidos en la red, se comunican y coordinan mediante el paso de mensajes.</p><p>Las características de este tipo de sistemas son::</p><ul><li>Concurrencia: ejecución de programas concurrentes.</li><li>Inexistencia de un reloj global. Implica sincronizarse con el paso de mensajes.</li><li>Fallos independientes: cada componente del sistema puede fallar sin que perjudique la ejecución de los demás.</li></ul><h2 id="_1-2-3-ventajas-e-inconvenientes" tabindex="-1">1.2.3. Ventajas e inconvenientes</h2><p>Ventajas del procesamiento paralelo:</p><ul><li>Ejecución simultánea de tareas.</li><li>Disminuye el tiempo total de ejecución</li><li>Resuelve problemas complejos y de grandes dimensiones.</li><li>Utilización de recursos no locales distribuidos en la red</li><li>Disminución de costos, aprovechando los recursos distribuidos, no es necesario gastar en un único supercomputador, se puede alcanzar el mismo poder de computación con equipos más modestos distribuidos.</li></ul><p>Inconvenientes del procesamiento paralelo:</p>',12),F=e("li",null,"Los compiladores y entornos de programación para sistemas paralelos son más complicados de desarrollar.",-1),L=e("li",null,"Los programas paralelos son más difíciles de escribir",-1),C=e("li",null,"Hay mayor consumo de energía",-1),w=e("li",null,"Mayor complejidad en el acceso a datos",-1),I=t('<p>Ventajas de la programación distribuida</p><ul><li>Se comparten recursos y datos</li><li>Crecimiento bajo demanda</li><li>Mayor flexibilidad para distribuir la carga</li><li>Alta disponibilidad</li><li>Soporte de aplicaciones distribuidas</li><li>Filosofía abierta y heterogénea</li></ul><div class="custom-container question"><p class="custom-container-title">Escalado de sistemas</p><p>Con escalado nos referimos a la posibilidad de incrementar las capacidades de un sistema.</p><p>Investiga las diferencias, ventajas e inconvenientes del <code>escalado horizontal</code> y el <code>escalado vertical</code>.</p></div><p>Inconvenientes de la programación distribuida</p><ul><li>Aumenta la complejidad</li><li>Se necesita software nuevo especializado</li><li>Problemas derivados de las comunicaciones (perdidas, saturaciones, etc.)</li><li>Problemas de seguridad, ataques DDoS</li></ul><p>Ejemplos de utilización de la programación paralela y distribuida</p><ul><li>Estudios meteorológicos</li><li>Estudios del genoma humano</li><li>Modelado de la biosfera</li><li>Predicciones sísmicas</li><li>Simulación de moléculas</li></ul>',7),N={class:"custom-container info"},V=e("p",{class:"custom-container-title"},"Ejemplo de programación paralela y distribuida",-1),M={href:"https://setiathome.berkeley.edu/sah_about.php",target:"_blank",rel:"noopener noreferrer"},U=t(`<h2 id="_1-2-4-condiciones-de-bernstein" tabindex="-1">1.2.4. Condiciones de Bernstein</h2><p>Una vez que sabemos qué es un programa concurrente y las distintas arquitecturas hardware que pueden soportarlo, vamos a ver qué partes de un programa se pueden ejecutar de forma concurrente y cuáles no.</p><p>Si observamos el siguiente código, queda claro que la primera instrucción se debe ejecutar antes que la segunda para que el resultado sea siempre el mismo (para los mismos datos de entrada).</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#90A4AE;">x </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> x </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">y </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> x </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Sin embargo, en un código como el siguiente el orden en el que se ejecuten las instrucciones no influye en el resultado final (valor de las variables). En este caso se pueden ejecutar las tres sentencias a la vez incrementando la velocidad de procesamiento.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#90A4AE;">x </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">y </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">2</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">z </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">3</span><span style="color:#39ADB5;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A.J. Bernstein definió unas condiciones para determinar si dos conjuntos de instrucciones S<sub>i</sub> y S<sub>j</sub> se pueden ejecutar concurrentemente.</p><p>Para poder determinar si dos conjuntos de instrucciones se pueden ejecutar concurrentemente, se definen en primer lugar los siguientes conjuntos</p><ul><li>L(S<sub>k</sub>) = {a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>, ...} como el conjunto de lectura formado por todas las variables cuyos valores se leen durante la ejecución de las instrucciones del conjunto k.</li><li>E(S<sub>k</sub>) = {b<sub>1</sub>, b<sub>2</sub>, b<sub>3</sub>, ...} como el conjunto de escritura formado por todas las variables cuyos valores se actualizan durante la ejecución de las instrucciones del conjunto k.</li></ul><p>Para que dos conjuntos de instrucciones S<sub>i</sub> y S<sub>j</sub> se puedan ejecutar concurrentemente, se deben cumplir estas tres condiciones de forma simultánea.</p><ul><li>L(S<sub>i</sub>) ∩ E(S<sub>j</sub>)</li><li>E(S<sub>i</sub>) ∩ L(S<sub>j</sub>)</li><li>E(S<sub>i</sub>) ∩ E(S<sub>j</sub>)</li></ul><div class="custom-container question"><p class="custom-container-title">Cuales de estas instrucciones se pueden ejecutar de forma concurrente</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#90A4AE;">a </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> x </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> y</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">b </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> z </span><span style="color:#39ADB5;">-</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">c </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> a </span><span style="color:#39ADB5;">-</span><span style="color:#90A4AE;"> b</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">w </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> c </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>Primero deberíamos obtener los conjuntos L y E para cada sentencia</p><blockquote><p>L(S<sub>1</sub>) = {x, y}</p><p>E(S<sub>1</sub>) = {a}</p></blockquote><blockquote><p>L(S<sub>2</sub>) = {z}</p><p>E(S<sub>2</sub>) = {b}</p></blockquote><blockquote><p>L(S<sub>3</sub>) = {a, b}</p><p>E(S<sub>3</sub>) = {c}</p></blockquote><blockquote><p>L(S<sub>4</sub>) = {c}</p><p>E(S<sub>4</sub>) = {w}</p></blockquote><p>Y ahora aplicarlas entre cada par de sentencias</p><blockquote><p>L(S<sub>1</sub>) ∩ E(S<sub>2</sub>) = ∅ E(S<sub>1</sub>) ∩ L(S<sub>2</sub>) = ∅ E(S<sub>1</sub>) ∩ E(S<sub>2</sub>) = ∅ // Sí se pueden ejecutar concurrentemente</p></blockquote><blockquote><p>L(S<sub>1</sub>) ∩ E(S<sub>3</sub>) = ∅ E(S<sub>1</sub>) ∩ L(S<sub>3</sub>) = {a} ≠ ∅ E(S<sub>1</sub>) ∩ E(S<sub>3</sub>) = ∅ // NO se pueden ejecutar concurrentemente</p></blockquote><blockquote><p>L(S<sub>1</sub>) ∩ E(S<sub>4</sub>) = ∅ E(S<sub>1</sub>) ∩ L(S<sub>4</sub>) = ∅ E(S<sub>1</sub>) ∩ E(S<sub>4</sub>) = ∅ // Sí se pueden ejecutar concurrentemente</p></blockquote><blockquote><p>L(S<sub>2</sub>) ∩ E(S<sub>3</sub>) = ∅ E(S<sub>2</sub>) ∩ L(S<sub>3</sub>) = {b] ≠ E(S<sub>2</sub>) ∩ E(S<sub>3</sub>) = ∅ // NO se pueden ejecutar concurrentemente</p></blockquote><blockquote><p>L(S<sub>2</sub>) ∩ E(S<sub>4</sub>) = ∅ E(S<sub>2</sub>) ∩ L(S<sub>4</sub>) = ∅ E(S<sub>2</sub>) ∩ E(S<sub>4</sub>) = ∅ // Sí se pueden ejecutar concurrentemente</p></blockquote><blockquote><p>L(S<sub>3</sub>) ∩ E(S<sub>4</sub>) = ∅ E(S<sub>3</sub>) ∩ L(S<sub>4</sub>) = {c} ≠ ∅ E(S<sub>3</sub>) ∩ E(S<sub>4</sub>) = ∅ // NO se pueden ejecutar concurrentemente</p></blockquote>`,24);function T(O,R){const c=i("DownloadPDF-component"),u=i("DocumentCover-component"),o=i("router-link"),l=i("ExternalLinkIcon"),d=i("Badge");return y(),_("div",null,[a(c),a(u,{titulo:"1.2. Concurrencia"}),h,e("nav",S,[e("ul",null,[e("li",null,[a(o,{to:"#_1-2-1-concurrencia-vs-paralelismo"},{default:n(()=>[s("1.2.1. Concurrencia vs Paralelismo")]),_:1}),e("ul",null,[e("li",null,[a(o,{to:"#monoproceso"},{default:n(()=>[s("Monoproceso")]),_:1})]),e("li",null,[a(o,{to:"#multiprogramacion"},{default:n(()=>[s("Multiprogramación")]),_:1})]),e("li",null,[a(o,{to:"#paralelismo"},{default:n(()=>[s("Paralelismo")]),_:1})])])]),e("li",null,[a(o,{to:"#_1-2-2-sistemas-distribuidos"},{default:n(()=>[s("1.2.2. Sistemas distribuidos")]),_:1})]),e("li",null,[a(o,{to:"#_1-2-3-ventajas-e-inconvenientes"},{default:n(()=>[s("1.2.3. Ventajas e inconvenientes")]),_:1})]),e("li",null,[a(o,{to:"#_1-2-4-condiciones-de-bernstein"},{default:n(()=>[s("1.2.4. Condiciones de Bernstein")]),_:1})])])]),e("p",null,[s("Según el diccionario de la "),e("a",q,[s("RAE"),a(l)]),s(" una de las acepciones de concurrencia es")]),f,r(`
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
`),E,g,j,k,r(`
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
`),x,P,D,B,r(`
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
`),z,e("ul",null,[F,L,C,w,e("li",null,[s("Complejidad a la hora de la comunicación y sincronización de las diferentes subtareas. "),a(d,{type:"danger",text:"cuidado",vertical:"middle"})])]),I,e("div",N,[V,e("p",null,[e("a",M,[s("Búsqueda de inteligencia extraterrestre - Proyecto SETI"),a(l)])])]),U])}const Q=v(A,[["render",T],["__file","concurrency.html.vue"]]);export{Q as default};
