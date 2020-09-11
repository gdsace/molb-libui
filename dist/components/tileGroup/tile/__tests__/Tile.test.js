import { shallow } from "enzyme";
import * as React from "react";
import { TileTheme } from "../../../EnumValues";
import { Icon } from "../../../icons";
import { Tooltips } from "../../../tooltips";
import { Tile } from "../index";
describe("Tile", function () {
    it("should render tile which status is not checked and enabled", function () {
        var wrapper = shallow(React.createElement(Tile, { icon: "store", content: "Restaurant" }));
        expect(wrapper.find(Icon)).toHaveLength(2);
        expect(wrapper
            .find(Icon)
            .at(0)
            .props().type).toBe("checkbox");
        expect(wrapper.find("span")).toHaveLength(3);
        expect(wrapper
            .find("span")
            .at(1)
            .text()).toEqual("Restaurant");
    });
    it("should render tile which status is checked and enabled", function () {
        var wrapper = shallow(React.createElement(Tile, { icon: "store", checked: true, content: "Restaurant" }));
        expect(wrapper.find(Icon)).toHaveLength(2);
        expect(wrapper
            .find(Icon)
            .at(0)
            .props().type).toBe("checkmark");
        expect(wrapper.find("span")).toHaveLength(3);
    });
    it("should render tile which status is checked and disabled", function () {
        var wrapper = shallow(React.createElement(Tile, { icon: "store", checked: true, content: "Restaurant", disabled: true }));
        expect(wrapper.find(Icon)).toHaveLength(2);
        expect(wrapper
            .find(Icon)
            .at(0)
            .props().type).toBe("checkmark");
        expect(wrapper.find("span")).toHaveLength(3);
        expect(wrapper.find("input").props().disabled).toBe(true);
    });
    it("should render tile which status is disabled with tooltip", function () {
        var wrapper = shallow(React.createElement(Tile, { icon: "store", validationToolTip: "test", content: "Restaurant", disabled: true }));
        expect(wrapper.find(Icon)).toHaveLength(1);
        expect(wrapper.find(Tooltips)).toHaveLength(1);
        expect(wrapper
            .find(Tooltips)
            .at(0)
            .props().trigger.props.type).toBe("error");
        expect(wrapper.find("input").props().disabled).toBe(true);
    });
    it("should render small-tile (smallTile)", function () {
        var wrapper = shallow(React.createElement(Tile, { icon: "store", content: "Restaurant", description: "Some description", theme: TileTheme.SmallTile }));
        expect(wrapper.find(".tileIcon")).toHaveLength(1);
        expect(wrapper.find(".tileHeader")).toHaveLength(1);
        expect(wrapper.find(".tileDescription")).toHaveLength(0);
    });
    it("should render medium-tile (mediumTile)", function () {
        var wrapper = shallow(React.createElement(Tile, { imgSrc: "http:xxxxx", content: "Restaurant", description: "Some description", theme: TileTheme.MediumTile }));
        expect(wrapper.find(".imgWrapper")).toHaveLength(1);
        expect(wrapper.find(".tileHeader")).toHaveLength(1);
        expect(wrapper.find(".tileDescription")).toHaveLength(1);
    });
    it("should render large-tile (largeTile)", function () {
        var wrapper = shallow(React.createElement(Tile, { icon: "store", content: "Restaurant", description: "Some description", theme: TileTheme.LargeTile }));
        expect(wrapper.find(".tileIcon")).toHaveLength(1);
        expect(wrapper.find(".tileHeader")).toHaveLength(1);
        expect(wrapper.find(".tileDescription")).toHaveLength(1);
    });
    it("should render error when large-tile", function () {
        var wrapper = shallow(React.createElement(Tile, { icon: "48-px-store", content: "Restaurant", description: "Some description", theme: TileTheme.LargeTile, error: "error" }));
        expect(wrapper.find(".errorContent")).toHaveLength(1);
        expect(wrapper.find(".errorIcon")).toHaveLength(1);
    });
});
//# sourceMappingURL=Tile.test.js.map