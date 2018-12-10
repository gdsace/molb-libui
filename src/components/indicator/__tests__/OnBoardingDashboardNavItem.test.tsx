import { shallow } from "enzyme";
import * as React from "react";
import { Indicator } from "../Indicator";

describe("Indicator", () => {
  it("should disabled if previous item is active", () => {
    const wrapper = shallow(
      <Indicator label="indicator" activeIndex={1} index={2} />
    );
    expect(wrapper.find(".disabled")).toHaveLength(1);
    expect(wrapper.find("label").text()).toEqual("2" + "indicator");
  });

  it("should active if current item is active", () => {
    const wrapper = shallow(
      <Indicator label="indicator" activeIndex={2} index={2} />
    );
    expect(wrapper.find(".active")).toHaveLength(1);
    expect(wrapper.find("label").text()).toEqual("2" + "indicator");
  });

  it("should enabled if next item is active", () => {
    const wrapper = shallow(
      <Indicator label="indicator" activeIndex={3} index={2} />
    );
    expect(wrapper.find(".enabled")).toHaveLength(1);
    expect(wrapper.find("label").text()).toEqual("2" + "indicator");
  });
});
