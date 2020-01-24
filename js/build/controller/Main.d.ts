declare namespace MyApp.controller {
    interface Main extends Ext.app.Controller.Def {
        myStaticMethod?(myParam?: number): boolean;
        something: number;
    }
}
