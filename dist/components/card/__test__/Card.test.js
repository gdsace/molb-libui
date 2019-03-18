import { mount } from "enzyme";
import * as React from "react";
import { CardTheme, TagTheme } from "../../EnumValues";
import { Tag } from "../../tag";
import { Card } from "../Card";
describe("Card", function () {
    var Description = (React.createElement("div", null, "All food and beverage establishments must be licenced in order to operate. Comply with the Code of Practice of Environmental Health (COPEH), and enrol for Food Hygiene training."));
    var title = "Normal Card without supportingText";
    var subtitle = "JTC Corporation";
    var price = "S$800.00";
    var ActionField = React.createElement("div", null, "View Details ->");
    it("renders ui", function () {
        var onClickMock = jest.fn();
        var wrapper = mount(React.createElement(Card, { title: title, subtitle: subtitle, description: Description, theme: CardTheme.Normal, supportingText: price, status: "In Processing", actionField: ActionField }));
        var titleUi = wrapper.find(".title");
        var actionFieldUi = wrapper.find(".actionField");
        expect(titleUi.text()).toEqual(title);
        expect(actionFieldUi).toHaveLength(1);
        wrapper.find(".card").simulate("click", {});
        expect(onClickMock).not.toBeCalled();
    });
    it("Clickable Card can handle click event ", function () {
        var onClickMock = jest.fn();
        var wrapper = mount(React.createElement(Card, { title: title, subtitle: subtitle, theme: CardTheme.Clickable, onClick: onClickMock }));
        wrapper.find(".card").simulate("click", {});
        expect(wrapper.find(Tag)).toHaveLength(0);
        expect(onClickMock).toBeCalled();
    });
    it("should render Tag when have status in props", function () {
        var onClickMock = jest.fn();
        var wrapper = mount(React.createElement(Card, { title: title, subtitle: subtitle, status: "Pending Payment", statusTheme: TagTheme.Green, theme: CardTheme.Clickable, onClick: onClickMock }));
        expect(wrapper.find(Tag)).toHaveLength(1);
    });
});
//# sourceMappingURL=Card.test.js.map