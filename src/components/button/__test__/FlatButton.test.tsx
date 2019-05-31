import { mount } from "enzyme";
import { noop } from "lodash";
import * as React from "react";
import { Icon } from "../../icons";
import { FlatButton } from "../FlatButton";

describe("FlatButton", () => {
  it("should render the icon with label", () => {
    const wrapper = mount(
      <FlatButton label="test" onClick={noop} iconType="close" />
    );
    const buttonContent = wrapper.find(".rootContainer");
    expect(buttonContent.childAt(0).is(Icon)).toBeTruthy();
    expect(buttonContent.childAt(1).text()).toEqual("test");
  });

  it("should render disabled theme", () => {
    const wrapper = mount(
      <FlatButton
        label="test"
        onClick={noop}
        iconType="close"
        disabled={true}
      />
    );
    const buttonContent = wrapper.find(".rootContainer");
    expect(buttonContent.hasClass("disabled")).toEqual(true);
  });
});
