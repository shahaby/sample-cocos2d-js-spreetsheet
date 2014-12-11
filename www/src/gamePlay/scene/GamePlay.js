/**
 * Created by huangyi03 on 2014/10/9.
 */

var GamePlayLayer = cc.Layer.extend({

    backgroundLayer: null,
    touchLayer: null,
    ctor: function() {
        this._super();

        this.addCache();

        this.addBackgroundLayer();

        this.addTouchLayer();
    },

    addCache: function() {
        /**
        //
        // The Intel XDK generated this code snippet for you
        //
        // To use it in your project, follow the
        //   instructions in comments below
        //

        // Make sure you had preloaded the assets
        //   Call this preload function when loading the game
        //   TODO: merge the preload array with your existing one
        cc.LoaderScene.preload([
            'asset/nums/nums.plist',
            'asset/nums/nums.png',
            ]);
        // End of preloading assets

        // This function demonstrates how to use spritesheet "asset/nums/nums.plist"
        function demoSpriteUsage (parentCocosLayer) {
            cc.spriteFrameCache.addSpriteFrames("asset/nums/nums.plist");
            
            // Create sprite: No.0, "1024.png"
            var sprite0 = new cc.Sprite("#1024.png");
            sprite0.setPosition(50, 50);
            sprite0.setScale(1);
            parentCocosLayer.addChild(sprite0);
            
            // Create sprite: No.1, "128.png"
            var sprite1 = new cc.Sprite("#128.png");
            sprite1.setPosition(100, 100);
            sprite1.setScale(1);
            parentCocosLayer.addChild(sprite1);
            
            // Create sprite: No.2, "16.png"
            var sprite2 = new cc.Sprite("#16.png");
            sprite2.setPosition(150, 150);
            sprite2.setScale(1);
            parentCocosLayer.addChild(sprite2);
            
            // Create sprite: No.3, "2.png"
            var sprite3 = new cc.Sprite("#2.png");
            sprite3.setPosition(200, 200);
            sprite3.setScale(1);
            parentCocosLayer.addChild(sprite3);
            
            // Create sprite: No.4, "2048.png"
            var sprite4 = new cc.Sprite("#2048.png");
            sprite4.setPosition(250, 250);
            sprite4.setScale(1);
            parentCocosLayer.addChild(sprite4);
            
            // Create sprite: No.5, "256.png"
            var sprite5 = new cc.Sprite("#256.png");
            sprite5.setPosition(300, 300);
            sprite5.setScale(1);
            parentCocosLayer.addChild(sprite5);
            
            // Create sprite: No.6, "32.png"
            var sprite6 = new cc.Sprite("#32.png");
            sprite6.setPosition(350, 350);
            sprite6.setScale(1);
            parentCocosLayer.addChild(sprite6);
            
            // Create sprite: No.7, "4.png"
            var sprite7 = new cc.Sprite("#4.png");
            sprite7.setPosition(400, 400);
            sprite7.setScale(1);
            parentCocosLayer.addChild(sprite7);
            
            // Create sprite: No.8, "512.png"
            var sprite8 = new cc.Sprite("#512.png");
            sprite8.setPosition(450, 450);
            sprite8.setScale(1);
            parentCocosLayer.addChild(sprite8);
            
            // Create sprite: No.9, "64.png"
            var sprite9 = new cc.Sprite("#64.png");
            sprite9.setPosition(500, 500);
            sprite9.setScale(1);
            parentCocosLayer.addChild(sprite9);
            
            // Create sprite: No.10, "8.png"
            var sprite10 = new cc.Sprite("#8.png");
            sprite10.setPosition(550, 550);
            sprite10.setScale(1);
            parentCocosLayer.addChild(sprite10);
            
        }

         */

        cc.spriteFrameCache.addSpriteFrames(res.source_plist);
        cc.spriteFrameCache.addSpriteFrames(res.nums_plist);
    },


    addBackgroundLayer: function() {

        this.backgroundLayer = new GPBackgroundLayer(cc.color(250, 248, 239));
        this.addChild(this.backgroundLayer);
    },

    addTouchLayer: function() {
        this.touchLayer = new GPTouchLayer();
        this.addChild(this.touchLayer);
    }
});

var GamePlayScene = cc.Scene.extend({
    onEnter: function() {
        this._super();

        var layer = new GamePlayLayer();
        this.addChild(layer);

    }
});