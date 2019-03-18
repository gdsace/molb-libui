import classNames from "classnames";
import _ from "lodash";
import * as React from "react";
import { TileTheme } from "../../EnumValues";
import { Icon } from "../../icons/index";
var styles = require("./tile.scss");
export var Tile = function (props) {
    var _a;
    var tileWrapperClass = classNames(props.containerStyle || "", styles.tileWrapper, styles["" + props.theme]);
    var tileContentClass = classNames(styles.tileContent, (_a = {},
        _a[styles.tileContentChecked] = props.checked,
        _a[styles.tileContentDisabled] = props.disabled,
        _a));
    var selectionIcon = props.checked ? (React.createElement(Icon, { type: "checkmark", size: "20" })) : (React.createElement(Icon, { type: "checkbox", size: "20" }));
    return (React.createElement("div", { className: tileWrapperClass },
        React.createElement("label", { className: tileContentClass },
            React.createElement("span", { className: styles.checkBoxIcon },
                React.createElement("div", null, selectionIcon),
                React.createElement("input", { type: "radio", value: props.value, onChange: !props.deselectable ? props.onChange : _.noop, onClick: props.deselectable ? props.onChange : _.noop, checked: props.checked, disabled: props.disabled })),
            React.createElement("div", { className: "" + styles.itemsContent },
                props.theme !== TileTheme.BasicTile &&
                    (props.icon && (React.createElement(Icon, { className: styles.tileIcon, type: props.icon, size: "48" }))),
                props.theme !== TileTheme.BasicTile &&
                    (props.imgSrc && (React.createElement("img", { className: styles.imgWrapper, src: props.imgSrc, alt: props.imgAlt }))),
                props.theme !== TileTheme.BasicTile && (React.createElement("span", { className: styles.tileHeader }, props.content)),
                props.theme !== TileTheme.BasicTile &&
                    (props.subContent && (React.createElement("span", { className: styles.subContent }, props.subContent))),
                props.theme !== TileTheme.SmallTile && (React.createElement("span", { className: styles.tileDescription }, props.description)),
                props.theme === TileTheme.LargeTile && props.error && (React.createElement("div", { className: styles.errorContent },
                    React.createElement(Icon, { className: styles.errorIcon, type: "error" }),
                    React.createElement("span", null, props.error)))))));
};
//# sourceMappingURL=Tile.js.map