Ext.define('ThemeTester.view.main.DmoTabPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.demotabpanel',
    requires: [

    ],
    //ui: 'northaleytab',
    activeTab: 0,
    items: [{
        xtype: "mainlist",
        title: 'Tab 1'
    }, {
        xtype: 'mainlist',
        title: 'Tab 2'
    }, {
        xtype: 'mainlist',
        title: 'Tab 3'
    }, {
        xtype: 'mainlist',
        title: 'Tab 4'
    }]
});
