import { mount } from "enzyme";
import * as React from "react";
import { FlexDirectionType } from "../../EnumValues";
import { FlexWrapper } from "../FlexWrapper";

describe("FlexWrapper", () => {
  it("renders flexbox with flex direction row by default", () => {
    const wrapper = mount(
      <FlexWrapper>
        <h2>child 1</h2>
        <h2>child 1</h2>
      </FlexWrapper>
    );

    expect(wrapper.props().flexDirection).toEqual("row");
    expect(wrapper.find("div").hasClass("row")).toBe(true);
  });

  it("renders flexbox with flex direction column when value column is specified in flexDirection prop", () => {
    const wrapper = mount(
      <FlexWrapper flexDirection={FlexDirectionType.COLUMN}>
        <h2>child 1</h2>
        <h2>child 1</h2>
      </FlexWrapper>
    );

    expect(wrapper.props().flexDirection).toEqual("column");
    expect(wrapper.find("div").hasClass("column")).toBe(true);
  });
});
