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
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addLocatedErrorClassname } from "../utils";
import { CustomInput } from "./CustomInput";
import "./datePicker.css";
var styles = require("./g2bDatePicker.scss");
var G2BDatePicker = /** @class */ (function (_super) {
    __extends(G2BDatePicker, _super);
    function G2BDatePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (selectedDate) {
            _this.setState({ selected: false });
            _this.props.onChange(selectedDate);
        };
        _this.handleClickOutside = function () {
            _this.setState({ selected: false });
        };
        _this.handleFocus = function () {
            _this.setState({ selected: true });
        };
        _this.state = {
            selected: false
        };
        return _this;
    }
    G2BDatePicker.prototype.render = function () {
        return (React.createElement("div", { className: styles.datePicker },
            React.createElement(DatePicker, { customInput: this.props.customInput || (React.createElement(CustomInput, { showError: this.props.showError, selected: this.state.selected })), selected: this.props.selectedDate, onChange: this.handleChange, dateFormat: "dd/MM/yyyy", placeholderText: "DD/MM/YYYY", onClickOutside: this.handleClickOutside, onInputClick: this.handleFocus }),
            this.props.showError && (React.createElement("p", { className: addLocatedErrorClassname(styles.errorMsg) }, this.props.errorMsg))));
    };
    G2BDatePicker.defaultProps = {
        selectedDate: null
    };
    return G2BDatePicker;
}(React.Component));
export { G2BDatePicker };
//# sourceMappingURL=G2BDatePicker.js.map