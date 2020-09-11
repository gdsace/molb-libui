var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var _this = this;
import * as Enzyme from "enzyme";
import * as React from "react";
import { Icon } from "../../icons";
import { TextArea } from "../TextArea";
describe("TextArea", function () {
    it("should show title", function () {
        var wrapper = Enzyme.shallow(React.createElement(TextArea, { title: "Lable" }));
        var lable = wrapper
            .find("label")
            .at(0)
            .text();
        expect(lable).toEqual("Lable");
    });
    it("should show helperText", function () {
        var wrapper = Enzyme.shallow(React.createElement(TextArea, { helperText: "help" }));
        var span = wrapper.find("p").text();
        expect(span).toEqual("help");
        expect(wrapper.find(".helperMsg").length).toEqual(1);
    });
    it("should show warning message when there is no error", function () {
        var wrapper = Enzyme.shallow(React.createElement(TextArea, { helperText: "help", warningMsg: "this is warning" }));
        expect(wrapper.find(".warningMsg").length).toEqual(1);
        expect(wrapper.find(".warningMsg").text()).toEqual("this is warning");
    });
    it("should show warning message which is react node when there is no error", function () {
        var warningMsgWithIcon = (React.createElement(React.Fragment, null,
            React.createElement(Icon, { type: "alert", size: "12" }),
            React.createElement("p", null, "this is warning")));
        var wrapper = Enzyme.shallow(React.createElement(TextArea, { helperText: "help", warningMsg: warningMsgWithIcon }));
        expect(wrapper.find(Icon).length).toEqual(1);
        expect(wrapper.find(".warningMsg").length).toEqual(1);
        expect(wrapper.find("p").text()).toEqual("this is warning");
    });
    it("should display error message when show error is true", function () {
        var wrapper = Enzyme.shallow(React.createElement(TextArea, { showError: true, helperText: "help", warningMsg: "this is warning", errorMsg: "error" }));
        expect(wrapper.find(".locatedError").text()).toEqual("error");
    });
    it("should show maxlength", function () {
        var wrapper = Enzyme.shallow(React.createElement(TextArea, { maxLength: 10 }));
        var span = wrapper.find(".countMsg").text();
        expect(span).toEqual("0/10");
    });
    it("should update the height to contain all content with out scroll bar", function () { return __awaiter(_this, void 0, void 0, function () {
        var props, wrapper;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    props = {
                        title: "Description",
                        id: "test",
                        displayContentWithoutScroll: true,
                        value: "fdsfsdd\nfdsfs\ndfdsfds\nsdfdsfdsfdsf\ndsfdsfs\nsfdsn",
                        disabled: true
                    };
                    document.getElementById = jest
                        .spyOn(document, "getElementById")
                        .mockReturnValue({ scrollHeight: 32 });
                    return [4 /*yield*/, Enzyme.mount(React.createElement(TextArea, __assign({}, props)))];
                case 1:
                    wrapper = _a.sent();
                    expect(wrapper.find(TextArea).state().height).toEqual(37);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=TextArea.test.js.map