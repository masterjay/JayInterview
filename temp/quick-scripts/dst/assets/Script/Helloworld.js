
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helloworld.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSGVsbG93b3JsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTBFQztRQXZFRyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFFdEIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFFdEIsZUFBUyxHQUFHLElBQUksQ0FBQzs7SUErRHJCLENBQUM7SUE3REcsMEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUssdUNBQWtCLEdBQXhCOzs7Ozt3QkFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7d0JBQ3pDLHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUE7O3dCQUFqQyxTQUFpQyxDQUFDO3dCQUNsQyxxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFBOzt3QkFBakMsU0FBaUMsQ0FBQzt3QkFDbEMscUJBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBQTs7d0JBQWpDLFNBQWlDLENBQUM7d0JBQ2xDLHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUE7O3dCQUFqQyxTQUFpQyxDQUFDO3dCQUNsQyxxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFBOzt3QkFBakMsU0FBaUMsQ0FBQzt3QkFDbEMscUJBQU0sSUFBSSxDQUFDLFdB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QUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQTtRQUNULENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQXRFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNLO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ0c7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDRTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNFO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7aURBQ0o7SUFYQSxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBMEU5QjtJQUFELGlCQUFDO0NBMUVELEFBMEVDLENBMUV1QyxFQUFFLENBQUMsU0FBUyxHQTBFbkQ7a0JBMUVvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxsb3dvcmxkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgc3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDpjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5DaGFuZ2VDb2xvciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5DaGFuZ2VMYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgdGV4dElucHV0ID0gbnVsbDtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy50ZXh0SW5wdXQuc3RyaW5nID0gMjtcbiAgICB9XG5cbiAgICBhc3luYyBvbkNsaWNrQ2hhbmdlQ29sb3IoKXtcbiAgICAgICAgdGhpcy5idG5DaGFuZ2VDb2xvci5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgYXdhaXQgdGhpcy5jaGFuZ2VDb2xvcihcIiNENUFCNjlcIik7XG4gICAgICAgIGF3YWl0IHRoaXMuY2hhbmdlQ29sb3IoXCIjMzY5QkZGXCIpO1xuICAgICAgICBhd2FpdCB0aGlzLmNoYW5nZUNvbG9yKFwiI0Q1QUI2OVwiKTtcbiAgICAgICAgYXdhaXQgdGhpcy5jaGFuZ2VDb2xvcihcIiMzNjlCRkZcIik7XG4gICAgICAgIGF3YWl0IHRoaXMuY2hhbmdlQ29sb3IoXCIjRDVBQjY5XCIpO1xuICAgICAgICBhd2FpdCB0aGlzLmNoYW5nZUNvbG9yKFwiIzM2OUJGRlwiKTtcbiAgICAgICAgdGhpcy5idG5DaGFuZ2VDb2xvci5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGNoYW5nZUNvbG9yKGNvbG9yKSB7XG4gICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICB0aGlzLnNwcml0ZS5ub2RlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChjb2xvcik7XG4gICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCl7XG4gICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICB9LDEwMDApXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgb25DbGlja0NoYW5nZUxhYmVsKCl7XG4gICAgICAgIGxldCB0b3RhbFRpbWUgPSBwYXJzZUZsb2F0KHRoaXMudGV4dElucHV0LnN0cmluZyk7XG4gICAgICAgIGlmKGlzTmFOKHRvdGFsVGltZSkpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYnRuQ2hhbmdlTGFiZWwuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGFiZWwubm9kZS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjZmZmZmZmXCIpXG4gICAgICAgIGxldCB0MSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgLy8gY2MubG9nKFwidDHvvJpcIit0MSk7XG4gICAgICAgIGxldCB0YXJnZXREYXRlVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpKyB0b3RhbFRpbWUqMTAwMDtcbiAgICAgICAgbGV0IGhhbGZEYXRlVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpKyB0b3RhbFRpbWUvMioxMDAwO1xuICAgICAgICB3aGlsZSAobmV3IERhdGUoKS5nZXRUaW1lKCkgPCB0YXJnZXREYXRlVGltZSlcbiAgICAgICAge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5jaGFuZ2VMYWJlbCh0b3RhbFRpbWUsdGFyZ2V0RGF0ZVRpbWUsaGFsZkRhdGVUaW1lKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IHRvdGFsVGltZS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLmJ0bkNoYW5nZUxhYmVsLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgIGxldCB0MiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgLy8gY2MubG9nKFwidDLvvJpcIit0Mik7XG4gICAgICAgIGNjLmxvZyhcIuWft+ihjOaZgumWk++8mlwiKyh0Mi10MSkvMTAwMCk7XG4gICAgfVxuXG4gICAgY2hhbmdlTGFiZWwodG90YWxUaW1lLHRhcmdldERhdGVUaW1lLGhhbGZEYXRlVGltZSl7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGxldCBwZXJjZW50ID0gMS0oKHRhcmdldERhdGVUaW1lLW5vdykvMTAwMC90b3RhbFRpbWUpO1xuICAgICAgICAgICAvLyBjYy5sb2cocGVyY2VudClcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gKHRvdGFsVGltZSpwZXJjZW50KS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgaWYobm93ID49IGhhbGZEYXRlVGltZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsLm5vZGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzgwRkY2N1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCl7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0sMTApXG4gICAgICAgIH0pXG4gICAgfVxufVxuIl19