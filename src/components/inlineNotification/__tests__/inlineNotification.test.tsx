import { shallow } from "enzyme";
import * as React from "react";
import { InlineNotification } from "../InlineNotification";

describe("Inline notification", () => {
  it("should render warning notification success", () => {
    const wrapper = shallow(
      <InlineNotification text="this is warning text" type="warning" />
    );

    expect(wrapper.find("p").text()).toEqual("this is warning text");
    expect(wrapper.find(".warning")).toHaveLength(2);
  });

  it("should render error notification success", () => {
    const wrapper = shallow(
      <InlineNotification text="this is error text" type="error" />
    );

    expect(wrapper.find("p").text()).toEqual("this is error text");
    expect(wrapper.find(".error")).toHaveLength(2);
  });
});
