import * as React from "react";
import { mount } from "enzyme";
import { noop } from "lodash";
import { NavItem } from "../NavItem";
describe("NavItem", function () {
    it("renders the navItem with label", function () {
        var wrapper = mount(React.createElement(NavItem, { label: "profile", onClick: noop, type: "profile" }));
        var navItem = wrapper.find("label");
        expect(navItem).toHaveLength(1);
        expect(navItem.text()).toEqual("profile");
    });
    it("able to render the navItem with label wit a category icon", function () {
        var wrapper = mount(React.createElement(NavItem, { category: "licences", label: "profile", onClick: noop, type: "new-licence" }));
        var navItem = wrapper.find("label");
        expect(navItem).toHaveLength(1);
        expect(navItem.text()).toEqual("profile");
    });
});
//# sourceMappingURL=NavItem.test.js.map