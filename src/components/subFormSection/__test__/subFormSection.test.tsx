import { mount, shallow } from "enzyme";
import * as React from "react";
import { Tooltips } from "../../tooltips";
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

  it("render complete section with collapsible button by default", () => {
    const wrapper = mount(
      <SubFormSection title="This is title" isCollapsible={true}>
        <p>Hello Form Section</p>
      </SubFormSection>
    );
    const title = wrapper.find(".title");
    const collapsibleButton = wrapper.find("svg");
    const children = wrapper.find("p");
    expect(title.text()).toEqual("This is title");
    expect(collapsibleButton).toHaveLength(1);
    expect(children.text()).toEqual("Hello Form Section");
  });

  it("render partial section with collapsible button when collapsed", () => {
    const wrapper = mount(
      <SubFormSection title="This is title" isCollapsible={true}>
        <p>Hello Form Section</p>
      </SubFormSection>
    );
    const title = wrapper.find(".title");
    const collapsibleButton = wrapper.find("svg");
    collapsibleButton.simulate("click");
    const children = wrapper.find("p");
    expect(title.text()).toEqual("This is title");
    expect(collapsibleButton).toHaveLength(1);
    expect(children).toHaveLength(0);
  });

  it("render complete section with tooltips if there is tooltip", () => {
    const wrapper = shallow(
      <SubFormSection title="This is title" tooltip="This is tooltip" />
    );
    const title = wrapper.find(".title");
    const optional = wrapper.find(".optional");
    const subTitle = wrapper.find(".subTitle");
    const children = wrapper.find("p");
    expect(title.text()).toEqual("This is title");
    expect(subTitle).toHaveLength(0);
    expect(children).toHaveLength(0);
    expect(optional).toHaveLength(0);
    expect(wrapper.find(Tooltips).length).toBe(1);
  });

  it("does not renders any warning if not provided", () => {
    const wrapper = mount(
      <SubFormSection
        title="This is title"
        subTitle="This is subTitle"
        optional={true}
      >
        <p>Hello Form Section</p>
      </SubFormSection>
    );
    expect(wrapper.find(".warningMessageChildren")).toHaveLength(0);
  });

  it("renders string warning if provided", () => {
    const wrapper = mount(
      <SubFormSection
        title="This is title"
        subTitle="This is subTitle"
        optional={true}
        warningMessageChildren={"hello"}
      >
        <p>Hello Form Section</p>
      </SubFormSection>
    );
    const warning = wrapper.find(".warningMessageChildren");
    expect(warning.text()).toEqual("hello");
  });

  it("renders react node warning if provided", () => {
    const wrapper = mount(
      <SubFormSection
        title="This is title"
        subTitle="This is subTitle"
        optional={true}
        warningMessageChildren={<a>COFFEE</a>}
      >
        <p>Hello Form Section</p>
      </SubFormSection>
    );
    const warning = wrapper.find("a");
    expect(warning.text()).toEqual("COFFEE");
  });
});
