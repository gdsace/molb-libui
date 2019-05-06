import { mount } from "enzyme";
import * as React from "react";
import { Dropdown } from "../Dropdown";
describe("Dropdown", function () {
    var mockOptions = [
        {
            label: "foo",
            value: "bar"
        }
    ];
    it("renders", function () {
        var wrapper = mount(React.createElement(Dropdown, { options: mockOptions, value: mockOptions[0] }));
        var dropdown = wrapper.find(Dropdown);
        expect(dropdown).toHaveLength(1);
        expect(dropdown.text()).toEqual("foo");
    });
    it("renders an error message when error prop is set", function () {
        var wrapper = mount(React.createElement(Dropdown, { options: mockOptions, value: mockOptions[0], error: "error!" }));
        var error = wrapper.find(".errorMessage");
        expect(error).toHaveLength(1);
        expect(error.text()).toEqual("error!");
    });
});
//# sourceMappingURL=Dropdown.test.js.map