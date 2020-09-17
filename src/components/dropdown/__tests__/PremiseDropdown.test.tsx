import { mount } from "enzyme";
import React from "react";
import { PremiseDropdown } from "../PremiseDropdown";

describe("PremiseDropdown", () => {
  it("renders postal code when data is premise-like", () => {
    const premiseOptions = [
      {
        label: "foo",
        value: {
          address: {
            postalCode: "fooPostal"
          }
        }
      }
    ];

    const wrapper = mount(<PremiseDropdown options={premiseOptions} value={premiseOptions[0]} />);

    const dropdown = wrapper.find(PremiseDropdown);
    expect(dropdown).toHaveLength(1);
    expect(dropdown.text()).toEqual("foo\u00a0(fooPostal)"); // &nbsp;
  });

  it("renders normal label when data is not premise-like", () => {
    const normalOptions = [
      {
        label: "foo",
        value: {
          notAnAddress: {
            postalCode: "fooPostal"
          }
        }
      }
    ];

    const wrapper = mount(<PremiseDropdown options={normalOptions} value={normalOptions[0]} />);

    const dropdown = wrapper.find(PremiseDropdown);
    expect(dropdown).toHaveLength(1);
    expect(dropdown.text()).toEqual("foo");
  });
});
