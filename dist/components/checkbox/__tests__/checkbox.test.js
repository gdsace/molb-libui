import { mount } from "enzyme";
import * as React from "react";
import { Checkbox } from "../Checkbox";
describe("Checkbox", function () {
    it("should call oncheckboxclick on props when value changes", function () {
        var onCheckboxClickMock = jest.fn();
        var event = {
            target: {
                checked: false
            }
        };
        var wrapper = mount(React.createElement(Checkbox, { onCheckboxClick: onCheckboxClickMock, disabled: false, checked: true }));
        var checkbox = wrapper.find("input");
        checkbox.simulate("change", event);
        expect(onCheckboxClickMock).toBeCalledWith(false);
    });
});
//# sourceMappingURL=checkbox.test.js.map