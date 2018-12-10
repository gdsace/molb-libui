import { mount } from "enzyme";
import * as React from "react";
import { IOptionValue, IRadioProps, Radio } from "../Radio";

describe.only("Radio", () => {
  const optionValueArray: IOptionValue[] = [
    {
      value: "value1",
      label: "label1"
    },
    {
      value: "value2",
      label: "label2"
    }
  ];

  const mockProps: IRadioProps = {
    text: "text",
    optionList: optionValueArray,
    onChange: jest.fn(),
    disabled: false
  };

  it("can render", () => {
    const wrapper = mount(<Radio {...mockProps} />);
    const radio = wrapper.find(Radio);
    expect(radio).toHaveLength(1);
  });

  it("it will render text and options", () => {
    const wrapper = mount(<Radio {...mockProps} />);
    const radio = wrapper.find(Radio);
    expect(radio.text()).toBe("textlabel1label2");
  });
});
