"use strict";
cc._RF.push(module, 'e1b90/rohdEk4SdmmEZANaD', 'Helloworld');
// Script/Helloworld.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Helloworld = /** @class */ (function (_super) {
    __extends(Helloworld, _super);
    function Helloworld() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this.label = null;
        _this.btnChangeColor = null;
        _this.btnChangeLabel = null;
        _this.textInput = null;
        return _this;
    }
    Helloworld.prototype.start = function () {
        this.textInput.string = 2;
    };
    Helloworld.prototype.onClickChangeColor = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.btnChangeColor.interactable = false;
                        return [4 /*yield*/, this.changeColor("#D5AB69")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.changeColor("#369BFF")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.changeColor("#D5AB69")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.changeColor("#369BFF")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.changeColor("#D5AB69")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.changeColor("#369BFF")];
                    case 6:
                        _a.sent();
                        this.btnChangeColor.interactable = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Helloworld.prototype.changeColor = function (color) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.sprite.node.color = new cc.Color().fromHEX(color);
            setTimeout(function () {
                resolve(true);
            }, 1000);
        });
    };
    Helloworld.prototype.onClickChangeLabel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var totalTime, t1, targetDateTime, halfDateTime, t2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        totalTime = parseFloat(this.textInput.string);
                        if (isNaN(totalTime)) {
                            return [2 /*return*/];
                        }
                        this.btnChangeLabel.interactable = false;
                        this.label.node.color = new cc.Color().fromHEX("#ffffff");
                        t1 = new Date().getTime();
                        targetDateTime = new Date().getTime() + totalTime * 1000;
                        halfDateTime = new Date().getTime() + totalTime / 2 * 1000;
                        _a.label = 1;
                    case 1:
                        if (!(new Date().getTime() < targetDateTime)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.changeLabel(totalTime, targetDateTime, halfDateTime)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3:
                        this.label.string = totalTime.toString();
                        this.btnChangeLabel.interactable = true;
                        t2 = new Date().getTime();
                        // cc.log("t2："+t2);
                        cc.log("執行時間：" + (t2 - t1) / 1000);
                        return [2 /*return*/];
                }
            });
        });
    };
    Helloworld.prototype.changeLabel = function (totalTime, targetDateTime, halfDateTime) {
        var _this = this;
        return new Promise(function (resolve) {
            var now = new Date().getTime();
            var percent = 1 - ((targetDateTime - now) / 1000 / totalTime);
            // cc.log(percent)
            _this.label.string = (totalTime * percent).toFixed(2);
            if (now >= halfDateTime) {
                _this.label.node.color = new cc.Color().fromHEX("#80FF67");
            }
            setTimeout(function () {
                resolve(true);
            }, 10);
        });
    };
    __decorate([
        property(cc.Sprite)
    ], Helloworld.prototype, "sprite", void 0);
    __decorate([
        property(cc.Label)
    ], Helloworld.prototype, "label", void 0);
    __decorate([
        property(cc.Button)
    ], Helloworld.prototype, "btnChangeColor", void 0);
    __decorate([
        property(cc.Button)
    ], Helloworld.prototype, "btnChangeLabel", void 0);
    __decorate([
        property(cc.EditBox)
    ], Helloworld.prototype, "textInput", void 0);
    Helloworld = __decorate([
        ccclass
    ], Helloworld);
    return Helloworld;
}(cc.Component));
exports.default = Helloworld;

cc._RF.pop();