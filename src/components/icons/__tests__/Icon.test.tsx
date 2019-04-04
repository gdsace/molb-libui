import { mount } from "enzyme";
import * as React from "react";
import { Icon } from "../Icon";

describe("Icon", () => {
  it("should render profile icon", () => {
    const icon = mount(<Icon type={"profile"} />);
    expect(icon).toHaveLength(1);
    expect(icon.props().type).toEqual("profile");
  });

  it("should render close icon", () => {
    const icon = mount(<Icon type={"close"} />);
    expect(icon).toHaveLength(1);
    expect(icon.props().type).toEqual("close");
  });

  it("should render dashboard icon", () => {
    const icon = mount(<Icon type={"dashboard"} />);
    expect(icon).toHaveLength(1);
    expect(icon.props().type).toEqual("dashboard");
  });

  it("should render payment icon", () => {
    const icon = mount(<Icon type={"payment"} />);
    expect(icon).toHaveLength(1);
    expect(icon.props().type).toEqual("payment");
  });

  it("should render business icon", () => {
    const icon = mount(<Icon type={"business"} />);
    expect(icon).toHaveLength(1);
    expect(icon.props().type).toEqual("business");
  });

  it("should render shop type - restaurant icon", () => {
    const icon = mount(<Icon type={"restaurant"} category="shoptypes" />);
    expect(icon).toHaveLength(1);
    expect(icon.props().type).toEqual("restaurant");
  });
});
