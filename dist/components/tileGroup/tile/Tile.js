import classNames from "classnames";
import { noop } from "lodash";
import * as React from "react";
import { TileTheme, TooltipsLocationTheme } from "../../EnumValues";
import { Icon } from "../../icons/index";
import { Tooltips } from "../../tooltips";
var styles = require("./tile.scss");
export var Tile = function (props) {
    var _a;
    var tileWrapperClass = classNames(props.containerStyle || "", styles.tileWrapper, styles["" + props.theme]);
    var tileContentClass = classNames(styles.tileContent, (_a = {},
        _a[styles.tileContentChecked] = props.checked,
        _a[styles.tileContentDisabled] = props.disabled,
        _a));
    var selectionIcon;
    if (props.disabled && props.validationToolTip) {
        selectionIcon = (React.createElement(Icon, { className: styles.disabledCheckIcon, type: "error", size: "20" }));
    }
    else if (props.checked) {
        selectionIcon = React.createElement(Icon, { type: "checkmark", size: "20" });
    }
    else {
        selectionIcon = React.createElement(Icon, { type: "checkbox", size: "20" });
    }
    var selection;
    if (props.disabled && props.validationToolTip) {
        selection = (React.createElement(Tooltips, { trigger: selectionIcon, position: TooltipsLocationTheme.BottomCenter, specializedPosition: true, width: 256, height: 69 },
            React.createElement("div", null, props.validationToolTip)));
    }
    else {
        selection = selectionIcon;
    }
    return (React.createElement("div", { className: tileWrapperClass },
        React.createElement("label", { className: tileContentClass },
            React.createElement("span", { className: styles.checkBoxIcon },
                React.createElement("div", null, selection),
                React.createElement("input", { type: "radio", value: props.value, onChange: !props.deselectable ? props.onChange : noop, onClick: props.deselectable ? props.onChange : noop, checked: props.checked, disabled: props.disabled, style: { height: "0px", width: "0px", border: "0px" } })),
            React.createElement("div", { className: "" + styles.itemsContent },
                props.theme !== TileTheme.BasicTile &&
                    (props.icon && (React.createElement(Icon, { className: styles.tileIcon, category: props.iconCategory, type: props.icon, size: "48" }))),
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