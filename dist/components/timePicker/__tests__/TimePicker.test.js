import * as Enzyme from "enzyme";
import Trigger from "rc-trigger";
import * as React from "react";
import { TimePicker } from "../TimePicker";
describe("TimePicker", function () {
    it("should show title", function () {
        var wrapper = Enzyme.shallow(React.createElement(TimePicker, { title: "time picker" }));
        var label = wrapper
            .find("label")
            .at(0)
            .text();
        expect(label).toEqual("time picker");
    });
    it("should show rc-time-picker components", function () {
        var wrapper = Enzyme.shallow(React.createElement(TimePicker, { title: "time picker" }));
        var span = wrapper.find(Trigger);
        expect(span).toHaveLength(1);
    });
    it("should show error message", function () {
        var wrapper = Enzyme.shallow(React.createElement(TimePicker, { title: "time picker", errorMsg: "Validation error message", showError: true }));
        var message = wrapper
            .find("." + TimePicker.defaultProps.prefixCls + "-footer-message")
            .at(0)
            .text();
        expect(message).toEqual("Validation error message");
    });
    it("should show footer-message", function () {
        var wrapper = Enzyme.shallow(React.createElement(TimePicker, { title: "time picker", showError: true, errorMsg: "field required" }));
        var span = wrapper
            .find("." + TimePicker.defaultProps.prefixCls + "-footer-section")
            .text();
        expect(span).toEqual("field required");
    });
});
//# sourceMappingURL=TimePicker.test.js.map