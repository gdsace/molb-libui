import React from "react";

import { PremiseDropdown, Tab } from "@src/components";
import { storiesOf } from "@storybook/react";
import { wInfo } from "../utils";

const list = [
  {
    label: "tab 1",
    tabPanel: (
      <div>
        <label>tab1</label>
      </div>
    )
  },
  {
    label: "tab 2",
    tabPanel: (
      <div>
        <label>tab2</label>
      </div>
    )
  }
];

const leftNodeStyles = {
  fontWeight: 1000
};

const leftNode: React.ReactNode = (
  <div style={leftNodeStyles}>
    You can define your left component here; And define the left and right
    padding
  </div>
);

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

const leftNode2: React.ReactNode = <PremiseDropdown options={mockOptions} />;

(storiesOf("Components", module) as any).addWithJSX(
  "Tab",
  wInfo(``)(() => (
    <div>
      <div>
        <Tab list={list} />
      </div>
      <div>
        <Tab list={list} panePadding={50} />
      </div>
      <div>
        <Tab leftNode={leftNode} spacing={150} panePadding={150} list={list} />
      </div>
      <div>
        <Tab leftNode={leftNode2} list={list} />
      </div>
    </div>
  ))
);
