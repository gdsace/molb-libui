import { mount } from "enzyme";
import * as React from "react";
import { FormSection } from "../FormSection";
describe("Form Section", function () {
    it("render complete section", function () {
        var wrapper = mount(React.createElement(FormSection, { header: "This is header", subheader: "This is subheader", caption: "This is caption" },
            React.createElement("p", null, "Hello Form Section")));
        var header = wrapper.find("h3");
        var subheader = wrapper.find("h6");
        var caption = wrapper.find("div").at(0);
        var children = wrapper.find("p");
        expect(header.text()).toEqual("This is header");
        expect(subheader.text()).toEqual("This is subheader");
        expect(caption.text()).toEqual("This is caption");
        expect(children.text()).toEqual("Hello Form Section");
    });
    it("render partial section", function () {
        var wrapper = mount(React.createElement(FormSection, { header: "This is header", subheader: "This is subheader" }));
        var header = wrapper.find("h3");
        var subheader = wrapper.find("h6");
        var caption = wrapper.find("div").at(0);
        expect(header.text()).toEqual("This is header");
        expect(subheader.text()).toEqual("This is subheader");
        expect(caption).toHaveLength(1);
    });
});
//# sourceMappingURL=formSection.test.js.map