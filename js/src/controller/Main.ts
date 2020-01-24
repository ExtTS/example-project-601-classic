declare namespace App.controller {
    interface Main extends Ext.app.Controller.Def {
        myStaticMethod? (myParam?: number): boolean;
        treesWrappers: object[];
        mainTabs: object;
        getLeftAccPanel (): Ext.panel.Panel;
        getMainTabs (): Ext.tab.Panel;
        createSidePanelWrapper (treesServicesData: TreesServiceItem[], iLocal:number): App.view.layout.SideTreePanel;
        createSidePanelTree (serviceUrl: string): App.view.layout.SideTree;
        createTabCtrlAndviewIfNecessary(): void;
    }
    interface TreesServiceItem {
        serviceUrl: string;
        title: string;
    }
}

Ext.define('MyApp.controller.Main', <App.controller.Main | Ext.base.Configs>{
    extend: 'Ext.app.Controller',
    requires: [
		'App.controller.MainTab'
    ],
    statics: {
        myStaticMethod: (myParam?: number) =>{
            return myParam == null;
        }
    },
    config: <Ext.app.Controller.Cfg>{
        refs: [{
            ref: 'leftAccPanel',
            selector: 'panel[cls=left-accordion]'
        }, {
        	ref: 'mainTabs',
        	selector: 'tabpanel[cls=main-tabs]'
        }],
        init: function () {
            this.treesWrappers = [];
            this.mainTabs = {};
        },
        onLaunch: function () {
            // load info for trees:
            Ext.data.JsonP.request({
                url: "https://trainings.tomflidr.cz/extjs/app/admin/portal/trees-services",
                success: (treesServicesData: App.controller.TreesServiceItem[]) => {
                    this.fillSideAccordionWithPanelTitles(treesServicesData);
                }
            });
        }
    },
    fillSideAccordionWithPanelTitles: function (treesServicesData: App.controller.TreesServiceItem[]) {
    	for (var i = 0; i < treesServicesData.length; i++) {
    		var accWrapper = this.createSidePanelWrapper(treesServicesData, i);
    		if (i === 0) {
    			var tree = this.createSidePanelTree(treesServicesData[0].serviceUrl);
    			console.log(tree);
    			accWrapper.add(tree);
    			accWrapper.firstExpanded = true;
    		} else {
    			accWrapper.firstExpanded = false;
    		}
    		this.treesWrappers.push(accWrapper);
    	}
    	this.getLeftAccPanel().add(this.treesWrappers);
    },
    createSidePanelWrapper: function (treesServicesData, iLocal) {
    	return Ext.create('App.view.layout.SideTreePanel', {
    		title: treesServicesData[iLocal].title,
    		listeners: {
    			expand: {
    				single: true,
    				fn: () => {
    					var accWrapper = this.treesWrappers[iLocal];
    					if (accWrapper.firstExpanded) return;
    					var tree = this.createSidePanelTree(treesServicesData[iLocal].serviceUrl);
    					accWrapper.firstExpanded = true;
    					accWrapper.add(tree);
    				},
					scope:this
    			}
    		}
    	});
    },
    createSidePanelTree: function (url) {
    	var treeStore = Ext.create('App.store.AccordionTree', {
    		nodeParam: 'id',
    		proxy: Ext.create('App.store.AccordionTreeProxy', {
    			url: url
    		})
        });
        var treePanelListeners = <Ext.tree.Panel.Events>{
            itemclick: (_this: Ext.view.View, record: Ext.data.Model, item: HTMLElement, index: number, e: Ext.event.Event, eOpts: object) => {
                this.createTabCtrlAndviewIfNecessary(record);
            }
        };
    	var treePanel = Ext.create('App.view.layout.SideTree', <Ext.tree.Panel.Cfg>{
            store: treeStore,
            listeners: treePanelListeners
    	});
    	return treePanel;
    },
    createTabCtrlAndviewIfNecessary: function (record) {
    	var id = record.data.id;
    	if (this.mainTabs[id]) return;

    	var tabView:App.view.layout.MainTab;
    	var ctrlCfg:Ext.app.Application = <Ext.app.Application>{
    		record: record
    	};
    	
    	//var tabCtrl = Ext.create('App.controller.MainTab', ctrlCfg);
    	//
    	var tabCtrl:App.controller.MainTab = Ext.create(
            record.data.controller, ctrlCfg
        ) as App.controller.MainTab;
        tabCtrl.init(ctrlCfg);
        var tabViewListeners = <Ext.panel.Panel.Events>{
            beforeclose: function (panel: Ext.panel.Panel & App.controller.MainTab, eOpts: object): boolean {
                if (panel.getChanged()) {
                    if (!window.confirm("really?")) 
                        return false; // zamezí spuštění close
                }
                return true;
            },
            close: (panel: Ext.panel.Panel, eOpts: object) => {
                // zrušit ctrl
                delete this.mainTabs[id];
                Ext.destroy(tabCtrl);
            }
        };
    	tabView = Ext.create(
			record.data.controller.replace('.controller.', '.view.'), {
    			title: record.data.text,
    			listeners: tabViewListeners
			}
		) as App.view.layout.MainTab;
    	tabView.ctrl = tabCtrl;
    	tabCtrl.tabView = tabView;

    	var tabsPanel = this.getMainTabs();
    	tabsPanel.add(tabView);
    	tabsPanel.setActiveItem(tabView);

    	tabCtrl.onLaunch(ctrlCfg);

    	this.mainTabs[id] = tabCtrl;
    }
});