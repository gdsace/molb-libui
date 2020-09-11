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
import * as React from "react";
import { Button, Dropdown, Icon, Input, InputType, Size, Theme } from "../../components";
var styles = require("./searchBarSingleDropdown.scss");
var SearchSingleDropdown = /** @class */ (function (_super) {
    __extends(SearchSingleDropdown, _super);
    function SearchSingleDropdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchSingleDropdown.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: styles.wrapper },
            React.createElement("div", { className: styles.searchSection },
                React.createElement(Dropdown, { options: this.props.dropdownOptions, className: styles.searchTypeDropdown, value: this.props.selectedDropdown, onChange: function (optionValue) {
                        var option = optionValue;
                        _this.props.handleDropdownChange(option);
                    }, textInputValue: this.props.selectedDropdown.label }),
                React.createElement("div", { className: styles.searchTextInputWrapper },
                    React.createElement(Input, { size: Size.Large, type: InputType.Text, value: this.props.inputText, placeholder: this.props.inputPlaceholder, maxLength: this.props.inputMaxlength || 100, helperMsg: "Only alphabets, numbers, and spaces are allowed.", onChange: function (e) { return _this.handleOnChangeInputText(e.target.value); }, iconSignifier: React.createElement(Icon, { size: "16", className: styles.iconSignifier, type: "search" }), showError: this.props.showError || false, errorMsg: this.props.errorMsg || "", onKeyPress: function (e) {
                            if (e.key === "Enter") {
                                _this.trimAndSearch();
                            }
                        } })),
                React.createElement(Button, { className: styles.searchButton, label: this.props.buttonLabel, size: Size.Medium, theme: Theme.Primary, type: "button", onClick: function () {
                        _this.trimAndSearch();
                    } }))));
    };
    SearchSingleDropdown.prototype.handleOnChangeInputText = function (inputText) {
        if (!/^[a-zA-Z0-9\s]*$/g.test(inputText)) {
            inputText = inputText.replace(/[^a-zA-Z0-9\s]/g, "");
        }
        this.props.handleInputChange(inputText);
    };
    SearchSingleDropdown.prototype.trimAndSearch = function () {
        var _a = this.props, handleInputChange = _a.handleInputChange, inputText = _a.inputText, handleButtonClick = _a.handleButtonClick, selectedDropdown = _a.selectedDropdown;
        var trimmedInputText = inputText.trim();
        handleInputChange(trimmedInputText);
        handleButtonClick(trimmedInputText, selectedDropdown);
    };
    return SearchSingleDropdown;
}(React.Component));
export { SearchSingleDropdown };
//# sourceMappingURL=searchBarSingleDropdown.js.map