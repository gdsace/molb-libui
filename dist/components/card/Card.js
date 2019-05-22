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
import classnames from "classnames";
import * as React from "react";
import { CardTheme } from "../EnumValues";
import { Tag } from "../tag";
var styles = require("./card.scss");
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleOnClick = function (e) {
            if (_this.props.onClick) {
                _this.props.onClick();
            }
        };
        return _this;
    }
    Card.prototype.render = function () {
        var _a, _b;
        var cardClass = classnames(styles.card, styles["" + this.props.theme], this.props.className, (_a = {},
            _a[styles.cursorClick] = !!this.props.onClick,
            _a));
        var titleWrapperClass = classnames(styles.titleWrapper, (_b = {},
            _b[styles.noSupportingText] = !this.props.supportingText,
            _b));
        return (React.createElement("div", { className: cardClass, onClick: this.handleOnClick },
            React.createElement("div", { className: styles.header },
                React.createElement("div", { className: titleWrapperClass },
                    React.createElement("h6", { className: styles.title }, this.props.title),
                    this.props.titleIcon),
                this.props.supportingText && (React.createElement("h6", { className: styles.supportingText }, this.props.supportingText))),
            React.createElement("p", { className: styles.subtitle }, this.props.subtitle),
            React.createElement("div", { className: styles.description }, this.props.description),
            this.props.date && (React.createElement("div", null,
                React.createElement("div", { className: styles.date }, this.props.date))),
            this.props.status && (React.createElement("div", { className: styles.statusWrapper },
                React.createElement(Tag, { label: this.props.status, theme: this.props.statusTheme }))),
            this.props.actionField && (React.createElement("div", { className: styles.actionField }, this.props.actionField))));
    };
    Card.defaultProps = {
        theme: CardTheme.Normal
    };
    return Card;
}(React.Component));
export { Card };
//# sourceMappingURL=Card.js.map