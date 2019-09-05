import { shallow } from "enzyme";
import React from "react";
import { ExpandablePanelTheme } from "../../EnumValues";
import { ExpandablePanel } from "../ExpandablePanel";

describe("ExpandablePanel", () => {
  it("should be able to set collapsed status by props", () => {
    const props = {
      collapsed: true,
      theme: ExpandablePanelTheme.Large,
      title: "title",
      defaultDisplay: 1,
      onPanelClick: jest.fn()
    };
    const wrapper = shallow(
      <ExpandablePanel {...props}>
        <div>this is expandablePanel conten1</div>
        <div>this is expandablePanel content2</div>
      </ExpandablePanel>
    );
    expect(wrapper.find(".panelContent").length).toBe(0);
    expect(wrapper.find(".large").length).toBe(1);
    // @ts-ignore
    wrapper.find(".subTitle").prop("onClick")();
    expect(props.onPanelClick).toBeCalledWith(false);
  });
});
