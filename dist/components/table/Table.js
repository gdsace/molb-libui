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
import classNames from "classnames/bind";
import * as React from "react";
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
    TableTheme["Basic"] = "basic";
})(TableTheme || (TableTheme = {}));
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Table.prototype.render = function () {
        var _a = this.props, columns = _a.columns, dataSource = _a.dataSource, tableCls = _a.tableCls, bordered = _a.bordered, size = _a.size, theme = _a.theme, showNoDataAvailableMessage = _a.showNoDataAvailableMessage;
        var theadComponent = this.getHeadComponent(columns);
        var tbodyComponent = this.getBodyComponent(columns, dataSource, showNoDataAvailableMessage);
        return (React.createElement("div", { className: styles.tableContainer },
            React.createElement("table", { className: cx({ bordered: bordered }, size, theme, tableCls) },
                theadComponent,
                tbodyComponent)));
    };
    Table.prototype.getBodyComponent = function (columns, dataSource, showNoDataAvailableMessage) {
        var toItem = function (column, data) { return (React.createElement("td", { "data-title": column.title, key: "td-" + column.key, className: cx({
                alignRight: column.textAlignRight,
                hiddenInlineTitle: column.hiddenInlineTitle
            }) },
            React.createElement("div", { className: cx("contentData") }, data[column.key]))); };
        var emptyRows = [
            React.createElement("tr", { key: "tr-NO_DATA" },
                React.createElement("td", { key: "td-NO_DATA", colSpan: columns.length, className: styles.noDatRow },
                    React.createElement("div", { className: cx("contentData") },
                        React.createElement("span", null, NO_DATA_IN_TABLE))))
        ];
        var detailRows = dataSource.map(function (rowData) {
            console.log("rowData", rowData);
            return (React.createElement("tr", { key: "tr-" + rowData.key, className: rowData.withoutBorder ? styles.withoutBorder : "" }, columns.map(function (column) { return toItem(column, rowData); })));
        });
        return (React.createElement("tbody", null, dataSource.length <= 0 && showNoDataAvailableMessage
            ? emptyRows
            : detailRows));
    };
    Table.prototype.getHeadComponent = function (columns) {
        var toItem = function (column) { return (React.createElement("th", { key: column.key, style: column.width ? { width: column.width } : {}, className: cx({
                alignRight: column.textAlignRight
            }) },
            React.createElement("span", { dangerouslySetInnerHTML: { __html: column.title || "" } }))); };
        return (React.createElement("thead", null,
            React.createElement("tr", null, columns.map(toItem))));
    };
    Table.defaultProps = {
        bordered: false,
        size: TableSize.Small,
        theme: TableTheme.Basic,
        tableCls: "",
        showNoDataAvailableMessage: true
    };
    return Table;
}(React.Component));
export { Table };
//# sourceMappingURL=Table.js.map