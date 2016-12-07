Ext.define('ThemeTester.view.main.FormFields', {
    extend: 'Ext.container.Container',
    xtype: 'formfields',

    padding: 50,

     items:[{
            xtype: 'combobox',
            fieldLabel: 'Combo Box',
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
            }
     ]

});
