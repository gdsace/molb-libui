import { mount } from "enzyme";
import * as React from "react";
import { H7 } from "../H7";

describe("H7", () => {
  it("renders the text", () => {
    const wrapper = mount(<H7>Test H7 Test</H7>);
    const title = wrapper.find("h6");
    expect(title).toHaveLength(1);
    expect(title.text()).toEqual("Test H7 Test");
  });
});
