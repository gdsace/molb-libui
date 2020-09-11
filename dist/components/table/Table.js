var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import classNames from "classnames/bind";
import * as React from "react";
import { Icon } from "../icons";
var styles = require("./table.scss");
var cx = classNames.bind(styles).default || classNames.bind(styles);
var NO_DATA_IN_TABLE = "No data available in table";
export var TableSize;
(function (TableSize) {
    TableSize["Small"] = "small";
    TableSize["Large"] = "large";
})(TableSize || (TableSize = {}));
export var TableTheme;
(function (TableTheme) {
    TableTheme["Striped"] = "striped";
    TableTheme["Expandable"] = "expandable";
    TableTheme["Basic"] = "basic";
})(TableTheme || (TableTheme = {}));
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table(props) {
        var _this = _super.call(this, props) || this;
        _this.nativeExpandRowHandler = _this.nativeExpandRowHandler.bind(_this);
        _this.state = {
            expandedRowIndex: -1
        };
        return _this;
    }
    Table.getDerivedStateFromProps = function (nextProps) {
        return nextProps.closeExpandedRow ? { expandedRowIndex: -1 } : null;
    };
    Table.prototype.render = function () {
        var _a = this.props, columns = _a.columns, dataSource = _a.dataSource, tableCls = _a.tableCls, bordered = _a.bordered, size = _a.size, theme = _a.theme, showNoDataAvailableMessage = _a.showNoDataAvailableMessage;
        return (React.createElement("div", { className: styles.tableContainer },
            React.createElement("div", { className: cx({ bordered: bordered }) },
                React.createElement("table", { className: cx(size, theme, tableCls) },
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            columns.map(toHeaderCells),
                            this.props.expandable ? React.createElement("th", null) : null)),
                    React.createElement("tbody", null, dataSource.length <= 0 && showNoDataAvailableMessage
                        ? emptyRows(columns)
                        : generateRows({
                            dataSource: dataSource,
                            columns: columns,
                            props: this.props,
                            expandedRowIndex: this.state.expandedRowIndex,
                            nativeExpandRowHandler: this.nativeExpandRowHandler
                        }))))));
    };
    Table.prototype.nativeExpandRowHandler = function (rowId) {
        var currentExpandedRowIndex = this.state.expandedRowIndex;
        var closeExpandedRow = this.props.closeExpandedRow;
        this.setState({
            expandedRowIndex: rowId === currentExpandedRowIndex || closeExpandedRow ? -1 : rowId
        });
    };
    Table.defaultProps = {
        bordered: false,
        size: TableSize.Small,
        theme: TableTheme.Basic,
        tableCls: "",
        showNoDataAvailableMessage: true,
        showPagination: false,
        ignoreExpandButtonClick: false,
        clickableRow: false
    };
    return Table;
}(React.Component));
export { Table };
// ----- Header Items -----
var toHeaderCells = function (column) { return (React.createElement("th", { key: "th-" + column.key, style: column.width ? { width: column.width } : {}, className: cx({
        alignRight: column.textAlignRight
    }) },
    React.createElement("span", { dangerouslySetInnerHTML: { __html: column.title || "" } }))); };
// ----- Body Items ------
var toBodyCells = function (column, data) { return (React.createElement("td", { key: "td-cell-" + column.key, "data-title": column.title, className: cx({
        alignRight: column.textAlignRight,
        hiddenInlineTitle: column.hiddenInlineTitle,
        emptyContent: !data[column.key]
    }) },
    React.createElement("div", { className: cx("contentData") }, data[column.key]))); };
var toExpandableRow = function (props, columns, index) {
    return (React.createElement("tr", { key: "tr-expandable-" + index },
        React.createElement("td", { className: styles.expandableTd, colSpan: columns.length + 1 }, props.expandableRowTemplate &&
            props.expandableRowTemplate({
                index: index,
                columns: columns,
                data: props.dataSource[index]
            }))));
};
var emptyRows = function (columns) { return [
    React.createElement("tr", { key: "tr-NO_DATA" },
        React.createElement("td", { key: "td-NO_DATA", colSpan: columns.length, className: styles.noDatRow },
            React.createElement("div", { className: cx("contentData") },
                React.createElement("span", null, NO_DATA_IN_TABLE))))
]; };
var generateRows = function (_a) {
    var dataSource = _a.dataSource, columns = _a.columns, props = _a.props, expandedRowIndex = _a.expandedRowIndex, nativeExpandRowHandler = _a.nativeExpandRowHandler;
    return dataSource.map(function (rowData, index) {
        var modifier = __assign({}, (props.clickableRow ? { onClick: rowData.onRowClickHandler } : {}));
        return (React.createElement(React.Fragment, { key: "tr-fragment-" + index },
            React.createElement("tr", __assign({ key: "tr-details-" + index, className: cx(rowData.withoutBorder && styles.withoutBorder, props.clickableRow && styles.clickableRow) }, modifier),
                columns.map(function (column) { return toBodyCells(column, rowData); }),
                !props.expandable ? null : (React.createElement("td", { key: "td-expandable-" + index, onClick: function () {
                        if (!props.ignoreExpandButtonClick) {
                            nativeExpandRowHandler(index);
                            if (props.onExpandButtonClick) {
                                props.onExpandButtonClick(index);
                            }
                        }
                    } },
                    React.createElement(Icon, { className: props.ignoreExpandButtonClick
                            ? styles.tableExpandButtonClickNotAllowed
                            : styles.tableExpandButton, type: expandedRowIndex === index ? "up" : "dropdown" })))),
            expandedRowIndex === index
                ? toExpandableRow(props, columns, index)
                : null));
    });
};
//# sourceMappingURL=Table.js.map