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
        var _a = this.props, columns = _a.columns, dataSource = _a.dataSource, tableCls = _a.tableCls, bordered = _a.bordered, size = _a.size, theme = _a.theme;
        var theadComponent = this.getHeadComponent(columns);
        var tbodyComponent = this.getBodyComponent(columns, dataSource);
        return (React.createElement("div", { className: styles.tableContainer },
            React.createElement("table", { className: cx({ bordered: bordered }, size, theme, tableCls) },
                theadComponent,
                tbodyComponent)));
    };
    Table.prototype.getBodyComponent = function (columns, dataSource) {
        var keyInOrder = columns.map(function (column) { return column.key; });
        var titleInOrder = columns.map(function (column) { return column.title; });
        var textAlignRightInOrder = columns.map(function (column) { return column.textAlignRight; });
        return (React.createElement("tbody", null, dataSource.map(function (rowData) {
            return (React.createElement("tr", { key: "tr-" + rowData.key }, keyInOrder.map(function (key, index) {
                return (React.createElement("td", { "data-title": titleInOrder[index], key: "td-" + key, className: textAlignRightInOrder[index] ? styles.alignRight : "" },
                    React.createElement("div", { className: cx("contentData") }, rowData[key])));
            })));
        })));
    };
    Table.prototype.getHeadComponent = function (columns) {
        return (React.createElement("thead", null,
            React.createElement("tr", null, columns.map(function (column) { return (React.createElement("th", { key: column.key, style: column.width ? { width: column.width } : {}, className: column.textAlignRight ? styles.alignRight : "" }, column.title)); }))));
    };
    Table.defaultProps = {
        bordered: false,
        size: TableSize.Small,
        theme: TableTheme.Basic,
        tableCls: ""
    };
    return Table;
}(React.Component));
export { Table };
//# sourceMappingURL=Table.js.map