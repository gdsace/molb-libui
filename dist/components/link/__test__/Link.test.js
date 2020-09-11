import { mount } from "enzyme";
import { noop } from "lodash";
import * as React from "react";
import { Icon } from "../../icons";
import { Link } from "../Link";
describe("Link", function () {
    it("handle click event", function () {
        var onClickMock = jest.fn();
        var wrapper = mount(React.createElement(Link, { label: "test", onClick: onClickMock }));
        wrapper.find(".link").simulate("click", {});
        expect(onClickMock).toBeCalled();
    });
    it("stop click event if disabled", function () {
        var onClickMock = jest.fn();
        var wrapper = mount(React.createElement(Link, { label: "test", onClick: onClickMock, disabled: true }));
        wrapper.find(".link").simulate("click", {});
        expect(onClickMock).not.toBeCalled();
    });
    it("renders the right icon with label", function () {
        var wrapper = mount(React.createElement(Link, { label: "test", onClick: noop, icon: "close" }));
        var link = wrapper.find(".link");
        expect(link.childAt(0).text()).toEqual("test");
        expect(wrapper.find(Icon)).toBeTruthy();
    });
    it("render the a tag with target", function () {
        var wrapper = mount(React.createElement(Link, { label: "test", onClick: noop, icon: "close", link: "https://www.google.com" }));
        expect(wrapper.find("a").length).toBe(1);
        expect(wrapper.find("a").props().href).toBe("https://www.google.com");
        expect(wrapper.find("a").props().target).toBe("_self");
    });
});
//# sourceMappingURL=Link.test.js.map