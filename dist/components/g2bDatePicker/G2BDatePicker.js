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
import React from "react";
import ReactDatePicker from "react-datepicker";
import classnames from "classnames";
import { isEmpty } from "lodash";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { Portal } from "react-overlays";
import { addLocatedErrorClassname } from "../utils";
import "./datePicker.css";
var styles = require("./g2bDatePicker.scss");
var CalendarContainer = function (_a) {
    var children = _a.children;
    return React.createElement(Portal, { container: document.body }, children);
};
var G2BDatePicker = /** @class */ (function (_super) {
    __extends(G2BDatePicker, _super);
    function G2BDatePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.convertStringToDate = function (dateString) {
            return isEmpty(dateString) ? null : new Date(dateString);
        };
        _this.convertDateToString = function (date) {
            return date ? moment(date).format("YYYY-MM-DD") : "";
        };
        _this.handleChange = function (selectedDate, event) {
            _this.setState({ focusedOnInput: false });
            if (_this.props.onDateChange) {
                _this.props.onDateChange(_this.convertDateToString(selectedDate));
            }
            if (_this.props.onChange) {
                _this.props.onChange(selectedDate, event);
            }
        };
        _this.handleClickOutside = function () {
            _this.setState({ focusedOnInput: false });
        };
        _this.handleFocus = function () {
            _this.setState({ focusedOnInput: true });
        };
        _this.state = {
            focusedOnInput: false
        };
        return _this;
    }
    G2BDatePicker.prototype.render = function () {
        var _a = this.props, selectedDate = _a.selectedDate, popperClassName = _a.popperClassName;
        return (React.createElement("div", { className: styles.datePicker },
            React.createElement(ReactDatePicker, __assign({}, this.props, { selected: this.convertStringToDate(selectedDate), onChange: this.handleChange, onClickOutside: this.handleClickOutside, onInputClick: this.handleFocus, popperContainer: CalendarContainer, popperClassName: classnames(styles.popperContainerClassName, popperClassName) })),
            this.props.errorMsg && (React.createElement("p", { className: addLocatedErrorClassname(styles.errorMsg) }, this.props.errorMsg))));
    };
    G2BDatePicker.defaultProps = {
        selectedDate: undefined,
        dateFormat: "dd/MM/yyyy",
        placeholderText: "DD/MM/YYYY"
    };
    return G2BDatePicker;
}(React.Component));
export { G2BDatePicker };
//# sourceMappingURL=G2BDatePicker.js.map