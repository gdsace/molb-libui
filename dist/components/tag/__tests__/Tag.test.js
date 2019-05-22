import { mount, shallow } from "enzyme";
import * as React from "react";
import { TagSize, TagTheme } from "../../EnumValues";
import { Tag } from "../Tag";
describe("Tag", function () {
    it("render ui", function () {
        var wrapper = mount(React.createElement(Tag, { label: "this is label", theme: TagTheme.Green }));
        var span = wrapper.find("span");
        expect(span.text()).toEqual("this is label");
    });
    it("should render Tag component with tooltip icon and tooltip content", function () {
        var wrapper = shallow(React.createElement(Tag, { label: "this is label", showTooltip: true, tooltipContent: "tooltip text" }));
        var span = wrapper.find("span");
        var tooltipContainer = span.find("div").at(0);
        expect(tooltipContainer).toHaveLength(1);
    });
    it("should render Tag component without tooltip", function () {
        var wrapper = shallow(React.createElement(Tag, { label: "this is label", showTooltip: false }));
        var span = wrapper.find("span");
        var tooltipContainer = span.find("div").at(0);
        expect(tooltipContainer).toHaveLength(0);
    });
    it("should render Large Tag component", function () {
        var wrapper = shallow(React.createElement(Tag, { label: "this is label", tagSize: TagSize.Large, showTooltip: false }));
        var TagContainer = wrapper.find("div").at(0);
        expect(TagContainer.hasClass("large")).toBe(true);
    });
});
//# sourceMappingURL=Tag.test.js.map