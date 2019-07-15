import { mount } from "enzyme";
import * as React from "react";
import { FlexDirectionType } from "../../EnumValues";
import { Flex } from "../Flex";

describe("Flex", () => {
  it("renders flexbox with flex direction row by default", () => {
    const wrapper = mount(
      <Flex>
        <h2>child 1</h2>
        <h2>child 1</h2>
      </Flex>
    );

    expect(wrapper.props().flexDirection).toEqual("row");
    expect(wrapper.find("div").hasClass("row")).toBe(true);
  });

  it("renders flexbox with flex direction column when value column is specified in flexDirection prop", () => {
    const wrapper = mount(
      <Flex flexDirection={FlexDirectionType.COLUMN}>
        <h2>child 1</h2>
        <h2>child 1</h2>
      </Flex>
    );

    expect(wrapper.props().flexDirection).toEqual("column");
    expect(wrapper.find("div").hasClass("column")).toBe(true);
  });
});
