import { mount } from "enzyme";
import * as React from "react";
import { SubFormSection } from "../SubFormSection";

describe("Form Section", () => {
  it("render complete section", () => {
    const wrapper = mount(
      <SubFormSection
        title="This is title"
        subTitle="This is subTitle"
        optional={true}
      >
        <p>Hello Form Section</p>
      </SubFormSection>
    );
    const title = wrapper.find(".title");
    const optional = wrapper.find(".optional");
    const subTitle = wrapper.find(".subTitle");
    const children = wrapper.find("p");
    expect(title.text()).toEqual("This is title");
    expect(subTitle.text()).toEqual("This is subTitle");
    expect(children.text()).toEqual("Hello Form Section");
    expect(optional.text()).toEqual("(Optional)");
  });

  it("render partial section: without children", () => {
    const wrapper = mount(
      <SubFormSection title="This is title" subTitle="This is subTitle" />
    );
    const title = wrapper.find(".title");
    const optional = wrapper.find(".optional");
    const subTitle = wrapper.find(".subTitle");
    const children = wrapper.find("p");
    expect(title.text()).toEqual("This is title");
    expect(subTitle.text()).toEqual("This is subTitle");
    expect(children).toHaveLength(0);
    expect(optional).toHaveLength(0);
  });

  it("render partial section: without title", () => {
    const wrapper = mount(
      <SubFormSection title="" subTitle="This is subTitle" />
    );
    const title = wrapper.find(".title");
    const optional = wrapper.find(".optional");
    const subTitle = wrapper.find(".subTitle");
    const children = wrapper.find("p");
    expect(subTitle.text()).toEqual("This is subTitle");
    expect(title).toHaveLength(0);
    expect(children).toHaveLength(0);
    expect(optional).toHaveLength(0);
  });

  it("render partial section: without subTitle", () => {
    const wrapper = mount(<SubFormSection title="This is title" />);
    const title = wrapper.find(".title");
    const optional = wrapper.find(".optional");
    const subTitle = wrapper.find(".subTitle");
    const children = wrapper.find("p");
    expect(title.text()).toEqual("This is title");
    expect(subTitle).toHaveLength(0);
    expect(children).toHaveLength(0);
    expect(optional).toHaveLength(0);
  });
});
