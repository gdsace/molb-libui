import { shallow } from "enzyme";
import * as React from "react";
import { TileGroup } from "../index";
import { Tile } from "../tile";

describe("TileGroup", () => {
  it("should render ui-component correctly", () => {
    const wrapper = shallow(
      <TileGroup>
        <Tile icon="store" content="Restaurant" />
        <Tile icon="store" content="Restaurant" />
        <Tile icon="store" content="Restaurant" />
      </TileGroup>
    );

    expect(wrapper.find(Tile)).toHaveLength(3);
  });

  it("should trigger onChange event when component selection change ", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <TileGroup onChange={onChange}>
        <Tile icon="store" content="Restaurant" />
        <Tile icon="store" content="Restaurant" />
        <Tile icon="store" content="Restaurant" />
      </TileGroup>
    );

    wrapper
      .find(Tile)
      .at(0)
      .dive()
      .find('input[type="radio"]')
      .at(0)
      .simulate("change", { target: { value: "restaurant" } });
    expect(wrapper.find(Tile)).toHaveLength(3);
    expect(onChange).toBeCalled();
  });

  it("should not throw error when there is no onChange fun provided and tile triggered change event", () => {
    const wrapper = shallow(
      <TileGroup>
        <Tile icon="store" content="Restaurant" />
        <Tile icon="store" content="Restaurant" />
        <Tile icon="store" content="Restaurant" />
      </TileGroup>
    );

    wrapper
      .find(Tile)
      .at(0)
      .dive()
      .find('input[type="radio"]')
      .at(0)
      .simulate("change", { target: { value: "restaurant" } });
    expect(wrapper.find(Tile)).toHaveLength(3);
  });

  it("should not trigger onChange event when checked tile component checked again ", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <TileGroup onChange={onChange}>
        <Tile icon="store" content="Restaurant" checked value="restaurant" />
        <Tile icon="store" content="Restaurant" value="restaurant1" />
        <Tile icon="store" content="Restaurant" value="restaurant2" />
      </TileGroup>
    );

    wrapper
      .find(Tile)
      .at(0)
      .dive()
      .find('input[type="radio"]')
      .at(0)
      .simulate("change", { target: { value: "restaurant" } });
    expect(wrapper.find(Tile)).toHaveLength(3);
    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it("should make the Tile checked when Tile value equals TileGroup value", () => {
    const wrapper = shallow(
      <TileGroup value="restaurant1">
        <Tile icon="store" content="Restaurant" value="restaurant1" />
        <Tile icon="store" content="Restaurant" value="restaurant2" />
        <Tile icon="store" content="Restaurant" value="restaurant2" />
      </TileGroup>
    );

    expect(
      wrapper
        .find(Tile)
        .at(0)
        .props().checked
    ).toBe(true);
  });

  it("should TileGroup value in state equals the tile which checked", () => {
    const wrapper = shallow(
      <TileGroup>
        <Tile icon="store" content="Restaurant" value="restaurant1" checked />
        <Tile icon="store" content="Restaurant" value="restaurant2" />
        <Tile icon="store" content="Restaurant" value="restaurant2" />
      </TileGroup>
    );

    expect(wrapper.state()).toEqual({ value: "restaurant1" });
  });
});
