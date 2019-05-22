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
import { mount } from "enzyme";
import * as React from "react";
import { Radio } from "../Radio";
describe.only("Radio", function () {
    var optionValueArray = [
        {
            value: "value1",
            label: "label1"
        },
        {
            value: "value2",
            label: "label2"
        }
    ];
    var mockProps = {
        text: "text",
        optionList: optionValueArray,
        onChange: jest.fn(),
        disabled: false
    };
    it("can render", function () {
        var wrapper = mount(React.createElement(Radio, __assign({}, mockProps)));
        var radio = wrapper.find(Radio);
        expect(radio).toHaveLength(1);
    });
    it("it will render text and options", function () {
        var wrapper = mount(React.createElement(Radio, __assign({}, mockProps)));
        var radio = wrapper.find(Radio);
        expect(radio.text()).toBe("textlabel1label2");
    });
});
//# sourceMappingURL=radio.test.js.map