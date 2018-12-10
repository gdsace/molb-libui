import * as React from "react";

import { mount } from "enzyme";
import { noop } from "lodash";
import { NavItem } from "../NavItem";

describe("NavItem", () => {
  it("renders the nvaItem with label", () => {
    const wrapper = mount(
      <NavItem label={"profile"} onClick={noop} type={"profile"} />
    );
    const navItem = wrapper.find("label");
    expect(navItem).toHaveLength(1);
    expect(navItem.text()).toEqual("profile");
  });
});
