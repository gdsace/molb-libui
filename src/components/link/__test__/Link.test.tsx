import { mount } from "enzyme";
import { noop } from "lodash";
import * as React from "react";
import { Icon } from "../../icons";
import { Link } from "../Link";

describe("Link", () => {
  it("handle click event", () => {
    const onClickMock = jest.fn();
    const wrapper = mount(<Link label="test" onClick={onClickMock} />);

    wrapper.find(".link").simulate("click", {});

    expect(onClickMock).toBeCalled();
  });

  it("stop click event if disabled", () => {
    const onClickMock = jest.fn();
    const wrapper = mount(<Link label="test" onClick={onClickMock} disabled />);

    wrapper.find(".link").simulate("click", {});

    expect(onClickMock).not.toBeCalled();
  });

  it("renders the right icon with label", () => {
    const wrapper = mount(<Link label="test" onClick={noop} icon="close" />);
    const link = wrapper.find(".link");
    expect(link.childAt(0).text()).toEqual("test");
    expect(link.childAt(1).is(Icon)).toBeTruthy();
  });
});
