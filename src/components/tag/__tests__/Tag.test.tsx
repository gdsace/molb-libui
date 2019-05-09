import { mount, shallow } from "enzyme";
import * as React from "react";
import { TagSize, TagTheme } from "../../EnumValues";
import { Tag } from "../Tag";

describe("Tag", () => {
  it("render ui", () => {
    const wrapper = mount(<Tag label="this is label" theme={TagTheme.Green} />);
    const span = wrapper.find("span");
    expect(span.text()).toEqual("this is label");
  });

  it("should render Tag component with tooltip icon and tooltip content", () => {
    const wrapper = shallow(
      <Tag label="this is label" showTooltip tooltipContent="tooltip text" />
    );
    const span = wrapper.find("span");
    const tooltipContainer = span.find("div").at(0);
    expect(tooltipContainer).toHaveLength(1);
  });

  it("should render Tag component without tooltip", () => {
    const wrapper = shallow(<Tag label="this is label" showTooltip={false} />);
    const span = wrapper.find("span");
    const tooltipContainer = span.find("div").at(0);
    expect(tooltipContainer).toHaveLength(0);
  });

  it("should render Large Tag component", () => {
    const wrapper = shallow(
      <Tag label="this is label" tagSize={TagSize.Large} showTooltip={false} />
    );
    const TagContainer = wrapper.find("div").at(0);
    expect(TagContainer.hasClass("large")).toBe(true);
  });
});
