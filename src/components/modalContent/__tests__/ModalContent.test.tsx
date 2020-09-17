import * as React from "react";

import { mount } from "enzyme";
import { noop } from "lodash";
import { ModalContent } from "../ModalContent";

describe("ModalContent", () => {
  it("render header", () => {
    const wrapper = mount(
      <ModalContent
        header="header test"
        subheader="subheader test"
        rightButtonLabel="right button test"
        rightButtonOnClick={noop}
      />
    );
    const header = wrapper.find("header");
    expect(header).toHaveLength(1);
    expect(header.text()).toEqual("header test");
  });

  it("render subheader", () => {
    const wrapper = mount(<ModalContent subheader="subheader test" />);
    const subheader = wrapper.find("p");
    expect(subheader).toHaveLength(1);
    expect(subheader.text()).toEqual("subheader test");
  });

  it("render only right button", () => {
    const wrapper = mount(<ModalContent rightButtonLabel="right button test" rightButtonOnClick={noop} />);
    const button = wrapper.find("Button");
    expect(button).toHaveLength(1);
  });

  it("render both left and right button", () => {
    const wrapper = mount(
      <ModalContent
        leftButtonLabel="left button test"
        leftButtonOnClick={noop}
        rightButtonLabel="right button test"
        rightButtonOnClick={noop}
      />
    );
    const button = wrapper.find("Button");
    expect(button).toHaveLength(2);
  });
});
