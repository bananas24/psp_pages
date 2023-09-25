import{_ as i,r as l,o as d,c as y,d as a,a as s,w as o,b as e,f as r}from"./app-24315640.js";const A={},u=s("h1",{id:"_6-1-seguridad",tabindex:"-1"},"6.1 Seguridad",-1),m={class:"table-of-contents"},v=r('<h2 id="_6-1-1-seguridad-digital" tabindex="-1">6.1.1. Seguridad digital</h2><p>Los aspectos fundamentales de la seguridad en las comunicaciones digitales son los siguientes</p><ul><li><strong>Integridad</strong>: Permite asegurar que los datos que recibe un receptor son idénticos a los que ha enviado el emisor. Es decir, no se ha modificado en ningún punto intermedio en <strong>el canal, que como sabemos, es un canal compartido y por tanto, inseguro</strong>. Las modificaciones pueden ser causadas por fallos en la transmisión a través del canal o bien por una acción intencionada de un tercero.</li><li><strong>Confidencialidad</strong>: Nos asegura que los datos transmitidos son inteligibles sólo para el receptor del mensaje. Por las características del medio no podemos evitar que el mensaje llegue a otros destinatarios, pero lo que sí podemos evitar es que estos puedan ver el contenido original del mensaje. Esto se consigue cifrando el mensaje.</li><li><strong>Autenticación</strong>: Permite asegurar al receptor de un mensaje que el emisor del mensaje es quien dice ser y no cualquier otro. Esto se consigue con los certificados y la firma digital.</li><li><strong>No repudio</strong>: Es una consecuencia de la característica anterior, ya que un receptor puede demostrar que el mensaje fue enviado por un emisor de forma inequívoca.</li></ul><h2 id="_6-1-2-seguridad-en-java" tabindex="-1">6.1.2. Seguridad en Java</h2>',4),g={href:"https://docs.oracle.com/en/java/javase/11/security/java-cryptography-architecture-jca-reference-guide.html",target:"_blank",rel:"noopener noreferrer"},B=r(`<p>Desde el punto de vista de la seguridad, el conjunto de clases de seguridad distribuidas con el SDK de Java 2 pueden dividirse en dos subconjuntos:</p><ul><li>Clases relacionadas con el control de acceso y la gestión de permisos.</li><li>Clases relacionadas con la Criptografía.</li></ul><p>Java incluye APIs de acceso a funciones criptográficas de propósito general, conocidas como la <strong>Arquitectura Criptográfica de Java o Java Cryptography Architecture (JCA)</strong> y la <strong>Extension Criptográfica de Java o Java Cryptography Extension (JCE)</strong>.</p><p>El JCA está formado por las clases básicas relacionadas con criptografía distribuidas con el JDK y el soporte para la encriptación lo proporciona el paquete de extensión JCE.</p><p>Java también incluye un conjunto de paquetes para la comunicación segura en Internet, conocidos como la <strong>Extensión de Sockets Seguros de Java o Java Secure Socket Extension (JSSE)</strong>. Implementa una versión Java de los protocolos SSL y TLS, además incluye funcionalidades como cifrado de datos, autenticación del servidor, integridad de mensajes y autenticación del cliente.</p><p>Por último Java incluye una interfaz que permite a las aplicaciones Java acceder a servicios de control de autenticación y acceso, el <strong>Servicio de Autentificación y Autorización de Java o Java Authentication and Authorization Service (JAAS)</strong>. Puede usarse con dos fines: la autenticación de usuarios para conocer quién está ejecutando código Java; y la autorización de usuarios para garantizar que quién lo ejecuta tiene los permisos necesarios para hacerlo.</p><h3 id="jca-engines-algoritmos-y-proveedores" tabindex="-1">JCA: Engines, algoritmos y proveedores</h3><p>Java tiene una Arquitectura de Proveedores, que permite que coexistan multiples implementaciones de algoritmos criptográficos (es decir multiples implementaciones del JCE). La plataforma Java 2 extiende substancialmente la JCA, entre otras cosas se ha mejorado la infraestructura de gestión de certificados para soportar los certificados X.509 V3.</p><p>Para comprender el funcionamiento del JCA tenemos que definir algunos términos básicos:</p><h4 id="engine" tabindex="-1">Engine</h4><p>En el contexto del JCA utilizamos el término motor (engine) para referirnos a una representación abstracta de un servicio criptográfico que no tiene una implementación concreta. Un servicio criptográfico siempre está asociado con un algoritmo o tipo de algoritmo y puede tener alguna de las siguientes funciones:</p><ul><li>Proporcionar operaciones criptográficas (como las empleadas en el firmado y el resumen de mensajes)- Generar o proporcionar el material criptográfico (claves o parámetros) necesario para realizar las operaciones.</li><li>Generar objetos (almacenes de claves o certificados) que agrupen claves criptográficas de modo seguro.</li></ul><h4 id="algoritmo" tabindex="-1">Algoritmo</h4><p>Un algoritmo es una implementación de un motor. Por ejemplo, el algoritmo MD5 es una implementación del motor de algoritmos de resumen de mensajes. La implementación interna puede variar dependiendo del código que proporcione la clase MD5.</p><h4 id="proveedor" tabindex="-1">Proveedor</h4><p>Un proveedor es el encargado de proporcionar la implementación de uno o varios algoritmos al programador (es decir, darle acceso a una implementación interna concreta de los algoritmos).</p><h2 id="_6-1-3-proveedores" tabindex="-1">6.1.3. Proveedores</h2><p>La JCA define el concepto de proveedor mediante la clase Provider del paquete java.security. Se trata de una clase abstracta que debe ser redefinida por clases proveedor específicas.</p><p>El constructor de una clase proveedor ajusta los valores de varias propiedades que necesita el API de seguridad de Java para localizar los algoritmos u otras facilidades implementadas por el proveedor.</p><p>La clase Provider tiene métodos para acceder al nombre del proveedor, el número de versión y otras informaciones sobre las implementaciones de los algoritmos para la generación, conversión y gestión de claves y la generación de firmas y resúmenes.</p><p>Si un programador desea saber los proveedores disponibles puede emplear los métodos</p><ul><li>getProvider(&quot;nombre&quot;) para saber si un proveedor concreto está instalado</li><li>getProviders() que retorna un vector de cadenas con los nombres de los proveedores</li></ul><div class="custom-container info"><p class="custom-container-title">Archivo java.security</p><p>%JAVA_HOME%/conf/security/java.security es el archivo que contiene la información de la configuración de seguridad que utilizan las clases de la JCA.</p><p>Ahí están declarados todos los proveedores y algoritmos que están disponibles, así como el orden en el que las clases los buscarán.</p></div><p>Para entender como funcionan los proveedores daremos un ejemplo. Supongamos que un programa necesita una implementación del algoritmo MD5. Para obtenerla el programador necesita crear una instancia del mismo y lo hará escribiendo la siguiente línea de código:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#9C3EDA;">MessageDigest</span><span style="color:#90A4AE;"> m </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> MessageDigest</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getInstance</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">MD5</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Internamente, el método getInstance() solicita a la clase java.security.Security que le proporcione el objeto solicitado. Como no se ha especificado proveedor la clase Security consulta a todos los proveedores disponibles, solicitando una implementación del algoritmo &quot;MD5&quot;, hasta que encuentra una o se queda sin proveedores. La consulta se realiza según la lista de proveedores del archivo java.security, que por defecto sólo contiene la entrada:</p><p>Security.provider.1=sun.security.provider.Sun</p><h2 id="_6-1-4-engines" tabindex="-1">6.1.4. Engines</h2><p>En el JDK el JCA define las siguientes clases Engine</p><table><thead><tr><th>Clase JCA</th><th>Función</th></tr></thead><tbody><tr><td>java.security.MessageDigest</td><td>Calculo de resumen de mensajes (hash).</td></tr><tr><td>java.security.Signature</td><td>Firma de datos y verificación firmas.</td></tr><tr><td>java.security.KeyPairGenerator</td><td>Generar pares de claves (pública y privada) para un algoritmo.</td></tr><tr><td>java.security.KeyFactory</td><td>Convertir claves de formato criptográfico, especificaciones de claves y viceversa</td></tr><tr><td>java.security.certificate.CertificateFactory</td><td>Crear certificados de clave pública y listas de revocación(CRLs).</td></tr><tr><td>java.security.KeyStore</td><td>Crear y gestionar un almacén de claves (keystore).</td></tr><tr><td>java.security.AlgorithmParameters</td><td>Gestionar los parámetros de un algoritmo, incluyendo codificación y descodificación.</td></tr><tr><td>java.security.AlgorithmParameterGenerator</td><td>Generar un conjunto de parámetros para un algoritmo.</td></tr><tr><td>java.security.SecureRandom</td><td>Generar números aleatorios o pseudo aleatorios.</td></tr></tbody></table><p>Para instanciar una clase motor se debe invocar el método estático <em>getInstance()</em>, si se le pasa un nombre de algoritmo se intentará obtener una implementación de algún proveedor.</p><h3 id="_6-1-5-algoritmos" tabindex="-1">6.1.5. Algoritmos</h3><p>Al igual que pasa con las herramientas de línea de comandos, debemos saber qué algoritmos están disponibles para su uso por las aplicaciones en nuestra máquina virtual.</p><p>El siguiente programa nos permite saber que proveedores y algoritmos tenemos instalados en nuestro sistema.</p><p>Además, si lo invocamos con la opción -l nos dirá que algoritmos implementan (leyendo las propiedades del proveedor)</p><p>Toda la información mostrada se extrae del archivo <em>java.security</em></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#9C3EDA;">class</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">InfoProveedoresJCA</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">static</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">main</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">String</span><span style="color:#39ADB5;">[]</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">args</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#9C3EDA;">boolean</span><span style="color:#90A4AE;"> listarProps </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">false;</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;font-style:italic;">if</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">args</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">length </span><span style="color:#39ADB5;">&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">0</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&amp;&amp;</span><span style="color:#90A4AE;"> args</span><span style="color:#39ADB5;">[</span><span style="color:#F76D47;">0</span><span style="color:#39ADB5;">].</span><span style="color:#6182B8;">equals</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">-l</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">))</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">            listarProps </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">true;</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">        System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">------------------------------------</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">        System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Proveedores instalados en su sistema</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">        System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">------------------------------------</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#9C3EDA;">int</span><span style="color:#90A4AE;"> i </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">0</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;font-style:italic;">for</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">Provider</span><span style="color:#90A4AE;"> proveedor</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#90A4AE;"> Security</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProviders</span><span style="color:#39ADB5;">())</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Núm. proveedor : </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">i </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">));</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Nombre         : </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> proveedor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getName</span><span style="color:#39ADB5;">());</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Versión        : </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> proveedor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getVersion</span><span style="color:#39ADB5;">());</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Información    :</span><span style="color:#90A4AE;">\\n</span><span style="color:#91B859;">  </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> proveedor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getInfo</span><span style="color:#39ADB5;">());</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Propiedades    :</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#39ADB5;font-style:italic;">if</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">listarProps</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">                </span><span style="color:#9C3EDA;">Enumeration</span><span style="color:#90A4AE;"> propiedades </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> proveedor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">propertyNames</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">                </span><span style="color:#39ADB5;font-style:italic;">while</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">propiedades</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">hasMoreElements</span><span style="color:#39ADB5;">())</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">                    </span><span style="color:#9C3EDA;">String</span><span style="color:#90A4AE;"> clave </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">String</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> propiedades</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">nextElement</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">                    </span><span style="color:#9C3EDA;">String</span><span style="color:#90A4AE;"> valor </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> proveedor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProperty</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">clave</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">                    System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">  </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> clave </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> = </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> valor</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">                </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">------------------------------------</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#39ADB5;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37);function D(E,b){const t=l("DownloadPDF-component"),p=l("DocumentCover-component"),n=l("router-link"),c=l("ExternalLinkIcon");return d(),y("div",null,[a(t),a(p,{titulo:"6.1 Seguridad"}),u,s("nav",m,[s("ul",null,[s("li",null,[a(n,{to:"#_6-1-1-seguridad-digital"},{default:o(()=>[e("6.1.1. Seguridad digital")]),_:1})]),s("li",null,[a(n,{to:"#_6-1-2-seguridad-en-java"},{default:o(()=>[e("6.1.2. Seguridad en Java")]),_:1}),s("ul",null,[s("li",null,[a(n,{to:"#jca-engines-algoritmos-y-proveedores"},{default:o(()=>[e("JCA: Engines, algoritmos y proveedores")]),_:1})])])]),s("li",null,[a(n,{to:"#_6-1-3-proveedores"},{default:o(()=>[e("6.1.3. Proveedores")]),_:1})]),s("li",null,[a(n,{to:"#_6-1-4-engines"},{default:o(()=>[e("6.1.4. Engines")]),_:1}),s("ul",null,[s("li",null,[a(n,{to:"#_6-1-5-algoritmos"},{default:o(()=>[e("6.1.5. Algoritmos")]),_:1})])])])])]),v,s("p",null,[s("a",g,[e("oracle Security Developers Guide"),a(c)])]),B])}const q=i(A,[["render",D],["__file","security.html.vue"]]);export{q as default};
