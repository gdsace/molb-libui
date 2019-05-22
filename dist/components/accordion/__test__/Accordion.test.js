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
import React from "react";
import { AccordionTheme } from "../../EnumValues";
import { Accordion } from "../Accordion";
describe("Accordion", function () {
    it("should render title content and apply correct style", function () {
        var child = React.createElement("div", null, "this is accordion content");
        var wrapper = mount(React.createElement(Accordion, { theme: AccordionTheme.Standard, header: "title", content: child }));
        expect(wrapper.find(".standard").length).toEqual(1);
        expect(wrapper.find(".panelTitle").text()).toEqual("title");
        expect(wrapper.find(".panelContent").contains(child)).toBe(true);
    });
    it("should be able to set collapsed status by props", function () {
        var child = React.createElement("div", null, "this is accordion content");
        var props = {
            collapsed: true,
            theme: AccordionTheme.Large,
            header: "title",
            content: child,
            onPanelClick: jest.fn()
        };
        var wrapper = mount(React.createElement(Accordion, __assign({}, props)));
        expect(wrapper.find(".panelContent").length).toBe(0);
        expect(wrapper.find(".large").length).toBe(1);
        wrapper.find(".panelHeader").simulate("click");
        expect(props.onPanelClick).toBeCalledWith(false);
    });
});
//# sourceMappingURL=Accordion.test.js.map