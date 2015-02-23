# Cocos2d-js 3.1 Spritesheet Sample

### Desclaimer
See [LICENSE.md]() for license terms and conditions.

This sample is used to show the usage of spritesheets in Cocos2d-js engine with Intel(R) XDK. The assets and code are created from [2048](https://github.com/ustbhuangyi/Cocos2djs-2048) by HuangYi.

### Application Files
* asset/
* frameworks/
* src/
  * config/
    * GameConfig.js
  * gamePlay/
    * classes/
      * Grid.js
      * Tile.js
    * layer/
      * GPBackgroundLayer.js
      * GPTouchLayer.js
    * scene/
      * GamePlay.js
    * sprite/
      * TileSprite.js
  * resource.js
* index.html
* main.js
* project.json

### Overview

`www/main.js` is the entrance of the game which load resources and bootstrap game scenarios.

### Game Asset Manager
Game Asset Manager (GAM) is a tool for previewing and creating code snippets for various assets commonly used in game projects. By creating or importing a game project in Intel XDK, you will find GAM panel on the left side of "DEVELOP" tab.
With Game Asset Manager, you can generate code snippet to preload and render sprite with spritesheet.

### Preload and Render Sprite with Spritesheet
Spritesheet is consisted of packed images for rendering sprites. In Cocos2d-js spritesheets are stored in .plist file. [Texture Packer](https://www.codeandweb.com/texturepacker) is a commonly used tool to generate spritesheets for Cocos2d and other game engines.

All Cocos2d-js resources can be loaded by `cc.LoaderScene.preload(resources, callback)`. See `src/resource.js` and `main.js` for detailed usage.

After spritesheet is loaded, you can add spritesheet frames into cache with `cc.spriteFrameCache.addSpriteFrames(spritesheet_plist)`. And then use `new cc.Sprite(frame_id)` to create a sprite using frames defined in the spritesheet.

In this sample, to use spritesheet defined in `www/asset/nums/nums.plist`, Game Asset Manager can help to generate code snippet as following:

```
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
```

Just paste them into your project and make some changes according to your needs. See `src/gamePlay/scene/GamePlay.js` and `src/gamePlay/layer/GPTouchLayer.js` for detailed usage.

# Intel(R) XDK
This sample is part of the Intel(R) XDK. 
Download the Intel XDK at http://software.intel.com/en-us/html5.
