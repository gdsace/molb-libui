import * as React from "react";
import { mount } from "enzyme";
import { noop } from "lodash";
import { NavItem } from "../NavItem";
describe("NavItem", function () {
    it("renders the nvaItem with label", function () {
        var wrapper = mount(React.createElement(NavItem, { label: "profile", onClick: noop, type: "profile" }));
        var navItem = wrapper.find("label");
        expect(navItem).toHaveLength(1);
        expect(navItem.text()).toEqual("profile");
    });
});
//# sourceMappingURL=NavItem.test.js.map