Ext.data.JsonP.Ti_Database({"tagname":"class","name":"Ti.Database","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":true,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ti.Database","members":{"cfg":[],"property":[],"method":[{"name":"open","tagname":"method","owner":"Ti.Database","meta":{},"id":"method-open"},{"name":"openFile","tagname":"method","owner":"Ti.Database","meta":{},"id":"method-openFile"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Ti.Database.js","href":null},{"filename":"Ti.Database.js","href":null}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='doc-contents'><p>A module for dealing with Database storage.\nThere are two ways to use databases in TideSDK - HTML5 Databases and the TideSDK Database API. Both API's make\nuse of SQLite backends.</p>\n\n<h2>Opening a Database</h2>\n\n<p>You can open databases in TideSDK using the <a href=\"#!/api/Ti.Database-method-open\" rel=\"Ti.Database-method-open\" class=\"docClass\">Ti.Database.open</a> and <a href=\"#!/api/Ti.Database-method-openFile\" rel=\"Ti.Database-method-openFile\" class=\"docClass\">Ti.Database.openFile</a> methods.\nUsing <a href=\"#!/api/Ti.Database-method-open\" rel=\"Ti.Database-method-open\" class=\"docClass\">Ti.Database.open</a> will create a database which is WebKit compatible in the same directory.\n(Only if the database file doesn't exist.)</p>\n\n<pre><code>    //Create a database which is WebKit compatible.\n    var db = <a href=\"#!/api/Ti.Database-method-open\" rel=\"Ti.Database-method-open\" class=\"docClass\">Ti.Database.open</a>('customdatabase');\n</code></pre>\n\n<p>Alternatively, you can create a database and open it using the <a href=\"#!/api/Ti.Database-method-openFile\" rel=\"Ti.Database-method-openFile\" class=\"docClass\">Ti.Database.openFile</a> method. This method\naccepts a file path or a <a href=\"#!/api/Ti.Filesystem.File\" rel=\"Ti.Filesystem.File\" class=\"docClass\">Ti.Filesystem.File</a> object.</p>\n\n<pre><code>    //Create a database\n    var db = <a href=\"#!/api/Ti.Database-method-openFile\" rel=\"Ti.Database-method-openFile\" class=\"docClass\">Ti.Database.openFile</a>(<a href=\"#!/api/Ti.Filesystem-method-getFile\" rel=\"Ti.Filesystem-method-getFile\" class=\"docClass\">Ti.Filesystem.getFile</a>(\n                                  <a href=\"#!/api/Ti.Filesystem-method-getApplicationDataDirectory\" rel=\"Ti.Filesystem-method-getApplicationDataDirectory\" class=\"docClass\">Ti.Filesystem.getApplicationDataDirectory</a>(), 'customdatabase.db'));   \n</code></pre>\n\n<h2>Querying Databases</h2>\n\n<p>Please refer to the <a href=\"#!/api/Ti.Database.DB\" rel=\"Ti.Database.DB\" class=\"docClass\">Ti.Database.DB</a> documentation.</p>\n\n<p>Note - It is recommended that you store all data in the application data directory and not the application resources\nor contents directory as those may not be writeable.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-open' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Database'>Ti.Database</span><br/></div><a href='#!/api/Ti.Database-method-open' class='name expandable'>open</a>( <span class='pre'>name</span> ) : <a href=\"#!/api/Ti.Database.DB\" rel=\"Ti.Database.DB\" class=\"docClass\">Ti.Database.DB</a></div><div class='description'><div class='short'>Open a WebKit HTML5 compatible-database, given the name of the database\nto open. ...</div><div class='long'><p>Open a WebKit HTML5 compatible-database, given the name of the database\nto open. WebKit HTML5 databases are stored per-security origin and are\nnot available between security origins. A security origin is composed\nof a URL scheme and hostname pair.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the database. The call will create the database if it does not exist.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ti.Database.DB\" rel=\"Ti.Database.DB\" class=\"docClass\">Ti.Database.DB</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-openFile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Database'>Ti.Database</span><br/></div><a href='#!/api/Ti.Database-method-openFile' class='name expandable'>openFile</a>( <span class='pre'>path</span> ) : <a href=\"#!/api/Ti.Database.DB\" rel=\"Ti.Database.DB\" class=\"docClass\">Ti.Database.DB</a></div><div class='description'><div class='short'>Open a database, given a path to an sqlite file. ...</div><div class='long'><p>Open a database, given a path to an sqlite file.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : String<div class='sub-desc'><p>Path to an SQLite file to store the database in. If the file does not exist, it will be created.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ti.Database.DB\" rel=\"Ti.Database.DB\" class=\"docClass\">Ti.Database.DB</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});