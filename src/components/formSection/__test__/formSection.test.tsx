import { mount } from "enzyme";
import * as React from "react";
import { FormSection } from "../FormSection";

describe("Form Section", () => {
  it("render complete section", () => {
    const wrapper = mount(
      <FormSection header="This is header" subheader="This is subheader" caption="This is caption">
        <p>Hello Form Section</p>
      </FormSection>
    );
    const header = wrapper.find("h3");
    const subheader = wrapper.find("h6");
    const caption = wrapper.find("div").at(0);
    const children = wrapper.find("p");
    expect(header.text()).toEqual("This is header");
    expect(subheader.text()).toEqual("This is subheader");
    expect(caption.text()).toEqual("This is caption");
    expect(children.text()).toEqual("Hello Form Section");
  });

  it("render partial section", () => {
    const wrapper = mount(<FormSection header="This is header" subheader="This is subheader" />);
    const header = wrapper.find("h3");
    const subheader = wrapper.find("h6");
    const caption = wrapper.find("div").at(0);
    expect(header.text()).toEqual("This is header");
    expect(subheader.text()).toEqual("This is subheader");
    expect(caption).toHaveLength(1);
  });
});
