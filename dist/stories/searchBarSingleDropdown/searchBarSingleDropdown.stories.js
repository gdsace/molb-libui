import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { SearchSingleDropdown } from "../../components";
import { CategoryName, wInfo } from "../utils";
var styles = require("./searchBarSingleDropdown.stories.scss");
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
var placeholder = "Search here...";
var buttonLabel = "Search";
var errorMsg = "Validation error message, blah blah blah...";
storiesOf(CategoryName.Others, module).addWithJSX("Search bar with single dropdown", wInfo("")(function () { return (React.createElement("div", null,
    React.createElement("h6", null, "Search Bar with a single dropdown"),
    React.createElement("p", null, "text field and dropdown box is powered by the store"),
    React.createElement("div", { className: styles.section },
        React.createElement(SearchSingleDropdown, { dropdownOptions: SEARCH_CRITERIAS, selectedDropdown: SEARCH_CRITERIAS[0], handleDropdownChange: action("dropdown change"), inputText: "", handleInputChange: action("text input change"), inputPlaceholder: placeholder, inputMaxlength: 100, buttonLabel: buttonLabel, handleButtonClick: action("search") })),
    React.createElement("p", null, "with error message"),
    React.createElement("div", { className: styles.section },
        React.createElement(SearchSingleDropdown, { dropdownOptions: SEARCH_CRITERIAS, selectedDropdown: SEARCH_CRITERIAS[0], handleDropdownChange: action("dropdown change"), inputText: "", handleInputChange: action("text input change"), inputPlaceholder: placeholder, inputMaxlength: 100, buttonLabel: buttonLabel, handleButtonClick: action("search"), showError: true, errorMsg: errorMsg })))); }));
//# sourceMappingURL=searchBarSingleDropdown.stories.js.map