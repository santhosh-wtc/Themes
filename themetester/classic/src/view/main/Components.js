Ext.define ('ThemeTester.view.main.Components', {
	extend : 'Ext.container.Container',

	xtype : 'uicomponents',

	requires : ['Ext.window.Window'],

	layout : {
		type : 'hbox'
	},	


	items : [{
		xtype : 'container',
		flex  : 1,
		
		items : [{
			xtype : 'button',
			text  : 'Empty Window',
			margin : 20,
			handler: function (){
				Ext.create('Ext.window.Window', {
					    title: 'Empty Window',
					    height: 200,
					    width: 400
					}).show();
			}
		},{
			xtype  : 'button',
			text   : 'Dialog Box',
			margin : 20,
			handler: function (button){
				button.disable();
				Ext.Msg.show({
				    title:'Dialog Box',
				    message: '',
				    buttons: Ext.Msg.YESNOCANCEL,
				    icon: Ext.Msg.QUESTION,
				    fn: function(btn) {
				        if (btn === 'yes') {
				            console.log('Yes pressed');
				        } else if (btn === 'no') {
				            console.log('No pressed');
				        } else {
				            console.log('Cancel pressed');
				        }
				        button.enable();

				    }
				});
			}
		}] 
	},{
		xtype : 'container',
		flex  : 1 
	}]
});