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
import { shallow } from "enzyme";
import * as React from "react";
import { Tooltips } from "../../tooltips";
import { CheckboxTypeQuestion } from "../CheckboxTypeQuestion";
describe("CheckboxTypeQuestion", function () {
    it("should apply disable styles correctly", function () {
        var props = {
            checked: false,
            disabled: false,
            onCheckboxClick: jest.fn(),
            questionLabel: "Music/live entertainment/game machines",
            questionDescription: "Public Entertainment Licence"
        };
        var wrapper = shallow(React.createElement(CheckboxTypeQuestion, __assign({}, props)));
        var text = wrapper.find(".textWrapper");
        expect(text.hasClass("disabled")).toBeFalsy();
        props.disabled = true;
        wrapper = shallow(React.createElement(CheckboxTypeQuestion, __assign({}, props)));
        text = wrapper.find(".textWrapper");
        expect(text.hasClass("disabled")).toBeTruthy();
        expect(wrapper.find(Tooltips).length).toBe(0);
    });
    it("should show tooltips if there is tooltip", function () {
        var props = {
            checked: false,
            disabled: false,
            onCheckboxClick: jest.fn(),
            questionLabel: "Music/live entertainment/game machines",
            questionDescription: "Public Entertainment Licence",
            tooltip: "this is tooltip"
        };
        var wrapper = shallow(React.createElement(CheckboxTypeQuestion, __assign({}, props)));
        expect(wrapper.find(Tooltips).length).toBe(1);
    });
});
//# sourceMappingURL=checkboxTypeQuestion.test.js.map