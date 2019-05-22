import * as Enzyme from "enzyme";
import * as React from "react";
import { Sidebar } from "../Sidebar";
describe("Sidebar", function () {
    it("should call onItemclick prop", function () {
        var onItemClickMock = jest.fn();
        var list = [
            {
                title: "title 1"
            }
        ];
        var wrapper = Enzyme.shallow(React.createElement(Sidebar, { list: list, onItemClick: onItemClickMock }));
        wrapper
            .find("ul li")
            .at(0)
            .simulate("click");
        expect(onItemClickMock).toBeCalledWith(0);
    });
    it("should apply active class to sidebar item", function () {
        var list = [
            {
                title: "title 1"
            },
            {
                title: "title 2"
            }
        ];
        var wrapper = Enzyme.mount(React.createElement(Sidebar, { list: list, selectedIndex: 1 }));
        expect(wrapper
            .find("ul li")
            .at(1)
            .hasClass("activeItem")).toBeTruthy();
    });
});
//# sourceMappingURL=Sidebar.test.js.map