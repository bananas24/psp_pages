import{_ as l,a as d}from"./Java_Stream_Readers_BufferedReaders.170e97e8.js";import{_ as u}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as p,d as t,a as e,w as s,f as m,r as i,b as r}from"./app.b80cbaa0.js";const v={},h=e("h1",{id:"_2-3-handling-process-streams",tabindex:"-1"},"2.3 Handling Process Streams",-1),g={class:"table-of-contents"},b=r("2.3.1 Redirecting Standard Input and Output"),f=r("getInputStream()"),w=r("getErrorStream()"),q=r("getOutputStream()"),_=r("Inheriting the I/O of the parent process"),I=r("Pipelines"),P=r("2.3.2 Redirecting Standard Input and Output"),S=r("2.3.3 Current Java Process Information"),y=m(`<h2 id="_2-3-1-redirecting-standard-input-and-output" tabindex="-1">2.3.1 Redirecting Standard Input and Output</h2><p>By default, the created subprocess does not have its terminal or console. All its standard I/O (i.e., stdin, stdout, stderr) operations will be sent to the parent process. Thereby the parent process can use these streams to feed input to and get output from the subprocess.</p><p>Consequently, this gives us a huge amount of flexibility as it gives us control over the input/output of our sub-process.</p><p>::: info OS I/O streams and pipes Streams in Linux, like almost everything else, are treated as though they were files.</p><p>Each file associated with a process is allocated a unique number to identify it. These values are always used for stdin, stdout, and stderr:</p><ul><li>0: stdin</li><li>1: stdout</li><li>2: stderr</li></ul><p>So we can manage these three streams in different ways. We can redirect a command\u2019s output (stdout) to a file and still see any error messages (stderr) in the terminal window, or we can get input to a command from another command or file. Let&#39;s look at some examples:</p><div class="language-bash ext-sh"><pre class="language-bash"><code># Redirects ls output to a file
ls &gt; capture.txt  
# Redirects ls output to cat input
ls | cat  
# Redirects program.sh output to capture.txt and its errors to error.txt
./program.sh 1&gt; capture.txt 2&gt; error.txt 
# Redirects program.sh output and its errors to the same file, capture.txt
./program.sh &gt; capture.txt 2&gt;&amp;1
# Redirects program.sh input from dummy.txt contents
./program.sh &lt; dummy.txt
# Redirects output form first command to program.sh input
cat dummy.txt | ./program.sh
</code></pre></div><p><a href="https://www.digitalocean.com/community/tutorials/an-introduction-to-linux-i-o-redirection" target="_blank" rel="noopener noreferrer">Introduction to Linux I/O Redirection</a> :::</p><p>In a parent-child process relationship I/O streams are also redirected from child process to parent, using 3 pipes, one per each standard stream. Those pipes can be used like in a Linux system.</p><p><img src="`+l+`" alt="alt_text"></p><h3 id="getinputstream" tabindex="-1">getInputStream()</h3><p>We can fetch the output generated by a subprocess and consume within the parent process thus allowing share information between the processes</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>Process p = pbuilder.start();
BufferedReader processOutput = 
    new BufferedReader(new InputStreamReader(p.getInputStream()));

String linea;    
while ((linea = processOutput.readLine()) != null) {
    System.out.println(&quot;&gt; &quot; + linea);        
}            
processOutput.close();    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+`" alt="alt_text"></p><p>::: warning Charset and encodings From the time being computer science started we&#39;ve been in trouble with encodings and charsets. And windows console is not an exception.</p><p>Terminal in Windows was also known as &quot;DOS prompt&quot;: so a way to run DOS programs in Windows, so they keep the code page of DOS. Microsoft dislikes non-backward compatible changes, so your DOS program should works also on Windows terminal without problem.</p><p>Wikipedia indicates that <strong>CP850</strong> has theoretically been &quot;largely replaced&quot; by <strong>Windows-1252</strong> and, later, Unicode, but yet it&#39;s here, right in the OS&#39;s terminal.</p><p>Then, if we want to print information from the console in our applications we must deal with the right charset and encoding, that is, CP-850.</p><p>Fortunately, InputStreamReader has a constructor to manage streams with any encoding, so we must use it when working with console commands or applications.</p><div class="language-java ext-java"><pre class="language-java"><code>new InputStreamReader(p.getInputStream(), &quot;CP850&quot;);
</code></pre></div><blockquote><p>We can force Netbeans to use a UTF-8 as default encoding. To do so we must modify its config file <code>C:/Program Files/Netbeeans-xx.x/netbeans/etc/netbeans.conf</code>, changing directive <code>netbeans_default_option</code> and adding <strong>-J-Dfile.encoding=UTF-8</strong> to the end.</p></blockquote><p>:::</p><h3 id="geterrorstream" tabindex="-1">getErrorStream()</h3><p>Interestingly we can also fetch the errors generated from the subprocess and thereon perform some processing.</p><p>if error output has been redirected by calling method <code>ProcessBuilder.redirectErrorStream(true)</code> then, the error stream and the output stream will be shown using the same stream.</p><p>If we want to have it differentiated from the output, then we can use asimilar schema than before</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>Process p = pbuilder.start();
BufferedReader processError = 
    new BufferedReader(new InputStreamReader(p.getErrorStream()));
int value = Integer.parseInt(processError.readLine());
processError.close();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: info Decorator or Wrapper design pattern In both input and error streams we are getting information from a BufferedReader. Although we are not aware of using a design pattern, we are using the *<em>decorator design pattern&quot;</em> or the so called <strong>wrapper</strong>.</p><blockquote><p>Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the required behaviors.</p></blockquote><p><a href="https://refactoring.guru/design-patterns/java" target="_blank" rel="noopener noreferrer">Refactoring.Guru design patterns</a> :::</p><p>Let&#39;s look at a complete example code using all the above operations</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>import java.io.*;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getoutputstream" tabindex="-1">getOutputStream()</h3><p>We can even send input to a subprocess from a parent process</p><p>There are three different ways of sending information to a child process. The first one is based on an OutputStream. Here no wrapper is used and the programmer has to manage all elements of the stream flow. From newline characters and type conversions to force sending information over the stream.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>// Low-level objects. We have to manage all elements of communication
OutputStream toProcess = p.getOutputStream();
toProcess.write((String.valueOf(number1)).getBytes(&quot;UTF-8&quot;));
toProcess.write(&quot;\\n&quot;.getBytes());
toProcess.flush();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The next one is based on a Writer object as a wrapper for the OutputStream, where communication management is easier, but the programmer still has to manage elements as new lines.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>Writer w = new OutputStreamWriter(p.getOutputStream(), &quot;UTF-8&quot;);
w.write(&quot;send to child\\n&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Finally, the top-level wrapper for using the OutputStream is the PrintWriter object, where we can use the wrapper with the same methods as the System.out to handle child communication flow.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>PrintWriter toProcess = new PrintWriter(
    new BufferedWriter(
        new OutputStreamWriter(
            p.getOutputStream(), &quot;UTF-8&quot;)), true);
toProcess.println(&quot;sent to child&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="inheriting-the-i-o-of-the-parent-process" tabindex="-1">Inheriting the I/O of the parent process</h3><p>With the inheritIO() method We can redirect the sub-process I/O to the standard I/O of the current process (parent process)</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>ProcessBuilder processBuilder = new ProcessBuilder(&quot;/bin/sh&quot;, &quot;-c&quot;, &quot;echo hello&quot;);

processBuilder.inheritIO();
Process process = processBuilder.start();

int exitCode = process.waitFor();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the above example, by using the inheritIO() method we see the output of a simple command in the console in our IDE.</p><h3 id="pipelines" tabindex="-1">Pipelines</h3><p>Java 9 introduced the concept of pipelines to the ProcessBuilder API:</p><div class="language-java ext-java"><pre class="language-java"><code>public static List&lt;Process&gt; startPipeline\u200B(List&lt;ProcessBuilder&gt; builders)
</code></pre></div><p>Using the startPipeline method we can pass a list of ProcessBuilder objects. This static method will then start a Process for each ProcessBuilder. Thus, creating a pipeline of processes which are linked by their standard output and standard input streams.</p><p>For example, if we want to run something like this:</p><blockquote><p>find . -name *.java -type f | wc -l</p></blockquote><p>What we&#39;d do is create a process builder for each isolated command and compose them into a pipeline</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>List builders = Arrays.asList(
    new ProcessBuilder(&quot;find&quot;, &quot;src&quot;, &quot;-name&quot;, &quot;*.java&quot;, &quot;-type&quot;, &quot;f&quot;), 
    new ProcessBuilder(&quot;wc&quot;, &quot;-l&quot;));

List processes = ProcessBuilder.startPipeline(builders);
Process last = processes.get(processes.size() - 1);

// We can get lats process output to get the final results
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the example, we&#39;re searching for all the java files inside the src directory and piping the results into another process to count them.</p><h2 id="_2-3-2-redirecting-standard-input-and-output" tabindex="-1">2.3.2 Redirecting Standard Input and Output</h2><p>In the real world, we will probably want to capture the results of our running processes inside a log file for further analysis. Luckily the ProcessBuilder API has built-in support for exactly this.</p><p>By default, our process reads input from a pipe. We can access this pipe via the output stream returned by Process.getOutputStream().</p><p>However, as we&#39;ll see shortly, the standard output may be redirected to another source such as a file using the method <code>redirectOutput(File)</code>. In this case, getOutputStream() will return a ProcessBuilder.NullOutputStream.</p><p>Let&#39;s prepare an example to print out the version of Java. But this time let&#39;s redirect the output to a log file instead of the standard output pipe:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>ProcessBuilder processBuilder = new ProcessBuilder(&quot;java&quot;, &quot;-version&quot;);

processBuilder.redirectErrorStream(true);
File log = folder.newFile(&quot;java-version.log&quot;);
processBuilder.redirectOutput(log);

Process process = processBuilder.start();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the above example, we create a new temporary file called log and tell our ProcessBuilder to redirect output to this file destination.</p><p>Now let&#39;s take a look at a slight variation on this example. For instance when we wish to <code>append to</code> a log file rather than create a new one each time:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>File log = tempFolder.newFile(&quot;java-version-append.log&quot;);
processBuilder.redirectErrorStream(true);
processBuilder.redirectOutput(Redirect.appendTo(log));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It&#39;s also important to mention the call to <code>redirectErrorStream(true)</code>. In case of any errors, the error output will be merged into the normal process output file.</p><p>We can also redirect error stream an input stream for the subprocess with methods</p><ul><li>redirectError(File)</li><li>redirectInput(File)</li></ul><p>And for each of them we can also set the following redirections</p><ul><li>Redirect.to(File);</li><li>Redirect.from(File);</li><li>Redirect.appendTo(File);</li><li>Redirect.DISCARD</li></ul><h2 id="_2-3-3-current-java-process-information" tabindex="-1">2.3.3 Current Java Process Information</h2><p>We can now obtain a lot of information about the process via the API <code>java.lang.ProcessHandle.Info</code> API:</p><ul><li>the command used to start the process</li><li>the arguments of the command</li><li>time instant when the process was started</li><li>total time spent by it and the user who created it</li></ul><p>Here&#39;s how we can do that</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>ProcessHandle processHandle = ProcessHandle.current();
ProcessHandle.Info processInfo = processHandle.info();

System.out.println(&quot;PID: &quot; + processHandle.pid());
System.out.println(&quot;Arguments: &quot; + processInfo.arguments());
System.out.println(&quot;Command: &quot; + processInfo.command());
System.out.println(&quot;Instant: &quot; + processInfo.startInstant());
System.out.println(&quot;Total CPU duration: &quot; + processInfo.totalCpuDuration());
System.out.println(&quot;User: &quot; + processInfo.user());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It is also possible to get the process information of a newly spawned process. In this case, after we spawn the process and get an instance of the <code>java.lang.Process</code>, we invoke the <code>toHandle()</code> method on it to get an instance of java.lang.ProcessHandle.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>Process process = processBuilder.inheritIO().start();
ProcessHandle processHandle = process.toHandle();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The rest of the details remain the same as in the section above</p>`,76);function j(x,B){const a=i("DownloadPDF-component"),o=i("DocumentCover-component"),n=i("router-link");return c(),p("div",null,[t(a),t(o,{titulo:"2.3 Handling Process Streams"}),h,e("nav",g,[e("ul",null,[e("li",null,[t(n,{to:"#_2-3-1-redirecting-standard-input-and-output"},{default:s(()=>[b]),_:1}),e("ul",null,[e("li",null,[t(n,{to:"#getinputstream"},{default:s(()=>[f]),_:1})]),e("li",null,[t(n,{to:"#geterrorstream"},{default:s(()=>[w]),_:1})]),e("li",null,[t(n,{to:"#getoutputstream"},{default:s(()=>[q]),_:1})]),e("li",null,[t(n,{to:"#inheriting-the-i-o-of-the-parent-process"},{default:s(()=>[_]),_:1})]),e("li",null,[t(n,{to:"#pipelines"},{default:s(()=>[I]),_:1})])])]),e("li",null,[t(n,{to:"#_2-3-2-redirecting-standard-input-and-output"},{default:s(()=>[P]),_:1})]),e("li",null,[t(n,{to:"#_2-3-3-current-java-process-information"},{default:s(()=>[S]),_:1})])])]),y])}const F=u(v,[["render",j],["__file","iostreams.html.vue"]]);export{F as default};
