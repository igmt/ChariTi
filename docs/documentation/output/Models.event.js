Ext.data.JsonP.Models_event({"autodetected":{},"meta":{},"subclasses":[],"requires":[],"component":false,"aliases":{},"files":[{"href":null,"filename":"event.js"}],"tagname":"class","mixedInto":[],"members":[{"owner":"Models.event","meta":{},"tagname":"method","name":"fetch","id":"method-fetch"},{"owner":"Models.event","meta":{},"tagname":"method","name":"getAllEvents","id":"method-getAllEvents"},{"owner":"Models.event","meta":{},"tagname":"method","name":"getEvent","id":"method-getEvent"},{"owner":"Models.event","meta":{},"tagname":"method","name":"getNextEvent","id":"method-getNextEvent"},{"owner":"Models.event","meta":{},"tagname":"method","name":"getPreviousEvent","id":"method-getPreviousEvent"},{"owner":"Models.event","meta":{},"tagname":"method","name":"handleData","id":"method-handleData"},{"owner":"Models.event","meta":{},"tagname":"method","name":"init","id":"method-init"}],"uses":["core","http","utilities"],"alternateClassNames":[],"parentMixins":[],"superclasses":[],"name":"Models.event","id":"class-Models.event","html":"<div><pre class=\"hierarchy\"><h4>Uses</h4><div class='dependency'><a href='#!/api/core' rel='core' class='docClass'>core</a></div><div class='dependency'>http</div><div class='dependency'><a href='#!/api/utilities' rel='utilities' class='docClass'>utilities</a></div></pre><div class='doc-contents'><p>Event model</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-fetch' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Models.event'>Models.event</span><br/></div><a href='#!/api/Models.event-method-fetch' class='name expandable'>fetch</a>( <span class='pre'>_params</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fetches the remote data ...</div><div class='long'><p>Fetches the remote data</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>_params</span> : Object<div class='sub-desc'><p>The request paramaters to send</p>\n<ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The URL to retrieve data from</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>The function to run on data retrieval</p>\n</div></li><li><span class='pre'>error</span> : Function<div class='sub-desc'><p>The function to run on error</p>\n</div></li><li><span class='pre'>cache</span> : Number<div class='sub-desc'><p>The length of time to consider cached data 'warm'</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-getAllEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Models.event'>Models.event</span><br/></div><a href='#!/api/Models.event-method-getAllEvents' class='name expandable'>getAllEvents</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves all events ...</div><div class='long'><p>Retrieves all events</p>\n</div></div></div><div id='method-getEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Models.event'>Models.event</span><br/></div><a href='#!/api/Models.event-method-getEvent' class='name expandable'>getEvent</a>( <span class='pre'>_id</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves an event by ID ...</div><div class='long'><p>Retrieves an event by ID</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>_id</span> : Number<div class='sub-desc'><p>The event ID</p>\n</div></li></ul></div></div></div><div id='method-getNextEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Models.event'>Models.event</span><br/></div><a href='#!/api/Models.event-method-getNextEvent' class='name expandable'>getNextEvent</a>( <span class='pre'>_id</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves the next event ...</div><div class='long'><p>Retrieves the next event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>_id</span> : Number<div class='sub-desc'><p>The current event date</p>\n</div></li></ul></div></div></div><div id='method-getPreviousEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Models.event'>Models.event</span><br/></div><a href='#!/api/Models.event-method-getPreviousEvent' class='name expandable'>getPreviousEvent</a>( <span class='pre'>_id</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves the previous event ...</div><div class='long'><p>Retrieves the previous event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>_id</span> : Number<div class='sub-desc'><p>The current event date</p>\n</div></li></ul></div></div></div><div id='method-handleData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Models.event'>Models.event</span><br/></div><a href='#!/api/Models.event-method-handleData' class='name expandable'>handleData</a>( <span class='pre'>_data, _url, _callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Handles the data return ...</div><div class='long'><p>Handles the data return</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>_data</span> : Object<div class='sub-desc'><p>The returned data</p>\n</div></li><li><span class='pre'>_url</span> : String<div class='sub-desc'><p>The URL of the remote source</p>\n</div></li><li><span class='pre'>_callback</span> : Function<div class='sub-desc'><p>The function to run on data retrieval</p>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Models.event'>Models.event</span><br/></div><a href='#!/api/Models.event-method-init' class='name expandable'>init</a>( <span class='pre'>_id</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Initializes the model ...</div><div class='long'><p>Initializes the model</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>_id</span> : Number<div class='sub-desc'><p>The UID of the component</p>\n</div></li></ul></div></div></div></div></div></div></div>","mixins":[]});