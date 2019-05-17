import { mount } from "enzyme";
import React from "react";

import { ExpandablePanelTheme } from "../../EnumValues";
import { ExpandablePanel } from "../ExpandablePanel";

describe("ExpandablePanel", () => {
  it("should render title content and apply correct style", () => {
    const child = ["this is expandablePanel content"];
    const wrapper = mount(
      <ExpandablePanel
        theme={ExpandablePanelTheme.Standard}
        title={"title"}
        content={child}
      />
    );
    expect(wrapper.find(".standard").length).toEqual(1);
    expect(wrapper.find(".panelTitle").text()).toEqual("title");
    expect(wrapper.find(".panelContent").contains(child[0]));
  });

  it("should be able to set collapsed status by props", () => {
    const child = ["this is expandablePanel content"];
    const props = {
      collapsed: true,
      theme: ExpandablePanelTheme.Large,
      title: "title",
      content: child,
      onPanelClick: jest.fn()
    };
    const wrapper = mount(<ExpandablePanel {...props} />);
    expect(wrapper.find(".panelContent").length).toBe(0);
    expect(wrapper.find(".large").length).toBe(1);
    wrapper.find(".panelHeader").simulate("click");
    expect(props.onPanelClick).toBeCalledWith(false);
  });
});
