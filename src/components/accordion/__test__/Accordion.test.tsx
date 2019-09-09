import { shallow } from "enzyme";
import React from "react";
import { AccordionTheme } from "../../EnumValues";
import { Accordion } from "../Accordion";

describe("Accordion", () => {
  it("should render title content and apply correct style", () => {
    const child = <div>this is accordion content</div>;
    const wrapper = shallow(
      <Accordion
        theme={AccordionTheme.Standard}
        header={"title"}
        content={child}
      />
    );
    expect(wrapper.find(".standard").length).toEqual(1);
    expect(wrapper.find(".panelTitle").text()).toEqual("title");
    expect(wrapper.find(".panelContent").contains(child)).toBe(true);
    expect(wrapper.state("collapsed")).toEqual(false);
  });

  it("should render with the collapsed state", () => {
    const wrapper = shallow(
      <Accordion theme={AccordionTheme.Standard} defaultCollapsed={true} />
    );
    expect(wrapper.state("collapsed")).toEqual(true);
    // @ts-ignore
    wrapper.find(".panelHeader").prop("onClick")();
    expect(wrapper.state("collapsed")).toEqual(false);
  });

  it("should render without subheader when pass displayMode", () => {
    const wrapper = shallow(
      <Accordion theme={AccordionTheme.Standard} displayMode={true} />
    );
    expect(wrapper.find(".subHeaderWithIcon").length).toEqual(0);
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
    const wrapper = shallow(<Accordion {...props} />);
    expect(wrapper.find(".panelContent").length).toBe(0);
    expect(wrapper.find(".large").length).toBe(1);
    // @ts-ignore
    wrapper.find(".panelHeader").prop("onClick")();
    expect(props.onPanelClick).toBeCalledWith(false);
  });
});
