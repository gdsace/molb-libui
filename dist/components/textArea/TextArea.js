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
import _ from "lodash";
import * as React from "react";
import classnames from "classnames";
import { Icon } from "../icons";
import { addLocatedErrorClassname } from "../utils";
var styles = require("./textArea.scss");
var TextArea = /** @class */ (function (_super) {
    __extends(TextArea, _super);
    function TextArea(props) {
        var _this = _super.call(this, props) || this;
        _this.handleTextareaChange = _this.handleTextareaChange.bind(_this);
        _this.handleIconMouseOver = _this.handleIconMouseOver.bind(_this);
        _this.handleIconMouseOut = _this.handleIconMouseOut.bind(_this);
        _this.handleIconClick = _this.handleIconClick.bind(_this);
        _this.state = {
            characterCount: (_this.props.value || "").toString().length,
            isOverwrite: false
        };
        return _this;
    }
    TextArea.prototype.render = function () {
        var _a;
        var textareaValidation = (this.props.overwrite && this.state.isOverwrite) || this.props.showError;
        var rootContainerClassname = classnames(styles.textarea, (_a = {},
            _a[styles["disabled"]] = this.props.disabled,
            _a[styles["validation"]] = textareaValidation,
            _a));
        var helperMsgClassname = textareaValidation
            ? addLocatedErrorClassname(styles.helperMsg)
            : styles.helperMsg;
        var maxLength = this.props.overwrite ? undefined : this.props.maxLength;
        var props = this.props;
        var otherProps = _.omit(props, [
            "title",
            "helperText",
            "overwrite",
            "iconType",
            "errorMsg",
            "showError",
            "onIconMouseOver",
            "onIconMouseOut",
            "onIconMouseClick"
        ]);
        var iconSize = "16";
        return (React.createElement("div", { className: rootContainerClassname, "data-scrollpoint": true },
            React.createElement("div", { className: styles.headerSection },
                React.createElement("label", { className: styles.title }, this.props.title),
                React.createElement("div", { className: styles.infoIcon, onMouseOver: this.handleIconMouseOver, onMouseOut: this.handleIconMouseOut, onClick: this.handleIconClick }, this.props.iconType ? (React.createElement(Icon, { type: this.props.iconType, size: iconSize })) : (""))),
            React.createElement("div", { className: styles.content },
                React.createElement("textarea", __assign({}, otherProps, { className: styles.input, placeholder: this.props.placeholder, maxLength: maxLength, onChange: this.handleTextareaChange, disabled: !!this.props.disabled }))),
            React.createElement("div", { className: styles.bottomSection },
                React.createElement("div", { className: helperMsgClassname }, textareaValidation ? this.props.errorMsg : this.props.helperText),
                this.props.maxLength && (React.createElement("div", { className: styles.countMsg }, this.state.characterCount + "/" + this.props.maxLength)))));
    };
    TextArea.prototype.handleTextareaChange = function (e) {
        if (this.props.onChange) {
            this.props.onChange(e);
        }
        var maxLength = this.props.maxLength ? this.props.maxLength : 0;
        this.setState({
            characterCount: e.target.value.length,
            isOverwrite: e.target.value.length > maxLength
        });
    };
    TextArea.prototype.handleIconMouseOver = function (event) {
        if (this.props.onIconMouseOver) {
            this.props.onIconMouseOver();
        }
    };
    TextArea.prototype.handleIconMouseOut = function (event) {
        if (this.props.onIconMouseOut) {
            this.props.onIconMouseOut();
        }
    };
    TextArea.prototype.handleIconClick = function (event) {
        if (this.props.onIconMouseClick) {
            this.props.onIconMouseClick();
        }
    };
    TextArea.defaultProps = {
        title: "",
        helperText: "",
        overwrite: false,
        iconType: "",
        showError: false
    };
    return TextArea;
}(React.Component));
export { TextArea };
//# sourceMappingURL=TextArea.js.map