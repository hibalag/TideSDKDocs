Ext.data.JsonP.Ti_Filesystem_Filestream({"tagname":"class","name":"Ti.Filesystem.Filestream","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ti.Filesystem.Filestream","members":{"cfg":[],"property":[{"name":"MODE_APPEND","tagname":"property","owner":"Ti.Filesystem.Filestream","meta":{},"id":"property-MODE_APPEND"},{"name":"MODE_READ","tagname":"property","owner":"Ti.Filesystem.Filestream","meta":{},"id":"property-MODE_READ"},{"name":"MODE_WRITE","tagname":"property","owner":"Ti.Filesystem.Filestream","meta":{},"id":"property-MODE_WRITE"}],"method":[{"name":"close","tagname":"method","owner":"Ti.Filesystem.Filestream","meta":{},"id":"method-close"},{"name":"isOpen","tagname":"method","owner":"Ti.Filesystem.Filestream","meta":{},"id":"method-isOpen"},{"name":"open","tagname":"method","owner":"Ti.Filesystem.Filestream","meta":{},"id":"method-open"},{"name":"read","tagname":"method","owner":"Ti.Filesystem.Filestream","meta":{},"id":"method-read"},{"name":"readLine","tagname":"method","owner":"Ti.Filesystem.Filestream","meta":{},"id":"method-readLine"},{"name":"ready","tagname":"method","owner":"Ti.Filesystem.Filestream","meta":{},"id":"method-ready"},{"name":"seek","tagname":"method","owner":"Ti.Filesystem.Filestream","meta":{},"id":"method-seek"},{"name":"tell","tagname":"method","owner":"Ti.Filesystem.Filestream","meta":{},"id":"method-tell"},{"name":"write","tagname":"method","owner":"Ti.Filesystem.Filestream","meta":{},"id":"method-write"},{"name":"writeLine","tagname":"method","owner":"Ti.Filesystem.Filestream","meta":{},"id":"method-writeLine"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Ti.Filesystem.Filestream.js","href":null},{"filename":"Ti.Filesystem.Filestream.js","href":null}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='doc-contents'><p>A object for reading and writing data to files.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-MODE_APPEND' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.Filestream'>Ti.Filesystem.Filestream</span><br/></div><a href='#!/api/Ti.Filesystem.Filestream-property-MODE_APPEND' class='name not-expandable'>MODE_APPEND</a><span> : Number</span></div><div class='description'><div class='short'><p>A constant representing append mode for file access.</p>\n</div><div class='long'><p>A constant representing append mode for file access.</p>\n</div></div></div><div id='property-MODE_READ' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.Filestream'>Ti.Filesystem.Filestream</span><br/></div><a href='#!/api/Ti.Filesystem.Filestream-property-MODE_READ' class='name not-expandable'>MODE_READ</a><span> : Number</span></div><div class='description'><div class='short'><p>A constant representing read mode for file access.</p>\n</div><div class='long'><p>A constant representing read mode for file access.</p>\n</div></div></div><div id='property-MODE_WRITE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.Filestream'>Ti.Filesystem.Filestream</span><br/></div><a href='#!/api/Ti.Filesystem.Filestream-property-MODE_WRITE' class='name not-expandable'>MODE_WRITE</a><span> : String</span></div><div class='description'><div class='short'><p>A constant representing write mode for file access.</p>\n</div><div class='long'><p>A constant representing write mode for file access.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-close' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.Filestream'>Ti.Filesystem.Filestream</span><br/></div><a href='#!/api/Ti.Filesystem.Filestream-method-close' class='name expandable'>close</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Close this Filsystem.Filstream. ...</div><div class='long'><p>Close this Filsystem.Filstream. Return true if the stream closed\nwithout any problems and false otherwise.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isOpen' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.Filestream'>Ti.Filesystem.Filestream</span><br/></div><a href='#!/api/Ti.Filesystem.Filestream-method-isOpen' class='name expandable'>isOpen</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Return true if this Fileystem.Filestream is open and false otherwise. ...</div><div class='long'><p>Return true if this Fileystem.Filestream is open and false otherwise.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-open' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.Filestream'>Ti.Filesystem.Filestream</span><br/></div><a href='#!/api/Ti.Filesystem.Filestream-method-open' class='name expandable'>open</a>( <span class='pre'>[binary], [append]</span> ) : Boolean</div><div class='description'><div class='short'>Open this Filesystem.Filestream. ...</div><div class='long'><p>Open this Filesystem.Filestream. Return true if the operation is\nsuccessful or false otherwise.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>binary</span> : Boolean (optional)<div class='sub-desc'><p>Whether or not to open this stream in binary mode. If not supplied this will be false.</p>\n</div></li><li><span class='pre'>append</span> : Boolean (optional)<div class='sub-desc'><p>Whether or not to open this stream in append mode. If not supplied this will be false.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-read' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.Filestream'>Ti.Filesystem.Filestream</span><br/></div><a href='#!/api/Ti.Filesystem.Filestream-method-read' class='name expandable'>read</a>( <span class='pre'>size</span> ) : Bytes</div><div class='description'><div class='short'>Read data from a Filesystem.Filestream into a Bytes object\nand return it. ...</div><div class='long'><p>Read data from a Filesystem.Filestream into a Bytes object\nand return it. This method will throw an exception if the\noperation fails.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>size</span> : Integer<div class='sub-desc'><p>Number of bytes to read from the file.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Bytes</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-readLine' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.Filestream'>Ti.Filesystem.Filestream</span><br/></div><a href='#!/api/Ti.Filesystem.Filestream-method-readLine' class='name expandable'>readLine</a>( <span class='pre'></span> ) : Bytes|null</div><div class='description'><div class='short'>Reads one line from this Filesystem.Filestream. ...</div><div class='long'><p>Reads one line from this Filesystem.Filestream. The stream must\nbe open before using this method (or an exception will be thrown).\nEach call will return a Bytes object until the end of the stream,\nwhen null will be returned.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Bytes|null</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-ready' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.Filestream'>Ti.Filesystem.Filestream</span><br/></div><a href='#!/api/Ti.Filesystem.Filestream-method-ready' class='name expandable'>ready</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Return true if this Filesystem.Filestream is ready for IO operations or false otherwise. ...</div><div class='long'><p>Return true if this Filesystem.Filestream is ready for IO operations or false otherwise.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-seek' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.Filestream'>Ti.Filesystem.Filestream</span><br/></div><a href='#!/api/Ti.Filesystem.Filestream-method-seek' class='name expandable'>seek</a>( <span class='pre'>offset, dir</span> ) : void</div><div class='description'><div class='short'>Set the current read/write position with in the file. ...</div><div class='long'><p>Set the current read/write position with in the file.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>offset</span> : Integer<div class='sub-desc'><p>new position relative to the absolute position specifed by the dir parameter</p>\n</div></li><li><span class='pre'>dir</span> : Integer<div class='sub-desc'><p>specifies an absolute position in the file where offset will be applied</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-tell' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.Filestream'>Ti.Filesystem.Filestream</span><br/></div><a href='#!/api/Ti.Filesystem.Filestream-method-tell' class='name expandable'>tell</a>( <span class='pre'></span> ) : Integer</div><div class='description'><div class='short'>Returns current position in file relative to the beginning ...</div><div class='long'><p>Returns current position in file relative to the beginning</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Integer</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-write' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.Filestream'>Ti.Filesystem.Filestream</span><br/></div><a href='#!/api/Ti.Filesystem.Filestream-method-write' class='name expandable'>write</a>( <span class='pre'>data</span> ) : Boolean</div><div class='description'><div class='short'>Writes a line to this Filesystem.Filestream. ...</div><div class='long'><p>Writes a line to this Filesystem.Filestream. Return true if this\noperation succeeds and false otherwise.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : String|Bytes|Number<div class='sub-desc'><p>The data to write to this Filesystem.Filestream.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-writeLine' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.Filestream'>Ti.Filesystem.Filestream</span><br/></div><a href='#!/api/Ti.Filesystem.Filestream-method-writeLine' class='name expandable'>writeLine</a>( <span class='pre'>data</span> ) : Boolean</div><div class='description'><div class='short'>Writes a line to this Filesystem.Filestream. ...</div><div class='long'><p>Writes a line to this Filesystem.Filestream. The data will be followed\nby the platform dependent line-ending sequence. Return true if this\noperation succeeds and false otherwise.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : String|Bytes|Number<div class='sub-desc'><p>The data to write to this Filesystem.Filestream.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});