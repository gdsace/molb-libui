import * as Enzyme from "enzyme";
import * as React from "react";
import { Tabs } from "../Tabs";
describe("Tabs", function () {
    it("should show tab item with label prop", function () {
        var list = [
            {
                label: "tab 1",
                tabPanel: React.createElement("div", null)
            }
        ];
        var wrapper = Enzyme.shallow(React.createElement(Tabs, { list: list }));
        var label = wrapper
            .find(".tab .item label")
            .at(0)
            .text();
        expect(label).toEqual(list[0].label);
    });
    it("should apply active class to tab item", function () {
        var list = [
            {
                label: "tab 1",
                tabPanel: React.createElement("div", null)
            },
            {
                label: "tab 2",
                tabPanel: React.createElement("div", null)
            }
        ];
        var wrapper = Enzyme.mount(React.createElement(Tabs, { list: list }));
        wrapper
            .find(".tab .item")
            .at(1)
            .simulate("click");
        expect(wrapper
            .find(".tab .item")
            .at(1)
            .hasClass("activeItem")).toBeTruthy();
    });
    it("should show active tab panel", function () {
        var list = [
            {
                label: "tab 1",
                tabPanel: (React.createElement("div", null,
                    React.createElement("label", null, "tab1")))
            },
            {
                label: "tab 2",
                tabPanel: (React.createElement("div", null,
                    React.createElement("label", null, "tab2")))
            }
        ];
        var wrapper = Enzyme.mount(React.createElement(Tabs, { list: list }));
        wrapper
            .find(".tab .item")
            .at(1)
            .simulate("click");
        var label = wrapper
            .find(".tab .tabPanel label")
            .at(0)
            .text();
        expect(label).toEqual("tab2");
    });
    it("should render customizedTabComponent", function () {
        var list = [
            {
                label: "tab 1",
                tabPanel: React.createElement("div", null)
            },
            {
                label: "tab 2",
                tabPanel: React.createElement("div", null)
            }
        ];
        var customizedComponent = (React.createElement("div", { id: "customized" }, " customized component"));
        var wrapper = Enzyme.shallow(React.createElement(Tabs, { list: list, customizedTabComponent: customizedComponent }));
        wrapper
            .find("#customized")
            .at(1)
            .simulate("click");
        expect(wrapper.find("#customized").length).toEqual(2);
        expect(wrapper.state("currentIndex")).toEqual(1);
    });
});
//# sourceMappingURL=Tabs.test.js.map