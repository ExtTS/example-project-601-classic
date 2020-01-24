declare namespace App.controller {
    interface MainTab extends Ext.app.Controller.Def {
		changed: boolean;
		tabView: App.view.layout.MainTab;
		setChanged (changed: boolean): void;
		getChanged (): boolean;
		init (config: object): void;
		save (): void;
    }
}

Ext.define('App.controller.MainTab', <App.controller.MainTab | Ext.base.Configs>{
    extend: 'Ext.app.ViewController',
    config: {
		// record z Main ctrl
	},
	changed: false,
    onLaunch: function () {
    	//this.callParent(arguments);
    },
    setChanged: function (changed?: boolean) {
    	if (!this.changed && changed) {
    		this.tabView.setTitle('*&nbsp;' + this.tabView.getTitle());
    	}
    	this.changed = changed || true;
    },
    getChanged: function () {
    	return this.changed || false;
    },

	save: function () {
		throw "not implemented";
	}

});
