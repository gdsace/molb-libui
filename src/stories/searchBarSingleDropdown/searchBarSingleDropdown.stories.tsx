import React from "react";

import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { SearchSingleDropdown } from "../../components";
import { CategoryName, wInfo } from "../utils";

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

const placeholder = "Seach here...";
const buttonLabel = "Search";

(storiesOf(CategoryName.Others, module) as any).addWithJSX(
  "Search bar with single dropdown",
  wInfo(``)(() => (
    <div className={styles.rootContainer}>
      <h6 className={styles.groupHeader}>Search Bar with a single dropdown</h6>
      <p>text field and dropdown box is powered by the store</p>
      <div className={styles.itemsContainer}>
        <div className={styles.box}>
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
      </div>
    </div>
  ))
);
