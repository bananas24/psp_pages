import{_ as i,r as l,o as d,c as y,d as a,a as s,w as o,b as e,f as r}from"./app.f2ce21db.js";const A={},u=s("h1",{id:"_6-1-seguridad",tabindex:"-1"},"6.1 Seguridad",-1),m={class:"table-of-contents"},v=e("6.1.1. Seguridad digital"),g=e("6.1.2. Seguridad en Java"),B=e("JCA: Engines, algoritmos y proveedores"),D=e("6.1.3. Proveedores"),E=e("6.1.4. Engines"),b=e("6.1.5. Algoritmos"),f=r('<h2 id="_6-1-1-seguridad-digital" tabindex="-1">6.1.1. Seguridad digital</h2><p>Los aspectos fundamentales de la seguridad en las comunicaciones digitales son los siguientes</p><ul><li><strong>Integridad</strong>: Permite asegurar que los datos que recibe un receptor son id\xE9nticos a los que ha enviado el emisor. Es decir, no se ha modificado en ning\xFAn punto intermedio en <strong>el canal, que como sabemos, es un canal compartido y por tanto, inseguro</strong>. Las modificaciones pueden ser causadas por fallos en la transmisi\xF3n a trav\xE9s del canal o bien por una acci\xF3n intencionada de un tercero.</li><li><strong>Confidencialidad</strong>: Nos asegura que los datos transmitidos son inteligibles s\xF3lo para el receptor del mensaje. Por las caracter\xEDsticas del medio no podemos evitar que el mensaje llegue a otros destinatarios, pero lo que s\xED podemos evitar es que estos puedan ver el contenido original del mensaje. Esto se consigue cifrando el mensaje.</li><li><strong>Autenticaci\xF3n</strong>: Permite asegurar al receptor de un mensaje que el emisor del mensaje es quien dice ser y no cualquier otro. Esto se consigue con los certificados y la firma digital.</li><li><strong>No repudio</strong>: Es una consecuencia de la caracter\xEDstica anterior, ya que un receptor puede demostrar que el mensaje fue enviado por un emisor de forma inequ\xEDvoca.</li></ul><h2 id="_6-1-2-seguridad-en-java" tabindex="-1">6.1.2. Seguridad en Java</h2>',4),q={href:"https://docs.oracle.com/en/java/javase/11/security/java-cryptography-architecture-jca-reference-guide.html",target:"_blank",rel:"noopener noreferrer"},h=e("oracle Security Developers Guide"),_=r(`<p>Desde el punto de vista de la seguridad, el conjunto de clases de seguridad distribuidas con el SDK de Java 2 pueden dividirse en dos subconjuntos:</p><ul><li>Clases relacionadas con el control de acceso y la gesti\xF3n de permisos.</li><li>Clases relacionadas con la Criptograf\xEDa.</li></ul><p>Java incluye APIs de acceso a funciones criptogr\xE1ficas de prop\xF3sito general, conocidas como la <strong>Arquitectura Criptogr\xE1fica de Java o Java Cryptography Architecture (JCA)</strong> y la <strong>Extension Criptogr\xE1fica de Java o Java Cryptography Extension (JCE)</strong>.</p><p>El JCA est\xE1 formado por las clases b\xE1sicas relacionadas con criptograf\xEDa distribuidas con el JDK y el soporte para la encriptaci\xF3n lo proporciona el paquete de extensi\xF3n JCE.</p><p>Java tambi\xE9n incluye un conjunto de paquetes para la comunicaci\xF3n segura en Internet, conocidos como la <strong>Extensi\xF3n de Sockets Seguros de Java o Java Secure Socket Extension (JSSE)</strong>. Implementa una versi\xF3n Java de los protocolos SSL y TLS, adem\xE1s incluye funcionalidades como cifrado de datos, autenticaci\xF3n del servidor, integridad de mensajes y autenticaci\xF3n del cliente.</p><p>Por \xFAltimo Java incluye una interfaz que permite a las aplicaciones Java acceder a servicios de control de autenticaci\xF3n y acceso, el <strong>Servicio de Autentificaci\xF3n y Autorizaci\xF3n de Java o Java Authentication and Authorization Service (JAAS)</strong>. Puede usarse con dos fines: la autenticaci\xF3n de usuarios para conocer qui\xE9n est\xE1 ejecutando c\xF3digo Java; y la autorizaci\xF3n de usuarios para garantizar que qui\xE9n lo ejecuta tiene los permisos necesarios para hacerlo.</p><h3 id="jca-engines-algoritmos-y-proveedores" tabindex="-1">JCA: Engines, algoritmos y proveedores</h3><p>Java tiene una Arquitectura de Proveedores, que permite que coexistan multiples implementaciones de algoritmos criptogr\xE1ficos (es decir multiples implementaciones del JCE). La plataforma Java 2 extiende substancialmente la JCA, entre otras cosas se ha mejorado la infraestructura de gesti\xF3n de certificados para soportar los certificados X.509 V3.</p><p>Para comprender el funcionamiento del JCA tenemos que definir algunos t\xE9rminos b\xE1sicos:</p><h4 id="engine" tabindex="-1">Engine</h4><p>En el contexto del JCA utilizamos el t\xE9rmino motor (engine) para referirnos a una representaci\xF3n abstracta de un servicio criptogr\xE1fico que no tiene una implementaci\xF3n concreta. Un servicio criptogr\xE1fico siempre est\xE1 asociado con un algoritmo o tipo de algoritmo y puede tener alguna de las siguientes funciones:</p><ul><li>Proporcionar operaciones criptogr\xE1ficas (como las empleadas en el firmado y el resumen de mensajes)- Generar o proporcionar el material criptogr\xE1fico (claves o par\xE1metros) necesario para realizar las operaciones.</li><li>Generar objetos (almacenes de claves o certificados) que agrupen claves criptogr\xE1ficas de modo seguro.</li></ul><h4 id="algoritmo" tabindex="-1">Algoritmo</h4><p>Un algoritmo es una implementaci\xF3n de un motor. Por ejemplo, el algoritmo MD5 es una implementaci\xF3n del motor de algoritmos de resumen de mensajes. La implementaci\xF3n interna puede variar dependiendo del c\xF3digo que proporcione la clase MD5.</p><h4 id="proveedor" tabindex="-1">Proveedor</h4><p>Un proveedor es el encargado de proporcionar la implementaci\xF3n de uno o varios algoritmos al programador (es decir, darle acceso a una implementaci\xF3n interna concreta de los algoritmos).</p><h2 id="_6-1-3-proveedores" tabindex="-1">6.1.3. Proveedores</h2><p>La JCA define el concepto de proveedor mediante la clase Provider del paquete java.security. Se trata de una clase abstracta que debe ser redefinida por clases proveedor espec\xEDficas.</p><p>El constructor de una clase proveedor ajusta los valores de varias propiedades que necesita el API de seguridad de Java para localizar los algoritmos u otras facilidades implementadas por el proveedor.</p><p>La clase Provider tiene m\xE9todos para acceder al nombre del proveedor, el n\xFAmero de versi\xF3n y otras informaciones sobre las implementaciones de los algoritmos para la generaci\xF3n, conversi\xF3n y gesti\xF3n de claves y la generaci\xF3n de firmas y res\xFAmenes.</p><p>Si un programador desea saber los proveedores disponibles puede emplear los m\xE9todos</p><ul><li>getProvider(&quot;nombre&quot;) para saber si un proveedor concreto est\xE1 instalado</li><li>getProviders() que retorna un vector de cadenas con los nombres de los proveedores</li></ul><div class="custom-container info"><p class="custom-container-title">Archivo java.security</p><p>%JAVA_HOME%/conf/security/java.security es el archivo que contiene la informaci\xF3n de la configuraci\xF3n de seguridad que utilizan las clases de la JCA.</p><p>Ah\xED est\xE1n declarados todos los proveedores y algoritmos que est\xE1n disponibles, as\xED como el orden en el que las clases los buscar\xE1n.</p></div><p>Para entender como funcionan los proveedores daremos un ejemplo. Supongamos que un programa necesita una implementaci\xF3n del algoritmo MD5. Para obtenerla el programador necesita crear una instancia del mismo y lo har\xE1 escribiendo la siguiente l\xEDnea de c\xF3digo:</p><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#9C3EDA;">MessageDigest</span><span style="color:#90A4AE;"> m </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> MessageDigest</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getInstance</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">MD5</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Internamente, el m\xE9todo getInstance() solicita a la clase java.security.Security que le proporcione el objeto solicitado. Como no se ha especificado proveedor la clase Security consulta a todos los proveedores disponibles, solicitando una implementaci\xF3n del algoritmo &quot;MD5&quot;, hasta que encuentra una o se queda sin proveedores. La consulta se realiza seg\xFAn la lista de proveedores del archivo java.security, que por defecto s\xF3lo contiene la entrada:</p><p>Security.provider.1=sun.security.provider.Sun</p><h2 id="_6-1-4-engines" tabindex="-1">6.1.4. Engines</h2><p>En el JDK el JCA define las siguientes clases Engine</p><table><thead><tr><th>Clase JCA</th><th>Funci\xF3n</th></tr></thead><tbody><tr><td>java.security.MessageDigest</td><td>Calculo de resumen de mensajes (hash).</td></tr><tr><td>java.security.Signature</td><td>Firma de datos y verificaci\xF3n firmas.</td></tr><tr><td>java.security.KeyPairGenerator</td><td>Generar pares de claves (p\xFAblica y privada) para un algoritmo.</td></tr><tr><td>java.security.KeyFactory</td><td>Convertir claves de formato criptogr\xE1fico, especificaciones de claves y viceversa</td></tr><tr><td>java.security.certificate.CertificateFactory</td><td>Crear certificados de clave p\xFAblica y listas de revocaci\xF3n(CRLs).</td></tr><tr><td>java.security.KeyStore</td><td>Crear y gestionar un almac\xE9n de claves (keystore).</td></tr><tr><td>java.security.AlgorithmParameters</td><td>Gestionar los par\xE1metros de un algoritmo, incluyendo codificaci\xF3n y descodificaci\xF3n.</td></tr><tr><td>java.security.AlgorithmParameterGenerator</td><td>Generar un conjunto de par\xE1metros para un algoritmo.</td></tr><tr><td>java.security.SecureRandom</td><td>Generar n\xFAmeros aleatorios o pseudo aleatorios.</td></tr></tbody></table><p>Para instanciar una clase motor se debe invocar el m\xE9todo est\xE1tico <em>getInstance()</em>, si se le pasa un nombre de algoritmo se intentar\xE1 obtener una implementaci\xF3n de alg\xFAn proveedor.</p><h3 id="_6-1-5-algoritmos" tabindex="-1">6.1.5. Algoritmos</h3><p>Al igual que pasa con las herramientas de l\xEDnea de comandos, debemos saber qu\xE9 algoritmos est\xE1n disponibles para su uso por las aplicaciones en nuestra m\xE1quina virtual.</p><p>El siguiente programa nos permite saber que proveedores y algoritmos tenemos instalados en nuestro sistema.</p><p>Adem\xE1s, si lo invocamos con la opci\xF3n -l nos dir\xE1 que algoritmos implementan (leyendo las propiedades del proveedor)</p><p>Toda la informaci\xF3n mostrada se extrae del archivo <em>java.security</em></p><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#9C3EDA;">class</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">InfoProveedoresJCA</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">static</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">main</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">String</span><span style="color:#39ADB5;">[]</span><span style="color:#90A4AE;"> args</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#9C3EDA;">boolean</span><span style="color:#90A4AE;"> listarProps </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">false;</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;font-style:italic;">if</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">args</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">length </span><span style="color:#39ADB5;">&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">0</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&amp;&amp;</span><span style="color:#90A4AE;"> args</span><span style="color:#39ADB5;">[</span><span style="color:#F76D47;">0</span><span style="color:#39ADB5;">].</span><span style="color:#6182B8;">equals</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">-l</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">))</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">            listarProps </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">true;</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">        System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">------------------------------------</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">        System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Proveedores instalados en su sistema</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">        System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">------------------------------------</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#9C3EDA;">int</span><span style="color:#90A4AE;"> i </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">0</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;font-style:italic;">for</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">Provider</span><span style="color:#90A4AE;"> proveedor</span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#90A4AE;"> Security</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProviders</span><span style="color:#39ADB5;">())</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">N\xFAm. proveedor : </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">i </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">));</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Nombre         : </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> proveedor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getName</span><span style="color:#39ADB5;">());</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Versi\xF3n        : </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> proveedor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getVersion</span><span style="color:#39ADB5;">());</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Informaci\xF3n    :</span><span style="color:#90A4AE;">\\n</span><span style="color:#91B859;">  </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> proveedor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getInfo</span><span style="color:#39ADB5;">());</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37);function j(C,S){const t=l("DownloadPDF-component"),p=l("DocumentCover-component"),n=l("router-link"),c=l("ExternalLinkIcon");return d(),y("div",null,[a(t),a(p,{titulo:"6.1 Seguridad"}),u,s("nav",m,[s("ul",null,[s("li",null,[a(n,{to:"#_6-1-1-seguridad-digital"},{default:o(()=>[v]),_:1})]),s("li",null,[a(n,{to:"#_6-1-2-seguridad-en-java"},{default:o(()=>[g]),_:1}),s("ul",null,[s("li",null,[a(n,{to:"#jca-engines-algoritmos-y-proveedores"},{default:o(()=>[B]),_:1})])])]),s("li",null,[a(n,{to:"#_6-1-3-proveedores"},{default:o(()=>[D]),_:1})]),s("li",null,[a(n,{to:"#_6-1-4-engines"},{default:o(()=>[E]),_:1}),s("ul",null,[s("li",null,[a(n,{to:"#_6-1-5-algoritmos"},{default:o(()=>[b]),_:1})])])])])]),f,s("p",null,[s("a",q,[h,a(c)])]),_])}const P=i(A,[["render",j],["__file","security.html.vue"]]);export{P as default};
