Ext.data.JsonP.using_ruby({"guide":"<h1>Using Ruby in TideSDK</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/using_ruby-section-1'>Preface</a></li>\n<li><a href='#!/guide/using_ruby-section-2'>Overview</a></li>\n<li><a href='#!/guide/using_ruby-section-3'>Using the Ruby module</a></li>\n<li><a href='#!/guide/using_ruby-section-4'>App Manifest</a></li>\n<li><a href='#!/guide/using_ruby-section-5'>Using Ruby with TideSDK</a></li>\n<li><a href='#!/guide/using_ruby-section-6'>The libtide / Ruby Bridge</a></li>\n</ol>\n</div>\n\n<p><strong>Author:</strong> David Pratt</p>\n\n<h2 id='using_ruby-section-1'>Preface</h2>\n\n<p>This documentation applies to TideSDK 1.3.1. If you have not yet upgraded to TideSDK 1.3.1, please review the <a href=\"https://github.com/TideSDK/TideSDK/blob/1.3.1-beta/CHANGES\">CHANGES</a></p>\n\n<p>TideSDK includes a Ruby module, which allows developers to run Ruby code from within their applications.</p>\n\n<h2 id='using_ruby-section-2'>Overview</h2>\n\n<p>A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.</p>\n\n<p>This guide demonstrates how to use the ruby module in TideSDK. The ruby module in TideSDK allows you run ruby in your app in two ways:</p>\n\n<ul>\n<li>Embedding ruby code within the DOM (Document Object Model)</li>\n<li>Calling out to ruby scripts.</li>\n</ul>\n\n\n<h2 id='using_ruby-section-3'>Using the Ruby module</h2>\n\n<p>To use ruby in your app, you must include the ruby module in your app's manifest. The manifest is located in the root of your project. The following is structure of our HelloWorld app to illustrate the location:</p>\n\n<pre><code>├── CHANGELOG.txt\n├── LICENSE.txt\n├── README.md\n├── Resources\n│   ├── app.js\n│   ├── default_app_logo.png\n│   └── index.html\n├── manifest\n└── tiapp.xml\n</code></pre>\n\n<h2 id='using_ruby-section-4'>App Manifest</h2>\n\n<p>The manifest contains information about the runtime modules used by the project.</p>\n\n<p>  #appname:HelloWorld\n  #appid:com.example.helloworld\n  #publisher:prattd\n  #image:default_app_logo.png\n  #url:http://example\n  #guid:845e9c3c-c9ff-4ad4-afdf-9638092f044f\n  #desc:No description provided\n  #type:desktop\n  runtime:1.3.1\n  app:1.3.1\n  filesystem:1.3.1\n  platform:1.3.1\n  ui:1.3.1\n  codec:1.3.1\n  database:1.3.1\n  media:1.3.1\n  monkey:1.3.1\n  network:1.3.1\n  process:1.3.1\n  worker:1.3.1</p>\n\n<p>Once the module is added as illustrated below, ruby can be used now in the application with the addition of the language module:</p>\n\n<pre><code>#appname:HelloWorld\n#appid:com.example.helloworld\n#publisher:prattd\n#image:default_app_logo.png\n#url:http://example\n#guid:845e9c3c-c9ff-4ad4-afdf-9638092f044f\n#desc:No description provided\n#type:desktop\nruntime:1.3.1\napp:1.3.1\nfilesystem:1.3.1\nplatform:1.3.1\nui:1.3.1\ncodec:1.3.1\ndatabase:1.3.1\nmedia:1.3.1\nmonkey:1.3.1\nnetwork:1.3.1\nprocess:1.3.1\nworker:1.3.1\nruby:1.3.1\n</code></pre>\n\n<h2 id='using_ruby-section-5'>Using Ruby with TideSDK</h2>\n\n<p>(NOTE: This documentation applies to TideSDK 1.3.1. )\nThe TideSDK includes a Ruby module, which allows developers to run Ruby code from within their applications. Here's a quick demonstration of what this means:</p>\n\n<pre><code>&lt;script type=\"text/ruby\"&gt;\n  def my_ruby_function(l)\n    n = 0\n    l.each { |i| n+=i }\n    return n\n  end\n&lt;/script&gt;\n\n&lt;script&gt;\n  alert(my_ruby_function([1, 2, 3, 4]));\n&lt;/script&gt;\n</code></pre>\n\n<p>The Ruby module currently uses the following version of Ruby depending on your platform:\nWindows: Ruby 1.8\nOS X (Leopard): Ruby 1.8\nOS X (Snow Leopard): Ruby 1.9\nLinux (all distributions): Ruby 1.8\nIt's recommended that you write your code to be compatible with Ruby 1.8.</p>\n\n<h3>Including Ruby in your application</h3>\n\n<p>There are a few ways to include Ruby scripts on your TideSDK pages. As demonstrated above, you can include a script tag with <tt>type=\"text/ruby\"</tt>. If you have a Ruby source file that you want to include you can also do this:</p>\n\n<pre><code>&lt;script type=\"text/ruby\" src=\"myfile.rb\"/&gt;\n</code></pre>\n\n<p>As well as using <tt>script</tt> tags to include Ruby, you can use Ruby <tt>require</tt>. By default your application's Resources directory is on the Ruby import path, so this is the recommended place to include Ruby source files in your application.</p>\n\n<pre><code>&lt;script type=\"text/ruby\"&gt;\n    require 'myfile.rb'\n&lt;/script&gt;\n</code></pre>\n\n<h2 id='using_ruby-section-6'>The libtide / Ruby Bridge</h2>\n\n<p>libtide is the underlying object and communication system in TideSDK. It has its own object system, including its own spectrum of types. Whenever you call Ruby from JavaScript or JavaScript from Ruby, your data will be flowing through libtide.</p>\n\n<h3>Numbers</h3>\n\n<p>Since all JavaScript Numeric variables are floating-point, when they are passed into Ruby, they will be converted into Ruby Floats. JavaScript Numerics are converted by value rather than converted by reference.</p>\n\n<pre><code>&lt;script&gt;\n    var globalNumber = 23;\n&lt;/script&gt;\n&lt;script type=\"text/ruby\"&gt;\n    globalNumber = 13; # globalNumber will change\n\n    def changeNumber(number)\n        number = 10; # globalNumber will not change\n    end\n\n    changeNumber(globalNumber)\n&lt;/script&gt;\n</code></pre>\n\n<p>One important result of libtide using floating point numbers is that if you send a Ruby <tt>Integer</tt> into JavaScript and then back into Ruby, that number will always be a Ruby <tt>Float</tt>.</p>\n\n<h3>Booleans</h3>\n\n<p>JavaScript <tt>Booleans</tt> are also converted by value directly to a Ruby <tt>bool</tt> and vice-versa.</p>\n\n<h3>Null, undefined and nil</h3>\n\n<p>JavaScript <tt>null</tt> and <tt>undefined</tt> are always converted to Ruby <tt>nil</tt>. Ruby <tt>nil</tt> is always converted to JavaScript <tt>null</tt>.</p>\n\n<h3>Objects</h3>\n\n<p>Passing a JavaScript object to Ruby involves wrapping the JavaScript object in a Ruby object. This means that if you change a JavaScript object in Ruby, that change will be reflected in the original object. When dealing with objects that flow from one language context to another, it suffices to think of them as the same object.</p>\n\n<pre><code>&lt;script&gt;\n   var globalObject = new Object();\n   globalObject.foo = \"string\";\n&lt;/script&gt;\n&lt;script type=\"text/ruby\"&gt;\n   window.globalObject.foo = \"string2\"; # globalObject will change\n\n   def changeNumber(obj):\n       # obj is passed by reference so globalObject will change\n       obj.foo = \"string3\";    \n   changeNumber(window.globalObject)\n&lt;/script&gt;\n</code></pre>\n\n<p>Ruby objects work the same way when moving to JavaScript. Here's an example:</p>\n\n<pre><code>&lt;script type=\"text/ruby\"&gt;\n    class MyObject:\n        def __init__(self):\n            self.property = \"prop\"\n\n        def foo(self):\n            return \"foo!\"\n\n    window.globalObject = MyObject()\n&lt;/script&gt;\n&lt;script&gt;\n    alert(globalObject.property);\n    alert(globalObject.foo());\n\n    globalObject.property = \"prop again\"\n    alert(globalObject.property);\n&lt;/script&gt;\n</code></pre>\n\n<p>Ruby objects have different ways to set properties. When setting a property on a Ruby object, libtide will try to set that property in a few different ways. Take this code for example:</p>\n\n<pre><code>&lt;script type=\"text/ruby\"&gt;\n    window.globalObject = Object.new()\n&lt;/script&gt;\n&lt;script&gt;\n    globalObject.foo = \"property\";\n&lt;/script&gt;\n</code></pre>\n\n<p>When the JavaScript code attempts to set the <tt>foo</tt> property on <tt>globalObject</tt>, it will attempt several things on the Ruby object:</p>\n\n<p>Setting the <tt>foo</tt> property via the <tt>foo=</tt> if that method exists.\n<tt>foo=</tt> does not exist. Set the <tt>foo</tt> property via <tt>globalObject.instance_variable_set()</tt>\nlibtide follows a similar pattern when searching for a property.</p>\n\n<pre><code>&lt;script type=\"text/ruby\"&gt;\n    window.globalObject = Object.new()\n&lt;/script&gt;\n&lt;script&gt;\n    alert(globalObject.foo);\n&lt;/script&gt;\n</code></pre>\n\n<ol>\n<li>Return the result of <tt>globalobject.foo()</tt> if it exists.</li>\n<li>If <tt>@foo</tt> is defined in globalObject, return that.</li>\n<li><p>Otherwise call <tt>globalObject.method_missing</tt></p></li>\n<li><p>Return a value if method_missing succeeds.</p></li>\n<li>If a NoMethodError is thrown, return undefined.</li>\n<li>Otherwise throw the exception <tt>globalObject.method_missing</tt> returned.</li>\n</ol>\n\n\n<h3>Hashes</h3>\n\n<p>Ruby hashes can be passed to JavaScript. They will be Objects whose properties are just hash accesses. For instance:</p>\n\n<pre><code>&lt;script type=\"text/ruby\"&gt;\n    window.globalObject = {}\n    window.globalObject['foo'] = 'string'\n&lt;/script&gt;\n&lt;script&gt;\n    alert(globalObject.foo);\n    globalObject.property = \"propagain\"\n&lt;/script&gt;\n</code></pre>\n\n<h3>Arrays</h3>\n\n<p>JavaScript arrays in are wrapped in an Array-like object in Ruby. Be aware that although this object operates much like a Ruby Array, it is not a true Ruby Array. You should be able to use it just like a Array in most situations though.</p>\n\n<pre><code>&lt;script&gt;\n    var globalArray = [1, 2, 3, 4];\n&lt;/script&gt;\n&lt;script type=\"text/ruby\"&gt;\n    window.globalArray.each { |item|\n        <a href=\"#!/api/Ti.API-method-debug\" rel=\"Ti.API-method-debug\" class=\"docClass\">Ti.API.debug</a>(item)\n    }\n&lt;/script&gt;\n</code></pre>\n\n<p>Passing Ruby Arrays to JavaScript will result in a true JavaScript Array. That means that the JavaScript object which wraps the Ruby object will have an Array prototype and the full complement of JavaScript array methods.</p>\n\n<pre><code>&lt;script type=\"text/ruby\"&gt;\n    window.globalArray = [1, 2, 3, 4];\n&lt;/script&gt;\n&lt;script&gt;\n    globalArray.push(5);\n    globalArray.push(6);\n    var elem = gloalArray.pop(); // should be 6\n&lt;/script&gt;\n</code></pre>\n\n<h3>Exceptions</h3>\n\n<p>Exceptions that are thrown in either Ruby or JavaScript will be converted using the same rules as normal variables when bubbling up into different languages. This means that if an exception is thrown in Ruby, you should be able to catch it in JavaScript and vice-versa.</p>\n","title":"Using Ruby in TideSDK"});