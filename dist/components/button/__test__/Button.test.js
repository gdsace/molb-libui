import { mount } from "enzyme";
import { noop } from "lodash";
import * as React from "react";
import { Icon } from "../../icons";
import { Button } from "../Button";
describe("Button", function () {
    describe("icon", function () {
        it("renders the left icon with label", function () {
            var wrapper = mount(React.createElement(Button, { label: "test", onClick: noop, icon: "close" }));
            var buttonContent = wrapper.find(".buttonContent");
            expect(buttonContent.childAt(0).is(Icon)).toBeTruthy();
            expect(buttonContent.childAt(1).text()).toEqual("test");
        });
        it("renders the right icon with label", function () {
            var wrapper = mount(React.createElement(Button, { label: "test", onClick: noop, icon: "close", iconAlign: "right" }));
            var buttonContent = wrapper.find(".buttonContent");
            expect(buttonContent.childAt(0).text()).toEqual("test");
            expect(buttonContent.childAt(1).is(Icon)).toBeTruthy();
        });
        it("renders the center icon with label", function () {
            var wrapper = mount(React.createElement(Button, { label: "test", onClick: noop, icon: "close", iconAlign: "center" }));
            var buttonContent = wrapper.find(".buttonContent");
            expect(buttonContent.childAt(0).text()).toEqual("test");
            expect(buttonContent.childAt(1).is(Icon)).toBeTruthy();
        });
    });
    describe("button type", function () {
        it("render button with default type 'submit'", function () {
            var wrapper = mount(React.createElement(Button, { label: "test", onClick: noop, icon: "close" }));
            expect(wrapper.find("button").prop("type")).toEqual("submit");
        });
        it("render button with specified type", function () {
            var wrapper = mount(React.createElement(Button, { label: "test", onClick: noop, icon: "close", type: "button" }));
            expect(wrapper.find("button").prop("type")).toEqual("button");
        });
    });
});
//# sourceMappingURL=Button.test.js.map