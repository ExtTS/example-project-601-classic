declare namespace App.libs {
    interface AjaxHandlers extends Ext.Class.Cfg {
        Init? (): void;
    }
}

Ext.define('App.libs.AjaxHandlers', <Ext.Class.Cfg>{
	statics: {
		Init: function ():void {
			Ext.Ajax.on('requestexception', function (conn, response, options) {
				//
			});
			window.onerror = function (message, source, lineno, colno, error) {
				// error.stack
				// location.href
				// navigator.userAgent
				// navigator.platform
				
			}
		}
	}
});
