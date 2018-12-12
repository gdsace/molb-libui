import React from "react";

import { Table } from "@src/components";
import { storiesOf } from "@storybook/react";
import { wInfo } from "../utils";

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
    title: "Address",
    key: "address"
  },
  {
    title: "Tags",
    key: "tags",
    render: true
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
  },
  tableStyle: {
    margin: "50px",
    width: "90%"
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

(storiesOf("Components", module) as any).addWithJSX(
  "Table",
  wInfo(``)(() => (
    <Table
      style={style.tableStyle}
      columns={tableColumns}
      dataSource={dataSource}
    />
  ))
);
