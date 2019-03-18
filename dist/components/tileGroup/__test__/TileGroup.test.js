import { shallow } from "enzyme";
import * as React from "react";
import { TileGroup } from "../index";
import { Tile } from "../tile";
describe("TileGroup", function () {
    it("should render ui-component correctly", function () {
        var wrapper = shallow(React.createElement(TileGroup, null,
            React.createElement(Tile, { icon: "store", content: "Restaurant" }),
            React.createElement(Tile, { icon: "store", content: "Restaurant" }),
            React.createElement(Tile, { icon: "store", content: "Restaurant" })));
        expect(wrapper.find(Tile)).toHaveLength(3);
    });
    it("should trigger onChange event when component selection change ", function () {
        var onChange = jest.fn();
        var wrapper = shallow(React.createElement(TileGroup, { onChange: onChange },
            React.createElement(Tile, { icon: "store", content: "Restaurant" }),
            React.createElement(Tile, { icon: "store", content: "Restaurant" }),
            React.createElement(Tile, { icon: "store", content: "Restaurant" })));
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
    it("should not throw error when there is no onChange fun provided and tile triggered change event", function () {
        var wrapper = shallow(React.createElement(TileGroup, null,
            React.createElement(Tile, { icon: "store", content: "Restaurant" }),
            React.createElement(Tile, { icon: "store", content: "Restaurant" }),
            React.createElement(Tile, { icon: "store", content: "Restaurant" })));
        wrapper
            .find(Tile)
            .at(0)
            .dive()
            .find('input[type="radio"]')
            .at(0)
            .simulate("change", { target: { value: "restaurant" } });
        expect(wrapper.find(Tile)).toHaveLength(3);
    });
    it("should not trigger onChange event when checked tile component checked again ", function () {
        var onChange = jest.fn();
        var wrapper = shallow(React.createElement(TileGroup, { onChange: onChange },
            React.createElement(Tile, { icon: "store", content: "Restaurant", checked: true, value: "restaurant" }),
            React.createElement(Tile, { icon: "store", content: "Restaurant", value: "restaurant1" }),
            React.createElement(Tile, { icon: "store", content: "Restaurant", value: "restaurant2" })));
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
    it("should make the Tile checked when Tile value equals TileGroup value", function () {
        var wrapper = shallow(React.createElement(TileGroup, { value: "restaurant1" },
            React.createElement(Tile, { icon: "store", content: "Restaurant", value: "restaurant1" }),
            React.createElement(Tile, { icon: "store", content: "Restaurant", value: "restaurant2" }),
            React.createElement(Tile, { icon: "store", content: "Restaurant", value: "restaurant2" })));
        expect(wrapper
            .find(Tile)
            .at(0)
            .props().checked).toBe(true);
    });
    it("should TileGroup value in state equals the tile which checked", function () {
        var wrapper = shallow(React.createElement(TileGroup, null,
            React.createElement(Tile, { icon: "store", content: "Restaurant", value: "restaurant1", checked: true }),
            React.createElement(Tile, { icon: "store", content: "Restaurant", value: "restaurant2" }),
            React.createElement(Tile, { icon: "store", content: "Restaurant", value: "restaurant2" })));
        expect(wrapper.state()).toEqual({ value: "restaurant1" });
    });
});
//# sourceMappingURL=TileGroup.test.js.map