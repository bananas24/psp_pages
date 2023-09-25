import{_ as e,o,c as a,f as s}from"./app-24315640.js";const i={},n=s('<h1 id="tema-4-programacion-en-red" tabindex="-1">Tema 4. Programación en red</h1><p>Hasta ahora hemos visto como varias aplicaciones pueden colaborar entre sí para realizar una tarea de forma conjunta (<code>multiproceso</code>) o bien cómo un mismo programa puede dividir una tarea en partes que se ejecuten de forma concurrente y simultánea (<code>multihilo</code>). Todo esto ocurre dentro de una máquina, bien sea en <strong>monoprocesador</strong> o <strong>multiprocesador</strong>, controlados por un mismo SO y compartiendo habitualmente parte de la memoria y de la E/S.</p><p>En este tema vamos a ir un paso más allá, vamos a crear aplicaciones que funcionen en entornos distribuidos. Volvemos a tener múltiples procesos en ejecución, pero a diferencia de lo que vimos en el tema 2, en el que los procesos tenían una relación padre-hijo (lanzador-lanzado), ahora los procesos se van a ejecutar en sistemas independientes y se comunicarán a través de la red usando <code>protocolos de comunicación</code>.</p><p>Podemos encontrar básicamente dos modelos de sistemas distribuidos:</p><ul><li><strong>Cliente / Servidor</strong>: un proceso, denominado <code>servidor</code>, ofrece servicios a uno o más procesos, denominados <code>clientes</code>.</li><li><strong>Entre iguales (P2P)</strong>: todos los procesos colaboran de forma similar y con un mismo fin, no existiendo una especialización ni diferenciación entre ellos..</li></ul><div class="custom-container warning"><p class="custom-container-title">Procesos e Hilos</p><p>Para realizar un programa distribuido en el que se pueda realizar una conexión y una comunicación a través de una red de ordenadores no partimos de cero.</p><p>La programación en red está fuertemente ligada a la programación multiproceso. Principalmente en la forma de comunicación que ya vimos entre procesos.</p><p>Por otro lado, la especialización y el servicio que ofrece un servidor, de forma simultánea a varios clientes, está basada en la división del trabajo en hilos.</p><p>Por todo lo comentado, todos los conceptos y conocimientos adquiridos hasta ahora nos sirven de base para avanzar en los contenidos de este tema.</p></div><h2 id="objetivos" tabindex="-1">Objetivos</h2><p>Objetivos de esta unidad:</p><ul><li>Conocer el protocolo TCP/IP, las direcciones usadas en cada capa y y los protocolos asociados.</li><li>Conocer las clases que permiten trabajar con direcciones y nombres de servidores.</li><li>Aprender las características básicas de los protocolos TCP y UDP.</li><li>Desarrollar aplicaciones básicas que se comuniquen usando el protocolo TCP.</li><li>Desarrollar aplicaciones básicas que se comuniquen usando el protocolo UDP.</li><li>Diseñar y programar protocolos para la comunicación entre aplicaciones distribuidas.</li><li>Coordinar la ejecución de múltiples clientes en servidores multihilo.</li></ul>',9),r=[n];function c(l,t){return o(),a("div",null,r)}const m=e(i,[["render",c],["__file","index.html.vue"]]);export{m as default};
