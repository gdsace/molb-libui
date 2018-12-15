import { TimePicker as AntdTimePicker } from "antd";
import * as Enzyme from "enzyme";
import * as React from "react";
import { TimePicker } from "../TimePicker";
describe("TimePicker", function () {
    it("should show title", function () {
        var wrapper = Enzyme.shallow(React.createElement(TimePicker, { title: "time picker" }));
        var lable = wrapper
            .find("label")
            .at(0)
            .text();
        expect(lable).toEqual("time picker");
    });
    it("should show antd-time-picker", function () {
        var wrapper = Enzyme.shallow(React.createElement(TimePicker, { title: "time picker" }));
        var span = wrapper.find(AntdTimePicker);
        expect(span).toHaveLength(1);
    });
    it("should show footer-message", function () {
        var wrapper = Enzyme.shallow(React.createElement(TimePicker, { title: "time picker", showError: true, errorMsg: "field required" }));
        var span = wrapper.find(".footerMessage").text();
        expect(span).toEqual("field required");
    });
});
//# sourceMappingURL=TimePicker.test.js.map