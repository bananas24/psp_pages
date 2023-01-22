import{_ as e,o,c as t,f as i}from"./app.33df6748.js";const s={},n=i('<h1 id="unit-4-network-programming" tabindex="-1">Unit 4. Network programming</h1><hr><p>We have already studied how independent applications can collaborate to do a task (<code>multiprocess</code>) or just how to divide a program in many execution threads to be run simultaneously and even concurrently (<code>multithread</code>). But all this happens inside one computer, it can be <strong>monoprocessor</strong> or <strong>multiprocessor</strong>, under the same OS and sharing memory and I/O.</p><p>In this unit we are going one step forward, we are going to code applications working on distributed environments. Once again we will have multiple processes running, but instead having a parent-child (launcher-launched) relationship, now the processes will be run on independent systems, and what&#39;s more interesting, the will communicate through the network by using <code>communication protocols</code>.</p><p>Basically we can classify distributed systems in two groups::</p><ul><li><strong>Client / Server</strong>: where one process, called the <code>server</code>, offers services to one or more processes, called <code>clients</code>.</li><li><strong>Peer to peer (P2P)</strong>: where all the processes collaborate in a similar way without any particular specialization or difference among them.</li></ul><div class="custom-container warning"><p class="custom-container-title">Processes and Threads</p><p>To make a distributed application, with processes and network communication, we are not starting form the scratch.</p><p>Network programming is strongly linked with multiprocess programming. We will see how communication between process is exactly the same as through the network.</p><p>On the other side, the specialization and service offered by a server, simultaneously to many clients, is based on the multithread approach..</p><p>All the above, all concepts and knowledge acquired from unit 1 to unit 3, will be the scaffold to start creating distributed applications.</p></div><h2 id="goals" tabindex="-1">Goals</h2><p>The goals for this unit are:</p><ul><li>To know about TCP/IP protocol, addresses used in each protocol layer and associated protocols.</li><li>To know Java classes tp work with Internet addresses and server names.</li><li>To learn about basic TPC and UPD protocols features.</li><li>To code applications that use TCP protocol for communication purposes.</li><li>To code applications that use UDP protocol for communication purposes.</li><li>To design and code protocols for distributed applications.</li><li>to coordinate multiple client access to servers by using multithread programming.</li></ul>',10),a=[n];function r(c,l){return o(),t("div",null,a)}const p=e(s,[["render",r],["__file","index.html.vue"]]);export{p as default};
