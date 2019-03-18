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
import { ToastContainer } from "../notification";
var styles = require("./layout.scss");
var Layout = /** @class */ (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Layout.prototype.render = function () {
        return (React.createElement("div", { className: styles.wrapper },
            this.props.hasNotifications && React.createElement(ToastContainer, { newestOnTop: true }),
            this.props.header,
            React.createElement("div", { className: styles.content },
                this.props.showSideBar && (React.createElement("div", { className: classnames(styles.sidebar, this.props.sideBarStyle) }, this.props.sidebar)),
                React.createElement("div", { className: classnames(styles.mainContent, this.props.mainContentStyle) }, this.props.mainContent))));
    };
    Layout.defaultProps = {
        hasNotifications: false,
        showSideBar: true
    };
    return Layout;
}(React.Component));
export { Layout };
//# sourceMappingURL=Layout.js.map