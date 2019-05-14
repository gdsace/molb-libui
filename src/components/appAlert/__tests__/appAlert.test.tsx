import { shallow } from "enzyme";
import * as React from "react";
import { AppAlertTheme } from "../../EnumValues";
import { Icon } from "../../icons";
import { AppAlert } from "../AppAlert";

describe("Inline notification", () => {
  it("should render warning notification success", () => {
    const wrapper = shallow(
      <AppAlert text="this is warning text" theme={AppAlertTheme.Warning} />
    );

    expect(wrapper.find("p").text()).toEqual("this is warning text");
    expect(wrapper.find(".warning")).toHaveLength(1);
    expect(wrapper.find(Icon).prop("type")).toEqual("warning");
  });

  it("should render error notification success", () => {
    const wrapper = shallow(
      <AppAlert text="this is error text" theme={AppAlertTheme.Error} />
    );

    expect(wrapper.find("p").text()).toEqual("this is error text");
    expect(wrapper.find(".error")).toHaveLength(1);
    expect(wrapper.find(Icon).prop("type")).toEqual("notification-error");
  });
});
