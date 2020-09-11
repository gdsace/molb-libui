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
import _ from "lodash";
import React from "react";
import { Button } from "../button";
import { Dropdown } from "../dropdown";
import { Size, Theme } from "../EnumValues";
var styles = require("./pagination.scss");
export var Results;
(function (Results) {
    Results["IsOneOrLess"] = "result available";
    Results["IsMultiple"] = "results available";
})(Results || (Results = {}));
var Pagination = /** @class */ (function (_super) {
    __extends(Pagination, _super);
    function Pagination() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onChangePrevPage = function () {
            var currentPage = _this.props.currentPage;
            if (currentPage > 0) {
                _this.props.onPageChange(currentPage - 1);
            }
        };
        _this.onChangeNextPage = function () {
            var _a = _this.props, currentPage = _a.currentPage, totalResultsCount = _a.totalResultsCount, rowsPerPage = _a.rowsPerPage;
            var lastItemIndex = (currentPage + 1) * rowsPerPage;
            if (lastItemIndex < totalResultsCount) {
                _this.props.onPageChange(currentPage + 1);
            }
        };
        return _this;
    }
    Pagination.prototype.render = function () {
        var _a = this.props, totalResultsCount = _a.totalResultsCount, rowsPerPage = _a.rowsPerPage, currentPage = _a.currentPage, disablePrev = _a.disablePrev, disableNext = _a.disableNext, showTotalResultsAvailable = _a.showTotalResultsAvailable, titleOverride = _a.titleOverride, buttonTheme = _a.buttonTheme;
        var resultsAvailable = totalResultsCount > 1
            ? totalResultsCount + " " + Results.IsMultiple
            : totalResultsCount + " " + Results.IsOneOrLess;
        var currentPageRange = this.props.canJumpToPages
            ? this.getPageRangesDropdown(totalResultsCount, rowsPerPage, currentPage)
            : this.getPageRangeLabel(totalResultsCount, rowsPerPage, currentPage);
        var title = titleOverride || "";
        var lastItemIndex = (currentPage + 1) * rowsPerPage;
        return (React.createElement("div", { className: styles.paginationContainer },
            React.createElement("div", { className: styles.countContainer }, showTotalResultsAvailable ? resultsAvailable : title),
            React.createElement("div", { className: styles.paginationDetails },
                currentPageRange,
                React.createElement("div", { className: styles.ofCountContainer },
                    "of",
                    " ",
                    React.createElement("div", { className: styles.totalResultsCount }, totalResultsCount),
                    " ",
                    "items"),
                React.createElement("div", null,
                    React.createElement(Button, { className: styles.prevButton, size: Size.Square, theme: buttonTheme ? buttonTheme : Theme.Grey, icon: "left", iconAlign: "center", disabled: !_.isNil(disablePrev)
                            ? disablePrev
                            : currentPage === 0 || totalResultsCount === 0, onClick: this.onChangePrevPage ||
                            (function () {
                                /* noop */
                            }) }),
                    React.createElement(Button, { className: styles.nextButton, size: Size.Square, theme: buttonTheme ? buttonTheme : Theme.Grey, icon: "right", iconAlign: "center", disabled: !_.isNil(disableNext)
                            ? disableNext
                            : lastItemIndex >= totalResultsCount, onClick: this.onChangeNextPage ||
                            (function () {
                                /* noop */
                            }) })))));
    };
    Pagination.prototype.getPageRangeLabel = function (totalResultsCount, rowsPerPage, currentPage) {
        return (React.createElement("div", { className: styles.pageRangeLabel }, this.getPageRange(totalResultsCount, rowsPerPage, currentPage)));
    };
    Pagination.prototype.getPageRange = function (totalResultsCount, rowsPerPage, currentPage) {
        if (totalResultsCount < 1) {
            return "0";
        }
        var firstNumber = currentPage * rowsPerPage + 1;
        var lastItemIndex = (currentPage + 1) * rowsPerPage;
        var secondNumber = Math.min(lastItemIndex, totalResultsCount);
        return firstNumber + "-" + secondNumber;
    };
    Pagination.prototype.getPageRangesDropdown = function (totalResultsCount, rowsPerPage, currentPage) {
        var _this = this;
        var lastPageNumber = totalResultsCount / rowsPerPage;
        var pageRanges = _.range(lastPageNumber).map(function (page) { return ({
            label: _this.getPageRange(totalResultsCount, rowsPerPage, page),
            value: page
        }); });
        return (React.createElement(Dropdown, { className: styles.pageRangeDropdown, options: pageRanges, onChange: function (optionValue) {
                return optionValue && _this.props.onPageChange(optionValue.value);
            }, value: pageRanges.find(function (elem) { return elem.value === currentPage; }) }));
    };
    Pagination.defaultProps = {
        showTotalResultsAvailable: true
    };
    return Pagination;
}(React.Component));
export { Pagination };
//# sourceMappingURL=Pagination.js.map