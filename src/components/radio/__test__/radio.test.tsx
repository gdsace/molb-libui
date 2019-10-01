import { mount, shallow } from "enzyme";
import { merge } from "lodash";
import * as React from "react";
import { InlineNotification } from "../../inlineNotification";
import { IOptionValue, IRadioProps, Radio } from "../Radio";

describe("Radio", () => {
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

  it("should render label given the label in props", () => {
    const newMockProps = merge(mockProps, {
      label: "label"
    });
    const wrapper = shallow(<Radio {...newMockProps} />);
    expect(wrapper.find(".questionLabel").text()).toEqual("label");
  });

  it("should render prompt message given the prompt message in props and display is true", () => {
    const newMockProps = merge(mockProps, {
      promptMessage: {
        message: "message",
        display: true
      }
    });
    const wrapper = shallow(<Radio {...newMockProps} />);
    expect(wrapper.find(InlineNotification)).toHaveLength(1);
  });

  it("should not render prompt message given the prompt message in props but display is false", () => {
    const newMockProps = merge(mockProps, {
      promptMessage: {
        message: "message",
        display: false
      }
    });
    const wrapper = shallow(<Radio {...newMockProps} />);
    expect(wrapper.find(InlineNotification)).toHaveLength(0);
  });

  it("should render component bellow title given the addonBelowText in props", () => {
    const subText = "component display bellow title";
    const component = <div className="addonBellowTitle">{subText}</div>;

    const wrapper = mount(<Radio {...mockProps} addonBelowText={component} />);
    expect(
      wrapper
        .find(Radio)
        .find(".addonBellowTitle")
        .text()
    ).toBe(subText);
  });
});
