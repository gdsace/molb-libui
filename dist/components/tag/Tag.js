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
import { TagTheme } from "../EnumValues";
var styles = require("./tag.scss");
var Tag = /** @class */ (function (_super) {
    __extends(Tag, _super);
    function Tag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tag.prototype.render = function () {
        var tagClass = classnames(styles.tag, styles["" + this.props.theme]);
        return (React.createElement("div", { className: tagClass },
            React.createElement("span", null, this.props.label)));
    };
    Tag.defaultProps = {
        theme: TagTheme.Blue
    };
    return Tag;
}(React.Component));
export { Tag };
//# sourceMappingURL=Tag.js.map