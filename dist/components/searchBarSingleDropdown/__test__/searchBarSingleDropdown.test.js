var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { mount } from "enzyme";
import * as React from "react";
import { Button, Dropdown, Input } from "../../../components";
import { SearchSingleDropdown } from "../searchBarSingleDropdown";
export var SEARCH_CRITERIAS = [
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
describe("Search Bar with single dropdown", function () {
    var props;
    beforeEach(function () {
        props = {
            dropdownOptions: SEARCH_CRITERIAS,
            selectedDropdown: SEARCH_CRITERIAS[0],
            handleDropdownChange: function (value) { return value; },
            inputText: "test",
            handleInputChange: function (inputText) { return inputText; },
            inputPlaceholder: "test placeholder",
            inputMaxlength: 100,
            buttonLabel: "Search",
            handleButtonClick: function (inputText, selectedDropdown) { return [
                inputText,
                selectedDropdown
            ]; }
        };
    });
    it("should have a dropdown for search criteria", function () {
        var wrapper = mount(React.createElement(SearchSingleDropdown, __assign({}, props)));
        var criteriaDropdown = wrapper.find(Dropdown);
        expect(criteriaDropdown).toHaveLength(1);
        expect(criteriaDropdown.text()).toEqual(SEARCH_CRITERIAS[0].label);
    });
    it("should have an input box for search text", function () {
        var wrapper = mount(React.createElement(SearchSingleDropdown, __assign({}, props)));
        var textInput = wrapper.find(Input);
        expect(textInput).toHaveLength(1);
        expect(textInput.prop("value")).toEqual("test");
    });
    it("should have a search button", function () {
        var wrapper = mount(React.createElement(SearchSingleDropdown, __assign({}, props)));
        var button = wrapper.find(Button);
        expect(button).toHaveLength(1);
        expect(button.text()).toEqual("Search");
    });
});
//# sourceMappingURL=searchBarSingleDropdown.test.js.map