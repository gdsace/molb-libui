import * as Enzyme from "enzyme";
import Trigger from "rc-trigger";
import * as React from "react";
import { TimePicker } from "../TimePicker";

describe("TimePicker", () => {
  it("should show title", () => {
    const wrapper = Enzyme.shallow(<TimePicker title="time picker" />);
    const label = wrapper
      .find("label")
      .at(0)
      .text();
    expect(label).toEqual("time picker");
  });

  it("should show rc-time-picker components", () => {
    const wrapper = Enzyme.shallow(<TimePicker title="time picker" />);
    const span = wrapper.find(Trigger);
    expect(span).toHaveLength(1);
  });

  it("should show error message", () => {
    const wrapper = Enzyme.shallow(
      <TimePicker title="time picker" errorMsg="Validation error message" showError={true} />
    );
    const message = wrapper
      .find(`.${TimePicker.defaultProps.prefixCls}-footer-message`)
      .at(0)
      .text();
    expect(message).toEqual("Validation error message");
  });

  it("should show footer-message", () => {
    const wrapper = Enzyme.shallow(<TimePicker title="time picker" showError={true} errorMsg="field required" />);
    const span = wrapper.find(`.${TimePicker.defaultProps.prefixCls}-footer-section`).text();
    expect(span).toEqual("field required");
  });
});
