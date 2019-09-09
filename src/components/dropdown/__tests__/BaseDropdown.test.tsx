import { mount } from "enzyme";
import React from "react";
import { BaseDropdown } from "../BaseDropdown";

describe("BaseDropdown", () => {
  const mockOptions = [{ label: "foo", value: "foovalue" }];

  it("renders and passes down props to Select", () => {
    const wrapper = mount(
      <BaseDropdown options={mockOptions} value={mockOptions[0]} />
    );

    const dropdown = wrapper.find(BaseDropdown);
    expect(dropdown).toHaveLength(1);
    expect(dropdown.text()).toEqual(mockOptions[0].label);
  });
});
