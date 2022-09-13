import{_ as s,a as i,b as r,c as l,d as t}from"./NetbeansDebug5.890d9d49.js";import{_ as d,r as e,o as c,c as u,d as o,f as p}from"./app.0731c5df.js";const m={},h=p('<h1 id="_3-5-anexo-i-debugging-aplicaciones-multihilo-en-netbeans" tabindex="-1"><a class="header-anchor" href="#_3-5-anexo-i-debugging-aplicaciones-multihilo-en-netbeans" aria-hidden="true">#</a> 3.5 Anexo I - Debugging aplicaciones multihilo en Netbeans</h1><p>Los entornos de desarrollo Java proporcionan las herramientas necesarias para la depuraci\xF3n (debugging) de aplicaciones multihilo.</p><p>Al igual que en aplicaciones monohilo, podemos ubicar los breakpoints en el punto en el que nos interese detener la ejecuci\xF3n del programa, para de esta forma poder inspeccionar el estado de los objetos, los valores de las propiedades, etc.</p><p>Para poder monitorizar los hilos de un programa, debemos activar la ventana de Debugging desde el menu <em>Window &gt; Debugging &gt; Debugging (Alt+Shift +9)</em></p><p><img src="'+s+'" alt="Activar thread debug"></p><p>A partir de ese momento podremos ver la parte derecha las opciones de depuraci\xF3n de hilos junto con toda la informaci\xF3n de los hilos que se est\xE1n ejecutando en nuestra aplicaci\xF3n.</p><p>Veamos el significado de lo que Netbeans nos muestra en esta caja de di\xE1logo</p><p><img src="'+i+'" alt="Di\xE1logo depuraci\xF3n threads"></p><ul><li>Con una franja de color verde a la izquierda y resaltado tambi\xE9n en color verde vemos lo que Netbeans denomina el <em>current thread</em>, es decir, el hilo que estamos depurando y sobre el que se aplicar\xE1n las acciones de depuraci\xF3n como Step Into, StepOver, Pause, Continue, etc. Adem\xE1s, podremos inspeccionar el valor de las variables para ese hilo en concreto.</li><li>Con una franja de color amarillo en la parte izquierda, y relacionado con el aviso de la parte inferior, vemos los hilos que est\xE1n parados en alg\xFAn breakpoint marcado por nosotros. Este color y los avisos est\xE1n para que atendamos al hilo y podamos visualizar su estado o continuar con su ejecuci\xF3n.</li><li>En la parte derecha de cada hilo tenemos un acceso r\xE1pido a la funci\xF3n de Reanudar o Pausar cada uno de los threads activos.</li></ul><p><img src="'+r+'" alt="Cambio de hilo"></p><p>Pulsando con el bot\xF3n derecho sobre cualquiera de los hilos podemos convertirlo en el <em>current thread</em>. As\xED pasamos a controlar la ejecuci\xF3n e inspecci\xF3n de ese hilo mientras los dem\xE1s siguen pausados o bien continuan su ejecuci\xF3n.</p><p><img src="'+l+'" alt="Estado de los hilos"></p><p>Adem\xE1s, la rueda dentada que est\xE1 al lado del identificador de cada hilo nos d\xE1 informaci\xF3n del estado del hilo.</p><ul><li>Cuando la rueda est\xE1 de color naranja indica que el hilo est\xE1 suspendido en espera de nuestra atenci\xF3n.</li><li>Cuando la rueda est\xE1 verde, indica que el hilo est\xE1 en ejecuci\xF3n. Si ponemos el rat\xF3n encima podemos obtener informaci\xF3n de su estado. Como se puede observar en la imagen, el hilo 2 est\xE1 en ejecuci\xF3n aunque se encuentra en estado de espera. Es un hilo que est\xE1 bloqueado en un join.</li></ul><p><img src="'+t+'" alt="Estado de los hilos"></p><p>Por \xFAltimo, la depuraci\xF3n de hilos tambi\xE9n nos ayuda a detectar c\xF3mo los hilos est\xE1n sincroniz\xE1ndose con el uso de monitores. Podemos ver si un hilo tiene un monitor (bloqueo) bajo su control, y qu\xE9 hilos est\xE1n esperando a que se libere un bloqueo para poder continuar.</p><p>Como herramienta adicional, Netbeans nos proporciona una utilidad (<em>Debug &gt; Check for deadlocks</em>) que comprueba si hay hilos que est\xE9n en un interbloqueo, inform\xE1ndonos de los monitores que tienen bajo su control y de los monitores para los que est\xE1n realizando alguna espera.</p>',17);function g(b,_){const a=e("DownloadPDF-component"),n=e("DocumentCover-component");return c(),u("div",null,[o(a),o(n,{titulo:"3.5 Anexo I - Debugging aplicaciones multihilo en Netbeans"}),h])}const f=d(m,[["render",g],["__file","debugger_annex.html.vue"]]);export{f as default};
