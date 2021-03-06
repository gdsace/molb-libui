import React from "react";

import { PremiseDropdown, Tabs } from "../../components";

const styles = require("./tabs.stories.scss");

const list = [
  {
    label: "tab 1",
    tabPanel: (
      <div>
        <label>Sample Content 1</label>
      </div>
    )
  },
  {
    label: "tab 2",
    tabPanel: (
      <div>
        <label>Sample Content 2</label>
      </div>
    )
  }
];

const leftNodeStyles = {
  fontWeight: 1000
};

const leftNode: React.ReactNode = (
  <div style={leftNodeStyles}>You can define your left component here; And define the left and right padding</div>
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

export const _Tabs = () => (
  <div className={styles.rootContainer}>
    <h6 className={styles.groupHeader}>Tabs:...</h6>
    <div className={styles.itemsContainer}>
      <div className={styles.box}>
        <p className={styles.notes}>Normal</p>
        <Tabs list={list} />
      </div>
      <div className={styles.box}>
        <p className={styles.notes}>Normal: with customized tabsBarContentStyle</p>
        <Tabs list={list} tabsBarContentStyle={styles.tabsBarContentStyle} />
      </div>
      <div className={styles.box}>
        <p className={styles.notes}>With left node</p>
        <Tabs leftNode={leftNode} list={list} />
      </div>
      <div className={styles.box}>
        <p className={styles.notes}>With left-node 2</p>
        <Tabs leftNode={leftNode2} list={list} />
      </div>
    </div>
  </div>
);

export default {
  title: "Tabs",
  component: Tabs
};
