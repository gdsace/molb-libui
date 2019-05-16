import { shallow } from "enzyme";
import * as React from "react";
import { SearchSingleDropdown, ISearchSingleDropdownProps } from "../searchBarSingleDropdown";
import { Dropdown, Input, Button } from '../../../components';

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
      handleDropdownChange: (value) => value,
      inputText: "test",
      handleInputChange: (inputText) => inputText,
      inputPlaceholder: "test placeholder",
      inputMaxlength: 100,
      buttonLabel: "Search",
      handleButtonClick: (inputText, selectedDropdown) => [inputText, selectedDropdown]
    };
  });
  it("should have a dropdown for search criteria", () => {
    const wrapper = shallow(
      <SearchSingleDropdown {...props} />
    );

    const criteriaDropdown = wrapper.find(Dropdown);

    expect(criteriaDropdown).toHaveLength(1);
    expect(criteriaDropdown.text()).toEqual(SEARCH_CRITERIAS[0].label);
  });

  it("should have an input box for search text", () => {
    const wrapper = shallow(
      <SearchSingleDropdown {...props} />
    );

    const textInput = wrapper.find(Input);

    expect(textInput).toHaveLength(1);
    expect(textInput.text()).toEqual("test");
  });

  it("should have a search button", () => {
    const wrapper = shallow(
      <SearchSingleDropdown {...props} />
    );

    const button = wrapper.find(Button);

    expect(button).toHaveLength(1);
    expect(button.text()).toEqual("Search");
  });
});