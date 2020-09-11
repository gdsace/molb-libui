import { mount } from "enzyme";
import React from "react";
import { PremiseDropdown } from "../PremiseDropdown";
describe("PremiseDropdown", function () {
    it("renders postal code when data is premise-like", function () {
        var premiseOptions = [
            {
                label: "foo",
                value: {
                    address: {
                        postalCode: "fooPostal"
                    }
                }
            }
        ];
        var wrapper = mount(React.createElement(PremiseDropdown, { options: premiseOptions, value: premiseOptions[0] }));
        var dropdown = wrapper.find(PremiseDropdown);
        expect(dropdown).toHaveLength(1);
        expect(dropdown.text()).toEqual("foo\u00a0(fooPostal)"); // &nbsp;
    });
    it("renders normal label when data is not premise-like", function () {
        var normalOptions = [
            {
                label: "foo",
                value: {
                    notAnAddress: {
                        postalCode: "fooPostal"
                    }
                }
            }
        ];
        var wrapper = mount(React.createElement(PremiseDropdown, { options: normalOptions, value: normalOptions[0] }));
        var dropdown = wrapper.find(PremiseDropdown);
        expect(dropdown).toHaveLength(1);
        expect(dropdown.text()).toEqual("foo");
    });
});
//# sourceMappingURL=PremiseDropdown.test.js.map