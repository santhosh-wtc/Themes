Ext.define('ThemeTester.view.main.FormFields', {
    extend: 'Ext.container.Container',
    xtype: 'formfields',

    padding: 50,
    scrollable : true,
    height     : '100%',
     items:[{
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
            	xtype: 'textfield',
            	fieldLabel: 'Text Box',
            	emptyText: 'Input'
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
            },{
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
