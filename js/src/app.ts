// Debugging in browser:
Ext.Loader.setConfig({
	disableCaching: !true
});

// Test loading of custom class:
import { ClassA } from "libs/ClassA";
ClassA.Test();

// Creating an application:
Ext.application(<Ext.app.Application.Cfg>{
    extend: 'Ext.app.Application',
    name: 'App',
    appFolder: 'js/build',
    autoCreateViewport: true,
    requires: [
        'App.libs.AjaxHandlers'
    ],
    controllers: [
        'Main'
    ],
    launch: function () {
        //App.libs.AjaxHandlers.Init();
        return true;
    },
    onAppUpdate: function () {
        Ext.MessageBox.confirm(
            'Application Update', 'This application has an update, reload?',
            function (choice: string) {
                if (choice === 'yes') 
                    window.location.reload();
            },
            this
        );
    }
});