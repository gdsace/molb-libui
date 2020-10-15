import React from "react";

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
    name: "John Brown is a long text.John Brown is a long text.John Brown is a long text.",
    age: 32,
    address: (
      <span style={style.textStyle2}>
        &quot;New York No. 1 Lake Park.New York No. 1 Lake Park.New York No. 1 Lake Park.New York No. 1 Lake Park&quot;
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
