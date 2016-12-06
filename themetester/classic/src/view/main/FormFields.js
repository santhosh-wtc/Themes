Ext.define('ThemeTester.view.main.FormFields', {
    extend: 'Ext.container.Container',
    xtype: 'formfields',

    html : 'Form Field',
    padding: 50,

     items:[
      {
            xtype: 'combobox',
            fieldLabel: 'Test Combo',
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
            }
     ]

});
