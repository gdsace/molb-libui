import React from "react";

import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { Dropdown } from "../../components/dropdown/Dropdown";
import { PremiseDropdown } from "../../components/dropdown/PremiseDropdown";
import { wInfo } from "../utils";

const mockOptions = [
  {
    label: "foo bar baz foo bar baz foo bar baz foo bar baz",
    value: {
      address: {
        postalCode: "123456"
      }
    }
  },
  {
    label: "foo bar",
    value: "baz"
  },
  {
    label: "foo bar",
    value: "baz"
  },
  {
    label: "foo bar",
    value: "baz"
  },
  {
    label: "foo bar",
    value: "baz"
  },
  {
    label: "foo bar",
    value: "baz"
  }
];

/**
 * State component can use store as a component.
 * Then the stateless component Dropdown get update
 * from store.get("value")
 */
(storiesOf("Components", module) as any).addWithJSX(
  "Dropdown",
  wInfo(``)(() => (
    <div>
      <div style={{ fontSize: "14px", padding: "0 24px" }}>
        <PremiseDropdown options={mockOptions} />
        <div style={{ width: "50%", margin: "16px auto" }}>
          <Dropdown
            label="Label"
            options={mockOptions}
            onChange={action("value")}
          />
        </div>
        <div style={{ width: "50%", margin: "16px auto" }}>
          <Dropdown options={mockOptions} isDisabled />
        </div>

        <div style={{ width: "50%", margin: "16px auto" }}>
          <Dropdown options={mockOptions} error="Some error" />
        </div>
      </div>
    </div>
  ))
);
