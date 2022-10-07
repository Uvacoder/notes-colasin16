import{_ as e,o as s,c as t,a}from"./app.2dd6818f.js";const y=JSON.parse('{"title":"Patterns cheat sheet \u{1F4DD}","description":"","frontmatter":{},"headers":[{"level":2,"title":"Criteria","slug":"criteria","link":"#criteria","children":[{"level":3,"title":"Intent","slug":"intent","link":"#intent","children":[]},{"level":3,"title":"Problem \u{1F622}","slug":"problem-\u{1F622}","link":"#problem-\u{1F622}","children":[]},{"level":3,"title":"Solution \u{1F60B}","slug":"solution-\u{1F60B}","link":"#solution-\u{1F60B}","children":[]},{"level":3,"title":"Real-World Analogy \u{1F30D}","slug":"real-world-analogy-\u{1F30D}","link":"#real-world-analogy-\u{1F30D}","children":[]},{"level":3,"title":"Structure","slug":"structure","link":"#structure","children":[]},{"level":3,"title":"Code example","slug":"code-example","link":"#code-example","children":[]},{"level":3,"title":"Applicability","slug":"applicability","link":"#applicability","children":[]},{"level":3,"title":"How to Implement","slug":"how-to-implement","link":"#how-to-implement","children":[]},{"level":3,"title":"Pros and Cons","slug":"pros-and-cons","link":"#pros-and-cons","children":[]},{"level":3,"title":"Relations with Other Patterns","slug":"relations-with-other-patterns","link":"#relations-with-other-patterns","children":[]}]},{"level":2,"title":"Visitor","slug":"visitor","link":"#visitor","children":[{"level":3,"title":"Intent","slug":"intent-1","link":"#intent-1","children":[]},{"level":3,"title":"Problem \u{1F622}","slug":"problem-\u{1F622}-1","link":"#problem-\u{1F622}-1","children":[]},{"level":3,"title":"Solution \u{1F60B}","slug":"solution-\u{1F60B}-1","link":"#solution-\u{1F60B}-1","children":[]},{"level":3,"title":"Real-World Analogy \u{1F30D}","slug":"real-world-analogy-\u{1F30D}-1","link":"#real-world-analogy-\u{1F30D}-1","children":[]},{"level":3,"title":"Structure","slug":"structure-1","link":"#structure-1","children":[]},{"level":3,"title":"Pseudocode","slug":"pseudocode","link":"#pseudocode","children":[]},{"level":3,"title":"Applicability","slug":"applicability-1","link":"#applicability-1","children":[]},{"level":3,"title":"How to Implement","slug":"how-to-implement-1","link":"#how-to-implement-1","children":[]},{"level":3,"title":"Pros and Cons","slug":"pros-and-cons-1","link":"#pros-and-cons-1","children":[]},{"level":3,"title":"Relations with Other Patterns","slug":"relations-with-other-patterns-1","link":"#relations-with-other-patterns-1","children":[]}]}],"relativePath":"patterns/patterns/index.md"}'),o={name:"patterns/patterns/index.md"},n=a(`<h1 id="patterns-cheat-sheet-\u{1F4DD}" tabindex="-1">Patterns cheat sheet \u{1F4DD} <a class="header-anchor" href="#patterns-cheat-sheet-\u{1F4DD}" aria-hidden="true">#</a></h1><ul><li><a href="#criteria">Criteria</a></li><li><a href="#visitor">Visitor</a></li></ul><h2 id="criteria" tabindex="-1">Criteria <a class="header-anchor" href="#criteria" aria-hidden="true">#</a></h2><h3 id="intent" tabindex="-1">Intent <a class="header-anchor" href="#intent" aria-hidden="true">#</a></h3><p><em>Coming soon...</em></p><h3 id="problem-\u{1F622}" tabindex="-1">Problem \u{1F622} <a class="header-anchor" href="#problem-\u{1F622}" aria-hidden="true">#</a></h3><p><em>Coming soon...</em></p><h3 id="solution-\u{1F60B}" tabindex="-1">Solution \u{1F60B} <a class="header-anchor" href="#solution-\u{1F60B}" aria-hidden="true">#</a></h3><p><em>Coming soon...</em></p><h3 id="real-world-analogy-\u{1F30D}" tabindex="-1">Real-World Analogy \u{1F30D} <a class="header-anchor" href="#real-world-analogy-\u{1F30D}" aria-hidden="true">#</a></h3><p><em>Coming soon...</em></p><h3 id="structure" tabindex="-1">Structure <a class="header-anchor" href="#structure" aria-hidden="true">#</a></h3><p><em>Coming soon...</em></p><h3 id="code-example" tabindex="-1">Code example <a class="header-anchor" href="#code-example" aria-hidden="true">#</a></h3><p>When creating our repositories we may want to fetch our resources filtering by some of their attributes. Thats why is easy to come out with code that resembles this:</p><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">User</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./User</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UserRepository</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">create</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">User</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">findAll</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">User</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">findById</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">User</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">findByAge</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">User</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">findByName</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">User</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">findByAgeAndName</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">User</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">findByOccupation</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">occupation</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">User</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;">// findBy...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500 shared/</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500 application</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500 domain</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500 Criteria.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500 infrastructure/</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500 user/</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u251C\u2500 application/</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u251C\u2500 domain/</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u2502   \u2514\u2500 UserRepository.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u2514\u2500 infrastructure/</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u2514\u2500 MongoUserRepository.ts</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="applicability" tabindex="-1">Applicability <a class="header-anchor" href="#applicability" aria-hidden="true">#</a></h3><p><em>Coming soon...</em></p><h3 id="how-to-implement" tabindex="-1">How to Implement <a class="header-anchor" href="#how-to-implement" aria-hidden="true">#</a></h3><p><em>Coming soon...</em></p><h3 id="pros-and-cons" tabindex="-1">Pros and Cons <a class="header-anchor" href="#pros-and-cons" aria-hidden="true">#</a></h3><p><em>Coming soon...</em></p><h3 id="relations-with-other-patterns" tabindex="-1">Relations with Other Patterns <a class="header-anchor" href="#relations-with-other-patterns" aria-hidden="true">#</a></h3><p><em>Coming soon...</em></p><h2 id="visitor" tabindex="-1">Visitor <a class="header-anchor" href="#visitor" aria-hidden="true">#</a></h2><h3 id="intent-1" tabindex="-1">Intent <a class="header-anchor" href="#intent-1" aria-hidden="true">#</a></h3><p>Visitor is a behavioral design pattern that lets you separate algorithms from the objects on which they operate.</p><h3 id="problem-\u{1F622}-1" tabindex="-1">Problem \u{1F622} <a class="header-anchor" href="#problem-\u{1F622}-1" aria-hidden="true">#</a></h3><p>Imagine that your team develops an app which works with geographic information structured as one colossal graph. Each node of the graph may represent a complex entity such as a city, but also more granular things like industries, sightseeing areas, etc. The nodes are connected with others if there\u2019s a road between the real objects that they represent. Under the hood, each node type is represented by its own class, while each specific node is an object.</p><p>Exporting the graph into XML Exporting the graph into XML.</p><p>At some point, you got a task to implement exporting the graph into XML format. At first, the job seemed pretty straightforward. You planned to add an export method to each node class and then leverage recursion to go over each node of the graph, executing the export method. The solution was simple and elegant: thanks to polymorphism, you weren\u2019t coupling the code which called the export method to concrete classes of nodes.</p><p>Unfortunately, the system architect refused to allow you to alter existing node classes. He said that the code was already in production and he didn\u2019t want to risk breaking it because of a potential bug in your changes.</p><p>The XML export method had to be added into all node classes The XML export method had to be added into all node classes, which bore the risk of breaking the whole application if any bugs slipped through along with the change.</p><p>Besides, he questioned whether it makes sense to have the XML export code within the node classes. The primary job of these classes was to work with geodata. The XML export behavior would look alien there.</p><p>There was another reason for the refusal. It was highly likely that after this feature was implemented, someone from the marketing department would ask you to provide the ability to export into a different format, or request some other weird stuff. This would force you to change those precious and fragile classes again.</p><h3 id="solution-\u{1F60B}-1" tabindex="-1">Solution \u{1F60B} <a class="header-anchor" href="#solution-\u{1F60B}-1" aria-hidden="true">#</a></h3><p>The Visitor pattern suggests that you place the new behavior into a separate class called visitor, instead of trying to integrate it into existing classes. The original object that had to perform the behavior is now passed to one of the visitor\u2019s methods as an argument, providing the method access to all necessary data contained within the object.</p><p>Now, what if that behavior can be executed over objects of different classes? For example, in our case with XML export, the actual implementation will probably be a little bit different across various node classes. Thus, the visitor class may define not one, but a set of methods, each of which could take arguments of different types, like this:</p><p>class ExportVisitor implements Visitor is method doForCity(City c) { ... } method doForIndustry(Industry f) { ... } method doForSightSeeing(SightSeeing ss) { ... } // ... But how exactly would we call these methods, especially when dealing with the whole graph? These methods have different signatures, so we can\u2019t use polymorphism. To pick a proper visitor method that\u2019s able to process a given object, we\u2019d need to check its class. Doesn\u2019t this sound like a nightmare?</p><p>foreach (Node node in graph) if (node instanceof City) exportVisitor.doForCity((City) node) if (node instanceof Industry) exportVisitor.doForIndustry((Industry) node) // ... } You might ask, why don\u2019t we use method overloading? That\u2019s when you give all methods the same name, even if they support different sets of parameters. Unfortunately, even assuming that our programming language supports it at all (as Java and C# do), it won\u2019t help us. Since the exact class of a node object is unknown in advance, the overloading mechanism won\u2019t be able to determine the correct method to execute. It\u2019ll default to the method that takes an object of the base Node class.</p><p>However, the Visitor pattern addresses this problem. It uses a technique called Double Dispatch, which helps to execute the proper method on an object without cumbersome conditionals. Instead of letting the client select a proper version of the method to call, how about we delegate this choice to objects we\u2019re passing to the visitor as an argument? Since the objects know their own classes, they\u2019ll be able to pick a proper method on the visitor less awkwardly. They \u201Caccept\u201D a visitor and tell it what visiting method should be executed.</p><p>// Client code foreach (Node node in graph) node.accept(exportVisitor)</p><p>// City class City is method accept(Visitor v) is v.doForCity(this) // ...</p><p>// Industry class Industry is method accept(Visitor v) is v.doForIndustry(this) // ... I confess. We had to change the node classes after all. But at least the change is trivial and it lets us add further behaviors without altering the code once again.</p><p>Now, if we extract a common interface for all visitors, all existing nodes can work with any visitor you introduce into the app. If you find yourself introducing a new behavior related to nodes, all you have to do is implement a new visitor class.</p><h3 id="real-world-analogy-\u{1F30D}-1" tabindex="-1">Real-World Analogy \u{1F30D} <a class="header-anchor" href="#real-world-analogy-\u{1F30D}-1" aria-hidden="true">#</a></h3><p>Insurance agent A good insurance agent is always ready to offer different policies to various types of organizations.</p><p>Imagine a seasoned insurance agent who\u2019s eager to get new customers. He can visit every building in a neighborhood, trying to sell insurance to everyone he meets. Depending on the type of organization that occupies the building, he can offer specialized insurance policies:</p><p>If it\u2019s a residential building, he sells medical insurance. If it\u2019s a bank, he sells theft insurance. If it\u2019s a coffee shop, he sells fire and flood insurance.</p><h3 id="structure-1" tabindex="-1">Structure <a class="header-anchor" href="#structure-1" aria-hidden="true">#</a></h3><p>Structure of the Visitor design pattern The Visitor interface declares a set of visiting methods that can take concrete elements of an object structure as arguments. These methods may have the same names if the program is written in a language that supports overloading, but the type of their parameters must be different.</p><p>Each Concrete Visitor implements several versions of the same behaviors, tailored for different concrete element classes.</p><p>The Element interface declares a method for \u201Caccepting\u201D visitors. This method should have one parameter declared with the type of the visitor interface.</p><p>Each Concrete Element must implement the acceptance method. The purpose of this method is to redirect the call to the proper visitor\u2019s method corresponding to the current element class. Be aware that even if a base element class implements this method, all subclasses must still override this method in their own classes and call the appropriate method on the visitor object.</p><p>The Client usually represents a collection or some other complex object (for example, a Composite tree). Usually, clients aren\u2019t aware of all the concrete element classes because they work with objects from that collection via some abstract interface.</p><h3 id="pseudocode" tabindex="-1">Pseudocode <a class="header-anchor" href="#pseudocode" aria-hidden="true">#</a></h3><p>In this example, the Visitor pattern adds XML export support to the class hierarchy of geometric shapes.</p><p>Structure of the Visitor pattern example Exporting various types of objects into XML format via a visitor object.</p><p>// The element interface declares an <code>accept</code> method that takes // the base visitor interface as an argument. interface Shape is method move(x, y) method draw() method accept(v: Visitor)</p><p>// Each concrete element class must implement the <code>accept</code> // method in such a way that it calls the visitor&#39;s method that // corresponds to the element&#39;s class. class Dot implements Shape is // ...</p><pre><code>// Note that we&#39;re calling \`visitDot\`, which matches the
// current class name. This way we let the visitor know the
// class of the element it works with.
method accept(v: Visitor) is
    v.visitDot(this)
</code></pre><p>class Circle implements Shape is // ... method accept(v: Visitor) is v.visitCircle(this)</p><p>class Rectangle implements Shape is // ... method accept(v: Visitor) is v.visitRectangle(this)</p><p>class CompoundShape implements Shape is // ... method accept(v: Visitor) is v.visitCompoundShape(this)</p><p>// The Visitor interface declares a set of visiting methods that // correspond to element classes. The signature of a visiting // method lets the visitor identify the exact class of the // element that it&#39;s dealing with. interface Visitor is method visitDot(d: Dot) method visitCircle(c: Circle) method visitRectangle(r: Rectangle) method visitCompoundShape(cs: CompoundShape)</p><p>// Concrete visitors implement several versions of the same // algorithm, which can work with all concrete element classes. // // You can experience the biggest benefit of the Visitor pattern // when using it with a complex object structure such as a // Composite tree. In this case, it might be helpful to store // some intermediate state of the algorithm while executing the // visitor&#39;s methods over various objects of the structure. class XMLExportVisitor implements Visitor is method visitDot(d: Dot) is // Export the dot&#39;s ID and center coordinates.</p><pre><code>method visitCircle(c: Circle) is
    // Export the circle&#39;s ID, center coordinates and
    // radius.

method visitRectangle(r: Rectangle) is
    // Export the rectangle&#39;s ID, left-top coordinates,
    // width and height.

method visitCompoundShape(cs: CompoundShape) is
    // Export the shape&#39;s ID as well as the list of its
    // children&#39;s IDs.
</code></pre><p>// The client code can run visitor operations over any set of // elements without figuring out their concrete classes. The // accept operation directs a call to the appropriate operation // in the visitor object. class Application is field allShapes: array of Shapes</p><pre><code>method export() is
    exportVisitor = new XMLExportVisitor()

    foreach (shape in allShapes) do
        shape.accept(exportVisitor)
</code></pre><p>If you wonder why we need the accept method in this example, my article Visitor and Double Dispatch addresses this question in detail.</p><h3 id="applicability-1" tabindex="-1">Applicability <a class="header-anchor" href="#applicability-1" aria-hidden="true">#</a></h3><p>Use the Visitor when you need to perform an operation on all elements of a complex object structure (for example, an object tree).</p><p>The Visitor pattern lets you execute an operation over a set of objects with different classes by having a visitor object implement several variants of the same operation, which correspond to all target classes.</p><p>Use the Visitor to clean up the business logic of auxiliary behaviors.</p><p>The pattern lets you make the primary classes of your app more focused on their main jobs by extracting all other behaviors into a set of visitor classes.</p><p>Use the pattern when a behavior makes sense only in some classes of a class hierarchy, but not in others.</p><p>You can extract this behavior into a separate visitor class and implement only those visiting methods that accept objects of relevant classes, leaving the rest empty.</p><h3 id="how-to-implement-1" tabindex="-1">How to Implement <a class="header-anchor" href="#how-to-implement-1" aria-hidden="true">#</a></h3><p>Declare the visitor interface with a set of \u201Cvisiting\u201D methods, one per each concrete element class that exists in the program.</p><p>Declare the element interface. If you\u2019re working with an existing element class hierarchy, add the abstract \u201Cacceptance\u201D method to the base class of the hierarchy. This method should accept a visitor object as an argument.</p><p>Implement the acceptance methods in all concrete element classes. These methods must simply redirect the call to a visiting method on the incoming visitor object which matches the class of the current element.</p><p>The element classes should only work with visitors via the visitor interface. Visitors, however, must be aware of all concrete element classes, referenced as parameter types of the visiting methods.</p><p>For each behavior that can\u2019t be implemented inside the element hierarchy, create a new concrete visitor class and implement all of the visiting methods.</p><p>You might encounter a situation where the visitor will need access to some private members of the element class. In this case, you can either make these fields or methods public, violating the element\u2019s encapsulation, or nest the visitor class in the element class. The latter is only possible if you\u2019re lucky to work with a programming language that supports nested classes.</p><p>The client must create visitor objects and pass them into elements via \u201Cacceptance\u201D methods.</p><h3 id="pros-and-cons-1" tabindex="-1">Pros and Cons <a class="header-anchor" href="#pros-and-cons-1" aria-hidden="true">#</a></h3><ul><li>Open/Closed Principle. You can introduce a new behavior that can work with objects of different classes without changing these classes.</li><li>Single Responsibility Principle. You can move multiple versions of the same behavior into the same class.</li><li>A visitor object can accumulate some useful information while working with various objects. This might be handy when you want to traverse some complex object structure, such as an object tree, and apply the visitor to each object of this structure.</li><li>You need to update all visitors each time a class gets added to or removed from the element hierarchy.</li><li>Visitors might lack the necessary access to the private fields and methods of the elements that they\u2019re supposed to work with.</li></ul><h3 id="relations-with-other-patterns-1" tabindex="-1">Relations with Other Patterns <a class="header-anchor" href="#relations-with-other-patterns-1" aria-hidden="true">#</a></h3><p>You can treat Visitor as a powerful version of the Command pattern. Its objects can execute operations over various objects of different classes.</p><p>You can use Visitor to execute an operation over an entire Composite tree.</p><p>You can use Visitor along with Iterator to traverse a complex data structure and execute some operation over its elements, even if they all have different classes.</p>`,92),i=[n];function r(l,p,c,h,d,m){return s(),t("div",null,i)}const f=e(o,[["render",r]]);export{y as __pageData,f as default};
