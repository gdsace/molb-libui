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
import React from "react";
import { PanelTheme, PanelType } from "../EnumValues";
var styles = require("./panel.scss");
var Panel = /** @class */ (function (_super) {
    __extends(Panel, _super);
    function Panel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel.prototype.render = function () {
        var _a;
        return (React.createElement("div", { className: classnames(styles.panelContainer, styles["" + this.props.theme], this.props.containerStyle) },
            React.createElement("div", { className: classnames((_a = {},
                    _a[styles.onepagePanel] = this.props.type === PanelType.Onepage,
                    _a[styles.sidebarPanel] = this.props.type === PanelType.Sidebar,
                    _a), this.props.contentStyle) }, this.props.children)));
    };
    Panel.defaultProps = {
        type: PanelType.Sidebar,
        theme: PanelTheme.Normal
    };
    return Panel;
}(React.Component));
export { Panel };
//# sourceMappingURL=Panel.js.map