import { mount } from "enzyme";
import React from "react";

import { AccordionTheme } from "../../EnumValues";
import { AccordionDefaultDisplay } from "../AccordionDefaultDisplay";

describe("Accordion", () => {
  it("should render title content and apply correct style", () => {
    const child = <div>this is accordion content</div>;
    const wrapper = mount(
      <AccordionDefaultDisplay
        theme={AccordionTheme.Standard}
        title={"title"}
        content={child}
      />
    );
    expect(wrapper.find(".standard").length).toEqual(1);
    expect(wrapper.find(".panelTitle").text()).toEqual("title");
    expect(wrapper.find(".panelContent").contains(child));
  });

  it("should be able to set collapsed status by props", () => {
    const child = <div>this is accordion content</div>;
    const props = {
      collapsed: true,
      theme: AccordionTheme.Large,
      title: "title",
      content: child,
      onPanelClick: jest.fn()
    };
    const wrapper = mount(<AccordionDefaultDisplay {...props} />);
    expect(wrapper.find(".panelContent").length).toBe(0);
    expect(wrapper.find(".large").length).toBe(1);
    wrapper.find(".panelHeader").simulate("click");
    expect(props.onPanelClick).toBeCalledWith(false);
  });
});
