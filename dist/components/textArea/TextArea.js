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
    TextArea.prototype.componentDidMount = function () {
        if (this.props.displayContentWithoutScroll && this.props.id) {
            var textAreaEle = document.getElementById(this.props.id);
            var heightWithOutScrollBar = textAreaEle.scrollHeight + 5;
            this.setState({ height: heightWithOutScrollBar });
        }
    };
    TextArea.prototype.render = function () {
        var _a;
        var textareaValidation = (this.props.overwrite && this.state.isOverwrite) || this.props.showError;
        var rootContainerClassname = classnames(styles.textarea, (_a = {},
            _a[styles["disabled"]] = this.props.disabled,
            _a[styles["validation"]] = textareaValidation,
            _a));
        var leftSideMessageClass = textareaValidation
            ? addLocatedErrorClassname(styles.helperMsg)
            : this.props.warningMsg
                ? styles.warningMsg
                : styles.helperMsg;
        var maxLength = this.props.overwrite ? undefined : this.props.maxLength;
        var iconSize = "16";
        return (React.createElement("div", { className: classnames(rootContainerClassname, this.props.className), "data-scrollpoint": true },
            React.createElement("div", { className: styles.headerSection },
                React.createElement("label", { className: styles.title }, this.props.title),
                React.createElement("div", { className: styles.infoIcon, onMouseOver: this.handleIconMouseOver, onMouseOut: this.handleIconMouseOut, onClick: this.handleIconClick }, this.props.iconType ? (React.createElement(Icon, { type: this.props.iconType, size: iconSize })) : (""))),
            React.createElement("div", { className: styles.content },
                React.createElement("textarea", { id: this.props.id, style: this.getStyle(), name: this.props.name, className: styles.input, value: this.props.value, placeholder: this.props.placeholder, maxLength: maxLength, onChange: this.handleTextareaChange, disabled: !!this.props.disabled })),
            React.createElement("div", { className: styles.bottomSection },
                React.createElement("div", { className: leftSideMessageClass }, textareaValidation
                    ? this.props.errorMsg
                    : this.props.warningMsg
                        ? this.renderWarningMsg()
                        : this.props.helperText && this.renderHelperText()),
                this.props.maxLength && (React.createElement("div", { className: styles.countMsg }, this.state.characterCount + "/" + this.props.maxLength)))));
    };
    TextArea.prototype.renderHelperText = function () {
        return React.createElement("p", null, this.props.helperText);
    };
    TextArea.prototype.renderWarningMsg = function () {
        return React.createElement(React.Fragment, null, this.props.warningMsg);
    };
    TextArea.prototype.getStyle = function () {
        return this.state.height ? { height: this.state.height } : {};
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
        showError: false,
        displayContentWithoutScroll: false
    };
    return TextArea;
}(React.Component));
export { TextArea };
//# sourceMappingURL=TextArea.js.map