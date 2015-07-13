Ext.data.JsonP.Ti_API_Application({"tagname":"class","name":"Ti.API.Application","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ti.API.Application","members":{"cfg":[],"property":[],"method":[{"name":"getArgumentValue","tagname":"method","owner":"Ti.API.Application","meta":{},"id":"method-getArgumentValue"},{"name":"getArguments","tagname":"method","owner":"Ti.API.Application","meta":{},"id":"method-getArguments"},{"name":"getAvailableComponents","tagname":"method","owner":"Ti.API.Application","meta":{},"id":"method-getAvailableComponents"},{"name":"getAvailableModules","tagname":"method","owner":"Ti.API.Application","meta":{},"id":"method-getAvailableModules"},{"name":"getAvailableRuntimes","tagname":"method","owner":"Ti.API.Application","meta":{},"id":"method-getAvailableRuntimes"},{"name":"getBundledComponents","tagname":"method","owner":"Ti.API.Application","meta":{},"id":"method-getBundledComponents"},{"name":"getBundledModules","tagname":"method","owner":"Ti.API.Application","meta":{},"id":"method-getBundledModules"},{"name":"getBundledRuntimes","tagname":"method","owner":"Ti.API.Application","meta":{},"id":"method-getBundledRuntimes"},{"name":"getComponents","tagname":"method","owner":"Ti.API.Application","meta":{},"id":"method-getComponents"},{"name":"getDataPath","tagname":"method","owner":"Ti.API.Application","meta":{},"id":"method-getDataPath"},{"name":"getDependencies","tagname":"method","owner":"Ti.API.Application","meta":{},"id":"method-getDependencies"},{"name":"getExecutablePath","tagname":"method","owner":"Ti.API.Application","meta":{},"id":"method-getExecutablePath"},{"name":"getGUID","tagname":"method","owner":"Ti.API.Application","meta":{},"id":"method-getGUID"},{"name":"getID","tagname":"method","owner":"Ti.API.Application","meta":{},"id":"method-getID"},{"name":"getManifest","tagname":"method","owner":"Ti.API.Application","meta":{},"id":"method-getManifest"},{"name":"getManifestPath","tagname":"method","owner":"Ti.API.Application","meta":{},"id":"method-getManifestPath"},{"name":"getModules","tagname":"method","owner":"Ti.API.Application","meta":{},"id":"method-getModules"},{"name":"getName","tagname":"method","owner":"Ti.API.Application","meta":{},"id":"method-getName"},{"name":"getPID","tagname":"method","owner":"Ti.API.Application","meta":{},"id":"method-getPID"},{"name":"getPath","tagname":"method","owner":"Ti.API.Application","meta":{},"id":"method-getPath"},{"name":"getResourcesPath","tagname":"method","owner":"Ti.API.Application","meta":{},"id":"method-getResourcesPath"},{"name":"getRuntime","tagname":"method","owner":"Ti.API.Application","meta":{},"id":"method-getRuntime"},{"name":"getVersion","tagname":"method","owner":"Ti.API.Application","meta":{},"id":"method-getVersion"},{"name":"hasArgument","tagname":"method","owner":"Ti.API.Application","meta":{},"id":"method-hasArgument"},{"name":"isCurrent","tagname":"method","owner":"Ti.API.Application","meta":{},"id":"method-isCurrent"},{"name":"resolveDependencies","tagname":"method","owner":"Ti.API.Application","meta":{},"id":"method-resolveDependencies"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Ti.API.Application.js","href":null},{"filename":"Ti.API.Application.js","href":null}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='doc-contents'><p>An object representing a TideSDK application, either the currently running\napplication or one on disk.</p>\n\n<h2>Example</h2>\n\n<p>You can retrieve information about the currently running TideSDK application\nusing the <a href=\"#!/api/Ti.API-method-getApplication\" rel=\"Ti.API-method-getApplication\" class=\"docClass\">Ti.API.getApplication</a> module.</p>\n\n<pre><code>var app = Ti.API.application;\nalert(app.getPID()); //Alert the process identifier for this application.\nalert(app.getDataPath()); //Alert the path to the application's user data directory.\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getArgumentValue' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.API.Application'>Ti.API.Application</span><br/></div><a href='#!/api/Ti.API.Application-method-getArgumentValue' class='name expandable'>getArgumentValue</a>( <span class='pre'>argument</span> ) : String</div><div class='description'><div class='short'>Find the value for a given argument. ...</div><div class='long'><p>Find the value for a given argument. You may either pass\n'param' or '--param' and this method will find the command-line\nvalue for '--param=<value>'.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>argument</span> : String<div class='sub-desc'><p>The name of the argument to find the value for.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getArguments' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.API.Application'>Ti.API.Application</span><br/></div><a href='#!/api/Ti.API.Application-method-getArguments' class='name expandable'>getArguments</a>( <span class='pre'></span> ) : Array<String></div><div class='description'><div class='short'>Retrieve a list of command-line arguments passed to this application. ...</div><div class='long'><p>Retrieve a list of command-line arguments passed to this application. This\nlist will include the first argument, which is the path to the executable.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array<String></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAvailableComponents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.API.Application'>Ti.API.Application</span><br/></div><a href='#!/api/Ti.API.Application-method-getAvailableComponents' class='name expandable'>getAvailableComponents</a>( <span class='pre'></span> ) : Ti.Array<API.Component></div><div class='description'><div class='short'>Return a list of all available (installed and bundled) components\nfor this application. ...</div><div class='long'><p>Return a list of all available (installed and bundled) components\nfor this application. This is simply the list returned by\nAPI.getInstalledComponents() plus any components bundled with the\napplication. Note that bundled components do not have a version\ncurrently.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ti.Array<API.Component></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAvailableModules' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.API.Application'>Ti.API.Application</span><br/></div><a href='#!/api/Ti.API.Application-method-getAvailableModules' class='name expandable'>getAvailableModules</a>( <span class='pre'></span> ) : Ti.Array<API.Component></div><div class='description'><div class='short'>Return a list of all available (installed and bundled) modules\nfor this application. ...</div><div class='long'><p>Return a list of all available (installed and bundled) modules\nfor this application. This is simply the list returned by\nAPI.getInstalledModules() plus any components bundled with the\napplication. Note that bundled components do not have a version\ncurrently.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ti.Array<API.Component></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAvailableRuntimes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.API.Application'>Ti.API.Application</span><br/></div><a href='#!/api/Ti.API.Application-method-getAvailableRuntimes' class='name expandable'>getAvailableRuntimes</a>( <span class='pre'></span> ) : Ti.Array<API.Component></div><div class='description'><div class='short'>Return a list of all available (installed and bundled) runtimes\nfor this application. ...</div><div class='long'><p>Return a list of all available (installed and bundled) runtimes\nfor this application. This is simply the list returned by\nAPI.getInstalledModules() plus any components bundled with the\napplication. Note that bundled components do not have a version\ncurrently.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ti.Array<API.Component></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBundledComponents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.API.Application'>Ti.API.Application</span><br/></div><a href='#!/api/Ti.API.Application-method-getBundledComponents' class='name expandable'>getBundledComponents</a>( <span class='pre'></span> ) : Ti.Array<API.Component></div><div class='description'><div class='short'>Return a list of all bundled components for this for this application. ...</div><div class='long'><p>Return a list of all bundled components for this for this application.\nBundled components currently live inside the application contents directory\nin the following directories:</p>\n\n<ul>\n<li>My App.app/Contents/modules</li>\n<li>My App.app/Contents/runtime</li>\n<li>My App.app/Contents/sdk</li>\n<li>My App.app/Contents/mobilesdk</li>\n</ul>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ti.Array<API.Component></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBundledModules' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.API.Application'>Ti.API.Application</span><br/></div><a href='#!/api/Ti.API.Application-method-getBundledModules' class='name expandable'>getBundledModules</a>( <span class='pre'></span> ) : Ti.Array<API.Component></div><div class='description'><div class='short'>Return a list of all bundled modules for this for this application. ...</div><div class='long'><p>Return a list of all bundled modules for this for this application.\nBundled modules currently live inside the application contents directory\nin the \"My App.app/Contents/modules\" directory.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ti.Array<API.Component></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBundledRuntimes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.API.Application'>Ti.API.Application</span><br/></div><a href='#!/api/Ti.API.Application-method-getBundledRuntimes' class='name expandable'>getBundledRuntimes</a>( <span class='pre'></span> ) : Ti.Array<API.Component></div><div class='description'><div class='short'>Return a list of all bundled runtimes for this for this application. ...</div><div class='long'><p>Return a list of all bundled runtimes for this for this application.\nA bundled runtime currently live inside the application contents directory\nin the \"My App.app/Contents/runtime\" directory.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ti.Array<API.Component></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getComponents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.API.Application'>Ti.API.Application</span><br/></div><a href='#!/api/Ti.API.Application-method-getComponents' class='name expandable'>getComponents</a>( <span class='pre'></span> ) : Ti.Array<API.Component></div><div class='description'><div class='short'>Return a list of all resolved components for this for this application. ...</div><div class='long'><p>Return a list of all resolved components for this for this application.\nResolved components may either be installed or bundled components.\nNote that currently bundled components returned in this list do not have\na version.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ti.Array<API.Component></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getDataPath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.API.Application'>Ti.API.Application</span><br/></div><a href='#!/api/Ti.API.Application-method-getDataPath' class='name expandable'>getDataPath</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Get the path to the application's user data directory. ...</div><div class='long'><p>Get the path to the application's user data directory. This path is\nguaranteed to be writable (as opposed to the application directory\nwhich should not be written to) and is suitable for storing any\napplication files.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getDependencies' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.API.Application'>Ti.API.Application</span><br/></div><a href='#!/api/Ti.API.Application-method-getDependencies' class='name expandable'>getDependencies</a>( <span class='pre'></span> ) : Ti.Array<API.Dependency></div><div class='description'><div class='short'>Get a list of this application's dependencies. ...</div><div class='long'><p>Get a list of this application's dependencies. Dependencies\nare defined in the application manifest file.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ti.Array<API.Dependency></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getExecutablePath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.API.Application'>Ti.API.Application</span><br/></div><a href='#!/api/Ti.API.Application-method-getExecutablePath' class='name expandable'>getExecutablePath</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Get the path to this application's executable. ...</div><div class='long'><p>Get the path to this application's executable.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getGUID' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.API.Application'>Ti.API.Application</span><br/></div><a href='#!/api/Ti.API.Application-method-getGUID' class='name expandable'>getGUID</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Get this application globally unique identifier. ...</div><div class='long'><p>Get this application globally unique identifier. This is\ncurrently defined in the application manifest.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getID' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.API.Application'>Ti.API.Application</span><br/></div><a href='#!/api/Ti.API.Application-method-getID' class='name expandable'>getID</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Get this human readable id currently defined in both the\napplication manifest and the application's tiapp.xml file. ...</div><div class='long'><p>Get this human readable id currently defined in both the\napplication manifest and the application's tiapp.xml file.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getManifest' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.API.Application'>Ti.API.Application</span><br/></div><a href='#!/api/Ti.API.Application-method-getManifest' class='name expandable'>getManifest</a>( <span class='pre'></span> ) : Array<Array<String>></div><div class='description'><div class='short'>Get the contents of this application's manifest as an array\nof string pairs (array of size 2). ...</div><div class='long'><p>Get the contents of this application's manifest as an array\nof string pairs (array of size 2). Each entry in the manifest\nis a simple key-value pair. Comments are ignored.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array<Array<String>></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getManifestPath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.API.Application'>Ti.API.Application</span><br/></div><a href='#!/api/Ti.API.Application-method-getManifestPath' class='name expandable'>getManifestPath</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>\"Get the path to this application's manifest\" ...</div><div class='long'><p>\"Get the path to this application's manifest\"</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getModules' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.API.Application'>Ti.API.Application</span><br/></div><a href='#!/api/Ti.API.Application-method-getModules' class='name expandable'>getModules</a>( <span class='pre'></span> ) : Ti.Array<API.Component></div><div class='description'><div class='short'>Return a list of all resolved modules for this for this application. ...</div><div class='long'><p>Return a list of all resolved modules for this for this application.\nResolved components may either be installed or bundled components.\nNote that currently bundled components returned in this list do not have\na version.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ti.Array<API.Component></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.API.Application'>Ti.API.Application</span><br/></div><a href='#!/api/Ti.API.Application-method-getName' class='name expandable'>getName</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>\"Get this application's name.\" ...</div><div class='long'><p>\"Get this application's name.\"</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPID' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.API.Application'>Ti.API.Application</span><br/></div><a href='#!/api/Ti.API.Application-method-getPID' class='name expandable'>getPID</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Retrieve the process identifier of this application. ...</div><div class='long'><p>Retrieve the process identifier of this application. If this application\nis not the currently running application, this method will returned\n<tt>undefined</tt>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.API.Application'>Ti.API.Application</span><br/></div><a href='#!/api/Ti.API.Application-method-getPath' class='name expandable'>getPath</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Get this application's path. ...</div><div class='long'><p>Get this application's path. Note that this is the top-level path of\napplication, not the path to the application contents directory. On\nOS X currently, the application contents directory is \"[app path]/Contents\"</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getResourcesPath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.API.Application'>Ti.API.Application</span><br/></div><a href='#!/api/Ti.API.Application-method-getResourcesPath' class='name expandable'>getResourcesPath</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Return the path to this application's resources directory. ...</div><div class='long'><p>Return the path to this application's resources directory. This directory\nis the 'Resources' subdirectory of the application contents directory.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRuntime' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.API.Application'>Ti.API.Application</span><br/></div><a href='#!/api/Ti.API.Application-method-getRuntime' class='name expandable'>getRuntime</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ti.API.Component\" rel=\"Ti.API.Component\" class=\"docClass\">Ti.API.Component</a></div><div class='description'><div class='short'>Return the resolved runtime for this for this application. ...</div><div class='long'><p>Return the resolved runtime for this for this application.\nResolved components may either be installed or bundled components.\nNote that currently bundled components returned from this method\ndo not have a version.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ti.API.Component\" rel=\"Ti.API.Component\" class=\"docClass\">Ti.API.Component</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getVersion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.API.Application'>Ti.API.Application</span><br/></div><a href='#!/api/Ti.API.Application-method-getVersion' class='name expandable'>getVersion</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>\"Get this application's version.\" ...</div><div class='long'><p>\"Get this application's version.\"</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hasArgument' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.API.Application'>Ti.API.Application</span><br/></div><a href='#!/api/Ti.API.Application-method-hasArgument' class='name expandable'>hasArgument</a>( <span class='pre'>argument</span> ) : Boolean</div><div class='description'><div class='short'>Determine if the given argument is in the argument list. ...</div><div class='long'><p>Determine if the given argument is in the argument list.\nYou may either pass 'param' or '--param' and this method will\nfind the command-line argument.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>argument</span> : String<div class='sub-desc'><p>The name of the argument to search for.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isCurrent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.API.Application'>Ti.API.Application</span><br/></div><a href='#!/api/Ti.API.Application-method-isCurrent' class='name expandable'>isCurrent</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns whether or not this is the currently running application. ...</div><div class='long'><p>Returns whether or not this is the currently running application.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-resolveDependencies' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.API.Application'>Ti.API.Application</span><br/></div><a href='#!/api/Ti.API.Application-method-resolveDependencies' class='name expandable'>resolveDependencies</a>( <span class='pre'></span> ) : Ti.Array<API.Dependency></div><div class='description'><div class='short'>Attempt to resolve all the dependencies for this application. ...</div><div class='long'><p>Attempt to resolve all the dependencies for this application. Resolved components\nshould be accessible through API.Application.getComponents afterward. Note that\nthe currently running applicaiton should already have all of its dependencies resolved.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ti.Array<API.Dependency></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});