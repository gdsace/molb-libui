import { shallow } from "enzyme";
import * as React from "react";
import { Tooltips } from "../../tooltips";
import { CheckboxTypeQuestion } from "../CheckboxTypeQuestion";

describe("CheckboxTypeQuestion", () => {
  it("should apply disable styles correctly", () => {
    const props = {
      checked: false,
      disabled: false,
      onCheckboxClick: jest.fn(),
      questionLabel: "Music/live entertainment/game machines",
      questionDescription: "Public Entertainment Licence"
    };

    let wrapper = shallow(<CheckboxTypeQuestion {...props} />);
    let text = wrapper.find(".textWrapper");
    expect(text.hasClass("disabled")).toBeFalsy();
    props.disabled = true;

    wrapper = shallow(<CheckboxTypeQuestion {...props} />);
    text = wrapper.find(".textWrapper");

    expect(text.hasClass("disabled")).toBeTruthy();
    expect(wrapper.find(Tooltips).length).toBe(0);
  });
  it("should show tooltips if there is tooltip", () => {
    const props = {
      checked: false,
      disabled: false,
      onCheckboxClick: jest.fn(),
      questionLabel: "Music/live entertainment/game machines",
      questionDescription: "Public Entertainment Licence",
      tooltip: "this is tooltip"
    };
    const wrapper = shallow(<CheckboxTypeQuestion {...props} />);
    expect(wrapper.find(Tooltips).length).toBe(1);
  });
});
