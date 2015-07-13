Ext.data.JsonP.Ti_Process_Pipe({"tagname":"class","name":"Ti.Process.Pipe","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ti.Process.Pipe","members":{"cfg":[],"property":[],"method":[{"name":"attach","tagname":"method","owner":"Ti.Process.Pipe","meta":{},"id":"method-attach"},{"name":"close","tagname":"method","owner":"Ti.Process.Pipe","meta":{},"id":"method-close"},{"name":"detach","tagname":"method","owner":"Ti.Process.Pipe","meta":{},"id":"method-detach"},{"name":"isAttached","tagname":"method","owner":"Ti.Process.Pipe","meta":{},"id":"method-isAttached"},{"name":"write","tagname":"method","owner":"Ti.Process.Pipe","meta":{},"id":"method-write"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Ti.Process.Pipe.js","href":null},{"filename":"Ti.Process.Pipe.js","href":null}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='doc-contents'><p>An object representing an IO pipe.\nAn IO Pipe helps in reading data from an input stream, processing\nthis data and then writing this to an output stream.</p>\n\n<p>This can be demonstrated with the example below.</p>\n\n<pre><code>    var echoCmd = Ti.platform === \"win32\" ? [\"C:\\\\Windows\\\\System32\\\\cmd.exe\", \"/C\", \"echo\"] : [\"/bin/echo\"];\n\n    echoCmd.push(\"Data.from.echo!\");\n\n    var moreCmd = Ti.platform === \"win32\" ? [\"C:\\\\Windows\\\\System32\\\\more.com\"] : [\"cat\"];\n\n    // Create the processes.\n    var echo = <a href=\"#!/api/Ti.Process-method-createProcess\" rel=\"Ti.Process-method-createProcess\" class=\"docClass\">Ti.Process.createProcess</a>(echoCmd);\n    var more = <a href=\"#!/api/Ti.Process-method-createProcess\" rel=\"Ti.Process-method-createProcess\" class=\"docClass\">Ti.Process.createProcess</a>(moreCmd);\n\n    //Code for displaying the data received by the 'more' process.\n    more.setOnReadLine(function(data) {\n        alert(data.toString());\n    });\n\n    //Attaching the processes through IO pipes below.\n    echo.stdout.attach(more.stdin);\n    //Launching Processes.\n    echo.launch();\n    more.launch();\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-attach' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process.Pipe'>Ti.Process.Pipe</span><br/></div><a href='#!/api/Ti.Process.Pipe-method-attach' class='name expandable'>attach</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>\"Attach an IO object to this pipe. ...</div><div class='long'><p>\"Attach an IO object to this pipe. An IO object is an object that implements a public \\\"write(Bytes)\\\". In Ti, this include FileStreams, and Pipes. You may also use your own custom IO implementation here.\"</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-close' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process.Pipe'>Ti.Process.Pipe</span><br/></div><a href='#!/api/Ti.Process.Pipe-method-close' class='name expandable'>close</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Close this pipe to further reading/writing. ...</div><div class='long'><p>Close this pipe to further reading/writing.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-detach' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process.Pipe'>Ti.Process.Pipe</span><br/></div><a href='#!/api/Ti.Process.Pipe-method-detach' class='name expandable'>detach</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Detach an IO object from this pipe. ...</div><div class='long'><p>Detach an IO object from this pipe. see Process.Pipe.attach.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isAttached' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process.Pipe'>Ti.Process.Pipe</span><br/></div><a href='#!/api/Ti.Process.Pipe-method-isAttached' class='name expandable'>isAttached</a>( <span class='pre'></span> ) : bool</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>bool</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-write' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process.Pipe'>Ti.Process.Pipe</span><br/></div><a href='#!/api/Ti.Process.Pipe-method-write' class='name expandable'>write</a>( <span class='pre'>data</span> ) : Number</div><div class='description'><div class='short'>Write data to this pipe ...</div><div class='long'><p>Write data to this pipe</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Bytes|String<div class='sub-desc'><p>a Bytes object or String to write to this pipe</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});