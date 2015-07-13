Ext.data.JsonP.Ti_Process({"tagname":"class","name":"Ti.Process","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":true,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ti.Process","members":{"cfg":[],"property":[{"name":"SIGABRT","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGABRT"},{"name":"SIGALRM","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGALRM"},{"name":"SIGBUS","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGBUS"},{"name":"SIGCHLD","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGCHLD"},{"name":"SIGEMT","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGEMT"},{"name":"SIGFPE","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGFPE"},{"name":"SIGHUP","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGHUP"},{"name":"SIGILL","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGILL"},{"name":"SIGINFO","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGINFO"},{"name":"SIGINT","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGINT"},{"name":"SIGIO","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGIO"},{"name":"SIGKILL","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGKILL"},{"name":"SIGPIPE","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGPIPE"},{"name":"SIGPROF","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGPROF"},{"name":"SIGQUIT","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGQUIT"},{"name":"SIGSEGV","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGSEGV"},{"name":"SIGSTOP","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGSTOP"},{"name":"SIGSYS","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGSYS"},{"name":"SIGTERM","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGTERM"},{"name":"SIGTRAP","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGTRAP"},{"name":"SIGTSTP","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGTSTP"},{"name":"SIGTTIN","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGTTIN"},{"name":"SIGTTOU","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGTTOU"},{"name":"SIGURG","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGURG"},{"name":"SIGUSR1","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGUSR1"},{"name":"SIGUSR2","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGUSR2"},{"name":"SIGVTALRM","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGVTALRM"},{"name":"SIGWINCH","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGWINCH"},{"name":"SIGXCPU","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGXCPU"},{"name":"SIGXFSZ","tagname":"property","owner":"Ti.Process","meta":{},"id":"property-SIGXFSZ"}],"method":[{"name":"createPipe","tagname":"method","owner":"Ti.Process","meta":{},"id":"method-createPipe"},{"name":"createProcess","tagname":"method","owner":"Ti.Process","meta":{},"id":"method-createProcess"},{"name":"launch","tagname":"method","owner":"Ti.Process","meta":{},"id":"method-launch"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Ti.Process.js","href":null},{"filename":"Ti.Process.js","href":null}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='doc-contents'><p>A module for creating processes.\nA simple example for process creation can be seen below:</p>\n\n<pre><code>//Following code executes a python script located in\n//the resources folder.\n\nvar myScript = <a href=\"#!/api/Ti.Process-method-createProcess\" rel=\"Ti.Process-method-createProcess\" class=\"docClass\">Ti.Process.createProcess</a>({\n           args:['python',Ti.API.application.resourcesPath + \"/myScript.py\"]\n   });\n\n//Launches the process  \n  myScript.launch();\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-SIGABRT' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGABRT' class='name not-expandable'>SIGABRT</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGALRM' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGALRM' class='name not-expandable'>SIGALRM</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGBUS' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGBUS' class='name not-expandable'>SIGBUS</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGCHLD' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGCHLD' class='name not-expandable'>SIGCHLD</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGEMT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGEMT' class='name not-expandable'>SIGEMT</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGFPE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGFPE' class='name not-expandable'>SIGFPE</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGHUP' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGHUP' class='name not-expandable'>SIGHUP</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGILL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGILL' class='name not-expandable'>SIGILL</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGINFO' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGINFO' class='name not-expandable'>SIGINFO</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGINT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGINT' class='name not-expandable'>SIGINT</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGIO' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGIO' class='name not-expandable'>SIGIO</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGKILL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGKILL' class='name not-expandable'>SIGKILL</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGPIPE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGPIPE' class='name not-expandable'>SIGPIPE</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGPROF' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGPROF' class='name not-expandable'>SIGPROF</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGQUIT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGQUIT' class='name not-expandable'>SIGQUIT</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGSEGV' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGSEGV' class='name not-expandable'>SIGSEGV</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGSTOP' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGSTOP' class='name not-expandable'>SIGSTOP</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGSYS' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGSYS' class='name not-expandable'>SIGSYS</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGTERM' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGTERM' class='name not-expandable'>SIGTERM</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGTRAP' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGTRAP' class='name not-expandable'>SIGTRAP</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGTSTP' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGTSTP' class='name not-expandable'>SIGTSTP</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGTTIN' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGTTIN' class='name not-expandable'>SIGTTIN</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGTTOU' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGTTOU' class='name not-expandable'>SIGTTOU</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGURG' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGURG' class='name not-expandable'>SIGURG</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGUSR1' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGUSR1' class='name not-expandable'>SIGUSR1</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGUSR2' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGUSR2' class='name not-expandable'>SIGUSR2</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGVTALRM' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGVTALRM' class='name not-expandable'>SIGVTALRM</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGWINCH' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGWINCH' class='name not-expandable'>SIGWINCH</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGXCPU' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGXCPU' class='name not-expandable'>SIGXCPU</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-SIGXFSZ' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-property-SIGXFSZ' class='name not-expandable'>SIGXFSZ</a><span> : String</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-createPipe' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-method-createPipe' class='name expandable'>createPipe</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ti.Process.Pipe\" rel=\"Ti.Process.Pipe\" class=\"docClass\">Ti.Process.Pipe</a></div><div class='description'><div class='short'>Create a pipe for attaching to/from any number of processes. ...</div><div class='long'><p>Create a pipe for attaching to/from any number of processes.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ti.Process.Pipe\" rel=\"Ti.Process.Pipe\" class=\"docClass\">Ti.Process.Pipe</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createProcess' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-method-createProcess' class='name expandable'>createProcess</a>( <span class='pre'>args, [envionment], [pipeIn], [pipeOut], [pipeErr]</span> ) : <a href=\"#!/api/Ti.Process.Process\" rel=\"Ti.Process.Process\" class=\"docClass\">Ti.Process.Process</a></div><div class='description'><div class='short'>Create a Process object. ...</div><div class='long'><p>Create a Process object. There are two main ways to use this function:</p>\n\n<pre><code><a href=\"#!/api/Ti.Process-method-createProcess\" rel=\"Ti.Process-method-createProcess\" class=\"docClass\">Ti.Process.createProcess</a>({\nargs: ['mycmd', 'arg1', 'arg2'],\nenv: {'PATH': '/something'},\nstdin: pipeIn,\nstdout: pipeOut,\nstderr: pipeErr\n});\n</code></pre>\n\n\n<pre><code><a href=\"#!/api/Ti.Process-method-createProcess\" rel=\"Ti.Process-method-createProcess\" class=\"docClass\">Ti.Process.createProcess</a>(args, environment, stdin, stdout, stderr);\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Array|Object<div class='sub-desc'><p>Either a list of command-line arguments to use for this process invocation (including the executable path) or an object describing all parameters of this Process object (see above).</p>\n</div></li><li><span class='pre'>envionment</span> : Object (optional)<div class='sub-desc'><p>An object representing the environment to pass to this process.</p>\n</div></li><li><span class='pre'>pipeIn</span> : Process.Pipe (optional)<div class='sub-desc'><p>A Process.Pipe object which the new process should use for receiving input.</p>\n</div></li><li><span class='pre'>pipeOut</span> : Process.Pipe (optional)<div class='sub-desc'><p>A Process.Pipe object which the new process should use for sending output.</p>\n</div></li><li><span class='pre'>pipeErr</span> : Process.Pipe (optional)<div class='sub-desc'><p>A Process.Pipe object which the new process should use for sending error output.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ti.Process.Process\" rel=\"Ti.Process.Process\" class=\"docClass\">Ti.Process.Process</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-launch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process'>Ti.Process</span><br/></div><a href='#!/api/Ti.Process-method-launch' class='name expandable'>launch</a>( <span class='pre'>command, arguments</span> ) : String</div><div class='description'><div class='short'>This method is deprecated. ...</div><div class='long'><p>This method is deprecated. See Process.Process.createProcess()</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>command</span> : String<div class='sub-desc'><p>The command to launch</p>\n</div></li><li><span class='pre'>arguments</span> : Array<String><div class='sub-desc'><p>A list of arguments to the command</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});