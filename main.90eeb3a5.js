// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"SEFJ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CST = void 0;
var CST = {
  SCENE: {
    LOAD_SCENE: "Load",
    FIRST_SCENE: "FirstScene",
    SECOND_SCENE: "SecondScene"
  },
  IMAGES: {
    BIG_BUTTON: "Button_Big.png",
    BACK_BUTTON: "BackButton.png"
  },
  CHARACTER_SKINS: ["Boy", "Hair/Hair_Main", "Skin_Tone/Skin_1", "Top/Tshirt_Pink", "Shoes_Default", "Bottom/Short_Blue"]
};
exports.CST = CST;
},{}],"vu3y":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadScene = void 0;

var _CST = require("../Helper/CST");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var LoadScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(LoadScene, _Phaser$Scene);

  var _super = _createSuper(LoadScene);

  function LoadScene() {
    _classCallCheck(this, LoadScene);

    return _super.call(this, {
      key: _CST.CST.SCENE.LOAD_SCENE,
      pack: {
        files: [{
          type: 'scenePlugin',
          key: 'SpinePlugin',
          url: 'SpinePlugin.min.js',
          sceneKey: 'spine'
        }]
      }
    });
  }

  _createClass(LoadScene, [{
    key: "init",
    value: function init() {
      //  Inject our CSS
      var element = document.createElement('style');
      document.head.appendChild(element);
      var sheet = element.sheet;
      var styles = '@font-face { font-family: "SwisBlack"; src: url("assets/font/SwisBlack.ttf") format("opentype"); }\n';
      sheet.insertRule(styles, 0);
    }
  }, {
    key: "preload",
    value: function preload() {
      this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
      this.load.image(_CST.CST.IMAGES.BIG_BUTTON, "./assets/images/" + _CST.CST.IMAGES.BIG_BUTTON);
      this.load.image(_CST.CST.IMAGES.BACK_BUTTON, "./assets/images/" + _CST.CST.IMAGES.BACK_BUTTON);
    }
  }, {
    key: "create",
    value: function create() {
      WebFont.load({
        custom: {
          families: ['SwisBlack']
        }
      });
      this.scene.start(_CST.CST.SCENE.FIRST_SCENE);
    }
  }]);

  return LoadScene;
}(Phaser.Scene);

exports.LoadScene = LoadScene;
},{"../Helper/CST":"SEFJ"}],"tpBz":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Extention = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Extention = function Extention() {
  _classCallCheck(this, Extention);
};

exports.Extention = Extention;

_defineProperty(Extention, "buttonClick", function (scene, button, time) {
  var tween = scene.tweens.add({
    targets: button,
    duration: time,
    ease: 'Bounce',
    scaleX: 0.8,
    scaleY: 0.8,
    yoyo: true
  });
  return tween;
});
},{}],"seoO":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FirstScene = void 0;

var _CST = require("../Helper/CST");

var _Extension = require("../Helper/Extension");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FirstScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(FirstScene, _Phaser$Scene);

  var _super = _createSuper(FirstScene);

  function FirstScene() {
    _classCallCheck(this, FirstScene);

    return _super.call(this, {
      key: _CST.CST.SCENE.FIRST_SCENE,
      pack: {
        files: [{
          type: 'scenePlugin',
          key: 'SpinePlugin',
          url: 'SpinePlugin.min.js',
          sceneKey: 'spine'
        }]
      }
    });
  }

  _createClass(FirstScene, [{
    key: "preload",
    value: function preload() {
      this.load.spine("Boy", "./assets/spine/Boy/Boy.json", ["./assets/spine/Boy/Boy.atlas"]);
    }
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      this.add.text(this.game.renderer.width / 2 - 100, 70, "First Scene", {
        fontFamily: "SwisBlack",
        fontSize: 38,
        color: '#fff',
        shadow: {
          offsetX: 10,
          offsetY: 10,
          color: '#212121',
          blur: 3
        }
      });
      var boy = this.add.spine(300, 700, "Boy", "idle", true);
      var skin = boy.skeletonData.findSkin("Default");

      _CST.CST.CHARACTER_SKINS.forEach(function (skinName) {
        var tempSkin = boy.skeletonData.findSkin(skinName);
        skin.addSkin(tempSkin);
      });

      boy.setSkin(skin);
      boy.setSlotsToSetupPose();
      var bigButton = this.add.image(0, 0, _CST.CST.IMAGES.BIG_BUTTON, 0);
      var nextButtonText = this.add.text(-68, -40, "NEXT", {
        fontFamily: "SwisBlack",
        fontSize: 60,
        stroke: '#fff',
        color: '#000',
        strokeThickness: 3
      });
      var nextButton = this.add.container(this.game.renderer.width - 155, this.game.renderer.height - 80, [bigButton, nextButtonText]).setSize(210, 100);
      nextButton.setInteractive();
      var nextButtonTween = null;
      nextButton.on("pointerup", function () {
        if (nextButtonTween != null) {
          return;
        }

        nextButtonTween = _Extension.Extention.buttonClick(_this, nextButton, 80).on("complete", function () {
          nextButton.setScale(1);

          _this.scene.start(_CST.CST.SCENE.SECOND_SCENE);
        });
      });
    }
  }]);

  return FirstScene;
}(Phaser.Scene);

exports.FirstScene = FirstScene;
},{"../Helper/CST":"SEFJ","../Helper/Extension":"tpBz"}],"McIW":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecondScene = void 0;

var _CST = require("../Helper/CST");

var _Extension = require("../Helper/Extension");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SecondScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(SecondScene, _Phaser$Scene);

  var _super = _createSuper(SecondScene);

  function SecondScene() {
    var _this;

    _classCallCheck(this, SecondScene);

    _this = _super.call(this, {
      key: _CST.CST.SCENE.SECOND_SCENE,
      pack: {
        files: [{
          type: 'scenePlugin',
          key: 'SpinePlugin',
          url: 'SpinePlugin.min.js',
          sceneKey: 'spine'
        }]
      }
    });

    _defineProperty(_assertThisInitialized(_this), "characterInitialPosition", {
      x: 0,
      y: 0
    });

    _defineProperty(_assertThisInitialized(_this), "toggleInteractable", true);

    return _this;
  }

  _createClass(SecondScene, [{
    key: "create",
    value: function create() {
      var _this2 = this;

      var boy = this.add.spine(500, 700, "Boy", "idle", true);
      var skin = boy.skeletonData.findSkin("Default");

      _CST.CST.CHARACTER_SKINS.forEach(function (skinName) {
        var tempSkin = boy.skeletonData.findSkin(skinName);
        skin.addSkin(tempSkin);
      });

      boy.setSkin(skin);
      boy.setSlotsToSetupPose();
      var backButton = this.add.image(65, this.game.renderer.height - 40, _CST.CST.IMAGES.BACK_BUTTON);
      backButton.setInteractive();
      backButton.on("pointerup", function () {
        _Extension.Extention.buttonClick(_this2, backButton, 40).on("complete", function () {
          _this2.scene.start(_CST.CST.SCENE.FIRST_SCENE);
        });
      });
      this.add.text(this.game.renderer.width / 2 - 100, 70, "Second Scene", {
        fontFamily: "SwisBlack",
        fontSize: 38,
        color: '#fff',
        shadow: {
          offsetX: 10,
          offsetY: 10,
          color: '#212121',
          blur: 3
        }
      });
    }
  }]);

  return SecondScene;
}(Phaser.Scene);

exports.SecondScene = SecondScene;
},{"../Helper/CST":"SEFJ","../Helper/Extension":"tpBz"}],"HJDO":[function(require,module,exports) {
"use strict";

var _LoadScene = require("./Scene/LoadScene");

var _FirstScene = require("./Scene/FirstScene");

var _SecondScene = require("./Scene/SecondScene");

/** @type {import("../typing/phaser")} */
var game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  backgroundColor: "#577eff",
  parent: 'KansasGame',
  dom: {
    createContainer: true
  },
  scene: [_LoadScene.LoadScene, _FirstScene.FirstScene, _SecondScene.SecondScene],
  physics: {
    default: "arcade",
    arcade: {
      debug: true
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
});
},{"./Scene/LoadScene":"vu3y","./Scene/FirstScene":"seoO","./Scene/SecondScene":"McIW"}]},{},["HJDO"], null)