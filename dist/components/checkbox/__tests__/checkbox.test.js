import { mount } from "enzyme";
import * as React from "react";
import { noop } from "react-select/lib/utils";
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
    it("should update state when props value is updated", function () {
        var wrapper = mount(React.createElement(Checkbox, { onCheckboxClick: noop, checked: false }));
        wrapper.setProps({ checked: true });
        expect(wrapper.state()).toEqual({ checked: true });
    });
});
//# sourceMappingURL=checkbox.test.js.map