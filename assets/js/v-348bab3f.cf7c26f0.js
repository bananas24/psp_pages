"use strict";(self.webpackChunkapuntes_psp=self.webpackChunkapuntes_psp||[]).push([[314],{8303:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-348bab3f",path:"/en/unit2/processbuilder.html",title:"2.2 Process management in Java with ProcessBuilder",lang:"en-US",frontmatter:{title:"2.2 Process management in Java with ProcessBuilder"},excerpt:"",headers:[{level:2,title:"2.2.1 Preparation and setting of a process",slug:"_2-2-1-preparation-and-setting-of-a-process",children:[{level:3,title:"Setting the command at runtime",slug:"setting-the-command-at-runtime",children:[]},{level:3,title:"Additional settings for a process",slug:"additional-settings-for-a-process",children:[]}]},{level:2,title:"2.2.2 Process access while running",slug:"_2-2-2-process-access-while-running",children:[]}],filePathRelative:"en/unit2/processbuilder.md",git:{updatedTime:1632265354e3,contributors:[{name:"Vicente Martínez",email:"vicente@iesdoctorbalmis.com",commits:1}]}}},3841:(s,n,a)=>{a.r(n),a.d(n,{default:()=>k});var e=a(6252);const l=(0,e._)("h1",{id:"_2-2-process-management-in-java-with-processbuilder",tabindex:"-1"},"2.2 Process management in Java with ProcessBuilder",-1),o={class:"table-of-contents"},t=(0,e.Uk)("2.2.1 Preparation and setting of a process"),p=(0,e.Uk)("Setting the command at runtime"),r=(0,e.Uk)("Additional settings for a process"),c=(0,e.Uk)("2.2.2 Process access while running"),i=(0,e._)("h2",{id:"_2-2-1-preparation-and-setting-of-a-process",tabindex:"-1"},"2.2.1 Preparation and setting of a process",-1),y=(0,e._)("p",null,[(0,e.Uk)("The class to set the running attributes for a new process, before it is being run, is the "),(0,e._)("code",null,"ProcessBuilder"),(0,e.Uk)(" class.")],-1),A={href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/ProcessBuilder.html",target:"_blank",rel:"noopener noreferrer"},d=(0,e.Uk)("Specification java.lang.ProcessBuilder"),u=(0,e.uE)('<p>This is an auxiliary class for the Process and is instantiated to manage a collection of process attributes. We can invoke the <code>start</code> method to create a new process with the attributes defined by the instance of the ProcessBuilder class.</p><p>Repeated calls to the start method would create a new process with the same attributes.</p><p>The ProcessBuilder class defines two constructors, such as:</p><div class="language-java ext-java"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#90A4AE;">    </span><span style="color:#6182B8;">ProcessBuilder</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">List</span><span style="color:#39ADB5;">&lt;</span><span style="color:#90A4AE;">String</span><span style="color:#39ADB5;">&gt;</span><span style="color:#90A4AE;"> command</span><span style="color:#39ADB5;">)</span></span>\n<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#6182B8;">ProcessBuilder</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">String</span><span style="color:#39ADB5;">...</span><span style="color:#90A4AE;"> command</span><span style="color:#39ADB5;">)</span></span>\n<span class="line"></span></code></pre></div><p>The meaning implied by the parameters passed to both constructors is same. In the first constructor, the command to be executed, along with command line arguments, is passed in a list of strings. And, in the second constructor, the command and the command line arguments are specified through the varargs parameter. We can use either of the constructors, depending upon the way to pass the parameter.</p><p>If we want to launch a command with parameters, the command cannot be sent to ProcessBuilder in raw mode, it must be processed and converted into a List in order to make it work.</p><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#90A4AE;font-style:italic;">// Different modes to pass the command to ProcessBuilder constructors</span></span>\n<span class="line"><span style="color:#90A4AE;font-style:italic;">// 1st mode: using a string. It fails with parameters, only works with arguments</span></span>\n<span class="line"><span style="color:#9C3EDA;">String</span><span style="color:#90A4AE;"> command1 </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">notepad.exe prueba1.txt</span><span style="color:#39ADB5;">&quot;</span></span>\n<span class="line"><span style="color:#9C3EDA;">ProcessBuilder</span><span style="color:#90A4AE;"> pb </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">ProcessBuilder</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">command1</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#90A4AE;font-style:italic;">// 2nd mode: using an array of strings. It also works with parameters</span></span>\n<span class="line"><span style="color:#9C3EDA;">String</span><span style="color:#39ADB5;">[]</span><span style="color:#90A4AE;"> command2 </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">cmd</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">/c</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">dir</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">/o</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">};</span></span>\n<span class="line"><span style="color:#9C3EDA;">ProcessBuilder</span><span style="color:#90A4AE;"> pb </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">ProcessBuilder</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">command2</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#90A4AE;font-style:italic;">// 3rd mode: using a string and splitting it to convert into a List</span></span>\n<span class="line"><span style="color:#9C3EDA;">String</span><span style="color:#90A4AE;"> command3 </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">c:/windows/system32/shutdown -s -t 0</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">;</span><span style="color:#90A4AE;">  </span></span>\n<span class="line"><span style="color:#90A4AE;font-style:italic;">// Regular expresion \\s means splitting the string by blank spaces</span></span>\n<span class="line"><span style="color:#9C3EDA;">ProcessBuilder</span><span style="color:#90A4AE;"> pb </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">ProcessBuilder</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">command3</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">split</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;">\\\\</span><span style="color:#91B859;">s</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">));</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>',7),m={class:"custom-container warning"},B=(0,e._)("p",{class:"custom-container-title"},"OS shutdown",-1),h=(0,e._)("p",null,"You can use shutdown -s command to shutdown system. For windows OS, you need to provide full path of shutdown command e.g. C:\\Windows\\System32\\shutdown.",-1),D=(0,e._)("p",null,"Here you can use -s switch to shutdown system, -r switch to restart system, -h to put the system into hibernation, and -t switch to specify time delay.",-1),b={href:"https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/shutdown",target:"_blank",rel:"noopener noreferrer"},E=(0,e.Uk)("Windows shutdown reference"),f=(0,e.uE)('<div class="custom-container question"><p class="custom-container-title">Activity psp.activities.U2A1_Shutdowner</p><p>Create a new Java application project (package psp.activities &amp; main class U2A1_Shutdowner) Using the command line, ask the user for the action he wants to do with the computer (shutdown ,restart or suspend) and how much time he needs before shutting down the system.</p><p>Find information about the shutdown command in GNU/Linux and make your app work in both systems.</p><p>Your app has to prepare the right command for the answers the user has given and for the OS it is running on.</p><p>Get the ProcessBuilder.command() result and show it on the console in a readable format.</p></div><h3 id="setting-the-command-at-runtime" tabindex="-1">Setting the command at runtime</h3><p>If we want to set the command to be run at runtime, or at the time the ProcessBuilder instance is created we still don&#39;t know the command, it can be set later by using the command(String).</p><p>The same way as the constructors, we have two versions of command method</p><pre><code>command(List&lt;String&gt; command)\ncommand(String... command)\n</code></pre><p>and there&#39;s also another command method, without parameters, to retrieve the command and parameters already set for the ProcessBuilder instance. Once we have the parameters list, we can modify it using List methods.</p><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#90A4AE;font-style:italic;">// Sets and modifies the command after the ProcessBuilder object is created</span></span>\n<span class="line"><span style="color:#9C3EDA;">String</span><span style="color:#90A4AE;"> command </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">java -jar install.jar -install</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">;</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">// tmp dir is missing</span></span>\n<span class="line"><span style="color:#9C3EDA;">ProcessBuilder</span><span style="color:#90A4AE;"> builder </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">ProcessBuilder</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">command</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">split</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;">\\\\</span><span style="color:#91B859;">s</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">));</span></span>\n<span class="line"><span style="color:#39ADB5;font-style:italic;">if</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">isWindows</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#90A4AE;">    pbuilder</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">command</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">add</span><span style="color:#39ADB5;">(</span><span style="color:#F76D47;">0</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">cmd</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">// Sets the 1st element</span></span>\n<span class="line"><span style="color:#90A4AE;">    pbuilder</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">command</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">add</span><span style="color:#39ADB5;">(</span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">/c</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">// Sets the 2nd element</span></span>\n<span class="line"><span style="color:#90A4AE;">    pbuilder</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">command</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">add</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">c:/temp</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">// Sets the last element</span></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// Command to run cmd /c java -jar install.jar -install c:/temp</span></span>\n<span class="line"><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">else</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#90A4AE;">    pbuilder</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">command</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">add</span><span style="color:#39ADB5;">(</span><span style="color:#F76D47;">0</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">sh</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">// Sets the 1st element</span></span>\n<span class="line"><span style="color:#90A4AE;">    pbuilder</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">command</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">add</span><span style="color:#39ADB5;">(</span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">-c</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">// Sets the 2nd element</span></span>\n<span class="line"><span style="color:#90A4AE;">    pbuilder</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">command</span><span style="color:#39ADB5;">().</span><span style="color:#6182B8;">add</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">/tmp</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;">// Sets the last element</span></span>\n<span class="line"><span style="color:#39ADB5;">    </span><span style="color:#90A4AE;font-style:italic;">// Command to run: sh -c java -jar install.jar -install /tmp</span></span>\n<span class="line"><span style="color:#39ADB5;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#90A4AE;font-style:italic;">// Starts the process</span></span>\n<span class="line"><span style="color:#90A4AE;">builder</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">start</span><span style="color:#39ADB5;">();</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="additional-settings-for-a-process" tabindex="-1">Additional settings for a process</h3><p>Some of the settings that can be changed for a process are:</p><ul><li><p>Set the working directory where the process will be run We can override the default working directory of the current process by calling the directory method and passing a File object. <strong>By default, the current working directory is set to the value returned by the user.dir system property</strong>.</p><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#90A4AE;font-style:italic;">// Change working directory for the running process</span></span>\n<span class="line"><span style="color:#90A4AE;">pbuilder</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">directory</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">File</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">System</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getProperty</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">user.home</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">)));</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>Set-up a custom key-value map and modify an existing one using builder.environment()</p><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#90A4AE;font-style:italic;">// Retrieve and modify the process environment</span></span>\n<span class="line"><span style="color:#9C3EDA;">Map</span><span style="color:#39ADB5;">&lt;</span><span style="color:#9C3EDA;">String</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">String</span><span style="color:#39ADB5;">&gt;</span><span style="color:#90A4AE;"> environment </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> pbuilder</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">environment</span><span style="color:#39ADB5;">();</span></span>\n<span class="line"><span style="color:#90A4AE;font-style:italic;">// Get the PATH environment variable and add a new directory</span></span>\n<span class="line"><span style="color:#9C3EDA;">String</span><span style="color:#90A4AE;"> systemPath </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> environment</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">get</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">path</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">;c:/users/public</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">;</span></span>\n<span class="line"><span style="color:#90A4AE;">environment</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">replace</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">path</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> systemPath</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"><span style="color:#90A4AE;font-style:italic;">// Add a new environment variable and use it as a part of the command</span></span>\n<span class="line"><span style="color:#90A4AE;">environment</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">put</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">GREETING</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Hola Mundo</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"><span style="color:#90A4AE;">processBuilder</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">command</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">/bin/bash</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">-c</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">echo $GREETING</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="custom-container info"><p class="custom-container-title">Environment variables vs System properties</p><p>With Runtime we also accessed System properties, that are different from this environment ones.</p></div></li><li><p>Redirect input and output streams to custom replacements</p></li><li><p>Inherit both of them to the streams of the current JVM process using builder.inheritIO()</p><p><em>This two settings will be covered later in this unit</em>.</p></li></ul><div class="custom-container question"><p class="custom-container-title">Test activities</p><p>Create a project in Java</p></div><div class="pagebreak"></div><h2 id="_2-2-2-process-access-while-running" tabindex="-1">2.2.2 Process access while running</h2><p>The <code>Process</code> is an abstract class defined in the java.lang package that encapsulates the runtime information of a program in execution. The <code>start</code> method invoked by the ProcessBuilder class returns a reference to this class instance. There is an another way to create an instance of this class, through the <code>exec</code> method of the Runtime instance.</p><p>The methods defined by the Process class can be used to perform input/output operations from the process, check the exit status of the process, wait for it to complete, and terminate the process. These methods, however, are not built to work on special processes of the native platform like daemon processes, shell scripts, and so on.</p>',15),g={href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Process.html",target:"_blank",rel:"noopener noreferrer"},v=(0,e.Uk)("Specification java.lang.Process"),w=(0,e.uE)('<div class="custom-container warning"><p class="custom-container-title">I/O</p><p>Intriguingly, <strong>the process created by the start() method does not own a console</strong>. Instead, it redirects (stdin, stdout, stderr) to the parent process. If need be, we can access them via streams obtained using methods defined in the class, such as getInputStream(), getOutputStream() and getErrorSteam(). These are the ways we can feed input to and get results from the sub processes.</p></div><p>Some of the common methods defined in this class are:</p><table><thead><tr><th style="text-align:left;">method</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">int exitValue()</td><td style="text-align:left;">Exit code returned from the process executed</td></tr><tr><td style="text-align:left;">Boolean isAlive()</td><td style="text-align:left;">Checks if the invoking process is still running.</td></tr><tr><td style="text-align:left;">int waitFor()</td><td style="text-align:left;">Parent process waits for the child process to end. The integer value returned by the method is the exit code by the process.</td></tr><tr><td style="text-align:left;">Boolean waitFor(long timeOut, TimeUnit unit)</td><td style="text-align:left;">Overloaded method of previous one. We can specify the wait time. This method returns true if the process has terminated and false if timeout has occurred.</td></tr><tr><td style="text-align:left;">void destroy()</td><td style="text-align:left;">These two methods are used to kill or terminate the process. One, the second, just does it forcibly.</td></tr><tr><td style="text-align:left;">Process destroyForcibly()</td><td style="text-align:left;"></td></tr></tbody></table><p>Let’s write a simple Java program to open an application as a separate process. After it is opened, the | program would wait for, say, 10 seconds and then destroy the process, which will immediately close the | application.</p><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">class</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">ProcessDemo</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#90A4AE;">   </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">static</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">main</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">String</span><span style="color:#39ADB5;">[]</span><span style="color:#90A4AE;"> args</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">throws</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">Exception</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#90A4AE;">      </span><span style="color:#9C3EDA;">ProcessBuilder</span><span style="color:#90A4AE;"> pb </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">ProcessBuilder</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">firefox</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"><span style="color:#39ADB5;">      </span><span style="color:#90A4AE;font-style:italic;">// Effectively launch the process</span></span>\n<span class="line"><span style="color:#90A4AE;">      </span><span style="color:#9C3EDA;">Process</span><span style="color:#90A4AE;"> p </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> pb</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">start</span><span style="color:#39ADB5;">();</span></span>\n<span class="line"><span style="color:#39ADB5;">      </span><span style="color:#90A4AE;font-style:italic;">// Check is process is alive or not</span></span>\n<span class="line"><span style="color:#90A4AE;">      </span><span style="color:#9C3EDA;">boolean</span><span style="color:#90A4AE;"> alive </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> p</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">isAlive</span><span style="color:#39ADB5;">();</span></span>\n<span class="line"><span style="color:#39ADB5;">      </span><span style="color:#90A4AE;font-style:italic;">// Wait for the process to end for 10 seconds.</span></span>\n<span class="line"><span style="color:#90A4AE;">      </span><span style="color:#39ADB5;font-style:italic;">if</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">p</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">waitFor</span><span style="color:#39ADB5;">(</span><span style="color:#F76D47;">10</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> TimeUnit</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">SECONDS</span><span style="color:#39ADB5;">))</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#90A4AE;">          System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Process has finished</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"><span style="color:#90A4AE;">      </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">else</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>\n<span class="line"><span style="color:#90A4AE;">          System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Timeout. Process hasn&#39;t finished</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>\n<span class="line"><span style="color:#90A4AE;">      </span><span style="color:#39ADB5;">}</span></span>\n<span class="line"><span style="color:#39ADB5;">      </span><span style="color:#90A4AE;font-style:italic;">// Force process termination.</span></span>\n<span class="line"><span style="color:#90A4AE;">      p</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">destroy</span><span style="color:#39ADB5;">();</span></span>\n<span class="line"><span style="color:#39ADB5;">      </span><span style="color:#90A4AE;font-style:italic;">// Check again if process remains alive</span></span>\n<span class="line"><span style="color:#90A4AE;">      </span><span style="color:#9C3EDA;">boolean</span><span style="color:#90A4AE;"> alive </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> p</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">isAlive</span><span style="color:#39ADB5;">();</span></span>\n<span class="line"><span style="color:#39ADB5;">      </span><span style="color:#90A4AE;font-style:italic;">// Get the process exit value</span></span>\n<span class="line"><span style="color:#90A4AE;">      </span><span style="color:#9C3EDA;">int</span><span style="color:#90A4AE;"> status </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> p</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">exitValue</span><span style="color:#39ADB5;">();</span><span style="color:#90A4AE;">        </span></span>\n<span class="line"><span style="color:#90A4AE;">   </span><span style="color:#39ADB5;">}</span></span>\n<span class="line"><span style="color:#39ADB5;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><div class="custom-container info"><p class="custom-container-title">Exit codes</p><p>An exit code, or sometimes known as a return code, is the code returned to a parent process by an executable. The standard exit code is 0 for success and any number from 1 to 255 for anything else.</p></div><div class="custom-container danger"><p class="custom-container-title">Exceptions management</p><p>Call to method <strong>waitFor</strong> implies that the parent process gets locked until child process ends, or until a signal from the system (Exception) is received.</p><p>It&#39;s better to handle exceptions than to throw them to upper levels.</p></div>',7),k={render:function(s,n){const a=(0,e.up)("DownloadPDF-component"),k=(0,e.up)("DocumentCover-component"),q=(0,e.up)("RouterLink"),P=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(a),(0,e.Wm)(k,{titulo:"2.2 Process management in Java with ProcessBuilder"}),l,(0,e._)("nav",o,[(0,e._)("ul",null,[(0,e._)("li",null,[(0,e.Wm)(q,{to:"#_2-2-1-preparation-and-setting-of-a-process"},{default:(0,e.w5)((()=>[t])),_:1}),(0,e._)("ul",null,[(0,e._)("li",null,[(0,e.Wm)(q,{to:"#setting-the-command-at-runtime"},{default:(0,e.w5)((()=>[p])),_:1})]),(0,e._)("li",null,[(0,e.Wm)(q,{to:"#additional-settings-for-a-process"},{default:(0,e.w5)((()=>[r])),_:1})])])]),(0,e._)("li",null,[(0,e.Wm)(q,{to:"#_2-2-2-process-access-while-running"},{default:(0,e.w5)((()=>[c])),_:1})])])]),i,y,(0,e._)("blockquote",null,[(0,e._)("p",null,[(0,e._)("a",A,[d,(0,e.Wm)(P)])])]),u,(0,e._)("div",m,[B,h,D,(0,e._)("p",null,[(0,e._)("a",b,[E,(0,e.Wm)(P)])])]),f,(0,e._)("blockquote",null,[(0,e._)("p",null,[(0,e._)("a",g,[v,(0,e.Wm)(P)])])]),w],64)}}}}]);