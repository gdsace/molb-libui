import * as Enzyme from "enzyme";
import * as React from "react";
import { Sidebar } from "../Sidebar";

describe("Sidebar", () => {
  it("should call onItemclick prop", () => {
    const onItemClickMock = jest.fn();
    const list = [
      {
        title: "title 1"
      }
    ];
    const wrapper = Enzyme.shallow(<Sidebar list={list} onItemClick={onItemClickMock} />);
    wrapper
      .find("ul li")
      .at(0)
      .simulate("click");
    expect(onItemClickMock).toBeCalledWith(0);
  });

  it("should apply active class to sidebar item", () => {
    const list = [
      {
        title: "title 1"
      },
      {
        title: "title 2"
      }
    ];
    const wrapper = Enzyme.mount(<Sidebar list={list} selectedIndex={1} />);
    expect(
      wrapper
        .find("ul li")
        .at(1)
        .hasClass("activeItem")
    ).toBeTruthy();
  });
});
