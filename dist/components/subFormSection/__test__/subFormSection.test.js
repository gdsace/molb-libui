import { mount } from "enzyme";
import * as React from "react";
import { SubFormSection } from "../SubFormSection";
describe("Form Section", function () {
    it("render complete section", function () {
        var wrapper = mount(React.createElement(SubFormSection, { title: "This is title", subTitle: "This is subTitle", optional: true },
            React.createElement("p", null, "Hello Form Section")));
        var title = wrapper.find(".title");
        var optional = wrapper.find(".optional");
        var subTitle = wrapper.find(".subTitle");
        var children = wrapper.find("p");
        expect(title.text()).toEqual("This is title");
        expect(subTitle.text()).toEqual("This is subTitle");
        expect(children.text()).toEqual("Hello Form Section");
        expect(optional.text()).toEqual("(Optional)");
    });
    it("render partial section: without children", function () {
        var wrapper = mount(React.createElement(SubFormSection, { title: "This is title", subTitle: "This is subTitle" }));
        var title = wrapper.find(".title");
        var optional = wrapper.find(".optional");
        var subTitle = wrapper.find(".subTitle");
        var children = wrapper.find("p");
        expect(title.text()).toEqual("This is title");
        expect(subTitle.text()).toEqual("This is subTitle");
        expect(children).toHaveLength(0);
        expect(optional).toHaveLength(0);
    });
    it("render partial section: without title", function () {
        var wrapper = mount(React.createElement(SubFormSection, { title: "", subTitle: "This is subTitle" }));
        var title = wrapper.find(".title");
        var optional = wrapper.find(".optional");
        var subTitle = wrapper.find(".subTitle");
        var children = wrapper.find("p");
        expect(subTitle.text()).toEqual("This is subTitle");
        expect(title).toHaveLength(0);
        expect(children).toHaveLength(0);
        expect(optional).toHaveLength(0);
    });
    it("render partial section: without subTitle", function () {
        var wrapper = mount(React.createElement(SubFormSection, { title: "This is title" }));
        var title = wrapper.find(".title");
        var optional = wrapper.find(".optional");
        var subTitle = wrapper.find(".subTitle");
        var children = wrapper.find("p");
        expect(title.text()).toEqual("This is title");
        expect(subTitle).toHaveLength(0);
        expect(children).toHaveLength(0);
        expect(optional).toHaveLength(0);
    });
});
//# sourceMappingURL=subFormSection.test.js.map