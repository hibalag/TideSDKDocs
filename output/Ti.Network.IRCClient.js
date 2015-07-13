Ext.data.JsonP.Ti_Network_IRCClient({"tagname":"class","name":"Ti.Network.IRCClient","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ti.Network.IRCClient","members":{"cfg":[],"property":[{"name":"connected","tagname":"property","owner":"Ti.Network.IRCClient","meta":{},"id":"property-connected"}],"method":[{"name":"connect","tagname":"method","owner":"Ti.Network.IRCClient","meta":{},"id":"method-connect"},{"name":"disconnect","tagname":"method","owner":"Ti.Network.IRCClient","meta":{},"id":"method-disconnect"},{"name":"getNick","tagname":"method","owner":"Ti.Network.IRCClient","meta":{},"id":"method-getNick"},{"name":"getUsers","tagname":"method","owner":"Ti.Network.IRCClient","meta":{},"id":"method-getUsers"},{"name":"isOp","tagname":"method","owner":"Ti.Network.IRCClient","meta":{},"id":"method-isOp"},{"name":"isVoice","tagname":"method","owner":"Ti.Network.IRCClient","meta":{},"id":"method-isVoice"},{"name":"join","tagname":"method","owner":"Ti.Network.IRCClient","meta":{},"id":"method-join"},{"name":"send","tagname":"method","owner":"Ti.Network.IRCClient","meta":{},"id":"method-send"},{"name":"setNick","tagname":"method","owner":"Ti.Network.IRCClient","meta":{},"id":"method-setNick"},{"name":"unjoin","tagname":"method","owner":"Ti.Network.IRCClient","meta":{},"id":"method-unjoin"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Ti.Network.IRCClient.js","href":null},{"filename":"Ti.Network.IRCClient.js","href":null}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='doc-contents'><p>An object representing an IRC client connection. [DEPRECATED]</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-connected' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Network.IRCClient'>Ti.Network.IRCClient</span><br/></div><a href='#!/api/Ti.Network.IRCClient-property-connected' class='name not-expandable'>connected</a><span> : String</span></div><div class='description'><div class='short'><p>The connected property of an IRCClient object</p>\n</div><div class='long'><p>The connected property of an IRCClient object</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-connect' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Network.IRCClient'>Ti.Network.IRCClient</span><br/></div><a href='#!/api/Ti.Network.IRCClient-method-connect' class='name expandable'>connect</a>( <span class='pre'>hostname, port, nick, name, user, pass, callback</span> ) : String</div><div class='description'><div class='short'>Connects an IRC to the host specified during creation of the IRCClient object ...</div><div class='long'><p>Connects an IRC to the host specified during creation of the IRCClient object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>hostname</span> : String<div class='sub-desc'><p>the hostname</p>\n</div></li><li><span class='pre'>port</span> : Number<div class='sub-desc'><p>the port</p>\n</div></li><li><span class='pre'>nick</span> : String<div class='sub-desc'><p>the users nickname</p>\n</div></li><li><span class='pre'>name</span> : String<div class='sub-desc'><p>the users full name</p>\n</div></li><li><span class='pre'>user</span> : String<div class='sub-desc'><p>the users login name</p>\n</div></li><li><span class='pre'>pass</span> : String<div class='sub-desc'><p>the users password</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>a callback function to recieve IRC events.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-disconnect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Network.IRCClient'>Ti.Network.IRCClient</span><br/></div><a href='#!/api/Ti.Network.IRCClient-method-disconnect' class='name expandable'>disconnect</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Disconnects an IRC connection ...</div><div class='long'><p>Disconnects an IRC connection</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getNick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Network.IRCClient'>Ti.Network.IRCClient</span><br/></div><a href='#!/api/Ti.Network.IRCClient-method-getNick' class='name expandable'>getNick</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the nick name for the connection ...</div><div class='long'><p>Returns the nick name for the connection</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getUsers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Network.IRCClient'>Ti.Network.IRCClient</span><br/></div><a href='#!/api/Ti.Network.IRCClient-method-getUsers' class='name expandable'>getUsers</a>( <span class='pre'></span> ) : Array<String></div><div class='description'><div class='short'>Returns a list of users for the channel ...</div><div class='long'><p>Returns a list of users for the channel</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array<String></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isOp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Network.IRCClient'>Ti.Network.IRCClient</span><br/></div><a href='#!/api/Ti.Network.IRCClient-method-isOp' class='name expandable'>isOp</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Checks whether a user has OP status ...</div><div class='long'><p>Checks whether a user has OP status</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isVoice' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Network.IRCClient'>Ti.Network.IRCClient</span><br/></div><a href='#!/api/Ti.Network.IRCClient-method-isVoice' class='name expandable'>isVoice</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Checks whether a user has VOICE status ...</div><div class='long'><p>Checks whether a user has VOICE status</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-join' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Network.IRCClient'>Ti.Network.IRCClient</span><br/></div><a href='#!/api/Ti.Network.IRCClient-method-join' class='name expandable'>join</a>( <span class='pre'>channel</span> ) : String</div><div class='description'><div class='short'>Joins a channel ...</div><div class='long'><p>Joins a channel</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>channel</span> : String<div class='sub-desc'><p>channel to join to</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-send' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Network.IRCClient'>Ti.Network.IRCClient</span><br/></div><a href='#!/api/Ti.Network.IRCClient-method-send' class='name expandable'>send</a>( <span class='pre'>channel, message</span> ) : String</div><div class='description'><div class='short'>Sends data to the IRC connection ...</div><div class='long'><p>Sends data to the IRC connection</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>channel</span> : String<div class='sub-desc'><p>the channel to send the data to</p>\n</div></li><li><span class='pre'>message</span> : String<div class='sub-desc'><p>message to send</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setNick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Network.IRCClient'>Ti.Network.IRCClient</span><br/></div><a href='#!/api/Ti.Network.IRCClient-method-setNick' class='name expandable'>setNick</a>( <span class='pre'>nick</span> ) : String</div><div class='description'><div class='short'>Sets the nick name for the connection ...</div><div class='long'><p>Sets the nick name for the connection</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>nick</span> : String<div class='sub-desc'><p>nickname to use</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-unjoin' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Network.IRCClient'>Ti.Network.IRCClient</span><br/></div><a href='#!/api/Ti.Network.IRCClient-method-unjoin' class='name expandable'>unjoin</a>( <span class='pre'>channel</span> ) : String</div><div class='description'><div class='short'>Leaves a channel ...</div><div class='long'><p>Leaves a channel</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>channel</span> : String<div class='sub-desc'><p>channel to leave</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});