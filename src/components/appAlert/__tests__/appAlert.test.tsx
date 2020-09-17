import { shallow } from "enzyme";
import * as React from "react";
import { AppAlertAlignmentTheme, AppAlertTheme } from "../../EnumValues";
import { Icon } from "../../icons";
import { AppAlert } from "../AppAlert";

describe("App-level alert", () => {
  it("should render warning notification success", () => {
    const wrapper = shallow(<AppAlert text="this is warning text" theme={AppAlertTheme.Warning} />);

    expect(wrapper.find(".appAlertText").text()).toEqual("this is warning text");
    expect(wrapper.find(".warning")).toHaveLength(1);
    expect(wrapper.find(".left")).toHaveLength(1);
    expect(wrapper.find(Icon).prop("type")).toEqual("alert");
  });

  it("should render error notification success", () => {
    const wrapper = shallow(
      <AppAlert text="this is error text" theme={AppAlertTheme.Error} alignment={AppAlertAlignmentTheme.CENTER} />
    );

    expect(wrapper.find(".appAlertText").text()).toEqual("this is error text");
    expect(wrapper.find(".center")).toHaveLength(1);
    expect(wrapper.find(".error")).toHaveLength(1);
    expect(wrapper.find(Icon).prop("type")).toEqual("notification-error");
  });

  it("should render informational notification success", () => {
    const wrapper = shallow(<AppAlert text="this is informational text" theme={AppAlertTheme.Informational} />);

    expect(wrapper.find(".appAlertText").text()).toEqual("this is informational text");
    expect(wrapper.find(".informational")).toHaveLength(1);
    expect(wrapper.find(Icon).prop("type")).toEqual("informational");
  });

  it("should render textInBold", () => {
    const wrapper = shallow(
      <AppAlert text="this is a bold bold bold text" textToBold="bold" theme={AppAlertTheme.Informational} />
    );

    expect(wrapper.find(".appAlertTextBold")).toHaveLength(3);
    expect(wrapper.find(".informational")).toHaveLength(1);
    expect(wrapper.find(Icon).prop("type")).toEqual("informational");
  });
});
