import{_ as i,r as l,o as y,c as A,d as n,a as s,w as o,b as a,f as t}from"./app-bb5aee2c.js";const d={},u=s("h1",{id:"_6-1-security",tabindex:"-1"},"6.1 Security",-1),B={class:"table-of-contents"},h=t('<h2 id="_6-1-1-digital-security" tabindex="-1">6.1.1. Digital security</h2><p>Fundamental aspects of security in digital communications are:</p><ul><li><strong>Integrity</strong>: It allows to ensure that the data received by a receiver are identical to those sent by the sender. That is, it has not been modified at any intermediate point in <strong>the channel, which as we know, is a shared and therefore, insecure channel</strong>. Modifications can be caused by failures in transmission through the channel or by an intentional action of a third party.</li><li><strong>Confidentiality</strong>: It ensures that the transmitted data is intelligible only to the recipient of the message. Due to the characteristics of the medium, we cannot prevent the message from reaching other recipients, but what we can prevent is that they can see the original content of the message. This is achieved by encrypting the message.</li><li><strong>Authentication</strong>: It allows to ensure to the receiver of a message that the sender of the message is who he says he is and not any other. This is achieved with certificates and digital signature.</li><li><strong>Non-repudiation</strong>: It is a consequence of the previous characteristic, since a receiver can demonstrate that the message was sent by a sender unequivocally.</li></ul><h2 id="_6-1-2-seguridad-en-java" tabindex="-1">6.1.2. Seguridad en Java</h2><h2 id="_6-1-2-security-in-java" tabindex="-1">6.1.2. Security in Java</h2>',5),m={href:"https://docs.oracle.com/en/java/javase/11/security/java-cryptography-architecture-jca-reference-guide.html",target:"_blank",rel:"noopener noreferrer"},D=t(`<p>From the point of view of security, the set of security classes distributed with the Java 2 SDK can be divided into two subsets:</p><ul><li>Classes related to access control and permission management.</li><li>Classes related to Cryptography.</li></ul><p>Java includes APIs for accessing general-purpose cryptographic functions, known as the <strong>Java Cryptography Architecture (JCA)</strong> and the <strong>Java Cryptography Extension (JCE)</strong>.</p><p>The JCA is made up of the basic classes related to cryptography distributed with the JDK and the support for encryption is provided by the JCE extension package.</p><p>Java also includes a set of packages for secure Internet communication, known as the <strong>Java Secure Socket Extension (JSSE)</strong>. It implements a Java version of the SSL and TLS protocols, and also includes features such as data encryption, server authentication, message integrity, and client authentication.</p><p>Finally, Java includes an interface that allows Java applications to access authentication and access control services, the <strong>Java Authentication and Authorization Service (JAAS)</strong>. It can be used for two purposes: user authentication to know who is running Java code; and user authorization to ensure that whoever runs it has the necessary permissions to do so.</p><h3 id="jca-engines-algorithms-and-providers" tabindex="-1">JCA: Engines, algorithms and providers</h3><p>Java has a Provider Architecture, which allows multiple implementations of cryptographic algorithms to coexist (i.e. multiple implementations of the JCE). The Java 2 platform substantially extends the JCA, among other things the certificate management infrastructure has been improved to support X.509 V3 certificates.</p><p>To understand how the JCA works we have to define some basic terms:</p><h4 id="engine" tabindex="-1">Engine</h4><p>In the context of the JCA we use the term engine to refer to an abstract representation of a cryptographic service that does not have a concrete implementation. A cryptographic service is always associated with an algorithm or type of algorithm and can have any of the following functions:</p><ul><li>Provide cryptographic operations (such as those used in signing and digesting messages)</li><li>Generate or provide the cryptographic material (keys or parameters) necessary to perform the operations.</li><li>Generate objects (key stores or certificates) that group cryptographic keys in a secure manner.</li></ul><h4 id="algorithm" tabindex="-1">Algorithm</h4><p>An algorithm is an implementation of an engine. For example, the MD5 algorithm is an implementation of the message digest engine. The internal implementation may vary depending on the code provided by the MD5 class.</p><h4 id="provider" tabindex="-1">Provider</h4><p>A provider is responsible for providing the implementation of one or more algorithms to the programmer (i.e. giving him access to a specific internal implementation of the algorithms).</p><h2 id="_6-1-3-providers" tabindex="-1">6.1.3. Providers</h2><p>The JCA defines the concept of provider through the Provider class of the java.security package. It is an abstract class that must be redefined by specific provider classes.</p><p>The constructor of a provider class adjusts the values of several properties that the Java security API needs to locate the algorithms or other facilities implemented by the provider.</p><p>The Provider class has methods to access the name of the provider, the version number and other information about the implementations of the algorithms for key generation, conversion and management and the generation of signatures and digests.</p><p>If a programmer wants to know the available providers, he can use the methods</p><ul><li>getProvider(&quot;name&quot;) to know if a specific provider is installed</li><li>getProviders() that returns a vector of strings with the names of the providers</li></ul><div class="custom-container info"><p class="custom-container-title">java.security file</p><p>%JAVA_HOME%/conf/security/java.security is the file that contains the security configuration information used by the JCA classes.</p><p>All the providers and algorithms that are available are declared there, as well as the order in which the classes will look for them.</p></div><p>To understand how providers work we will give an example. Suppose a program needs an implementation of the MD5 algorithm. To obtain it the programmer needs to create an instance of it and will do so by writing the following line of code:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#9C3EDA;">MessageDigest</span><span style="color:#90A4AE;"> m </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> MessageDigest</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getInstance</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">MD5</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Internally, the getInstance() method requests the java.security.Security class to provide it with the requested object. Since no provider has been specified, the Security class queries all the available providers, requesting an implementation of the &quot;MD5&quot; algorithm, until it finds one or runs out of providers. The query is made according to the list of providers in the java.security file, which by default only contains the entry:</p><p>Security.provider.1=sun.security.provider.Sun</p><h3 id="_6-1-4-engines" tabindex="-1">6.1.4. Engines</h3><p>In the JDK the JCA defines the following Engine classes</p><table><thead><tr><th>JCA Class</th><th>Function</th></tr></thead><tbody><tr><td>java.security.MessageDigest</td><td>Calculation of message summary (hash).</td></tr><tr><td>java.security.Signature</td><td>Data signing and signature verification.</td></tr><tr><td>java.security.KeyPairGenerator</td><td>Generate key pairs (public and private) for an algorithm.</td></tr><tr><td>java.security.KeyFactory</td><td>Convert cryptographic key formats, key specifications and vice versa</td></tr><tr><td>java.security.certificate.CertificateFactory</td><td>Create public key certificates and revocation lists (CRLs).</td></tr><tr><td>java.security.KeyStore</td><td>Create and manage a key store (keystore).</td></tr><tr><td>java.security.AlgorithmParameters</td><td>Manage the parameters of an algorithm, including encoding and decoding.</td></tr><tr><td>java.security.AlgorithmParameterGenerator</td><td>Generate a set of parameters for an algorithm.</td></tr><tr><td>java.security.SecureRandom</td><td>Generate random or pseudo-random numbers.</td></tr></tbody></table><p>To instantiate an engine class you must invoke the static method <em>getInstance()</em>, if you pass an algorithm name it will try to obtain an implementation of some provider.</p><h3 id="_6-1-5-algorithms" tabindex="-1">6.1.5 Algorithms</h3><p>As with command line tools, we need to know which algorithms are available for use by applications on our virtual machine.</p><p>The following program allows us to know which providers and algorithms we have installed on our system.</p><p>In addition, if we invoke it with the -l option it will tell us which algorithms they implement (reading the provider&#39;s properties)</p><p>All the information shown is extracted from the <em>java.security</em> file</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#9C3EDA;">class</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">U6_S1_1_InfoProveedoresJCA</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The following program allows us to check the properties of algorithms available in our system.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki material-theme-lighter" style="background-color:#FAFAFA;" tabindex="0"><code><span class="line"><span style="color:#9C3EDA;">class</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">U6_S1_2_ProbarAlgoritmosJCA</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">static</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">main</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">String</span><span style="color:#39ADB5;">[]</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">args</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;font-style:italic;">if</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">args</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">length </span><span style="color:#39ADB5;">!=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Uso: java ProbarAlgoritmosJCA &lt;algoritmo&gt;</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">exit</span><span style="color:#39ADB5;">(</span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;font-style:italic;">try</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#9C3EDA;">MessageDigest</span><span style="color:#90A4AE;"> md </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> MessageDigest</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getInstance</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">args</span><span style="color:#39ADB5;">[</span><span style="color:#F76D47;">0</span><span style="color:#39ADB5;">]);</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Algoritmo: </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> md</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getAlgorithm</span><span style="color:#39ADB5;">());</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Proveedor: </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> md</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProvider</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">getName</span><span style="color:#39ADB5;">());</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Info     : </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> md</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">toString</span><span style="color:#39ADB5;">());</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Tamaño   : </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> md</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getDigestLength</span><span style="color:#39ADB5;">());</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Bloque   : </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> md</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getBlockSize</span><span style="color:#39ADB5;">());</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Entrada  : </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> md</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getInputSize</span><span style="color:#39ADB5;">());</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Salida   : </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> md</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getOutputSize</span><span style="color:#39ADB5;">());</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Implement: </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> md</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getClass</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">getName</span><span style="color:#39ADB5;">());</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">catch</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">NoSuchAlgorithmException</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">e</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">            System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Algoritmo no disponible</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">        </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#39ADB5;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39);function v(g,E){const p=l("DownloadPDF-component"),r=l("DocumentCover-component"),e=l("router-link"),c=l("ExternalLinkIcon");return y(),A("div",null,[n(p),n(r,{titulo:"6.1 Security"}),u,s("nav",B,[s("ul",null,[s("li",null,[n(e,{to:"#_6-1-1-digital-security"},{default:o(()=>[a("6.1.1. Digital security")]),_:1})]),s("li",null,[n(e,{to:"#_6-1-2-seguridad-en-java"},{default:o(()=>[a("6.1.2. Seguridad en Java")]),_:1})]),s("li",null,[n(e,{to:"#_6-1-2-security-in-java"},{default:o(()=>[a("6.1.2. Security in Java")]),_:1}),s("ul",null,[s("li",null,[n(e,{to:"#jca-engines-algorithms-and-providers"},{default:o(()=>[a("JCA: Engines, algorithms and providers")]),_:1})])])]),s("li",null,[n(e,{to:"#_6-1-3-providers"},{default:o(()=>[a("6.1.3. Providers")]),_:1}),s("ul",null,[s("li",null,[n(e,{to:"#_6-1-4-engines"},{default:o(()=>[a("6.1.4. Engines")]),_:1})]),s("li",null,[n(e,{to:"#_6-1-5-algorithms"},{default:o(()=>[a("6.1.5 Algorithms")]),_:1})])])])])]),h,s("p",null,[s("a",m,[a("oracle Security Developers Guide"),n(c)])]),D])}const b=i(d,[["render",v],["__file","security.html.vue"]]);export{b as default};
