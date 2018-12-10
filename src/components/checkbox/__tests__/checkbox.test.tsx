import { mount } from "enzyme";
import * as React from "react";
import { Checkbox } from "../Checkbox";

describe("Checkbox", () => {
  it("should call oncheckboxclick on props when value changes", () => {
    const onCheckboxClickMock = jest.fn();
    const event = {
      target: {
        checked: false
      }
    };
    const wrapper = mount(
      <Checkbox
        onCheckboxClick={onCheckboxClickMock}
        disabled={false}
        checked={true}
      />
    );
    const checkbox = wrapper.find("input");
    checkbox.simulate("change", event);
    expect(onCheckboxClickMock).toBeCalledWith(false);
  });
});
