import React from "react";

import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { SearchSingleDropdown, Theme } from "../../components";
import { CategoryName, wInfo } from "../utils";

const styles = require("./searchBarSingleDropdown.stories.scss");

export const SEARCH_CRITERIAS = [
  {
    value: "UEN",
    label: "UEN",
  },
  {
    value: "CompanyName",
    label: "Company Name",
  },
  {
    value: "ApplicationNumber",
    label: "Application No.",
  },
  {
    value: "SubmissionNumber",
    label: "Submission No.",
  },
  {
    value: "NRIC",
    label: "ID No.",
  },
];

const placeholder = "Search here...";
const buttonLabel = "Search";
const errorMsg = "Validation error message, blah blah blah...";

(storiesOf(CategoryName.Others, module) as any).addWithJSX(
  "Search bar with single dropdown",
  wInfo(``)(() => (
    <div>
      <h6>Search Bar with a single dropdown</h6>
      <p>text field and dropdown box is powered by the store</p>
      <div className={styles.section}>
        <SearchSingleDropdown
          dropdownOptions={SEARCH_CRITERIAS}
          selectedDropdown={SEARCH_CRITERIAS[0]}
          handleDropdownChange={action("dropdown change")}
          inputText={""}
          handleInputChange={action("text input change")}
          inputPlaceholder={placeholder}
          inputMaxlength={100}
          buttonLabel={buttonLabel}
          handleButtonClick={action("search")}
        />
      </div>
      <p>with error message</p>
      <div className={styles.section}>
        <SearchSingleDropdown
          dropdownOptions={SEARCH_CRITERIAS}
          selectedDropdown={SEARCH_CRITERIAS[0]}
          handleDropdownChange={action("dropdown change")}
          inputText={""}
          handleInputChange={action("text input change")}
          inputPlaceholder={placeholder}
          inputMaxlength={100}
          buttonLabel={buttonLabel}
          buttonTheme={Theme.Secondary}
          handleButtonClick={action("search")}
          showError={true}
          errorMsg={errorMsg}
        />
      </div>
    </div>
  ))
);
