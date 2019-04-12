import { shallow } from "enzyme";
import * as React from "react";
import { Icon } from "../../icons";
import { CustomInput } from "../CustomInput";

describe("CustomInput", () => {
  it("render CustomInput icon", () => {
    const wrapper = shallow(<CustomInput />);
    const icon = wrapper.find(Icon);
    expect(icon).toHaveLength(1);
  });
});
