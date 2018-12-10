import { TagTheme } from "@libui/components/EnumValues";
import { Tag } from "@libui/components/tag/Tag";
import { mount } from "enzyme";
import * as React from "react";

describe("Tag", () => {
  it("render ui", () => {
    const wrapper = mount(<Tag label="this is lable" theme={TagTheme.Green} />);
    const span = wrapper.find("span");
    expect(span.text()).toEqual("this is lable");
  });
});
