/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ThemeTester.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'ThemeTester.view.main.MainController',
        'ThemeTester.view.main.MainModel',
        'ThemeTester.view.main.List',
        'ThemeTester.view.main.FormFields'
    ],

    controller: 'main',
    viewModel: 'main',
    
    title : 'ThemeTester',
    iconCls : 'x-fa fa-paint-brush',
    header  : {
        cls : 'main-tabpanel'
    },
    items: [{
        title: 'Basic UI Elements',
        items: [{
            xtype: 'formfields'
        }]        
    }, {
        title: 'Components',
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'Menus'
    }, {
        title: 'Navigation'
    }, {
        title: 'Tabs'
    }, {
        title: 'Toolbars'
    }, {
        title: 'Windows'
    }]
});
