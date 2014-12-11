/**
 * Created by huangyi03 on 2014/10/9.
 */

var GPBackgroundLayer = cc.LayerColor.extend({

    ctor: function(color) {

        this._super(color);

        this.initBackground();

    },

    initBackground: function() {
        var menuBg, gridBg, tileBg,
            size = GC.size, // Tiles per row
            gridWidth = GC.w - 20, // Grid width
            tileWidth = 105, // tile width
            gap = 16, // tile gap is 16
            gridX = 10, // coordination of grid x
            gridY = GC.h - 140, // coordination of grid y
            texSource = cc.textureCache.addImage(res.soucre_png),
            texSourceBatch = new cc.SpriteBatchNode(texSource);

        //menu background
        menuBg = new cc.Sprite('#menu.png');
        menuBg.attr({
            x: GC.w_2,
            y: GC.h - 60.5
        });
        this.addChild(menuBg);

        //game background
        gridBg = new cc.Scale9Sprite('background.png');
        gridBg.attr({
            x: GC.w_2,
            y: gridY - gridWidth / 2,
            width: gridWidth,
            height: gridWidth
        });
        this.addChild(gridBg);

        //create tile background
        for (var y = 0; y < size; y++) {
            for (var x = 0; x < size; x++) {
                tileBg = new cc.Sprite('#backtile.png');
                tileBg.attr({
                    x: gridX + (tileWidth + gap) * x + gap + tileWidth / 2,
                    y: gridY - (tileWidth + gap) * y - gap - tileWidth / 2
                });
                texSourceBatch.addChild(tileBg);
            }
        }
        this.addChild(texSourceBatch);

    }
});