import { mount } from "enzyme";
import React from "react";
import { Dropdown } from "../Dropdown";

describe("Dropdown", () => {
  const mockOptions = [
    {
      label: "foo",
      value: "bar"
    }
  ];

  it("renders", () => {
    const wrapper = mount(
      <Dropdown options={mockOptions} value={mockOptions[0]} />
    );

    const dropdown = wrapper.find(Dropdown);
    expect(dropdown).toHaveLength(1);
    expect(dropdown.text()).toEqual("foo");
  });

  it("renders an error message when error prop is set", () => {
    const wrapper = mount(
      <Dropdown options={mockOptions} value={mockOptions[0]} error="error!" />
    );

    const error = wrapper.find(".errorMessage");
    expect(error).toHaveLength(1);
    expect(error.text()).toEqual("error!");
  });
});
