Ext.define('App.store.AccordionTreeProxy', <Ext.data.proxy.JsonP.Def>{
	//extend: 'Ext.data.proxy.Ajax',
	extend: 'Ext.data.proxy.JsonP',
	// url: '', // url is assigned dynamicly from Main controller
	// noCache: false, //to remove param "_dc"
	pageParam: false,
	startParam: false,
	limitParam: false
});
