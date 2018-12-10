import { mount } from "enzyme";
import * as React from "react";
import { Echo } from "../Echo";

describe("Echo", () => {
  it("renders the text", () => {
    const wrapper = mount(<Echo text="Hello, world!" />);
    const p = wrapper.find("p");
    expect(p).toHaveLength(1);
    expect(p.text()).toEqual("Hello, world!");
  });
});
