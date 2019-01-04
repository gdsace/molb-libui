import { mount } from "enzyme";
import * as React from "react";
import { TagTheme } from "../../EnumValues";
import { Tag } from "../Tag";

describe("Tag", () => {
  it("render ui", () => {
    const wrapper = mount(<Tag label="this is lable" theme={TagTheme.Green} />);
    const span = wrapper.find("span");
    expect(span.text()).toEqual("this is lable");
  });
});
