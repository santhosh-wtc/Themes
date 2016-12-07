Ext.define('ThemeTester.view.main.FormFields', {
    extend: 'Ext.container.Container',
    xtype: 'formfields',
    padding: '20 0 0 20',
    scrollable : true,
    height     : '100%',
     items:[{
        layout: 'hbox',
        margin: '0 0 10 0',
        items:[
        {
                xtype: 'textfield',
                fieldLabel: 'Text Box',
                emptyText: 'Input'
            },
            {
                xtype: 'button',
                margin: '0 0 0 10',
                text: 'Tree List',
                width: 275,
                handler: function() {
                    Ext.Window.create({
                        layout: 'fit',
                        width: 400,
                        height: 400,
                        padding: '20 30 5 30',
                        header: false,
                        closeAction: 'destroy',
                        plain: true,
                        dockedItems: [{
                            xtype: 'toolbar',
                            dock: 'bottom',
                            defaults: {
                                xtype: 'button',
                                width: 180
                            },
                            items: [{
                                text: 'Cancel',
                                margin: '0 0 0 75',
                                handler: function() {
                                    this.up().up().destroy();
                                }
                            }]
                        }],
                        items: [{
                            xtype: 'treepanel',
                            header: false,
                            store: store,
                            rootVisible: false,
                            animate: true,
                            reserveScrollbar: true
                        }]

                    }).show();

                }
            }
        ]
     },   
            
            {
            xtype: 'combobox',
            fieldLabel: 'Combo Box',
            ui: 'combobox',
            emptyText: 'Input',
            store: new Ext.data.SimpleStore({
                    data: [
                        [1, 'List Item 1'],
                        [2, 'List Item 2'],
                        [3, 'List Item 3'],
                        [4, 'List Item 4']                    
                    ],
                    id: 0,
                    fields: ['value', 'text']
                }),
                valueField: 'value',
                displayField: 'text',
                triggerAction: 'all',
                editable: false
            },
            {
            xtype: 'combobox',
            ui : 'dropdown',
            fieldLabel: 'Drop Down',
            emptyText: 'Select One',
            store: new Ext.data.SimpleStore({
                    data: [
                        [1, 'List Item 1'],
                        [2, 'List Item 2'],
                        [3, 'List Item 3'],
                        [4, 'List Item 4']                    
                    ],
                    id: 0,
                    fields: ['value', 'text']
                }),
                valueField: 'value',
                displayField: 'text',
                triggerAction: 'all',
                editable: false
            },
            {
            xtype: 'combobox',
            ui : 'lightdropdown',
            fieldLabel: 'Light Drop Down',
            emptyText: 'Select One',
            store: new Ext.data.SimpleStore({
                    data: [
                        [1, 'List Item 1'],
                        [2, 'List Item 2'],
                        [3, 'List Item 3'],
                        [4, 'List Item 4']                    
                    ],
                    id: 0,
                    fields: ['value', 'text']
                }),
                valueField: 'value',
                displayField: 'text',
                triggerAction: 'all',
                editable: false
            },            
            {
                xtype : 'button',
                text  : 'Normal',
                margin : 20
            },
            {
                xtype: 'button',
                text : 'Disabled',
                disabled : true,
                margin : 20
            },
            {
                xtype: 'button',
                text : 'Pressed',
                enableToggle : true,
                pressed      : true,
                margin : 20
            },
            {
                xtype: 'fieldcontainer',
                fieldLabel: 'Checkbox',
                defaultType: 'checkboxfield',
                items: [
                    {
                        boxLabel  : 'Checked',
                        checked   : true
                    }, {
                        boxLabel  : 'UnChecked',
                        checked   : false
                    },
                    {
                        boxLabel  : 'Checked',
                        disabled  : true,
                        name      : 'radio',
                        
                    }
                ]
            },
            {
                xtype: 'fieldcontainer',
                fieldLabel: 'Radio Button',
                defaultType: 'radiofield',
                items: [
                    {
                        boxLabel  : 'Checked',
                        checked   : true,
                        name      : 'radio',

                    }, 
                    {
                        boxLabel  : 'UnChecked',
                        checked   : false,
                        name      : 'radio'
                    },
                    {
                        boxLabel  : 'Disabled',
                        disabled  : true,
                        name      : 'radio',
                        
                    } 
                ]
            },
            {
                xtype : 'progressbar',
                value : 0.5,
                width : 100

            }
            
     ]

});

var store = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        children: [{
            text: 'Level 1, Item 1',
            expanded: true,
            children: [{
                text: 'Level 2, Item 1',
                children: [{
                    text: 'Level 3, Item 1',
                    children: [{
                        text: 'Level 4, Item 1'
                    }, {
                        text: 'Level 4, Item 2'
                    }]
                }, {
                    text: 'Level 3, Item 2',
                    children: [{
                        text: 'Level 4, Item 1'
                    }, {
                        text: 'Level 4, Item 2'
                    }]
                }]
            }]
        }]
    }
});