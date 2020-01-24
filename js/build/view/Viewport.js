Ext.define('App.MyPanel', {
    extend: 'Ext.panel.Panel',
    statics: {
        something: function () {
        }
    },
    config: {
        title: 'default title',
        initComponent: function () {
            console.log("init component 1");
            this.prdel();
            //var title:string = this.getTitle();	        // instanční metoda Ext.panel.Panel
            //console.log(title);
            //return this.callParent(arguments);		// instanční metoda Ext.Base
            //this.callParent(arguments);
        }
    },
    prdel: function () {
        this.self.addConfig;
        console.log("prdel2");
        // to nabízí jen public věci...
        this.destroy();
    }
    /*items: [{							            // property Ext.panel.Panel
        html: 'content'
    }]*/
});
Ext.define('MyApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    id: 'viewport',
    layout: 'fit',
    statics: {
        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
    },
    afterRender: function () {
        //var scope:Ext.container.Viewport = this as unknown;
        /*this.on("afterrender", () => {
            console.log(this);
            // tady this napovídá tomu, co je uvedeno v Ext.container.Viewport.Cfg
            // jinak je to ale v JS automaticky nabindované na kontext v after render metodě
        });*/
        /*scope.add([<Ext.panel.Panel.Cfg>{
            xtype: 'panel',
            title: 'New Panel',
            html: 'Everything works!'
        }]);*/
        Ext.create('App.MyPanel', {
            html: 'panel 1'
        });
        Ext.create('App.MyPanel', {
            title: 'title 2',
        });
        //this.add(myPanel1);
        //this.add(myPanel2);
        this.callParent(arguments);
    },
    listeners: {
        resize: function (_this, width, height, oldWidth, oldHeight, eOpts) {
            console.log("resize");
            //var scope:Ext.container.Viewport = this as unknown;
        },
        show: {
            single: true,
            buffer: 100,
            fn: function () {
            }
        }
    }
});
//# sourceMappingURL=Viewport.js.map