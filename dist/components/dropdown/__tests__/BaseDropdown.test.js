import { mount } from "enzyme";
import React from "react";
import { BaseDropdown } from "../BaseDropdown";
describe("BaseDropdown", function () {
    var mockOptions = [{ label: "foo", value: "foovalue" }];
    it("renders and passes down props to Select", function () {
        var wrapper = mount(React.createElement(BaseDropdown, { options: mockOptions, value: mockOptions[0] }));
        var dropdown = wrapper.find(BaseDropdown);
        expect(dropdown).toHaveLength(1);
        expect(dropdown.text()).toEqual(mockOptions[0].label);
    });
});
//# sourceMappingURL=BaseDropdown.test.js.map