define(["require", "exports", "libs/ClassA"], function (require, exports, ClassA_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ClassA_1.ClassA.Test();
    Ext.application({
        extend: 'Ext.app.Application',
        name: 'MyApp',
        appFolder: 'js/build',
        autoCreateViewport: true,
        controllers: ['Main'],
        launch: function () {
            console.log("Application launch.");
            var viewPort = Ext.getCmp('viewport');
            viewPort.add([{
                    xtype: 'panel',
                    title: 'New Panel',
                    html: 'Everything works!'
                }]);
            /*
            var myPanel1 = Ext.create('App.MyPanel', {
                html: 'panel 1'
            });
            var myPanel2 = Ext.create('App.MyPanel', {
                title: 'title 2',
            });
            viewPort.add(myPanel1);
            viewPort.add(myPanel2);
            */
            //console.log(myPanel1, myPanel2);
            /*Ext.Ajax.request(<Ext.data.Connection.methodParams.request.Options>{
                url: "",
                callback: function () {
    
                }.bind(this)
            });*/
            return true;
        }
    });
});
//# sourceMappingURL=app.js.map