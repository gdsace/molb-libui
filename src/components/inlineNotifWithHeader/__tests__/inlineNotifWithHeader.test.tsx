import { shallow } from "enzyme";
import * as React from "react";
import { NotificationTheme } from "../../EnumValues";
import { Icon } from "../../icons";
import { InlineNotifWithHeader } from "../InlineNotifWithHeader";

describe("Inline notification", () => {
  it("should render warning notification success", () => {
    const testThis = {
      header: "Header Test",
      text: "this is warning text"
    };

    const wrapper = shallow(
      <InlineNotifWithHeader
        header="Header Test"
        text="this is warning text"
        theme={NotificationTheme.Warning}
      />
    );

    expect(wrapper.find("h5").text()).toEqual(testThis.header);
    expect(wrapper.find("p").text()).toEqual(testThis.text);
    expect(wrapper.find(Icon).prop("type")).toEqual("warning");
    expect(wrapper.find(".warning")).toHaveLength(2);
  });

  it("should render error notification success", () => {
    const testThis = {
      header: "Another Header Lah",
      text: "this is error text"
    };

    const wrapper = shallow(
      <InlineNotifWithHeader
        header={testThis.header}
        text={testThis.text}
        theme={NotificationTheme.Error}
      />
    );

    expect(wrapper.find("h5").text()).toEqual(testThis.header);
    expect(wrapper.find("p").text()).toEqual(testThis.text);
    expect(wrapper.find(".error")).toHaveLength(2);
    expect(wrapper.find(Icon).prop("type")).toEqual("notification-error");
  });
});
