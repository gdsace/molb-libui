import { mount } from "enzyme";
import * as React from "react";
import { Button, Dropdown, Input } from "../../../components";
import { ISearchSingleDropdownProps, SearchSingleDropdown } from "../searchBarSingleDropdown";

export const SEARCH_CRITERIAS = [
  {
    value: "UEN",
    label: "UEN"
  },
  {
    value: "CompanyName",
    label: "Company Name"
  },
  {
    value: "ApplicationNumber",
    label: "Application No."
  },
  {
    value: "SubmissionNumber",
    label: "Submission No."
  },
  {
    value: "NRIC",
    label: "ID No."
  }
];

describe("Search Bar with single dropdown", () => {
  let props: ISearchSingleDropdownProps;
  beforeEach(() => {
    props = {
      dropdownOptions: SEARCH_CRITERIAS,
      selectedDropdown: SEARCH_CRITERIAS[0],
      handleDropdownChange: value => value,
      inputText: " test ",
      handleInputChange: jest.fn(),
      inputPlaceholder: "test placeholder",
      inputMaxlength: 100,
      buttonLabel: "Search",
      handleButtonClick: jest.fn()
    };
  });
  it("should have a dropdown for search criteria", () => {
    const wrapper = mount(<SearchSingleDropdown {...props} />);

    const criteriaDropdown = wrapper.find(Dropdown);

    expect(criteriaDropdown).toHaveLength(1);
    expect(criteriaDropdown.text()).toEqual(SEARCH_CRITERIAS[0].label);
  });

  it("should have an input box for search text", () => {
    const wrapper = mount(<SearchSingleDropdown {...props} />);

    const textInput = wrapper.find(Input);

    expect(textInput).toHaveLength(1);
    expect(textInput.prop("value")).toEqual(" test ");
  });

  it("should have a search button", () => {
    const wrapper = mount(<SearchSingleDropdown {...props} />);

    const button = wrapper.find(Button);

    expect(button).toHaveLength(1);
    expect(button.text()).toEqual("Search");
  });

  ["$ab", "ab$", "ab", "$^&*()a%b#!@"].forEach(input => {
    it(`should escape special characters ${input}`, () => {
      const wrapper = mount(<SearchSingleDropdown {...props} />);
      const instance = wrapper.instance() as SearchSingleDropdown;
      // @ts-ignore
      instance.handleOnChangeInputText(input);
      expect(props.handleInputChange).toHaveBeenCalledWith("ab");
    });
  });

  it("should trigger trimAndSearch on search button click", () => {
    const trimAndSearchSpy = jest.spyOn(
      SearchSingleDropdown.prototype,
      // @ts-ignore
      "trimAndSearch"
    );
    const wrapper = mount(<SearchSingleDropdown {...props} />);
    wrapper.find(Button).simulate("click");
    expect(trimAndSearchSpy).toHaveBeenCalled();
  });

  it("should trigger trimAndSearch on enter search", () => {
    const trimAndSearchSpy = jest.spyOn(
      SearchSingleDropdown.prototype,
      // @ts-ignore
      "trimAndSearch"
    );
    const wrapper = mount(<SearchSingleDropdown {...props} />);
    wrapper
      .find("input")
      .at(1)
      .simulate("keypress", { key: "Enter" });
    expect(trimAndSearchSpy).toHaveBeenCalled();
  });

  it("trimAndSearch should trim input value", () => {
    const wrapper = mount(<SearchSingleDropdown {...props} />);
    const instance = wrapper.instance() as SearchSingleDropdown;
    // @ts-ignore
    instance.trimAndSearch();
    expect(props.handleInputChange).toHaveBeenCalledWith("test");
    expect(props.handleButtonClick).toHaveBeenCalledWith("test", props.selectedDropdown);
  });
});
