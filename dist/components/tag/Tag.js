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
import { TagSize, TagTheme, TooltipsLocationTheme } from "../EnumValues";
import { Icon } from "../icons";
import { Tooltips } from "../tooltips";
var styles = require("./tag.scss");
var Tag = /** @class */ (function (_super) {
    __extends(Tag, _super);
    function Tag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tag.prototype.render = function () {
        var tagClass = classnames(styles["" + this.props.tagSize], this.props.tagSize === TagSize.Large
            ? styles.grey
            : styles["" + this.props.theme]);
        return (React.createElement("div", { className: tagClass },
            React.createElement("span", null,
                this.props.label,
                this.props.showTooltip && (React.createElement("div", { className: styles.tooltip },
                    React.createElement(Tooltips, { trigger: function (show) { return (React.createElement(Icon, { type: "help", size: "16", className: show ? styles.purpleIcon : styles.helpIcon })); }, overrideTrigger: true, width: 250, position: this.props.toolTipsPosition, specializedPosition: false },
                        React.createElement("div", null, this.props.tooltipContent)))))));
    };
    Tag.defaultProps = {
        showTooltip: false,
        theme: TagTheme.Blue,
        tagSize: TagSize.Small,
        toolTipsPosition: TooltipsLocationTheme.BottomLeft
    };
    return Tag;
}(React.Component));
export { Tag };
//# sourceMappingURL=Tag.js.map