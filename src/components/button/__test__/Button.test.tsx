import { mount } from "enzyme";
import { noop } from "lodash";
import * as React from "react";
import { Icon } from "../../icons";
import { Button } from "../Button";

describe("Button", () => {
  describe("icon", () => {
    it("renders the left icon with label", () => {
      const wrapper = mount(<Button label="test" onClick={noop} icon="close" />);
      const buttonContent = wrapper.find(".buttonContent");
      expect(buttonContent.childAt(0).is(Icon)).toBeTruthy();
      expect(buttonContent.childAt(1).text()).toEqual("test");
    });

    it("renders the right icon with label", () => {
      const wrapper = mount(<Button label="test" onClick={noop} icon="close" iconAlign="right" />);
      const buttonContent = wrapper.find(".buttonContent");
      expect(buttonContent.childAt(0).text()).toEqual("test");
      expect(buttonContent.childAt(1).is(Icon)).toBeTruthy();
    });

    it("renders the center icon with label", () => {
      const wrapper = mount(<Button label="test" onClick={noop} icon="close" iconAlign="center" />);
      const buttonContent = wrapper.find(".buttonContent");
      expect(buttonContent.childAt(0).text()).toEqual("test");
      expect(buttonContent.childAt(1).is(Icon)).toBeTruthy();
    });
  });

  describe("button type", () => {
    it("render button with default type 'submit'", () => {
      const wrapper = mount(<Button label="test" onClick={noop} icon="close" />);
      expect(wrapper.find("button").prop("type")).toEqual("submit");
    });
    it("render button with specified type", () => {
      const wrapper = mount(<Button label="test" onClick={noop} icon="close" type="button" />);
      expect(wrapper.find("button").prop("type")).toEqual("button");
    });
  });
});
