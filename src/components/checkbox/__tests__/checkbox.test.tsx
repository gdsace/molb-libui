import { mount } from "enzyme";
import * as React from "react";
import { noop } from "react-select/lib/utils";
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

  it("should update state when props value is updated", () => {
    const wrapper = mount(<Checkbox onCheckboxClick={noop} checked={false} />);
    wrapper.setProps({ checked: true });
    expect(wrapper.state()).toEqual({ checked: true });
  });
});
