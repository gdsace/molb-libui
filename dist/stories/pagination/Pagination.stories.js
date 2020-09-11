import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { Pagination } from "../../components";
import { dataSource } from "../table/table.stories";
import { CategoryName, wInfo } from "../utils";
var styles = require("./pagination.stories.scss");
storiesOf(CategoryName.Others, module)
    .addWithJSX("Pagination", wInfo("")(function () { return (React.createElement("div", null,
    React.createElement("h6", null, "Pagination with previous and next button"),
    React.createElement("div", { className: styles.box },
        React.createElement(Pagination, { onPageChange: action("prev-button-click"), dataSource: dataSource, disablePrev: false, disableNext: false, totalResultsCount: 30, rowsPerPage: 10, currentPage: 1 })),
    React.createElement("h6", null, "Pagination with disabled previous button"),
    React.createElement("div", { className: styles.box },
        React.createElement(Pagination, { disablePrev: true, disableNext: false, onPageChange: action("prev-button-click"), dataSource: dataSource, totalResultsCount: 30, rowsPerPage: 10, currentPage: 0 })),
    React.createElement("h6", null, "Pagination with disabled next button"),
    React.createElement("div", { className: styles.box },
        React.createElement(Pagination, { disablePrev: false, disableNext: true, onPageChange: action("prev-button-click"), dataSource: dataSource, totalResultsCount: 30, rowsPerPage: 10, currentPage: 2 })))); }))
    .addWithJSX("Pagination with dropdown", function () { return (React.createElement(Pagination, { disablePrev: false, disableNext: false, canJumpToPages: boolean("canJumpToPages", true), onPageChange: action("prev-button-click"), dataSource: dataSource, totalResultsCount: 30, rowsPerPage: 10, currentPage: number("currentPage", 2) })); });
//# sourceMappingURL=Pagination.stories.js.map