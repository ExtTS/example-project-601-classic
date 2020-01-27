Ext.define('App.store.AccordionTree', {
    extend: 'Ext.data.TreeStore',
    requires: [
        'App.store.AccordionTreeProxy'
    ],
    config: {
        autoLoad: false,
        nodeParam: 'id',
        // proxy: {type: 'ajax', url: 'ur is set dynamicly from Main controller throught '} 
        root: {
            expanded: true
        },
        /*
        folderSort: true,
        sorters: [{
            property: 'sequence',
            direction: 'ASC'
        }],
        */
        listeners: {
            beforeload: function (store, operation, eOpts) {
                var nodeRawValues = operation.node.raw, operationParams = operation.config.params;
                if (typeof (nodeRawValues) == 'undefined') {
                    operationParams.id = '0';
                    operationParams.module = '';
                }
                else {
                    operationParams.id = nodeRawValues.i;
                    operationParams.module = nodeRawValues.m;
                }
                return true;
            },
            load: function (_this, records, successful, operation, node, eOpts) {
                console.log("loaded");
            }
        }
    }
});
//# sourceMappingURL=AccordionTree.js.map