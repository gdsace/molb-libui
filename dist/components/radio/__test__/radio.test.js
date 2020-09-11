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
import { mount, shallow } from "enzyme";
import { merge } from "lodash";
import * as React from "react";
import { InlineNotification } from "../../inlineNotification";
import { Radio } from "../Radio";
describe("Radio", function () {
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
    it("should render label given the label in props", function () {
        var newMockProps = merge(mockProps, {
            label: "label"
        });
        var wrapper = shallow(React.createElement(Radio, __assign({}, newMockProps)));
        expect(wrapper.find(".questionLabel").text()).toEqual("label");
    });
    it("should render prompt message given the prompt message in props and display is true", function () {
        var newMockProps = merge(mockProps, {
            promptMessage: {
                message: "message",
                display: true
            }
        });
        var wrapper = shallow(React.createElement(Radio, __assign({}, newMockProps)));
        expect(wrapper.find(InlineNotification)).toHaveLength(1);
    });
    it("should not render prompt message given the prompt message in props but display is false", function () {
        var newMockProps = merge(mockProps, {
            promptMessage: {
                message: "message",
                display: false
            }
        });
        var wrapper = shallow(React.createElement(Radio, __assign({}, newMockProps)));
        expect(wrapper.find(InlineNotification)).toHaveLength(0);
    });
    it("should render component below title given the addOnBelowText in props", function () {
        var subText = "component display below title";
        var component = React.createElement("div", { className: "addOnBelowTitle" }, subText);
        var wrapper = mount(React.createElement(Radio, __assign({}, mockProps, { addOnBelowText: component })));
        expect(wrapper
            .find(Radio)
            .find(".addOnBelowTitle")
            .text()).toBe(subText);
    });
});
//# sourceMappingURL=radio.test.js.map