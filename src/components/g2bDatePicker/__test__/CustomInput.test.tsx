import { shallow } from "enzyme";
import * as React from "react";
import { Icon } from "../../icons";
import { CustomInput } from "../CustomInput";

describe("CustomInput", () => {
  let props: any;
  beforeEach(() => {
    props = {
      onClick: jest.fn(),
      onBlur: jest.fn(),
      showError: false
    };
  });
  it("render CustomInput icon", () => {
    const wrapper = shallow(<CustomInput />);
    const icon = wrapper.find(Icon);
    expect(icon).toHaveLength(1);
  });

  it("should call props.onClick when handle on click", () => {
    const wrapper = shallow(<CustomInput {...props} />);
    const instance = wrapper.instance() as CustomInput;
    // @ts-ignore
    instance.handleOnClick();
    expect(props.onClick).toBeCalled();
    expect(instance.state.customInputSelected).toBe(true);
  });

  it("should call props.onBlur when handle on Blur", () => {
    const wrapper = shallow(<CustomInput {...props} />);
    const instance = wrapper.instance() as CustomInput;
    // @ts-ignore
    instance.handleOnBlur();
    expect(props.onBlur).toBeCalled();
    expect(instance.state.customInputSelected).toBe(false);
  });
});
