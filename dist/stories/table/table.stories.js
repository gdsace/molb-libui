import React from "react";
import { storiesOf } from "@storybook/react";
import { Table, TableTheme } from "../../components/index";
import { CategoryName, wInfo } from "../utils";
var styles = require("./table.stories.scss");
export var tableColumns = [
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
var style = {
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
var activeTag = (React.createElement("div", { style: style.activeStyle },
    React.createElement("span", { style: style.textStyle }, "Active")));
export var dataSource = [
    {
        key: "1",
        name: "John Brown is a long text.John Brown is a long text.John Brown is a long text.",
        age: 32,
        address: (React.createElement("span", { style: style.textStyle2 }, "\"New York No. 1 Lake Park.New York No. 1 Lake Park.New York No. 1 Lake Park.New York No. 1 Lake Park\"")),
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
export var rfaDataSource = [
    {
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: activeTag,
        onRowClickHandler: function () { return alert("You've clicked on a table row"); }
    },
    {
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: activeTag,
        onRowClickHandler: function () { return alert("You've clicked on a table row"); }
    },
    {
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: activeTag,
        onRowClickHandler: function () { return alert("You've clicked on a table row"); }
    },
    {
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: activeTag,
        onRowClickHandler: function () { return alert("You've clicked on a table row"); }
    }
];
storiesOf(CategoryName.Table, module).addWithJSX("Table", wInfo("")(function () { return (React.createElement("div", { className: styles.rootContainer },
    React.createElement("section", { className: styles.section },
        React.createElement("h6", null, "RFA Search Table"),
        React.createElement(Table, { columns: tableColumns, dataSource: rfaDataSource, theme: TableTheme.Basic, clickableRow: true })),
    React.createElement("h6", { className: styles.groupHeader }, "Table type: themes"),
    React.createElement("div", { className: styles.itemsContainer },
        React.createElement("div", { className: styles.box },
            React.createElement("p", { className: styles.notes }, "Showing \"No data available\":"),
            React.createElement(Table, { columns: tableColumns, dataSource: [], theme: TableTheme.Basic })),
        React.createElement("div", { className: styles.box },
            React.createElement("p", { className: styles.notes }, "Striped table with border:"),
            React.createElement(Table, { columns: tableColumns, dataSource: dataSource, bordered: true, theme: TableTheme.Striped })),
        React.createElement("div", { className: styles.box },
            React.createElement("p", { className: styles.notes }, "Basic table:"),
            React.createElement(Table, { columns: tableColumns, dataSource: dataSource, theme: TableTheme.Basic })),
        React.createElement("div", { className: styles.box },
            React.createElement("p", { className: styles.notes }, "Basic expandable table:"),
            React.createElement(Table, { columns: tableColumns, dataSource: dataSource, theme: TableTheme.Expandable, expandable: true, onExpandButtonClick: function () { return true; }, 
                // @ts-ignore
                expandableRowTemplate: function (props) { return (React.createElement("div", null,
                    "TEST with index:",
                    props.index)); } }))))); }));
//# sourceMappingURL=table.stories.js.map