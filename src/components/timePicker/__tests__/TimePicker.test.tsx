import { TimePicker as AntdTimePicker } from "antd";
import * as Enzyme from "enzyme";
import * as React from "react";
import { TimePicker } from "../TimePicker";

describe("TimePicker", () => {
  it("should show title", () => {
    const wrapper = Enzyme.shallow(<TimePicker title="time picker" />);
    const lable = wrapper
      .find("label")
      .at(0)
      .text();
    expect(lable).toEqual("time picker");
  });

  it("should show antd-time-picker", () => {
    const wrapper = Enzyme.shallow(<TimePicker title="time picker" />);
    const span = wrapper.find(AntdTimePicker);
    expect(span).toHaveLength(1);
  });

  it("should show footer-message", () => {
    const wrapper = Enzyme.shallow(
      <TimePicker
        title="time picker"
        showError={true}
        errorMsg="field required"
      />
    );
    const span = wrapper.find(".footerMessage").text();
    expect(span).toEqual("field required");
  });
});
