import { shallow } from "enzyme";
import * as React from "react";
import { TileTheme } from "../../../EnumValues";
import { Icon } from "../../../icons";
import { Tile } from "../index";

describe("Tile", () => {
  it("should render tile which status is not checked and enabled", () => {
    const wrapper = shallow(<Tile icon="store" content="Restaurant" />);

    expect(wrapper.find(Icon)).toHaveLength(2);
    expect(
      wrapper
        .find(Icon)
        .at(0)
        .props().type
    ).toBe("checkbox");
    expect(wrapper.find("span")).toHaveLength(3);
    expect(
      wrapper
        .find("span")
        .at(1)
        .text()
    ).toEqual("Restaurant");
  });

  it("should render tile which status is checked and enabled", () => {
    const wrapper = shallow(<Tile icon="store" checked content="Restaurant" />);

    expect(wrapper.find(Icon)).toHaveLength(2);
    expect(
      wrapper
        .find(Icon)
        .at(0)
        .props().type
    ).toBe("checkmark");
    expect(wrapper.find("span")).toHaveLength(3);
  });

  it("should render tile which status is checked and disabled", () => {
    const wrapper = shallow(
      <Tile icon="store" checked content="Restaurant" disabled />
    );

    expect(wrapper.find(Icon)).toHaveLength(2);
    expect(
      wrapper
        .find(Icon)
        .at(0)
        .props().type
    ).toBe("checkmark");
    expect(wrapper.find("span")).toHaveLength(3);
    expect(wrapper.find("input").props().disabled).toBe(true);
  });

  it("should render small-tile (smallTile)", () => {
    const wrapper = shallow(
      <Tile
        icon="store"
        content="Restaurant"
        description="Some description"
        theme={TileTheme.SmallTile}
      />
    );

    expect(wrapper.find(".tileIcon")).toHaveLength(1);
    expect(wrapper.find(".tileHeader")).toHaveLength(1);
    expect(wrapper.find(".tileDescription")).toHaveLength(0);
  });

  it("should render medium-tile (mediumTile)", () => {
    const wrapper = shallow(
      <Tile
        imgSrc={"http:xxxxx"}
        content="Restaurant"
        description="Some description"
        theme={TileTheme.MediumTile}
      />
    );

    expect(wrapper.find(".imgWrapper")).toHaveLength(1);
    expect(wrapper.find(".tileHeader")).toHaveLength(1);
    expect(wrapper.find(".tileDescription")).toHaveLength(1);
  });

  it("should render large-tile (largeTile)", () => {
    const wrapper = shallow(
      <Tile
        icon="store"
        content="Restaurant"
        description="Some description"
        theme={TileTheme.LargeTile}
      />
    );

    expect(wrapper.find(".tileIcon")).toHaveLength(1);
    expect(wrapper.find(".tileHeader")).toHaveLength(1);
    expect(wrapper.find(".tileDescription")).toHaveLength(1);
  });

  it("should render error when large-tile", () => {
    const wrapper = shallow(
      <Tile
        icon="48-px-store"
        content="Restaurant"
        description="Some description"
        theme={TileTheme.LargeTile}
        error="error"
      />
    );

    expect(wrapper.find(".errorContent")).toHaveLength(1);
    expect(wrapper.find(".errorIcon")).toHaveLength(1);
  });
});
