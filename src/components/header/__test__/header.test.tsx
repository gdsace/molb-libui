import { mount } from "enzyme";
import * as React from "react";
import { Header } from "../Header";

describe("Echo", () => {
  it("renders the text", () => {
    const wrapper = mount(
      <Header>
        <h2>test</h2>
      </Header>
    );
    const title = wrapper.find("h2");
    expect(title).toHaveLength(1);
    expect(title.text()).toEqual("test");
  });
});
