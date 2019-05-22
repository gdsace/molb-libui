import * as React from "react";
import { mount } from "enzyme";
import { noop } from "lodash";
import { ModalContent } from "../ModalContent";
describe("ModalContent", function () {
    it("render header", function () {
        var wrapper = mount(React.createElement(ModalContent, { header: "header test", subheader: "subheader test", rightButtonLabel: "right button test", rightButtonOnClick: noop }));
        var header = wrapper.find("header");
        expect(header).toHaveLength(1);
        expect(header.text()).toEqual("header test");
    });
    it("render subheader", function () {
        var wrapper = mount(React.createElement(ModalContent, { subheader: "subheader test" }));
        var subheader = wrapper.find("p");
        expect(subheader).toHaveLength(1);
        expect(subheader.text()).toEqual("subheader test");
    });
    it("render only right button", function () {
        var wrapper = mount(React.createElement(ModalContent, { rightButtonLabel: "right button test", rightButtonOnClick: noop }));
        var button = wrapper.find("Button");
        expect(button).toHaveLength(1);
    });
    it("render both left and right button", function () {
        var wrapper = mount(React.createElement(ModalContent, { leftButtonLabel: "left button test", leftButtonOnClick: noop, rightButtonLabel: "right button test", rightButtonOnClick: noop }));
        var button = wrapper.find("Button");
        expect(button).toHaveLength(2);
    });
});
//# sourceMappingURL=ModalContent.test.js.map