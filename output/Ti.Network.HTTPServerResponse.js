Ext.data.JsonP.Ti_Network_HTTPServerResponse({"tagname":"class","name":"Ti.Network.HTTPServerResponse","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ti.Network.HTTPServerResponse","members":{"cfg":[],"property":[],"method":[{"name":"addCookie","tagname":"method","owner":"Ti.Network.HTTPServerResponse","meta":{},"id":"method-addCookie"},{"name":"setContentLength","tagname":"method","owner":"Ti.Network.HTTPServerResponse","meta":{},"id":"method-setContentLength"},{"name":"setContentType","tagname":"method","owner":"Ti.Network.HTTPServerResponse","meta":{},"id":"method-setContentType"},{"name":"setHeader","tagname":"method","owner":"Ti.Network.HTTPServerResponse","meta":{},"id":"method-setHeader"},{"name":"setReason","tagname":"method","owner":"Ti.Network.HTTPServerResponse","meta":{},"id":"method-setReason"},{"name":"setStatus","tagname":"method","owner":"Ti.Network.HTTPServerResponse","meta":{},"id":"method-setStatus"},{"name":"setStatusAndReason","tagname":"method","owner":"Ti.Network.HTTPServerResponse","meta":{},"id":"method-setStatusAndReason"},{"name":"write","tagname":"method","owner":"Ti.Network.HTTPServerResponse","meta":{},"id":"method-write"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Ti.Network.HTTPServerResponse.js","href":null},{"filename":"Ti.Network.HTTPServerResponse.js","href":null}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='doc-contents'><p>An object representing a single HTTP server response.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addCookie' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Network.HTTPServerResponse'>Ti.Network.HTTPServerResponse</span><br/></div><a href='#!/api/Ti.Network.HTTPServerResponse-method-addCookie' class='name expandable'>addCookie</a>( <span class='pre'>name, value, maxAge, domain, path</span> ) : String</div><div class='description'><div class='short'>add a cookie to this response ...</div><div class='long'><p>add a cookie to this response</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>the cookie name</p>\n</div></li><li><span class='pre'>value</span> : String<div class='sub-desc'><p>the cookie value</p>\n</div></li><li><span class='pre'>maxAge</span> : Number<div class='sub-desc'><p>\"(optional) the cookie's maximum age\"</p>\n</div></li><li><span class='pre'>domain</span> : String<div class='sub-desc'><p>\"(optional) the cookie's domain\"</p>\n</div></li><li><span class='pre'>path</span> : String<div class='sub-desc'><p>\"(optional) the cookie's path\"</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setContentLength' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Network.HTTPServerResponse'>Ti.Network.HTTPServerResponse</span><br/></div><a href='#!/api/Ti.Network.HTTPServerResponse-method-setContentLength' class='name expandable'>setContentLength</a>( <span class='pre'>length</span> ) : String</div><div class='description'><div class='short'>set the content length of this response ...</div><div class='long'><p>set the content length of this response</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>length</span> : Number<div class='sub-desc'><p>the content length, i.e 100</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setContentType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Network.HTTPServerResponse'>Ti.Network.HTTPServerResponse</span><br/></div><a href='#!/api/Ti.Network.HTTPServerResponse-method-setContentType' class='name expandable'>setContentType</a>( <span class='pre'>type</span> ) : String</div><div class='description'><div class='short'>set the content type of this response ...</div><div class='long'><p>set the content type of this response</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>\"the content type, i.e \\\"text/plain\\\"\"</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setHeader' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Network.HTTPServerResponse'>Ti.Network.HTTPServerResponse</span><br/></div><a href='#!/api/Ti.Network.HTTPServerResponse-method-setHeader' class='name expandable'>setHeader</a>( <span class='pre'>name, value</span> ) : String</div><div class='description'><div class='short'>set an HTTP header of this response ...</div><div class='long'><p>set an HTTP header of this response</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>the header name</p>\n</div></li><li><span class='pre'>value</span> : String<div class='sub-desc'><p>the header value</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setReason' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Network.HTTPServerResponse'>Ti.Network.HTTPServerResponse</span><br/></div><a href='#!/api/Ti.Network.HTTPServerResponse-method-setReason' class='name expandable'>setReason</a>( <span class='pre'>reason</span> ) : String</div><div class='description'><div class='short'>set the reason of this response ...</div><div class='long'><p>set the reason of this response</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>reason</span> : String<div class='sub-desc'><p>\"the reason, i.e \\\"OK\\\"\"</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setStatus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Network.HTTPServerResponse'>Ti.Network.HTTPServerResponse</span><br/></div><a href='#!/api/Ti.Network.HTTPServerResponse-method-setStatus' class='name expandable'>setStatus</a>( <span class='pre'>status</span> ) : String</div><div class='description'><div class='short'>set the status of this response ...</div><div class='long'><p>set the status of this response</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>status</span> : String<div class='sub-desc'><p>\"the status, i.e \\\"200\\\"\"</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setStatusAndReason' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Network.HTTPServerResponse'>Ti.Network.HTTPServerResponse</span><br/></div><a href='#!/api/Ti.Network.HTTPServerResponse-method-setStatusAndReason' class='name expandable'>setStatusAndReason</a>( <span class='pre'>status, reason</span> ) : String</div><div class='description'><div class='short'>set the status and reason of this response ...</div><div class='long'><p>set the status and reason of this response</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>status</span> : String<div class='sub-desc'><p>\"the status, i.e \\\"200\\\"\"</p>\n</div></li><li><span class='pre'>reason</span> : String<div class='sub-desc'><p>\"the reason, i.e \\\"OK\\\"\"</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-write' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Network.HTTPServerResponse'>Ti.Network.HTTPServerResponse</span><br/></div><a href='#!/api/Ti.Network.HTTPServerResponse-method-write' class='name expandable'>write</a>( <span class='pre'>data</span> ) : String</div><div class='description'><div class='short'>write content into this response ...</div><div class='long'><p>write content into this response</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : String<div class='sub-desc'><p>content to write (can be string or bytes content)</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});