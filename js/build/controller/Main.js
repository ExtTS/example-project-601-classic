Ext.define('MyApp.controller.Main', {
    // tady mi to nabídne i private věci.
    statics: {
        myStaticMethod: function (myParam) {
            return myParam == null;
        }
    },
    extend: 'Ext.app.Controller',
    refs: {},
    something: 0,
    init: function () {
        // this. tady mi to nabídne jen public věci...
        console.log('Main controller init.');
        this.something = 5;
    }
});
//# sourceMappingURL=Main.js.map