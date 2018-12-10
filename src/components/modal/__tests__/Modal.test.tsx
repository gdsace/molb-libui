import * as React from "react";

import { mount } from "enzyme";
import { noop } from "lodash";
import { Modal } from "../Modal";

describe("Modal", () => {
  it("should render the children", () => {
    const wrapper = mount(
      <Modal show={true} onClose={noop}>
        <p>test content</p>
      </Modal>
    );
    const p = wrapper.find("p");
    expect(p).toHaveLength(1);
    expect(p.text()).toEqual("test content");
  });

  it("should change visibility", () => {
    const wrapper = mount(
      <Modal show={false} onClose={noop}>
        <p>test content</p>
      </Modal>
    );
    expect(wrapper.props().show).toEqual(false);
  });

  it("can add header", () => {
    const wrapper = mount(
      <Modal show={true} onClose={noop} header={"header test"}>
        <p>test content</p>
      </Modal>
    );
    expect(wrapper.props().header).toEqual("header test");
  });

  it("should set body style overflow to auto when unmount", () => {
    const wrapper = mount(
      <Modal show={true} onClose={noop} header={"header test"}>
        <p>test content</p>
      </Modal>
    );

    wrapper.unmount();

    expect(document.body.style.overflow).toEqual("auto");
  });
});
