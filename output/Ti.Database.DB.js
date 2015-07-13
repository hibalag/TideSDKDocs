Ext.data.JsonP.Ti_Database_DB({"tagname":"class","name":"Ti.Database.DB","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ti.Database.DB","members":{"cfg":[],"property":[{"name":"lastInsertRowId","tagname":"property","owner":"Ti.Database.DB","meta":{},"id":"property-lastInsertRowId"},{"name":"rowsAffected","tagname":"property","owner":"Ti.Database.DB","meta":{},"id":"property-rowsAffected"}],"method":[{"name":"close","tagname":"method","owner":"Ti.Database.DB","meta":{},"id":"method-close"},{"name":"execute","tagname":"method","owner":"Ti.Database.DB","meta":{},"id":"method-execute"},{"name":"getPath","tagname":"method","owner":"Ti.Database.DB","meta":{},"id":"method-getPath"},{"name":"remove","tagname":"method","owner":"Ti.Database.DB","meta":{},"id":"method-remove"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Ti.Database.DB.js","href":null},{"filename":"Ti.Database.DB.js","href":null}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='doc-contents'><p>An object representing a TideSDK Database.\nAfter opening a database (<a href=\"#!/api/Ti.Database\" rel=\"Ti.Database\" class=\"docClass\">Ti.Database</a>), you can use the properties of this object to interact with it.</p>\n\n<h2>Querying Databases</h2>\n\n<p>Note - Please make sure that all queries are SQLite compatible.\nPlease refer to the code examples below:</p>\n\n<pre><code>//Open the database first\nvar db = <a href=\"#!/api/Ti.Database-method-openFile\" rel=\"Ti.Database-method-openFile\" class=\"docClass\">Ti.Database.openFile</a>(<a href=\"#!/api/Ti.Filesystem-method-getFile\" rel=\"Ti.Filesystem-method-getFile\" class=\"docClass\">Ti.Filesystem.getFile</a>(\n                              <a href=\"#!/api/Ti.Filesystem-method-getApplicationDataDirectory\" rel=\"Ti.Filesystem-method-getApplicationDataDirectory\" class=\"docClass\">Ti.Filesystem.getApplicationDataDirectory</a>(), 'customdatabase.db'));   \n\n//Create a table and insert values into it\ndb.execute(\"CREATE TABLE IF NOT EXISTS Users(id INTEGER, firstName TEXT)\");\ndb.execute(\"INSERT INTO Users VALUES(1,'Joe Bloggs')\");      \n\n//Select from Table\nvar rows = db.execute(\"SELECT * FROM Users\");\nwhile (rows.isValidRow()) {\n    //Alert the value of fields id and firstName from the Users database\n    alert('The user id is '+rows.fieldByName('id')+', and user name is '+rows.fieldByName('firstName'));\n    rows.next();    \n}\n\n//Release memory once you are done with the resultset and the database\nrows.close();\ndb.close();\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-lastInsertRowId' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Database.DB'>Ti.Database.DB</span><br/></div><a href='#!/api/Ti.Database.DB-property-lastInsertRowId' class='name not-expandable'>lastInsertRowId</a><span> : Number</span></div><div class='description'><div class='short'><p>The row id of the last insert operation.</p>\n</div><div class='long'><p>The row id of the last insert operation.</p>\n</div></div></div><div id='property-rowsAffected' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Database.DB'>Ti.Database.DB</span><br/></div><a href='#!/api/Ti.Database.DB-property-rowsAffected' class='name not-expandable'>rowsAffected</a><span> : Number</span></div><div class='description'><div class='short'><p>The number of rows affected by the last execute call.</p>\n</div><div class='long'><p>The number of rows affected by the last execute call.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-close' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Database.DB'>Ti.Database.DB</span><br/></div><a href='#!/api/Ti.Database.DB-method-close' class='name expandable'>close</a>( <span class='pre'></span> ) : void</div><div class='description'><div class='short'>Close an open Database.DB. ...</div><div class='long'><p>Close an open Database.DB. If the database is not open, this method will do nothing.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-execute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Database.DB'>Ti.Database.DB</span><br/></div><a href='#!/api/Ti.Database.DB-method-execute' class='name expandable'>execute</a>( <span class='pre'>query, [multiple]</span> ) : <a href=\"#!/api/Ti.Database.ResultSet\" rel=\"Ti.Database.ResultSet\" class=\"docClass\">Ti.Database.ResultSet</a></div><div class='description'><div class='short'>Executes an SQL query on this Database.DB. ...</div><div class='long'><p>Executes an SQL query on this Database.DB. Currently all queries must\nbe valid SQLite-style SQL.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>query</span> : String<div class='sub-desc'><p>The SQL query to execute on this Database.DB.</p>\n</div></li><li><span class='pre'>multiple</span> : Any (optional)<div class='sub-desc'><p>A variable-length argument list of values to use with the given query</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ti.Database.ResultSet\" rel=\"Ti.Database.ResultSet\" class=\"docClass\">Ti.Database.ResultSet</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Database.DB'>Ti.Database.DB</span><br/></div><a href='#!/api/Ti.Database.DB-method-getPath' class='name expandable'>getPath</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Get the full filesystem path to the database. ...</div><div class='long'><p>Get the full filesystem path to the database. If this database was\nopened via Datbase.openFile this path will be the originally path\nused, otherwise it will be the path to a WebKit database in the\napplication data directory.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Database.DB'>Ti.Database.DB</span><br/></div><a href='#!/api/Ti.Database.DB-method-remove' class='name expandable'>remove</a>( <span class='pre'></span> ) : void</div><div class='description'><div class='short'>Remove a Database.DB. ...</div><div class='long'><p>Remove a Database.DB. This method will close the database\nif it is open and remove the file from the filesystem.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});