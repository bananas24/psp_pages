import{_ as l,a as t}from"./Java_Stream_Readers_BufferedReaders.170e97e8.js";import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as u,c as p,d as a,a as e,w as r,f as m,r as i,b as s}from"./app.b80cbaa0.js";const v={},b=e("h1",{id:"_2-3-gestion-de-la-e-s-de-un-proceso",tabindex:"-1"},"2.3 Gesti\xF3n de la E-S de un proceso",-1),g={class:"table-of-contents"},h=s("2.3.1 Redirecci\xF3n de la E/S est\xE1ndar"),f=s("getInputStream()"),q=s("getErrorStream()"),j=s("getOutputStream()"),S=s("Heredar la E/S del proceso padre"),P=s("Pipelines"),_=s("2.3.2 Redirecci\xF3n de las Entradas y Salidas Est\xE1ndar"),E=s("2.3.3 Informaci\xF3n de los procesos en Java"),y=m(`<h2 id="_2-3-1-redireccion-de-la-e-s-estandar" tabindex="-1">2.3.1 Redirecci\xF3n de la E/S est\xE1ndar</h2><p>Ya hemos comentado que un subproceso no tiene terminal o consola en el que poder mostrar su informaci\xF3n. Toda la E/S por defecto ((stdin - teclado -, stdout y stderr - pantalla- ) por defecto se redirige al proceso padre. Es el proceso padre el que puede usar estos streams para recoger o enviar informaci\xF3n al proceso hijo.</p><p>::: danger C\xF3digo del proceso hijo En ning\xFAn momento, cuando estamos programando un proceso, debemos pensar si va a ser lanzado como padre o como hijo.</p><p>Es m\xE1s, todos los programas que hacemos son lanzados como hijos por el IDE (Netbeans) y eso no hace que cambiemos nuestra forma de programarlos.</p><p>Un proceso que vayamos a lanzar como hijo deber\xEDa funcionar perfectamente como proceso independiente y puede ser ejecutado directamente sin tener que hacerle ning\xFAn tipo de cambio. :::</p><p>Este intercambio de informaci\xF3n nos da mucha flexibilidad y proporciona una forma de control y comunicaci\xF3n sobre el proceso hijo.</p><p>::: info La E/S en el SO y las tuber\xEDas La E/S en sistemas Linux, como casi todo lo dem\xE1s, es tratada como un fichero.</p><p>Dentro de cada proceso, cuando se accede a un fichero, se le asigna un identificador \xFAnico. Hay tres identificadores que se crean y se abren con la creaci\xF3n del proceso, y que adem\xE1s siempre tienen el mismo identificador:</p><ul><li>0: stdin</li><li>1: stdout</li><li>2: stderr</li></ul><p>Estos <em>descriptores de fichero</em> permiten gestionar sus streams asociados de diferentes formas. Podemos redirigir la salida de un proceso (stdout) a un archivo y seguir viendo los mensajes de error (stderr) en la consola, o bien podemos hacer que la entrada de datos a un programa se lea desde un fichero en vez del teclado, lo que permitir\xEDa automatizar pruebas, por ejemplo.</p><p>Estos son algunos ejemplos de c\xF3mo se hacen estas redirecciones a nivel de So:</p><div class="language-bash ext-sh"><pre class="language-bash"><code># Redirecciona la salida de ls a un archivo
ls &gt; capture.txt  
# Redirecciona la salida de ls a la entrada de cat (doble redirecci\xF3n)
# Esto es una tuber\xEDa
ls | cat  
# Cambia la salida de program.sh a capture.txt y los errores a error.txt
./program.sh 1&gt; capture.txt 2&gt; error.txt 
# Redirige la salida y los errores de program.sh al mismo archivo, capture.txt
./program.sh &gt; capture.txt 2&gt;&amp;1
# Cambia la entrada de program.sh al contenido de dummy.txt
./program.sh &lt; dummy.txt
# Redirige la salida del primer comando y la pone como entrada del segundo
# Esto es una tuber\xEDa
cat dummy.txt | ./program.sh
</code></pre></div><p><a href="https://www.digitalocean.com/community/tutorials/an-introduction-to-linux-i-o-redirection" target="_blank" rel="noopener noreferrer">Redirecciones E/S en Linux</a> :::</p><p>En la relaci\xF3n padre-hijo que se crea entre procesos los descriptores tambi\xE9n se redirigen desde ek hijo hacia el padre, usando 3 tuber\xEDas (pipes), una por cada stream de E/S por defecto. Esas tuber\xEDas pueden usarse de forma similar a c\xF3mo se hace en los sistemas Linux.</p><p><img src="`+l+`" alt="alt_text"></p><h3 id="getinputstream" tabindex="-1">getInputStream()</h3><p>No s\xF3lo es importante recoger el valor de retorno de un comando, sino que muchas veces nos va a ser de mucha utilidad el poder obtener la informaci\xF3n que el proceso genera por la salida est\xE1ndar o por la salida de error.</p><p>Para esto vamos a utilizar el m\xE9todo <code>public abstract InputStream getInputStream()</code> de la clase <code>Process</code> para leer el stream de salida del proceso, es decir, para leer lo que el comando ejecutado (proceso hijo) ha enviado a la consola.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>Process p = pbuilder.start();
BufferedReader processOutput = 
    new BufferedReader(new InputStreamReader(p.getInputStream()));

String linea;    
while ((linea = processOutput.readLine()) != null) {
    System.out.println(&quot;&gt; &quot; + linea);        
}            
processOutput.close();    
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+t+`" alt="alt_text"></p><p>::: warning Charsets y encodings Desde el inicio de la inform\xE1tica los juegos de caracteres y las codificaciones han supuesto un aut\xE9ntico quebradero de cabeza para los programadores, especialmente cuando trabajamos con juegos de caracteres no anglosajones. Pues bien, la consola de Windows no iba a ser una excepci\xF3n.</p><p>La consola de windows, conocida como <em>&quot;DOS prompt&quot;</em> o <em>cmd</em>, es la forma de ejecutar programas y comandos DOS en Windows, por lo tanto esos programas mantienen la codificaci\xF3n de DOS. A Microsoft no le gustan hacer cambios que pierdan la compatibilidad hacia atr\xE1s, es decir, que sean compatibles con versiones anteriores, as\xED que cuando hagamos una aplicaci\xF3n que trabaje con la consola debemos tener en cuenta esta circunstancia.</p><p>En Wikipedia comentan que la codificaci\xF3n <strong>CP850</strong> te\xF3ricamente ha sido ampliamente reemplazada por <strong>Windows-1252</strong> y posteriormente Unicode, pero a\xFAn as\xED <strong>CP850</strong> sigue presente en la consola de comandos.</p><p>Por lo tanto, si quetemos mostrar informaci\xF3n de la consola en nuestras aplicaciones, debemos trabajar con el charset adecuado, a saber, CP-850.</p><p>Para usar un encoding concreto, la clase InputStreamReader, que pasa de gestionar bytes a caracteres, tiene un constructor que permite especificar el tipo de codificaci\xF3n usado en el stream de bytes que recibimos, as\xED que que debemos usar este constructor cuando trabajemos con aplicaciones de consola.</p><div class="language-java ext-java"><pre class="language-java"><code>new InputStreamReader(p.getInputStream(), &quot;CP850&quot;);
</code></pre></div><blockquote><p>Adem\xE1s, para usar una codificaci\xF3n universal, podemos forzar que Netbeans, o mejor dicho la m\xE1quina virtual que usa Netbeans, utilice <strong>por defecto el charset <code>UTF-8</code></strong>. Para hacerlo, debemos modificar el archivo de configuraci\xF3n de Netbeans <code>C:/Program Files/Netbeeans-xx.x/netbeans/etc/netbeans.conf</code>, y modificar la directiva <code>netbeans_default_option</code> a\xF1adiendo al final <strong>-J-Dfile.encoding=UTF-8</strong>.</p></blockquote><p>:::</p><h3 id="geterrorstream" tabindex="-1">getErrorStream()</h3><p>Curiosamente, o no tanto, adem\xE1s de la salida est\xE1ndar, tambi\xE9n podemos obtener la salida de error (stderr) que genera el proceso hijo para procesarla desde el padre.</p><p>Si la salida de error ha sido previamente redirigida usando el m\xE9todo <code>ProcessBuilder.redirectErrorStream(true)</code> entonces la salida de error y la salida est\xE1ndar llegan juntas con getInputStream() y no es necesario hacer un tratamiento adicional.</p><p>Si por el contrario queremos hacer un tratamiento diferenciado de los dos tipos de salid, podemos usar un schema similar al usado anteriormente, con la salvedad de que ahora en vez du llamar a <code>getInputStream()</code> lo hacemos con <code>getErrorStream()</code>.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>Process p = pbuilder.start();
BufferedReader processError = 
    new BufferedReader(new InputStreamReader(p.getErrorStream()));
// En este ejemplo, por ver una forma diferente de recoger la informaci\xF3n,
// en vez de leer todas las l\xEDneas que llegan, recogemos la primera l\xEDnea
// y suponemos que nos han enviado un entero.    
int value = Integer.parseInt(processError.readLine());
processError.close();
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: info Patr\xF3n de dise\xF1o Decorator o Wrapper En ambos tipos de streams de entrada (input y error) estamos recogiendo la informaci\xF3n de un objeto de tipo BufferedReader. Podr\xEDamos usar directamente el InputStream que nos devuelven los m\xE9todos de Process, pero tendr\xEDamos que encargarnos nosotros de convertir los bytes a caracteres, de leer el stream caracter a caracter y de controlar el flujo al no disponer de un buffer.</p><p>Todo esto nos lo podemos ahorrar usando clases que gestionan el flujo a un nivel de concreci\xF3n m\xE1s alto, usando sin llegar a ser conscientes otro patr\xF3n de dise\xF1o bastante com\xFAn, <strong>Patr\xF3n de dise\xF1o Decorator</strong> tambi\xE9n llamado <strong>wrapper o envoltorio</strong>.</p><blockquote><p>Decorator es un patr\xF3n de dise\xF1o estructural que te permite a\xF1adir funcionalidades a objetos colocando estos objetos dentro de objetos encapsuladores especiales que contienen estas funcionalidades.</p></blockquote><p><a href="https://refactoring.guru/design-patterns/java" target="_blank" rel="noopener noreferrer">Refactoring.Guru patrones de dise\xF1o</a> :::</p><p>Vamos a ver un ejemplo completo de uso de todas las funcionalidad anteriores</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>import java.io.*;
public class Ejercicio2 {
    public static void main(String[] args) {
        String comando = &quot;notepad&quot;;
        ProcessBuilder pbuilder = new ProcessBuilder (comando);
        Process p = null;
        try {
            p = pbuilder.start();
            // 1- Procedemos a leer lo que devuelve el proceso hijo
            InputStream is = p.getInputStream();
            // 2- Lo convertimos en un InputStreamReader
            // De esta forma podemos leer caracteres en vez de bytes
            // El InputStreamReader nos permite gestionar diferentes codificaciones
            InputStreamReader isr = new InputStreamReader(is);
            // 2- Para mejorar el rendimiento hacemos un wrapper sobre un BufferedReader
            // De esta forma podemos leer enteros, cadenas o incluso l\xEDneas.
            BufferedReader br = new BufferedReader(isr);

            // A Continuaci\xF3n leemos todo como una cadena, l\xEDnea a l\xEDnea
            String linea;
            while ((linea = br.readLine()) != null) 
                System.out.println(linea);
        } catch (Exception e) {
            System.out.println(&quot;Error en: &quot;+comando);
            e.printStackTrace();
        } finally {
            // Para finalizar, cerramos los recursos abiertos
            br.close();
            isr.close();
            is.close();
        }    
    }
}
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getoutputstream" tabindex="-1">getOutputStream()</h3><p>No s\xF3lo podemos recoger la informaci\xF3n que env\xEDa el proceso hijo sino que, adem\xE1s, tambi\xE9n podemos enviar informaci\xF3n desde el proceso padre al proceso hijo, usando el \xFAltimo de los tres streams que nos queda, el <code>stdin</code>.</p><p>Igual que con las entradas que llegan desde el proceso hijo, podemos enviar la informaci\xF3n usando directamente el OutputStream del proceso, pero lo haremos de nuevo con un Decorator.</p><p>En este caso, el <em>wrapper</em> de mayor nivel nivel para usar un OutputStream es la clase PrintWriter que nos ofrece m\xE9todos similares a los de <code>System.out.printxxxxx</code> para gestionar el flujo de comunicaci\xF3n con el proceso hijo.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>PrintWriter toProcess = new PrintWriter(
    new BufferedWriter(
        new OutputStreamWriter(
            p.getOutputStream(), &quot;UTF-8&quot;)), true);
toProcess.println(&quot;sent to child&quot;);
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="heredar-la-e-s-del-proceso-padre" tabindex="-1">Heredar la E/S del proceso padre</h3><p>Con el m\xE9todo <code>inheritIO()</code> podemos redireccionar todos los flujos de E/S del proceso hijo a la E/S est\xE1ndar del proceso padre.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>ProcessBuilder processBuilder = new ProcessBuilder(&quot;/bin/sh&quot;, &quot;-c&quot;, &quot;echo hello&quot;);

processBuilder.inheritIO();
Process process = processBuilder.start();

int exitCode = process.waitFor();
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>En el ejemplo anterior, tras invocar al m\xE9todo inheritIO() podemos ver la salida del comando ejecutado en la consola del proceso padre dentro del IDE Netbeans.</p><h3 id="pipelines" tabindex="-1">Pipelines</h3><p>Java 9 introdujo el concepto de <code>pipelines</code> en el API de ProcessBuilder:</p><div class="language-java ext-java"><pre class="language-java"><code>public static List&lt;Process&gt; startPipeline\u200B(List&lt;ProcessBuilder&gt; builders)
</code></pre></div><p>El m\xE9todo <code>startPipeline</code> usa un lista de objetos ProcessBuilder. Este m\xE9todo est\xE1tico se encarga de lanzar un proceso para cada uno de los ProcessBuilder recibidos. Y lo que automatiza es la creaci\xF3n de tuber\xEDas encadenadas (pipeline) haciendo que la salida de cada proceso est\xE9 enlazada con la entrada del siguiente..</p><p>Por ejemplo, si queremos realizar este tipo de operaciones tan comunes en shellscript:</p><blockquote><p>find . -name *.java -type f | wc -l</p></blockquote><p>Lo que haremos ser\xE1 crear un ProcessBuilder para cada uno de los comandos, y pas\xE1rselos todos al m\xE9todo startPipeline para que los ejecute y los encadene.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>List builders = Arrays.asList(
    new ProcessBuilder(&quot;find&quot;, &quot;src&quot;, &quot;-name&quot;, &quot;*.java&quot;, &quot;-type&quot;, &quot;f&quot;), 
    new ProcessBuilder(&quot;wc&quot;, &quot;-l&quot;));

List processes = ProcessBuilder.startPipeline(builders);
Process last = processes.get(processes.size() - 1);

// Desde el proceso padre podemos recoger la salida del \xFAltimo proceso para 
// el resultado final del pipeline
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>El ejemplo anterior busca todos los archivos .java dentro del directorio src, encadena la salida hacia el comando wc para contar cuantos ficheros ha encontrado, siendo este el resultado final del pipeline.</p><h2 id="_2-3-2-redireccion-de-las-entradas-y-salidas-estandar" tabindex="-1">2.3.2 Redirecci\xF3n de las Entradas y Salidas Est\xE1ndar</h2><p>En un sistema real, probablemente necesitemos guardar los resultados de un proceso en un archivo de log o de errores para su posterior an\xE1lisis. Afortunadamente lo podemos hacer sin modificar el c\xF3digo de nuestras aplicaciones usando los m\xE9todos que proporciona el API de ProcessBuilder para hacer exactamente eso.</p><p>Por defecto, tal y como ya hemos visto, los procesos hijos reciben la entrada a trav\xE9s de una tuber\xEDa a la que podemos acceder usando el OutputStream que nos devuelve <code>Process.getOutputStream()</code>.</p><p>Sin embargo, tal y como veremos a continuaci\xF3n, esa entrada est\xE1ndar se puede cambiar y redirigirse a otros destinos como un fichero usando el m\xE9todo <code>redirectOutput(File)</code>. Si modificamos la salida est\xE1ndar, el m\xE9todo getOutputStream() devolver\xE1 <em>ProcessBuilder.NullOutputStream</em>.</p><p>::: info Redirecci\xF3n antes de ejecutar Es importante fijarse en qu\xE9 momento se realiza cada acci\xF3n sobre un proceso.</p><p>Antes hemos visto que los flujos de E/S se consultan y gestionan una vez que el proceso est\xE1 en ejecuci\xF3n, por lo tanto los m\xE9otodos que nos dan acceso a esos <em>streams</em> son m\xE9todos de la clase <code>Process</code>.</p><p>Si lo que queremos es redirigir la E/S, como vamos a ver a continuaci\xF3n, lo haremos mientras preparamos el proceso para ser ejecutado. De forma que cuando se lance sus streams de E/S se modifiquen. Por eso en esta ocasi\xF3n los m\xE9todos que nos permiten redireccionar la E/S de los procesos son m\xE9todos de la clase <code>ProcessBuilder</code>. ::::</p><p>Vamos a ver con un ejemplo c\xF3mo hacer un programa que muestre la versi\xF3n de Java. Ahora bien, en esta ocasi\xF3n la salida se va a guardar en un archivo de log en vez de enviarla al padre por la tuber\xEDa de salida est\xE1ndar:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>ProcessBuilder processBuilder = new ProcessBuilder(&quot;java&quot;, &quot;-version&quot;);

// La salida de error se enviar\xE1 al mismo sitio que la est\xE1ndar
processBuilder.redirectErrorStream(true);

File log = folder.newFile(&quot;java-version.log&quot;);
processBuilder.redirectOutput(log);

Process process = processBuilder.start();
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>En el ejemplo anterior podemos observar como se crea un archivo temporal llamado <em>java-version.log</em> e indicamos a ProcessBuilder que la salida la redirija a este archivo.</p><p>Es lo mismo que si llam\xE1semos a nuestra aplicacion usando el operador de redirecci\xF3n de salida:</p><blockquote><p>java ejemplo-java-version &gt; java-version.log</p></blockquote><p>Ahora vamos a fijarnos en una variaci\xF3n del ejemplo anterior. Lo que queremos hacer ahora es a\xF1adir (<code>append to</code>) informaci\xF3n al archivo de log file en vez de sobreescribir el archivo cada vez que se ejecuta el proceso. Con sobreeescribir nos referimos a crear el archivo vac\xEDo si no existe, o bien borrar el contenido del archivo si \xE9ste ya existe.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>File log = tempFolder.newFile(&quot;java-version-append.log&quot;);
processBuilder.redirectErrorStream(true);
processBuilder.redirectOutput(Redirect.appendTo(log));
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Otra vez m\xE1s, es importante hacer notar la llamada a <code>redirectErrorStream(true)</code>. En el caso de que se produzca alg\xFAn error, se mezclar\xE1n con los mensajes de salida en el fichero..</p><p>En el APi de ProcessBuilder encontramos m\xE9todos para redireccionar tambi\xE9n la salida de error est\xE1ndar y la entrada est\xE1ndar de los procesos.</p><ul><li>redirectError(File)</li><li>redirectInput(File)</li></ul><p>Para hacer las redirecciones tambi\xE9n podemos utilizar la clase <code>ProcessBuilder.Redirect</code> como par\xE1metro para los m\xE9todos anteriores, utilizando uno de los siguientes valores</p><table><thead><tr><th>Valor</th><th>Significado</th></tr></thead><tbody><tr><td>Redirect.DISCARD</td><td>La informaci\xF3n se descarta</td></tr><tr><td>Redirect.to(File)</td><td>La informaci\xF3n se guardar\xE1 en el fichero indicado. Si existe, se vac\xEDa.</td></tr><tr><td>Redirect.from(File)</td><td>La informaci\xF3n se leer\xE1 del fichero indicado</td></tr><tr><td>Redirect.appendTo(File)</td><td>La informaci\xF3n se a\xF1adir\xE1 en el fichero indicado. Si existe, no se vac\xEDa</td></tr></tbody></table><h2 id="_2-3-3-informacion-de-los-procesos-en-java" tabindex="-1">2.3.3 Informaci\xF3n de los procesos en Java</h2><p>Una vez que un proceso est\xE1 en ejecuci\xF3n podemos obtener informaci\xF3n acerca de ese proceso usando los m\xE9todos de la clase <code>java.lang.ProcessHandle.Info</code>:</p><ul><li>el comando usado para lanzar el proceso</li><li>Los argumentos/par\xE1metros que recibi\xF3 el proceso</li><li>El instante de tiempo en el que se inici\xF3 el proceso</li><li>El tiempo de CPU que ha usado el proceso y el usuario que lo ha lanzado</li></ul><p>Aqu\xED tenemos un sencillo ejemplo de c\xF3mo hacerlo</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>ProcessHandle processHandle = ProcessHandle.current();
ProcessHandle.Info processInfo = processHandle.info();

System.out.println(&quot;PID: &quot; + processHandle.pid());
System.out.println(&quot;Arguments: &quot; + processInfo.arguments());
System.out.println(&quot;Command: &quot; + processInfo.command());
System.out.println(&quot;Instant: &quot; + processInfo.startInstant());
System.out.println(&quot;Total CPU duration: &quot; + processInfo.totalCpuDuration());
System.out.println(&quot;User: &quot; + processInfo.user());
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>En el ejemplo anterior hemos obtenido la informaci\xF3n del proceso actual (<code>ProcessHandle.current()</code>), as\xED que si estamos en el proceso padre, s\xF3lo podemos mostrar su informaci\xF3n, pero no la de su hijo.</p><p>Tambi\xE9n es posible acceder a la informaci\xF3n de un proceso lanzado (proceso hijo). En este caso necesitamos la instancia de <code>java.lang.Process</code> para llamar a su m\xE9todo <code>toHandle()</code> y obtener la instancia de <code>java.lang.ProcessHandle</code> del proceso hijo..</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>Process process = processBuilder.inheritIO().start();
ProcessHandle childProcessHandle = process.toHandle();
ProcessHandle.Info child processInfo = processHandle.info();
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A partir de ah\xED, el c\xF3digo para acceder a la informaci\xF3n y detalles del proceso hijo es id\xE9ntico al ejemplo anterior.</p>`,85);function x(I,B){const n=i("DownloadPDF-component"),d=i("DocumentCover-component"),o=i("router-link");return u(),p("div",null,[a(n),a(d,{titulo:"2.3 Gesti\xF3n de la E-S de un proceso"}),b,e("nav",g,[e("ul",null,[e("li",null,[a(o,{to:"#_2-3-1-redireccion-de-la-e-s-estandar"},{default:r(()=>[h]),_:1}),e("ul",null,[e("li",null,[a(o,{to:"#getinputstream"},{default:r(()=>[f]),_:1})]),e("li",null,[a(o,{to:"#geterrorstream"},{default:r(()=>[q]),_:1})]),e("li",null,[a(o,{to:"#getoutputstream"},{default:r(()=>[j]),_:1})]),e("li",null,[a(o,{to:"#heredar-la-e-s-del-proceso-padre"},{default:r(()=>[S]),_:1})]),e("li",null,[a(o,{to:"#pipelines"},{default:r(()=>[P]),_:1})])])]),e("li",null,[a(o,{to:"#_2-3-2-redireccion-de-las-entradas-y-salidas-estandar"},{default:r(()=>[_]),_:1})]),e("li",null,[a(o,{to:"#_2-3-3-informacion-de-los-procesos-en-java"},{default:r(()=>[E]),_:1})])])]),y])}const D=c(v,[["render",x],["__file","iostreams.html.vue"]]);export{D as default};
