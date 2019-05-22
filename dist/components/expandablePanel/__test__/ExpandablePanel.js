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
import { ExpandablePanelTheme } from "../../EnumValues";
import { ExpandablePanel } from "../ExpandablePanel";
describe("ExpandablePanel", function () {
    it("should render title content and apply correct style", function () {
        var wrapper = mount(React.createElement(ExpandablePanel, { theme: ExpandablePanelTheme.Standard, title: "title" },
            React.createElement("div", null, "this is expandablePanel conten1"),
            React.createElement("div", null, "this is expandablePanel content2")));
        expect(wrapper.find(".standard").length).toEqual(1);
        expect(wrapper.find(".panelTitle").text()).toEqual("title");
        expect(wrapper.find(".panelContent").contains("this is expandablePanel conten1"));
    });
    it("should be able to set collapsed status by props", function () {
        var props = {
            collapsed: true,
            theme: ExpandablePanelTheme.Large,
            title: "title",
            onPanelClick: jest.fn()
        };
        var wrapper = mount(React.createElement(ExpandablePanel, __assign({}, props),
            React.createElement("div", null, "this is expandablePanel conten1"),
            React.createElement("div", null, "this is expandablePanel content2")));
        expect(wrapper.find(".panelContent").length).toBe(0);
        expect(wrapper.find(".large").length).toBe(1);
        wrapper.find(".panelHeader").simulate("click");
        expect(props.onPanelClick).toBeCalledWith(false);
    });
});
//# sourceMappingURL=ExpandablePanel.js.map