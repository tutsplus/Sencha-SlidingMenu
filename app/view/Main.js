Ext.define('tutsmenu.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.Menu'
    ],
    config: {

        layout: {
            type: 'card'
        },

        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Sliding Menu',
                items: [
                    {
                        xtype: 'button',
                        id: 'listButton',
                        iconCls: 'list',
                        ui: 'plain',
                        handler: function(){
                            if(Ext.Viewport.getMenus().left.isHidden()){
                                Ext.Viewport.showMenu('left');
                            }
                            else
                            {
                                Ext.Viewport.hideMenu('left');
                            }
                        }
                    }
                ]
            }
        ]
    },

    initialize: function(){
        Ext.Viewport.setMenu(this.createMenu(),{
            side: 'left',
            reveal: true
        });
    },

    createMenu: function(){

        var menu = Ext.create('Ext.Menu', {
            width: 250,
            scrollable: 'vertical',
            items: [
                {
                    xtype: 'button',
                    text: 'Option 1',
                    handler: function(){
                        console.log("Option 1 Tapped");
                    }
                },
                {
                    xtype: 'button',
                    text: 'Option 2',
                    handler: function(){
                        console.log("Option 2 Tapped");
                    }
                }
            ]
        });

        return menu;
    }

});
