declare namespace App.controller.documents {
	interface Page extends App.controller.MainTab {
		model: any;
		form: Ext.form.BasicForm;
		init (cfg: object): void;
		save (): void;
		onLaunch (): void;
	}
}

Ext.define('App.controller.documents.Page', <App.controller.documents.Page>{
	extend: 'App.controller.MainTab',
	requires: [
		'App.model.Page',
		'App.view.documents.Page'
	],
	init: function (cfg: any) {
		this.model = null;
    	// načtení dat:
		App.model.Page.loadByIdAndModule(
			cfg.record.data.i, 
			cfg.record.data.m, 
			(model) => {
				this.model = model;
				
				// @ts-ignore
				this.form = this.tabView.down('form').getForm();
				this.form.setValues(this.model);

				this.form.on(
					"dirtychange",
					() => {
						this.setChanged(true);
					}
				);

			}
		)
	},

	save: function () {
		var values = this.form.getValues();
		console.log(values);
		this.model.setValues(values);
		//this.model.save();
	},

    onLaunch: function () {
    	// this.config

    	//this.callParent(arguments);
    }
});
