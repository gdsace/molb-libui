import { shallow } from "enzyme";
import * as React from "react";
import { Button } from "../../button";
import { NotificationTheme } from "../../EnumValues";
import { Icon } from "../../icons";
import { InlineNotificationWithHeader } from "../InlineNotificationWithHeader";

describe("Inline notification", () => {
  it("should render warning notification success", () => {
    const testThis = {
      header: "Header Test",
      text: "this is warning text"
    };

    const wrapper = shallow(
      <InlineNotificationWithHeader
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
      <InlineNotificationWithHeader
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

  it("should render notification with button when pass a parameter 'childNode'", () => {
    const testThis = {
      header: "Another Header Lah",
      text: "this is error text"
    };

    const wrapper = shallow(
      <InlineNotificationWithHeader
        header={testThis.header}
        text={testThis.text}
        theme={NotificationTheme.Error}
        childNode={<Button>test button</Button>}
      />
    );

    expect(wrapper.find(Button)).toHaveLength(1);
  });
});
