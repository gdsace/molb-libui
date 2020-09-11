import { mount } from "enzyme";
import { noop } from "lodash";
import * as React from "react";
import { Icon } from "../../icons";
import { FlatButton } from "../FlatButton";
describe("FlatButton", function () {
    it("should render the icon with label", function () {
        var wrapper = mount(React.createElement(FlatButton, { label: "test", onClick: noop, iconType: "close" }));
        var buttonContent = wrapper.find(".rootContainer");
        expect(buttonContent.childAt(0).is(Icon)).toBeTruthy();
        expect(buttonContent.childAt(1).text()).toEqual("test");
    });
    it("should render disabled theme", function () {
        var wrapper = mount(React.createElement(FlatButton, { label: "test", onClick: noop, iconType: "close", disabled: true }));
        var buttonContent = wrapper.find(".rootContainer");
        expect(buttonContent.hasClass("disabled")).toEqual(true);
    });
});
//# sourceMappingURL=FlatButton.test.js.map