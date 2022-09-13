import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as u,d as n,a as e,w as a,f as d,r,b as o}from"./app.6f7d6c20.js";const h={},m=e("h1",{id:"_3-4-alternative-synchronization-techniques",tabindex:"-1"},"3.4 Alternative synchronization techniques",-1),p={class:"table-of-contents"},v=o("3.4.1. Semaphores"),b=o("3.4.2. High level synchronization techniques"),g=o("Concurrent Queues"),f=o("Concurrent Collections"),y=o("Atomic variables"),_=o("3.4.3 Executors, Callables & Future"),x=d(`<h2 id="_3-4-1-semaphores" tabindex="-1">3.4.1. Semaphores</h2><p>There are many other ways to synchronize threads, one of the low-level ones ar <code>semaphores</code>. A semaphore controls access to a shared resource through the use of a counter. If the counter is greater than zero, then access is allowed. If it is zero, then access is denied. What the counter is counting are permits that allow access to the shared resource. Thus, to access the resource, a thread must be granted a permit from the semaphore.</p><blockquote><p><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/concurrent/Semaphore.html" target="_blank" rel="noopener noreferrer">java.util.concurrent.Semaphore</a> specification.</p></blockquote><p>Semaphores control access to <code>critical sections</code> where shared resources or variables are handled in a special way. Depending on thi initial value of the semaphore, a number of concurrent threads can access simultaneously to a shared resource.</p><p>Semaphores can be manages with two methods and their initial value <code>permits</code>:</p><ul><li>release(): When thread no longer needs access to a shared resource, it releases the permit, incrementing the semaphore count. By default the semaphore counter <code>permits</code> is incremented by 1, though it can get a value and increment the count in that value.</li><li>acquire(): If a thread needs to access a shared resource or critical section, then it must get control over the semaphore. If semaphore count &gt; 0, the thread acquires a permit, decrementing the semaphore\u2019s count. Else, the thread is blocked until a permit can be acquired. Other value than 1 can be used to get the semaphore, having <code>permits</code> to be bigger than that value in order to get semaphore&#39;s control</li><li>permits: The value of a counting semaphore at any point indicates the maximum number of processes that can enter the critical section at the exact same time. Each thread asks for a permit. if value is bigger than 0 that means free resources are available, so the thread will enter the semaphore and reduce the permit count When the semaphore&#39;s permit count reaches to 0 that means no more shared resources are available and threads will be locked waiting for another thread to perform a release action on the semaphore.</li></ul><p>:::info Mutex Binary semaphore: A binary semaphore only takes only 0 and 1 as values and is used to implement mutual exclusion as well as synchronize concurrent processes.</p><p>The work similar to synchronized, providing <strong>mut</strong>ual <strong>ex</strong>clusion. :::</p><p>Let&#39;s take a look at this example</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class Almacen {

  private final int MAX_LIMITE = 20;
  private int producto = 0;
  private Semaphore productor = new Semaphore(MAX_LIMITE);
  private Semaphore consumidor = new Semaphore(0);
  private Semaphore mutex = new Semaphore(1);

  public void producir(String nombreProductor) {
    System.out.println(nombreProductor + &quot; intentando almacenar un producto&quot;);
    try {
        // up to 20 producers can enter at the same time
        productor.acquire();
        // But only 1 (consumer/producer) at a time can update
        mutex.acquire();

        producto++;
        System.out.println(nombreProductor + &quot; almacena un producto. &quot;
            + &quot;Almac\xE9n con &quot; + producto + (producto &gt; 1 ? &quot; productos.&quot; : &quot; producto.&quot;));
        mutex.release();

        Thread.sleep(500);
      
    } catch (InterruptedException ex) {
      Logger.getLogger(Almacen.class.getName()).log(Level.SEVERE, null, ex);
    } finally {
      // Producers allow (notify) consumers to access
      consumidor.release();
    }

  }

  public void consumir(String nombreConsumidor) {
    System.out.println(nombreConsumidor + &quot; intentando retirar un producto&quot;);
    try {
        // A producer must be run first, before any consumer
        consumidor.acquire();
        // But only 1 (consumer/producer) at a time can update
        mutex.acquire();

        producto--;
        System.out.println(nombreConsumidor + &quot; retira un producto. &quot;
            + &quot;Almac\xE9n con &quot; + producto + (producto &gt; 1 ? &quot; productos.&quot; : &quot; producto.&quot;));
        mutex.release();

        Thread.sleep(500);
    } catch (InterruptedException ex) {
      Logger.getLogger(Almacen.class.getName()).log(Level.SEVERE, null, ex);
    } finally {
      // Consumers allow (notify) producers to add more products
      productor.release();

    }
  }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-4-2-high-level-synchronization-techniques" tabindex="-1">3.4.2. High level synchronization techniques</h2><p>The <code>java.util.concurrent</code> package provides tools for creating concurrent applications. There are some <code>thread-safe</code> classes que to use Collections and basic data types without worrying about concurrent access.</p><p>Using these classes in our code we can reduce out apps complexity.</p><h3 id="concurrent-queues" tabindex="-1">Concurrent Queues</h3><p>The <strong>BlockingQueue</strong> interface defines a <code>FIFO</code> queue that locks threads trying to get elementos from an empty queue until there will be elements in the queue. it can set a maximum number of elements in the queue so that thread are blocked if they try to add elements over that number, having to wait until elements are extracted form the queue.</p><p>Classes LinkedBlockingQueue, ArrayBlockingQueue, SynchronousQueue, PriorityBlockingQueue and DelayQueue implement interface BlockingQueue.</p><h3 id="concurrent-collections" tabindex="-1">Concurrent Collections</h3><p>Besides Queues, this package supplies Collection implementations designed for use in multithreaded contexts: ConcurrentHashMap, ConcurrentSkipListMap, ConcurrentSkipListSet, CopyOnWriteArrayList, and CopyOnWriteArraySet. When many threads are expected to access a given collection, a ConcurrentHashMap is normally preferable to a synchronized HashMap, and a ConcurrentSkipListMap is normally preferable to a synchronized TreeMap. A CopyOnWriteArrayList is preferable to a synchronized ArrayList when the expected number of reads and traversals greatly outnumber the number of updates to a list.</p><p><strong>ConcurrentMap</strong> is a subinterface of <code>java.util.Map</code> con with atomic operations to add / replace existing key,value pairs or to add non existing key,value pairs. ConcurrentHashMap is the thread-safe version for HashMap.</p><h3 id="atomic-variables" tabindex="-1">Atomic variables</h3><p>Package <code>java.util.concurrent.atomic</code> contains a small toolkit of classes that support lock-free thread-safe programming on single variables. Instances of Atomic classes maintain values that are accessed and updated using methods otherwise available for fields using associated atomic VarHandle operations.</p><p>Instances of classes AtomicBoolean, AtomicInteger, AtomicLong, and AtomicReference each provide access and updates to a single variable of the corresponding type. Each class also provides appropriate utility methods for that type. For example, classes AtomicLong and AtomicInteger provide atomic increment methods.</p><h2 id="_3-4-3-executors-callables-future" tabindex="-1">3.4.3 Executors, Callables &amp; Future</h2><p>Executors is an interface to manage thread pools. Thread pools manage a pool of worker threads. The thread pools contain a work queue which holds tasks waiting to get executed.</p><p>A thread pool can be described as a collection of Runnable/Callable objects (work queue) and a connection of running threads.</p><p>These threads are constantly running and are checking the work query for new work. If there is new work to be done they execute this Runnable/Callable.</p><p>Here you can check an illustrative example on how to use Executors</p><p><a href="https://jarroba.com/multitarea-e-hilos-en-java-con-ejemplos-ii-runnable-executors/" target="_blank" rel="noopener noreferrer">Executors: Ejemplo supermercado</a></p><p>We have used a Runnable object to define the tasks that are executed inside a thread. While defining tasks using Runnable is very convenient, it is limited by the fact that the tasks can not return a result.</p><p>What if you want to return a result from your tasks?</p><p>Well, Java provides a <code>Callable</code> interface to define tasks that return a result. A Callable is similar to Runnable except that it can return a result and throw a checked exception.</p><p>Callable interface has a single method call() which is meant to contain the code that is executed by a thread.</p><p><code>Future</code> interface has methods to obtain the result generated by a Callable object and manage its state. It represents the result of an asynchronous computation.</p><p>The result can only be retrieved using method get() when the computation has completed, blocking if necessary until it is ready.</p>`,34);function k(q,w){const i=r("DownloadPDF-component"),s=r("DocumentCover-component"),t=r("router-link");return l(),u("div",null,[n(i),n(s,{titulo:"3.4 Alternative synchronization techniques"}),m,e("nav",p,[e("ul",null,[e("li",null,[n(t,{to:"#_3-4-1-semaphores"},{default:a(()=>[v]),_:1})]),e("li",null,[n(t,{to:"#_3-4-2-high-level-synchronization-techniques"},{default:a(()=>[b]),_:1}),e("ul",null,[e("li",null,[n(t,{to:"#concurrent-queues"},{default:a(()=>[g]),_:1})]),e("li",null,[n(t,{to:"#concurrent-collections"},{default:a(()=>[f]),_:1})]),e("li",null,[n(t,{to:"#atomic-variables"},{default:a(()=>[y]),_:1})])])]),e("li",null,[n(t,{to:"#_3-4-3-executors-callables-future"},{default:a(()=>[_]),_:1})])])]),x])}const S=c(h,[["render",k],["__file","alternatives.html.vue"]]);export{S as default};