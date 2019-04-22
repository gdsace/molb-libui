import { shallow } from "enzyme";
import * as React from "react";
import { NotificationTheme } from "../../EnumValues";
import { Icon } from "../../icons";
import { InlineNotifWithHeader } from "../InlineNotifWithHeader";
// import { InlineNotification } from "../InlineNotification";

describe("Inline notification", () => {
  fit("should render warning notification success", () => {
    const wrapper = shallow(
      <InlineNotifWithHeader
        header="header"
        text="this is warning text"
        theme={NotificationTheme.Warning}
      />
    );

    // tslint:disable-next-line:no-console
    console.log(wrapper);

    expect(wrapper.find("p").text()).toEqual("this is warning text");
    expect(wrapper.find(Icon).prop("type")).toEqual("warning");
    // expect(wrapper.find(".warning")).toHaveLength(1);
  });

  it("should render error notification success", () => {
    const wrapper = shallow(
      <InlineNotifWithHeader
        header="header"
        text="this is error text"
        theme={NotificationTheme.Error}
      />
    );

    expect(wrapper.find("p").text()).toEqual("this is error text");
    expect(wrapper.find(".error")).toHaveLength(1);
    expect(wrapper.find(Icon).prop("type")).toEqual("notification-error");
  });
});
