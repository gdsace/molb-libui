import { shallow } from "enzyme";
import * as React from "react";
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
  });
});
