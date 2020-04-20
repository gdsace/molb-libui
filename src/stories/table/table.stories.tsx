import React from "react";

import { storiesOf } from "@storybook/react";
import { Table, TableTheme } from "../../components/index";
import { CategoryName, wInfo } from "../utils";

const styles = require("./table.stories.scss");

export const tableColumns = [
  {
    title: "Name",
    key: "name"
  },
  {
    title: "Age",
    key: "age"
  },
  {
    title: "Address<BR>Line-break-in-title",
    key: "address",
    hiddenInlineTitle: true
  },
  {
    title: "Tags",
    key: "tags"
  }
];

const style = {
  activeStyle: {
    width: "55px",
    height: "21px",
    borderRadius: "3px",
    backgroundColor: "#e9f6ec",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    fontSize: "12px",
    fontWeight: 600,
    fontStyle: "normal",
    color: "#28a745"
  },
  textStyle2: {
    fontSize: "14px",
    color: "#647283"
  }
};

const activeTag = (
  <div style={style.activeStyle}>
    <span style={style.textStyle}>Active</span>
  </div>
);

export const dataSource = [
  {
    key: "1",
    name:
      "John Brown is a long text.John Brown is a long text.John Brown is a long text.",
    age: 32,
    address: (
      <span style={style.textStyle2}>
        "New York No. 1 Lake Park.New York No. 1 Lake Park.New York No. 1 Lake
        Park.New York No. 1 Lake Park"
      </span>
    ),
    tags: activeTag
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: activeTag
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: activeTag
  }
];

export const rfaDataSource = [
  {
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: activeTag,
    onRowClickHandler: () => alert("You've clicked on a table row")
  },
  {
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: activeTag,
    onRowClickHandler: () => alert("You've clicked on a table row")
  },
  {
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: activeTag,
    onRowClickHandler: () => alert("You've clicked on a table row")
  },
  {
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: activeTag,
    onRowClickHandler: () => alert("You've clicked on a table row")
  }
];

(storiesOf(CategoryName.Table, module) as any).addWithJSX(
  "Table",
  wInfo(``)(() => (
    <div className={styles.rootContainer}>
      <section className={styles.section}>
        <h6>RFA Search Table</h6>
        <Table
          columns={tableColumns}
          dataSource={rfaDataSource}
          theme={TableTheme.Basic}
          clickableRow={true}
        />
      </section>

      <h6 className={styles.groupHeader}>Table type: themes</h6>
      <div className={styles.itemsContainer}>
        <div className={styles.box}>
          <p className={styles.notes}>Showing "No data available":</p>
          <Table
            columns={tableColumns}
            dataSource={[]}
            theme={TableTheme.Basic}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>Striped table with border:</p>
          <Table
            columns={tableColumns}
            dataSource={dataSource}
            bordered={true}
            theme={TableTheme.Striped}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>Basic table:</p>
          <Table
            columns={tableColumns}
            dataSource={dataSource}
            theme={TableTheme.Basic}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>Basic expandable table:</p>
          <Table
            columns={tableColumns}
            dataSource={dataSource}
            theme={TableTheme.Expandable}
            expandable={true}
            onExpandButtonClick={() => true}
            // @ts-ignore
            expandableRowTemplate={(props: { index: number }) => (
              <div>TEST with index:{props.index}</div>
            )}
          />
        </div>
      </div>
    </div>
  ))
);
