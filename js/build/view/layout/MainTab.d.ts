declare namespace App.view.layout {
    interface MainTab extends Ext.panel.Panel.Def {
        ctrl: App.controller.MainTab;
        setTitle(title: string): void;
        save(): void;
    }
}
