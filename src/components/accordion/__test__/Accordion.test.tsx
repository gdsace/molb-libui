import { mount } from "enzyme";
import React from "react";

import { AccordionTheme } from "../../EnumValues";
import { Accordion } from "../Accordion";

describe("Accordion", () => {
  it("should render title content and apply correct style", () => {
    const child = <div>this is accordion content</div>;
    const wrapper = mount(
      <Accordion
        theme={AccordionTheme.Standard}
        header={"title"}
        content={child}
      />
    );
    expect(wrapper.find(".standard").length).toEqual(1);
    expect(wrapper.find(".panelTitle").text()).toEqual("title");
    expect(wrapper.find(".panelContent").contains(child)).toBe(true);
  });

  it("should be able to set collapsed status by props", () => {
    const child = <div>this is accordion content</div>;
    const props = {
      collapsed: true,
      theme: AccordionTheme.Large,
      header: "title",
      content: child,
      onPanelClick: jest.fn()
    };
    const wrapper = mount(<Accordion {...props} />);
    expect(wrapper.find(".panelContent").length).toBe(0);
    expect(wrapper.find(".large").length).toBe(1);
    wrapper.find(".panelHeader").simulate("click");
    expect(props.onPanelClick).toBeCalledWith(false);
  });
});
