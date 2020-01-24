declare namespace App.view.documents {
	interface Page extends App.view.layout.MainTab {

	}
}

Ext.define('App.view.documents.Page', <App.view.documents.Page | Ext.panel.Panel.Cfg>{
	extend: 'App.view.layout.MainTab',
	items: [{
    	xtype: 'form',
    	trackResetOnLoad: true,
    	/*viewModel: {
    		type: 'Ext.app.ViewModel'
    	},*/

    	defaultType: 'textfield',
    	items: [{
    		fieldLabel: 'Address',
    		name: 'Address',
    		//bind: '{Address}',
    		allowBlank: false
    	},{
    		fieldLabel: 'Title',
    		name: 'Title',
    		//bind: '{Title}',
    		allowBlank: false
    	}],
    }]
});
