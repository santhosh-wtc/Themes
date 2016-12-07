Ext.define('ThemeTester.view.main.Menu', {
    extend: 'Ext.panel.Panel',
    xtype: 'menucontainer',
    padding: '20 0 0 20',
    // height     : '100%',

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        defaults: {
            xtype: 'button',
            width: 200
        },
        items: [{
            text: 'Main Menu',
            menu: {
                xtype: 'menu',
                defaults: {
                        iconCls: "fa fa-cog"
                    },
                ui: 'hyraxmenu',
                items: [{
                    text: 'Menu One',
                }, {
                    text: 'Menu Two',
                    menu: {
                        xtype: 'menu',
                        ui: 'hyraxmenu',
                        defaults: {
                        iconCls: "fa fa-check"
                    },
                        items: [{
                            text: 'Next Level'
                        }, {
                            text: 'Next Level',
                             disabled: true
                        }, {
                            text: 'Next Level'
                        }, {
                            xtype: 'menuseparator'
                        }, {
                            text: 'Next Level'
                        }, {
                            text: 'Next Level'
                        }, {
                            text: 'Next Level'
                        }, {
                            text: 'Next Level'
                        }, {
                            text: 'Next Level'
                        }, {
                            xtype: 'menuseparator'
                        }, {
                            text: 'Next Level'
                        }, {
                            text: 'Next Level'
                        }, {
                            text: 'Next Level'
                        }]
                    }
                }, {
                    text: 'Menu Three',
                    disabled: true,
                }, {
                    text: 'Menu Four'
                }, {
                    xtype: 'menuseparator'
                }, {
                    text: 'Menu Three'
                }, {
                    text: 'Menu Four'
                }, {
                    text: 'Menu Two',
                    menu: {
                        xtype: 'menu',
                        ui: 'hyraxmenu',
                        items: [{
                            text: 'Next Level'
                        }, {
                            text: 'Next Level'
                        }, {
                            text: 'Next Level'
                        }, {
                            xtype: 'menuseparator'
                        }, {
                            text: 'Next Level'
                        }, {
                            text: 'Next Level'
                        }, {
                            text: 'Next Level'
                        }, {
                            text: 'Next Level'
                        }, {
                            text: 'Next Level'
                        }, {
                            xtype: 'menuseparator'
                        }, {
                            text: 'Next Level',
                             disabled: true
                        }, {
                            text: 'Next Level'
                        }, {
                            text: 'Next Level'
                        }]
                    }
                }]
            }
        }]
    }],


});