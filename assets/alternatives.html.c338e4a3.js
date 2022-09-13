import{_ as c,r as l,o as i,c as A,d as a,a as s,w as o,b as n,f as y}from"./app.9db055eb.js";const u={},d=s("h1",{id:"_3-4-alternative-synchronization-techniques",tabindex:"-1"},"3.4 Alternative synchronization techniques",-1),h={class:"table-of-contents"},m=n("3.4.1. Semaphores"),B=n("3.4.2. High level synchronization techniques"),v=n("Concurrent Queues"),D=n("Concurrent Collections"),E=n("Atomic variables"),b=n("3.4.3 Executors, Callables & Future"),f=s("h2",{id:"_3-4-1-semaphores",tabindex:"-1"},"3.4.1. Semaphores",-1),g=s("p",null,[n("There are many other ways to synchronize threads, one of the low-level ones ar "),s("code",null,"semaphores"),n(". A semaphore controls access to a shared resource through the use of a counter. If the counter is greater than zero, then access is allowed. If it is zero, then access is denied. What the counter is counting are permits that allow access to the shared resource. Thus, to access the resource, a thread must be granted a permit from the semaphore.")],-1),_={href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/concurrent/Semaphore.html",target:"_blank",rel:"noopener noreferrer"},x=n("java.util.concurrent.Semaphore"),C=n(" specification."),k=y(`<p>Semaphores control access to <code>critical sections</code> where shared resources or variables are handled in a special way. Depending on thi initial value of the semaphore, a number of concurrent threads can access simultaneously to a shared resource.</p><p>Semaphores can be manages with two methods and their initial value <code>permits</code>:</p><ul><li>release(): When thread no longer needs access to a shared resource, it releases the permit, incrementing the semaphore count. By default the semaphore counter <code>permits</code> is incremented by 1, though it can get a value and increment the count in that value.</li><li>acquire(): If a thread needs to access a shared resource or critical section, then it must get control over the semaphore. If semaphore count &gt; 0, the thread acquires a permit, decrementing the semaphore\u2019s count. Else, the thread is blocked until a permit can be acquired. Other value than 1 can be used to get the semaphore, having <code>permits</code> to be bigger than that value in order to get semaphore&#39;s control</li><li>permits: The value of a counting semaphore at any point indicates the maximum number of processes that can enter the critical section at the exact same time. Each thread asks for a permit. if value is bigger than 0 that means free resources are available, so the thread will enter the semaphore and reduce the permit count When the semaphore&#39;s permit count reaches to 0 that means no more shared resources are available and threads will be locked waiting for another thread to perform a release action on the semaphore.</li></ul><div class="custom-container info"><p class="custom-container-title">Mutex</p><p>Binary semaphore: A binary semaphore only takes only 0 and 1 as values and is used to implement mutual exclusion as well as synchronize concurrent processes.</p><p>The work similar to synchronized, providing <strong>mut</strong>ual <strong>ex</strong>clusion.</p></div><p>Let&#39;s take a look at this example</p><div class="language-java ext-java line-numbers-mode"><pre class="shiki" style="background-color:#FAFAFA;"><code><span class="line"><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">class</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">Almacen</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#9C3EDA;">private</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">final</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">int</span><span style="color:#90A4AE;"> MAX_LIMITE </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">20</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#9C3EDA;">private</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">int</span><span style="color:#90A4AE;"> producto </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">0</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#9C3EDA;">private</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">Semaphore</span><span style="color:#90A4AE;"> productor </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">Semaphore</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">MAX_LIMITE</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#9C3EDA;">private</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">Semaphore</span><span style="color:#90A4AE;"> consumidor </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">Semaphore</span><span style="color:#39ADB5;">(</span><span style="color:#F76D47;">0</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#9C3EDA;">private</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">Semaphore</span><span style="color:#90A4AE;"> mutex </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">new</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">Semaphore</span><span style="color:#39ADB5;">(</span><span style="color:#F76D47;">1</span><span style="color:#39ADB5;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">producir</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">String</span><span style="color:#90A4AE;"> nombreProductor</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">    System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">nombreProductor </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> intentando almacenar un producto</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;font-style:italic;">try</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// up to 20 producers can enter at the same time</span></span>
<span class="line"><span style="color:#90A4AE;">        productor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">acquire</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// But only 1 (consumer/producer) at a time can update</span></span>
<span class="line"><span style="color:#90A4AE;">        mutex</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">acquire</span><span style="color:#39ADB5;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">        producto</span><span style="color:#39ADB5;">++;</span></span>
<span class="line"><span style="color:#90A4AE;">        System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">nombreProductor </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> almacena un producto. </span><span style="color:#39ADB5;">&quot;</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Almac\xE9n con </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> producto </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">producto </span><span style="color:#39ADB5;">&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">?</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> productos.</span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> producto.</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">));</span></span>
<span class="line"><span style="color:#90A4AE;">        mutex</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">release</span><span style="color:#39ADB5;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">        Thread</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">sleep</span><span style="color:#39ADB5;">(</span><span style="color:#F76D47;">500</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">      </span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">catch</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">InterruptedException</span><span style="color:#90A4AE;"> ex</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">      Logger</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getLogger</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">Almacen</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">class</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getName</span><span style="color:#39ADB5;">()).</span><span style="color:#6182B8;">log</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">Level</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">SEVERE</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">null,</span><span style="color:#90A4AE;"> ex</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">finally</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">      </span><span style="color:#90A4AE;font-style:italic;">// Producers allow (notify) consumers to access</span></span>
<span class="line"><span style="color:#90A4AE;">      consumidor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">release</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#9C3EDA;">public</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">void</span><span style="color:#90A4AE;"> </span><span style="color:#6182B8;">consumir</span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">String</span><span style="color:#90A4AE;"> nombreConsumidor</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">    System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">nombreConsumidor </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> intentando retirar un producto</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;font-style:italic;">try</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// A producer must be run first, before any consumer</span></span>
<span class="line"><span style="color:#90A4AE;">        consumidor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">acquire</span><span style="color:#39ADB5;">();</span></span>
<span class="line"><span style="color:#39ADB5;">        </span><span style="color:#90A4AE;font-style:italic;">// But only 1 (consumer/producer) at a time can update</span></span>
<span class="line"><span style="color:#90A4AE;">        mutex</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">acquire</span><span style="color:#39ADB5;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">        producto</span><span style="color:#39ADB5;">--;</span></span>
<span class="line"><span style="color:#90A4AE;">        System</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">out</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">println</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">nombreConsumidor </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> retira un producto. </span><span style="color:#39ADB5;">&quot;</span></span>
<span class="line"><span style="color:#90A4AE;">            </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;">Almac\xE9n con </span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> producto </span><span style="color:#39ADB5;">+</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">producto </span><span style="color:#39ADB5;">&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#F76D47;">1</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">?</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> productos.</span><span style="color:#39ADB5;">&quot;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">:</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&quot;</span><span style="color:#91B859;"> producto.</span><span style="color:#39ADB5;">&quot;</span><span style="color:#39ADB5;">));</span></span>
<span class="line"><span style="color:#90A4AE;">        mutex</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">release</span><span style="color:#39ADB5;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">        Thread</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">sleep</span><span style="color:#39ADB5;">(</span><span style="color:#F76D47;">500</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">catch</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">(</span><span style="color:#9C3EDA;">InterruptedException</span><span style="color:#90A4AE;"> ex</span><span style="color:#39ADB5;">)</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">      Logger</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getLogger</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">Almacen</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">class</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">getName</span><span style="color:#39ADB5;">()).</span><span style="color:#6182B8;">log</span><span style="color:#39ADB5;">(</span><span style="color:#90A4AE;">Level</span><span style="color:#39ADB5;">.</span><span style="color:#90A4AE;">SEVERE</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">null,</span><span style="color:#90A4AE;"> ex</span><span style="color:#39ADB5;">);</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">finally</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#39ADB5;">      </span><span style="color:#90A4AE;font-style:italic;">// Consumers allow (notify) producers to add more products</span></span>
<span class="line"><span style="color:#90A4AE;">      productor</span><span style="color:#39ADB5;">.</span><span style="color:#6182B8;">release</span><span style="color:#39ADB5;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#39ADB5;">}</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#39ADB5;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-4-2-high-level-synchronization-techniques" tabindex="-1">3.4.2. High level synchronization techniques</h2><p>The <code>java.util.concurrent</code> package provides tools for creating concurrent applications. There are some <code>thread-safe</code> classes que to use Collections and basic data types without worrying about concurrent access.</p><p>Using these classes in our code we can reduce out apps complexity.</p><h3 id="concurrent-queues" tabindex="-1">Concurrent Queues</h3><p>The <strong>BlockingQueue</strong> interface defines a <code>FIFO</code> queue that locks threads trying to get elementos from an empty queue until there will be elements in the queue. it can set a maximum number of elements in the queue so that thread are blocked if they try to add elements over that number, having to wait until elements are extracted form the queue.</p><p>Classes LinkedBlockingQueue, ArrayBlockingQueue, SynchronousQueue, PriorityBlockingQueue and DelayQueue implement interface BlockingQueue.</p><h3 id="concurrent-collections" tabindex="-1">Concurrent Collections</h3><p>Besides Queues, this package supplies Collection implementations designed for use in multithreaded contexts: ConcurrentHashMap, ConcurrentSkipListMap, ConcurrentSkipListSet, CopyOnWriteArrayList, and CopyOnWriteArraySet. When many threads are expected to access a given collection, a ConcurrentHashMap is normally preferable to a synchronized HashMap, and a ConcurrentSkipListMap is normally preferable to a synchronized TreeMap. A CopyOnWriteArrayList is preferable to a synchronized ArrayList when the expected number of reads and traversals greatly outnumber the number of updates to a list.</p><p><strong>ConcurrentMap</strong> is a subinterface of <code>java.util.Map</code> con with atomic operations to add / replace existing key,value pairs or to add non existing key,value pairs. ConcurrentHashMap is the thread-safe version for HashMap.</p><h3 id="atomic-variables" tabindex="-1">Atomic variables</h3><p>Package <code>java.util.concurrent.atomic</code> contains a small toolkit of classes that support lock-free thread-safe programming on single variables. Instances of Atomic classes maintain values that are accessed and updated using methods otherwise available for fields using associated atomic VarHandle operations.</p><p>Instances of classes AtomicBoolean, AtomicInteger, AtomicLong, and AtomicReference each provide access and updates to a single variable of the corresponding type. Each class also provides appropriate utility methods for that type. For example, classes AtomicLong and AtomicInteger provide atomic increment methods.</p><h2 id="_3-4-3-executors-callables-future" tabindex="-1">3.4.3 Executors, Callables &amp; Future</h2><p>Executors is an interface to manage thread pools. Thread pools manage a pool of worker threads. The thread pools contain a work queue which holds tasks waiting to get executed.</p><p>A thread pool can be described as a collection of Runnable/Callable objects (work queue) and a connection of running threads.</p><p>These threads are constantly running and are checking the work query for new work. If there is new work to be done they execute this Runnable/Callable.</p><p>Here you can check an illustrative example on how to use Executors</p>`,23),q={href:"https://jarroba.com/multitarea-e-hilos-en-java-con-ejemplos-ii-runnable-executors/",target:"_blank",rel:"noopener noreferrer"},w=n("Executors: Ejemplo supermercado"),S=s("p",null,"We have used a Runnable object to define the tasks that are executed inside a thread. While defining tasks using Runnable is very convenient, it is limited by the fact that the tasks can not return a result.",-1),L=s("p",null,"What if you want to return a result from your tasks?",-1),F=s("p",null,[n("Well, Java provides a "),s("code",null,"Callable"),n(" interface to define tasks that return a result. A Callable is similar to Runnable except that it can return a result and throw a checked exception.")],-1),I=s("p",null,"Callable interface has a single method call() which is meant to contain the code that is executed by a thread.",-1),j=s("p",null,[s("code",null,"Future"),n(" interface has methods to obtain the result generated by a Callable object and manage its state. It represents the result of an asynchronous computation.")],-1),T=s("p",null,"The result can only be retrieved using method get() when the computation has completed, blocking if necessary until it is ready.",-1);function z(M,W){const p=l("DownloadPDF-component"),r=l("DocumentCover-component"),e=l("router-link"),t=l("ExternalLinkIcon");return i(),A("div",null,[a(p),a(r,{titulo:"3.4 Alternative synchronization techniques"}),d,s("nav",h,[s("ul",null,[s("li",null,[a(e,{to:"#_3-4-1-semaphores"},{default:o(()=>[m]),_:1})]),s("li",null,[a(e,{to:"#_3-4-2-high-level-synchronization-techniques"},{default:o(()=>[B]),_:1}),s("ul",null,[s("li",null,[a(e,{to:"#concurrent-queues"},{default:o(()=>[v]),_:1})]),s("li",null,[a(e,{to:"#concurrent-collections"},{default:o(()=>[D]),_:1})]),s("li",null,[a(e,{to:"#atomic-variables"},{default:o(()=>[E]),_:1})])])]),s("li",null,[a(e,{to:"#_3-4-3-executors-callables-future"},{default:o(()=>[b]),_:1})])])]),f,g,s("blockquote",null,[s("p",null,[s("a",_,[x,a(t)]),C])]),k,s("p",null,[s("a",q,[w,a(t)])]),S,L,F,I,j,T])}const H=c(u,[["render",z],["__file","alternatives.html.vue"]]);export{H as default};
