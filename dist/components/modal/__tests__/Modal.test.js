import * as React from "react";
import { mount } from "enzyme";
import { noop } from "lodash";
import { Modal } from "../Modal";
describe("Modal", function () {
    it("should render the children", function () {
        var wrapper = mount(React.createElement(Modal, { show: true, onClose: noop },
            React.createElement("p", null, "test content")));
        var p = wrapper.find("p");
        expect(p).toHaveLength(1);
        expect(p.text()).toEqual("test content");
    });
    it("should change visibility", function () {
        var wrapper = mount(React.createElement(Modal, { show: false, onClose: noop },
            React.createElement("p", null, "test content")));
        expect(wrapper.props().show).toEqual(false);
    });
    it("can add header", function () {
        var wrapper = mount(React.createElement(Modal, { show: true, onClose: noop, header: "header test" },
            React.createElement("p", null, "test content")));
        expect(wrapper.props().header).toEqual("header test");
    });
    it("should set body style overflow to auto when unmount", function () {
        var wrapper = mount(React.createElement(Modal, { show: true, onClose: noop, header: "header test" },
            React.createElement("p", null, "test content")));
        wrapper.unmount();
        expect(document.body.style.overflow).toEqual("auto");
    });
    it("should render footer when given footer", function () {
        var wrapper = mount(React.createElement(Modal, { show: true, onClose: noop, header: "header test", footer: React.createElement("div", null, "footer component") },
            React.createElement("p", null, "test content")));
        expect(wrapper.find(".footer")).toHaveLength(1);
    });
});
//# sourceMappingURL=Modal.test.js.map