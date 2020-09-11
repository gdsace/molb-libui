import { mount } from "enzyme";
import { noop } from "lodash";
import * as React from "react";
import { NumberPicker } from "../NumberPicker";
describe("NumberPicker Section", function () {
    it("should have only plus button on if quantity is minimum", function () {
        var wrapper = mount(React.createElement(NumberPicker, { min: 0, max: 50, quantity: 0, onQuantityChange: noop, handleInputChange: noop }));
        expect(wrapper
            .find("button")
            .at(0)
            .props().disabled).toEqual(true);
        expect(wrapper
            .find("button")
            .at(1)
            .props().disabled).toEqual(false);
    });
    it("should have only minus button if quantity is equals to or more than maximum", function () {
        var wrapper = mount(React.createElement(NumberPicker, { min: 0, max: 50, quantity: 50, onQuantityChange: noop, handleInputChange: noop }));
        expect(wrapper
            .find("button")
            .at(0)
            .props().disabled).toEqual(false);
        expect(wrapper
            .find("button")
            .at(1)
            .props().disabled).toEqual(true);
    });
    it("should have both minus and plus buttons in between min and max quantities", function () {
        var wrapper = mount(React.createElement(NumberPicker, { min: 0, max: 50, quantity: 25, onQuantityChange: noop, handleInputChange: noop }));
        expect(wrapper
            .find("button")
            .at(0)
            .props().disabled).toEqual(false);
        expect(wrapper
            .find("button")
            .at(1)
            .props().disabled).toEqual(false);
    });
    it("should have both minus and plus buttons in between min and max quantities", function () {
        var wrapper = mount(React.createElement(NumberPicker, { min: 0, max: 50, quantity: 25, onQuantityChange: noop, handleInputChange: noop }));
        expect(wrapper
            .find("button")
            .at(0)
            .props().disabled).toEqual(false);
        expect(wrapper
            .find("button")
            .at(1)
            .props().disabled).toEqual(false);
    });
    it("should have error border if input quantity is more than max", function () {
        var wrapper = mount(React.createElement(NumberPicker, { min: 0, max: 50, quantity: 55, onQuantityChange: noop, handleInputChange: noop }));
        expect(wrapper
            .find("input")
            .at(0)
            .hasClass("inputError")).toEqual(true);
    });
});
//# sourceMappingURL=NumberPicker.test.js.map