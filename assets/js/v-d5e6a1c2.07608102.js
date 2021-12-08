"use strict";(self.webpackChunkapuntes_psp=self.webpackChunkapuntes_psp||[]).push([[1528],{7749:(e,o,a)=>{a.r(o),a.d(o,{data:()=>n});const n={key:"v-d5e6a1c2",path:"/es/unit4/tcp-ip.html",title:"4.1 Pila de protocolos TCP IP",lang:"es-ES",frontmatter:{title:"4.1 Pila de protocolos TCP IP"},excerpt:"",headers:[{level:2,title:"4.1.1. Las capas del modelo TCP/IP",slug:"_4-1-1-las-capas-del-modelo-tcp-ip",children:[]},{level:2,title:"4.1.2. Direcciones y puertos - Sockets",slug:"_4-1-2-direcciones-y-puertos-sockets",children:[{level:3,title:"Direcciones IP",slug:"direcciones-ip",children:[]},{level:3,title:"Puertos",slug:"puertos",children:[]},{level:3,title:"Sockets",slug:"sockets",children:[]}]},{level:2,title:"4.1.3 TCP vs UDP",slug:"_4-1-3-tcp-vs-udp",children:[]}],filePathRelative:"es/unit4/tcp-ip.md",git:{updatedTime:1638992793e3,contributors:[{name:"Vicente Martínez",email:"vicente@iesdoctorbalmis.com",commits:1}]}}},4325:(e,o,a)=>{a.r(o),a.d(o,{default:()=>fe});var n=a(6252),s=a(9910),i=a(3157),l=a(1070),r=a(5088),t=a(2452),c=a(5894),d=a(5309);const u=(0,n._)("h1",{id:"_4-1-pila-de-protocolos-tcp-ip",tabindex:"-1"},"4.1 Pila de protocolos TCP IP",-1),p={class:"table-of-contents"},m=(0,n.Uk)("4.1.1. Las capas del modelo TCP/IP"),v=(0,n.Uk)("4.1.2. Direcciones y puertos - Sockets"),b=(0,n.Uk)("Direcciones IP"),P=(0,n.Uk)("Puertos"),q=(0,n.Uk)("Sockets"),g=(0,n.Uk)("4.1.3 TCP vs UDP"),f=(0,n._)("h2",{id:"_4-1-1-las-capas-del-modelo-tcp-ip",tabindex:"-1"},"4.1.1. Las capas del modelo TCP/IP",-1),I=(0,n._)("p",null,[(0,n.Uk)("La pila de protocolos TCP/IP, o los protocolos de internet, son un conjunto de "),(0,n._)("code",null,"protocolos de comunicación"),(0,n.Uk)(" usados en la red Internet o en redes similares.")],-1),y=(0,n._)("p",null,"TCP/IP son los protocolos más usados a nivel mundial. Son protocolos abiertos y por ese motivo permiten la comunicación entre máquinas usando diferentes plataformas de hardware y software. Estos protocolos funcionan tanto en redes de área extensa (WAN) como en redes de área local (LAN).",-1),k=(0,n._)("p",null,[(0,n.Uk)("La pila de protocolos TCP/IP es, como hemos dicho, un conjunto de protocolos que reciben su nombre de los dos protocolos más importantes "),(0,n._)("code",null,"Protocolo de Control de la Transmission(TCP)"),(0,n.Uk)(" and the "),(0,n._)("code",null,"Protocolo de Internet(IP)"),(0,n.Uk)(". Además de estos protocolos, la pila TCP/IP incluye muchos otros protocolos de más alto nivel que facilitan la comunicación con aplicaciones como el email, transferencia de archivos, servidores web, etc.")],-1),U={class:"custom-container info"},h=(0,n._)("p",{class:"custom-container-title"},"Documentos RFC",-1),T=(0,n._)("p",null,[(0,n.Uk)("Cada protocolo de Internet, junto con sus correcciones y modificaciones posteriores, está descrito en un documento conocido como "),(0,n._)("code",null,"Request For Comments (RFC)"),(0,n.Uk)(".")],-1),_=(0,n.Uk)("Aquí se puede consultar la lista de los RFCs disponibles: "),C={href:"http://www.ietf.org/rfc.html",target:"_blank",rel:"noopener noreferrer"},x=(0,n.Uk)("http://www.ietf.org/rfc.html"),j=(0,n.Uk)("."),L=(0,n._)("p",null,[(0,n.Uk)("Recibe el nombre de "),(0,n._)("strong",null,"pila"),(0,n.Uk)(" o "),(0,n._)("strong",null,"stack"),(0,n.Uk)(" porque está diseñado como una jerarquía de capas en las que cada capa da soporte a la capa que tiene por encima y utiliza los servicios de la capa que tiene por debajo. Cada capa está encargada de resolver un subconjunto de los problemas específicos que encontramos cuando queremos realizar una comunicación de datos entre equipos en una red.")],-1),w=(0,n._)("p",null,"El modelo TCP/IP está dividido en cuatro capas. De más bajo nivel a más alto tenemos la capa de enlace de datos (Link), la capa de red (internet), la capa de transporte y la capa de aplicación, tal y como podemos ver en la siguiente imagen.",-1),W=(0,n._)("p",null,[(0,n._)("img",{src:s,alt:"TCP/IP real communication flow"})],-1),Z=(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Uk)("La "),(0,n._)("strong",null,"capa de enlace"),(0,n.Uk)(" proporciona la comunicación entre dos interfaces o tarjetas de red dentro de una misma red local, con conexión directa o a través de uno o varios switches.")]),(0,n._)("li",null,[(0,n.Uk)("La "),(0,n._)("strong",null,"capa de red"),(0,n.Uk)(" proporciona comunicación entre dos interfaces de red o hosts. Estos hosts pueden estar en la misma red o en redes diferentes, siempre que estén interconectadas por uno o más routers. A cada interfaz de red se le asigna una dirección IP que identifica al equipo de forma unívoca. El protocolo IP es el más importante de esta capa y probablemente sea el más importante de toda la pila de protocolos.")]),(0,n._)("li",null,[(0,n.Uk)("La "),(0,n._)("strong",null,"capa de transporte"),(0,n.Uk)(" se encarga de proporcionar una comunicación punto a punto, permitiendo manejar múltiples transferencias de información de forma simultanea. El protocolo principal de esta capa es el protocolo "),(0,n._)("code",null,"TCP"),(0,n.Uk)(", que se encarga de proporcionar un servicio confiable y orientado a conexión. "),(0,n._)("code",null,"UDP"),(0,n.Uk)(" por su parte proporciona un servicio más eficaz y rápido, pero lo hace de forma no fiable y no orientado a conexión.")]),(0,n._)("li",null,[(0,n.Uk)("La "),(0,n._)("strong",null,"capa de aplicación"),(0,n.Uk)(" proporciona servicios específicos de transmisión fiable para un tipo determinado de aplicación (transferencia de archivos, correo electrónico, gestión de red, configuración de red, etc.). Esta capa se encuentra unas veces dentro de las aplicaciones cliente que usamos para acceder a estos servicios y en otras ocasiones como servicios del propio SO. El interfaz entre los protocolos de la capa de aplicación y los protocolos de la capa de transporte se definen como "),(0,n._)("code",null,"puertos "),(0,n.Uk)(" y "),(0,n._)("code",null,"sockets"),(0,n.Uk)(".")])],-1),V=(0,n._)("p",null,[(0,n._)("img",{src:i,alt:"TCP/IP logical communication flow"})],-1),E=(0,n._)("h2",{id:"_4-1-2-direcciones-y-puertos-sockets",tabindex:"-1"},"4.1.2. Direcciones y puertos - Sockets",-1),z=(0,n._)("h3",{id:"direcciones-ip",tabindex:"-1"},"Direcciones IP",-1),J=(0,n._)("p",null,"Cada host o equipo que está en una red TCP/IP tiene asignada na dirección IP única consistente en un número de red y un número de host. El número de red sirve para identificar la red en la que se encuentran los hosts. El número de host sirve para identificar a un host dentro de una red.",-1),Y=(0,n._)("p",null,"Las direcciones Ipv4 son direcciones de 32-bits. La dirección IP se agrupa en cuatro octetos o bytes (grupos de 8 bits) y se representan usando el valor en notación decimal de cada uno de los bytes, separados por puntos. El valor mínimo para cada octeto es 0 y el valor máximo es 255.",-1),D=(0,n._)("blockquote",null,[(0,n._)("p",null,"192.168.0.100"),(0,n._)("p",null,"127.0.0.1"),(0,n._)("p",null,"10.1.100.1")],-1),S=(0,n._)("p",null,"Las direcciones IPv6 está formadas por 64-bits para la dirección de red o prefijo de red, y otros 64 bits para el número de host. Las direcciones IPv6 se escriben como 8 grupos de 4 dígitos hexadecimales separados por el caracter ':'. Un grupo que sólo tiene ceros puede ser omitido. Los ceros iniciales también se pueden omitir",-1),N=(0,n._)("p",null,"Todas estas direcciones serían equivalentes. Se les han aplicado diferentes reglas de reducción",-1),M=(0,n._)("blockquote",null,[(0,n._)("p",null,"2001:0db8:0000:0000:0000:0000:1428:57ab"),(0,n._)("p",null,"2001:0db8:0000:0000:0000::1428:57ab"),(0,n._)("p",null,"2001:0db8:0:0:0:0:1428:57ab"),(0,n._)("p",null,"2001:0db8:0:0::1428:57ab"),(0,n._)("p",null,"2001:0db8::1428:57ab"),(0,n._)("p",null,"2001:db8::1428:57ab")],-1),A=(0,n._)("p",null,[(0,n._)("img",{src:l,alt:"Routing"})],-1),X=(0,n._)("h3",{id:"puertos",tabindex:"-1"},"Puertos",-1),H=(0,n._)("p",null,[(0,n.Uk)("Cuando una aplicación que se est´ejecutando en un equipo quiere comunicarse con otra aplicación de otro equipo, se identifica a sí misma con un número de 16 bits, que denominamos "),(0,n._)("code",null,"puerto"),(0,n.Uk)(". Ese identificador es usado por los protocolos de la capa de transporte (TCP or UDP) para entregar los mensajes a la aplicación correcta dentro del equipo.")],-1),G=(0,n._)("p",null,"Los puertos van de 0 a 65535, y se agrupan en tres rangos",-1),O=(0,n._)("table",null,[(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"Grupo de puertos"),(0,n._)("th",null,"Rango de puertos"),(0,n._)("th",null,"Descripción")])]),(0,n._)("tbody",null,[(0,n._)("tr",null,[(0,n._)("td",null,"Puertos bien conocidos o puertos del sistema"),(0,n._)("td",null,"0 - 1023"),(0,n._)("td",null,"Los usan los protocolos estándar y los servicios del SO")]),(0,n._)("tr",null,[(0,n._)("td",null,"Puertos registrados"),(0,n._)("td",null,"1024- 49151"),(0,n._)("td",null,"Reservados por empresas y organizaciones para sus propios servicios")]),(0,n._)("tr",null,[(0,n._)("td",null,"Puertos efímeros"),(0,n._)("td",null,"49152 - 65535"),(0,n._)("td",null,"De libre disposición y uso para aplicaciones cliente y servidor")])])],-1),K=(0,n._)("p",null,"Los servidores de protocolos estándar como Telnet y FTP usan uno o más de estos puertos bien conocidos. La mayoría de los servidores sólo utilizan un puerto aunque hay otros, como FTP, que usan dos. El uso de un puerto específico permite a las aplicaciones cliente el poder comunicarse con el servidor sin tener que enviar una petición previa para determinar qué puerto se está usando.",-1),F=(0,n._)("blockquote",null,[(0,n._)("p",null,"Por ejemplo, las peticiones HTTP se envían por defecto al puerto 80 del servidor..")],-1),R=(0,n._)("p",null,"Las aplicaciones cliente (navegadores, clientes de correo, etc) no necesitan usar uno de los puertos bien conocidos ya que son los que inician la comunicación. A los procesos cliente se les asigna un número de puerto de forma dinámica por parte del SO. Ese número está incluido en todos los datagramas que intercambia con el servidor, por lo tanto el servidor tiene acceso a esa información.",-1),B=(0,n._)("h3",{id:"sockets",tabindex:"-1"},"Sockets",-1),Q=(0,n._)("p",null,[(0,n.Uk)("Un "),(0,n._)("code",null,"socket"),(0,n.Uk)(" es básicamente un punto final de conexión en una comunicación entre proceso y está formado por una combinación unica de "),(0,n._)("strong",null,"dirección IP, puerto y protocolo de transporte (normalmente TCP)"),(0,n.Uk)(".")],-1),$=(0,n._)("p",null,"Cuando una aplicación cliente quiere comunicarse con un servidor, el SO crea el socket que usará el cliente para recibir la información del servidor. lA combinación única de Protocolo + puerto + IP permite que este extremo de la comunicación sea accesible desde el servidor, de manera inequívoca y asegura que los datos los recibe el proceso que los solicitó.",-1),ee=(0,n._)("p",null,"El servidor tiene su propio socket par comunicarse con el cliente, y una conexión establecida entre el cliente y el servidor usando los dos extremos (los dos sockets cliente <--\x3e servidor. Las aplicaciones intercambian información escribiendo o leyendo en los sockets que han creado..",-1),oe=(0,n._)("p",null,"La conexión usada por un cliente está formada por dos sockets, uno en el lado del cliente y otro en el lado des servidor. Por lo tanto, la conexión puede identificarse con una tupla formada por cuatro número: la dirección IP de origen, la dirección IP de destino, el puerto de origen y el puerto de destino.",-1),ae=(0,n._)("p",null,"Esto permite que múltiples aplicaciones cliente ejecutándose en máquinas diferentes puedan conectarse al mismo socket de destino en el servidor. Tampoco hay confusión de a qué equipo se debe enviar un datagram de respuesta, incluso si el puerto de origen y destino es el mismo.",-1),ne=(0,n._)("p",null,"Usando sockets también es posible tener varias aplicaciones cliente corriendo en el mismo equipo y conectándose al mismo servidor (varias pestañas de un navegador). Los datagramas de respuesta enviados por el servidor al cliente contienen la información del socket en el lado del client, la cual incluye el puerto asignado individualmente a cada uno de los clientes, no pudiendo haber confusión sobre a qué proceso entregar la respuesta.",-1),se=(0,n._)("p",null,[(0,n._)("img",{src:r,alt:"TCP/IP logical communication flow"})],-1),ie=(0,n._)("p",null,"En una red, la comunicación real se realiza de una capa a la siguiente o a la anterior. Sin embargo, las aplicaciones de cada capa realizan una abstracción de las capas inferiores y ven su flujo de comunicación como una comunicación directa con la capa equivalente en el otro extremo de la conexión.",-1),le=(0,n._)("p",null,"En la pila de protocolos TCP/IP se manejan diferentes elementos de información en cada nivel (frames, packets, datagramas, streams, messages, ...).",-1),re=(0,n._)("p",null,[(0,n._)("img",{src:t,alt:"TCP/IP logical communication flow"})],-1),te=(0,n._)("p",null,"Como ya se ha citando anteriormente, los sockets son el puente entre la capa de transporte y la capa de aplicación. Este es el punto donde vamos a trabajar y desarrollar nuestras aplicaciones en este tema, ofreciendo servicios a los protocolos de la capa superior, la capa de aplicación.",-1),ce=(0,n._)("h2",{id:"_4-1-3-tcp-vs-udp",tabindex:"-1"},"4.1.3 TCP vs UDP",-1),de=(0,n._)("p",null,"El protocolo TCP que es el más utilizado en la navegación cotidiana. Es el más habitual por tratarse de un protocolo de transporte ‘orientado a conexión’. Esto quiere decir que el protocolo TCP está diseñado no solo para transmitir una determinada información entre un dispositivo y otro, sino también para verificar la correcta recepción de la información transmitida entre un dispositivo y otro, o, dicho de otro modo, es un protocolo para manejar conexiones de extremo a extremo.",-1),ue=(0,n._)("p",null,"El protocolo TCP establece una conexión entre el dispositivo emisor y el dispositivo receptor y verifica de forma continua la emisión y recepción de la información entre ambos. El protocolo TCP consigue esta verificación dividiendo los flujos de bytes en segmentos ordenados con un número de secuencia antes de transmitirlos a través del protocolo IP. Este número de secuencia es verificado por el dispositivo receptor y, en caso de que falte alguno de los segmentos, el protocolo TCP vuelve a solicitar su envío a través del protocolo IP, hasta que el mensaje llega en su totalidad al dispositivo receptor. Gracias a su fiabilidad, el protocolo TCP da soporte a los protocolos HTTP, SMTP, SSH y FTP.",-1),pe=(0,n._)("p",null,"El protocolo TCP ofrece los siguientes servicios :",-1),me=(0,n._)("ul",null,[(0,n._)("li",null,"Comunicación Full duplex: los dos extremos pueden transmitir simultaneamente"),(0,n._)("li",null,"Timing: Utiliza temporizadores para asegurar que los datos se transmiten de forma síncrona"),(0,n._)("li",null,"Secuenciación: Los bloques se transmiten con un número de secuencia para que puedan ser reensamblados en el destino, en orden correcto, antes de pasarlos al protocolo de la capa de aplicación."),(0,n._)("li",null,"Control de flujo: Se encarga de gestionar el congestión y adaptar la velocidad de envío / recepción de bloques."),(0,n._)("li",null,"Gestión de errores: Usa comprobaciones checksum para detectar posibles errores en la transmisión de los datos y gestionar dichos errores.")],-1),ve=(0,n._)("p",null,[(0,n._)("img",{src:c,alt:"TCP/IP logical communication flow"})],-1),be=(0,n._)("p",null,"El protocolo UDP funciona de manera similar al protocolo TCP, pero no es un protocolo de transporte orientado a conexión. Esto quiere decir que el protocolo UDP no verifica la recepción de los datos transmitidos entre un dispositivo y otro. Por esto, se articula en un nivel de capa inferior al protocolo TCP, con lo que el sistema de verificación de la recepción de los datos debe implementarse en las capas superiores.",-1),Pe=(0,n._)("p",null,"La principal ventaja del protocolo UDP consiste en su velocidad. Al prescindir de un sistema de verificación de ida y vuelta entre el dispositivo emisor y el dispositivo receptor, el protocolo UDP permite una velocidad de transferencia superior a la del protocolo TCP. Por esto, el protocolo UDP es el más utilizado por los servicios de transmisión de voz o vídeo en streaming, donde la velocidad de la transmisión es más importante que una posible pérdida de datos puntual.",-1),qe=(0,n._)("p",null,"Cabe destacar su uso especializado para transmisiones de tipo multicast y broadcast.",-1),ge=(0,n._)("p",null,[(0,n._)("img",{src:d,alt:"TCP/IP logical communication flow"})],-1),fe={render:function(e,o){const a=(0,n.up)("DownloadPDF-component"),s=(0,n.up)("DocumentCover-component"),i=(0,n.up)("RouterLink"),l=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(a),(0,n.Wm)(s,{titulo:"4.1 Pila de protocolos TCP IP"}),u,(0,n._)("nav",p,[(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Wm)(i,{to:"#_4-1-1-las-capas-del-modelo-tcp-ip"},{default:(0,n.w5)((()=>[m])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(i,{to:"#_4-1-2-direcciones-y-puertos-sockets"},{default:(0,n.w5)((()=>[v])),_:1}),(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Wm)(i,{to:"#direcciones-ip"},{default:(0,n.w5)((()=>[b])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(i,{to:"#puertos"},{default:(0,n.w5)((()=>[P])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(i,{to:"#sockets"},{default:(0,n.w5)((()=>[q])),_:1})])])]),(0,n._)("li",null,[(0,n.Wm)(i,{to:"#_4-1-3-tcp-vs-udp"},{default:(0,n.w5)((()=>[g])),_:1})])])]),f,I,y,k,(0,n._)("div",U,[h,T,(0,n._)("p",null,[_,(0,n._)("a",C,[x,(0,n.Wm)(l)]),j])]),L,w,W,Z,V,E,z,J,Y,D,S,N,M,A,X,H,G,O,K,F,R,B,Q,$,ee,oe,ae,ne,se,ie,le,re,te,ce,de,ue,pe,me,ve,be,Pe,qe,ge],64)}}},9910:(e,o,a)=>{e.exports=a.p+"assets/img/1-ip-real-communication-flow.ba844b40.gif"},5088:e=>{e.exports="data:image/gif;base64,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"},2452:(e,o,a)=>{e.exports=a.p+"assets/img/4.0-The-TCP-IP-UDP-IP-Stack_Q640.0ce9cf3f.jpg"},3157:(e,o,a)=>{e.exports=a.p+"assets/img/4.1-ip-protocols.c7cce48a.png"},5894:(e,o,a)=>{e.exports=a.p+"assets/img/5-Graphic-UDP-Vs-TCP.fdc58bec.png"},1070:(e,o,a)=>{e.exports=a.p+"assets/img/data_transfer.345b5da4.gif"},5309:(e,o,a)=>{e.exports=a.p+"assets/img/tcp_vs_udp.08c727cc.png"}}]);