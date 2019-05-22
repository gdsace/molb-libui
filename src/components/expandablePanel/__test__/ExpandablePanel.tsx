import { mount } from "enzyme";
import React from "react";

import { ExpandablePanelTheme } from "../../EnumValues";
import { ExpandablePanel } from "../ExpandablePanel";

describe("ExpandablePanel", () => {
  it("should render title content and apply correct style", () => {
    const wrapper = mount(
      <ExpandablePanel theme={ExpandablePanelTheme.Standard} title={"title"}>
        <div>this is expandablePanel conten1</div>
        <div>this is expandablePanel content2</div>
      </ExpandablePanel>
    );
    expect(wrapper.find(".standard").length).toEqual(1);
    expect(wrapper.find(".panelTitle").text()).toEqual("title");
    expect(
      wrapper.find(".panelContent").contains("this is expandablePanel conten1")
    );
  });

  it("should be able to set collapsed status by props", () => {
    const props = {
      collapsed: true,
      theme: ExpandablePanelTheme.Large,
      title: "title",
      onPanelClick: jest.fn()
    };
    const wrapper = mount(
      <ExpandablePanel {...props}>
        <div>this is expandablePanel conten1</div>
        <div>this is expandablePanel content2</div>
      </ExpandablePanel>
    );
    expect(wrapper.find(".panelContent").length).toBe(0);
    expect(wrapper.find(".large").length).toBe(1);
    wrapper.find(".panelHeader").simulate("click");
    expect(props.onPanelClick).toBeCalledWith(false);
  });
});
