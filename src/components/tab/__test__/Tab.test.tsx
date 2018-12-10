import * as Enzyme from "enzyme";
import * as React from "react";
import { Tab } from "../Tab";

describe("Tab", () => {
  it("should show tab item with label prop", () => {
    const list = [
      {
        label: "tab 1",
        tabPanel: <div />
      }
    ];
    const wrapper = Enzyme.shallow(<Tab list={list} />);
    const label = wrapper
      .find(".tab .item label")
      .at(0)
      .text();
    expect(label).toEqual(list[0].label);
  });

  it("should apply active class to tab item", () => {
    const list = [
      {
        label: "tab 1",
        tabPanel: <div />
      },
      {
        label: "tab 2",
        tabPanel: <div />
      }
    ];
    const wrapper = Enzyme.mount(<Tab list={list} />);
    wrapper
      .find(".tab .item")
      .at(1)
      .simulate("click");
    expect(
      wrapper
        .find(".tab .item")
        .at(1)
        .hasClass("activeItem")
    ).toBeTruthy();
  });

  it("should show active tab panel", () => {
    const list = [
      {
        label: "tab 1",
        tabPanel: (
          <div>
            <label>tab1</label>
          </div>
        )
      },
      {
        label: "tab 2",
        tabPanel: (
          <div>
            <label>tab2</label>
          </div>
        )
      }
    ];
    const wrapper = Enzyme.mount(<Tab list={list} />);
    wrapper
      .find(".tab .item")
      .at(1)
      .simulate("click");

    const label = wrapper
      .find(".tab .tabPanel label")
      .at(0)
      .text();
    expect(label).toEqual("tab2");
  });
});
