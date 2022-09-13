import{_ as u,r as e,o as r,c as k,d as a,a as n,w as c,b as s,f as o}from"./app.108f91ed.js";const m={},d=n("h1",{id:"_2-1-running-processes-in-java-with-runtime",tabindex:"-1"},"2.1. Running processes in Java with Runtime",-1),v={class:"table-of-contents"},h=s("2.1.1. Quick process launch"),b=s("2.1.2 System properties and command shells"),g=n("h2",{id:"_2-1-1-quick-process-launch",tabindex:"-1"},"2.1.1. Quick process launch",-1),f=n("p",null,"There are several methods defined in the Runtime class. These methods can be invoked to get the information about the runtime environment such as number of processors available to the JVM, about of memory available, loading native library, explicitly call garbage collector, and so forth.",-1),y={href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Runtime.html",target:"_blank",rel:"noopener noreferrer"},w=s("Specification java.lang.Runtime"),_=n("p",null,[s("Every Java program has an instance of the Runtime class, which encapsulates the runtime environment of the program. This class cannot be instantiated, but we can get a reference "),n("strong",null,"singleton instance"),s(" to the Runtime of the currently running program with the help of the static method "),n("strong",null,"java.lang.Runtime.getRuntime()"),s(".")],-1),q=n("p",null,"::: question Design patterns: Singleton \xBFWhat are design patterns? \xBFWhat is and what is used for the singleton pattern?",-1),S=n("p",null,"Look how to implement a class with the singleton pattern.",-1),j={href:"https://refactoring.guru/design-patterns/java",target:"_blank",rel:"noopener noreferrer"},x=s("Refactoring.Guru design patterns"),R=s(" :::"),M=o(`<p>The Runtime class method we are interested in, to create a new processes is</p><blockquote><p>public Process exec(String command) throws IOException</p></blockquote><p>This is a simple, not yet customizable, way to spawn a new sub-process.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token comment">// Launch notepad app</span>
    <span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&quot;notepad.exe&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// This way always works</span>
    <span class="token comment">// String separator = System.getProperty(&quot;file.separator&quot;);</span>
    <span class="token comment">// Runtime.getRuntime()</span>
    <span class="token comment">//    .exec(&quot;c:&quot;+separator+&quot;windows&quot;+separator+&quot;notepad.exe&quot;);</span>

    <span class="token comment">// This way used to work (UNIX style paths)</span>
    <span class="token comment">// Runtime.getRuntime().exec(&quot;c:/windows/notepad.exe&quot;);</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see the argument to <code>exec</code> method is just the program we want to run. In this example, as <em>notepad</em> is in the system PATH it&#39;s not necessary to tell the path to the program. Otherwise, the path must be specified with the program name.</p><div class="pagebreak"></div><h2 id="_2-1-2-system-properties-and-command-shells" tabindex="-1">2.1.2 System properties and command shells</h2><p>If we plan to code platform independent applications, we have to deal with many issues because of differences between OS. So sometimes we need to deal with specific OS information. A useful way to get that information is by getting System properties.</p>`,8),P={href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/System.html#getProperties()",target:"_blank",rel:"noopener noreferrer"},F=s("Specification System.getProperties"),O=o(`<p>Some examples are provided here using System properties. Similar solutions can be used for other issues.</p><div class="custom-container danger"><p class="custom-container-title">File separator</p><p>For file path or directory separator, the Unix system introduced the slash character / as directory separator, and the Microsoft Windows introduced backslash character \\ as the directory separator. In a nutshell, this is / on UNIX and \\ on Windows.</p><p>Then, \xBFhow can we code OS independent applications??</p><p>In Java, we can use the following three methods to get the platform-independent file path separator.</p><ul><li>System.getProperty(&quot;file.separator&quot;)</li><li>FileSystems.getDefault().getSeparator() (Java NIO)</li><li>File.separator Java IO</li></ul><p>From now on, we are gonna use System properties in our applications for several situations using <code>System.getProperty(String propName)</code>. These properties are configured by the OS and the JVM, though we can modify them by setting the JVM running setting</p><blockquote><p>String separator = System.getProperty(&quot;file.separator&quot;);</p></blockquote><p>or</p><blockquote><p>-Dfile.separator</p></blockquote><p>Nevertheless is always a good practice to use slash character <strong>/</strong> in paths as Java is able to convert them to the system it is running on.</p></div><p>If we want to run an OS command we have to do it as we usually do, by using the command shell, where once again we find the troubleshot with UNIX / Windows.</p><p>Let&#39;s take a look at the way we can use the system properties, once again, to get a list of files in the user personal folder.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// First we get the user folder path</span>
<span class="token class-name">String</span> homeDirectory <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;user.home&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// And then we set which OS are we running on</span>
<span class="token keyword">boolean</span> isWindows <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;os.name&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;windows&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>isWindows<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;cmd.exe /c dir %s&quot;</span><span class="token punctuation">,</span> homeDirectory<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;sh -c ls %s&quot;</span><span class="token punctuation">,</span> homeDirectory<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: info non-interactive shell mode In the previous code example, both for Windows and UNIX modifier <strong>c</strong> is used for command shells. This modifier tells the system to open a command shell, to run the companion command and close the shell after it has finished. :::</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// Calling app example</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">mouseClicked</span><span class="token punctuation">(</span><span class="token class-name">MouseEvent</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Launch Page</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// Linux version</span>
    <span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&quot;open http://localhost:8153/go&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Windows version</span>
    <span class="token comment">// Runtime.getRuntime().exec(&quot;explorer http://localhost:8153/go&quot;);</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Don&#39;t care</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: question System properties Our first applications in java is not gonna be an easy one.</p><p>Using methods from System class and Runtime class, write the code for an app that shows</p><ul><li>all the system properties configured in your OS</li><li>total memory, free memory, used memory and processors available</li></ul><p>Make a research into Runtime class methods. For System properties try to get a list or iterable data estructure to show each of the system properties and their values. :::</p><details class="custom-container details"><summary>Proposed solution to previous activiy</summary><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">long</span> freeMemory <span class="token operator">=</span> <span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">freeMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">long</span> availableMemory <span class="token operator">=</span> <span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">totalMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">long</span> usedMemory <span class="token operator">=</span> availableMemory <span class="token operator">-</span> freeMemory<span class="token punctuation">;</span>

<span class="token doc-comment comment">/*** Runtime.getRuntime() usage ***/</span>
<span class="token comment">// Show system information</span>
<span class="token comment">// Memory will be shown in MBytes formatted with 2-decimal places</span>
<span class="token class-name">DecimalFormat</span> megabytes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DecimalFormat</span><span class="token punctuation">(</span><span class="token string">&quot;#.00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Available memory in JVM(Mbytes): &quot;</span> <span class="token operator">+</span> 
        megabytes<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">)</span>availableMemory<span class="token operator">/</span><span class="token punctuation">(</span><span class="token number">1024</span><span class="token operator">*</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Free memory in JVM(Mbytes): &quot;</span> <span class="token operator">+</span> 
        megabytes<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">)</span>freeMemory<span class="token operator">/</span><span class="token punctuation">(</span><span class="token number">1024</span><span class="token operator">*</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Used memory in JVM(Mbytes): &quot;</span> <span class="token operator">+</span> 
        megabytes<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">)</span>usedMemory<span class="token operator">/</span><span class="token punctuation">(</span><span class="token number">1024</span><span class="token operator">*</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span>println <span class="token punctuation">(</span><span class="token string">&quot;Processors in the system: &quot;</span> 
        <span class="token operator">+</span> <span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">availableProcessors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/*** System.getProperties() usage ***/</span>
<span class="token comment">// Show each pair of property:value from System properties</span>

<span class="token comment">// 1st. As a lambda expression using anonymous classes</span>
<span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span>v<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>k <span class="token operator">+</span> <span class="token string">&quot; =&gt; &quot;</span> <span class="token operator">+</span> v<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2nd. As a Map.entrySet </span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> entry <span class="token operator">:</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Object</span> key <span class="token operator">=</span> entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Object</span> val <span class="token operator">=</span> entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;&gt; &quot;</span> <span class="token operator">+</span> key <span class="token operator">+</span> <span class="token string">&quot; =&gt; &quot;</span> <span class="token operator">+</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 3rd. As a Map.keySet</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> key <span class="token operator">:</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;&gt;&gt; &quot;</span> <span class="token operator">+</span> key<span class="token operator">+</span><span class="token string">&quot;:&quot;</span><span class="token operator">+</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Other methods found by students, based on a Properties object methods.</span>
<span class="token class-name">Properties</span> prop <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> propName<span class="token operator">:</span> prop<span class="token punctuation">.</span><span class="token function">stringPropertyNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>propName <span class="token operator">+</span>  <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span>propName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
        
<span class="token comment">// Or directly to the console using </span>
prop<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>::: info Number format In any programming language we have many different ways to format the information shown to the user. As in this first applications we are using the console as the system output, let&#39;s check the two main techniques we can use in Java</p>`,13),D={href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/text/DecimalFormat.html",target:"_blank",rel:"noopener noreferrer"},I=s("NumberFormat"),N=o(`<p>Using NumberFormat class or any of its descendants we can get control on how the numbers are shown with high precision, using numeric patterns.</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token class-name">DecimalFormat</span> numberFormat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DecimalFormat</span><span class="token punctuation">(</span><span class="token string">&quot;#.00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Hashes can be used instead of zeros to allow .30 to be shown as 0.3</span>
<span class="token comment">// (additional digits are optional)</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>numberFormat<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,2),J={href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Formatter.html",target:"_blank",rel:"noopener noreferrer"},T=s("System.out.printf"),V=o(`<p>Similar to C&#39;s printf syntax, we can use the java.util.Formatter syntax to set how data is visualized.</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n$%10.2f&quot;</span><span class="token punctuation">,</span>shippingCost<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// numbers after % print preceding spaces to fill </span>
<span class="token comment">// and justify numbers.</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%n$%.2f&quot;</span><span class="token punctuation">,</span>shippingCost<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>:::</p>`,3);function A(C,E){const i=e("DownloadPDF-component"),l=e("DocumentCover-component"),p=e("router-link"),t=e("ExternalLinkIcon");return r(),k("div",null,[a(i),a(l,{titulo:"2.1. Running processes in Java with Runtime"}),d,n("nav",v,[n("ul",null,[n("li",null,[a(p,{to:"#_2-1-1-quick-process-launch"},{default:c(()=>[h]),_:1})]),n("li",null,[a(p,{to:"#_2-1-2-system-properties-and-command-shells"},{default:c(()=>[b]),_:1})])])]),g,f,n("blockquote",null,[n("p",null,[n("a",y,[w,a(t)])])]),_,q,S,n("p",null,[n("a",j,[x,a(t)]),R]),M,n("p",null,[n("a",P,[F,a(t)])]),O,n("ul",null,[n("li",null,[n("a",D,[I,a(t)])])]),N,n("ul",null,[n("li",null,[n("a",J,[T,a(t)])])]),V])}const L=u(m,[["render",A],["__file","runtime.html.vue"]]);export{L as default};
