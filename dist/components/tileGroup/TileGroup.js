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
import * as React from "react";
var style = require("./tileGroup.scss");
function getCheckedValue(children) {
    var value = null;
    React.Children.forEach(children, function (child) {
        if (child && child.props && child.props.checked) {
            value = child.props.value;
        }
    });
    return value;
}
var TileGroup = /** @class */ (function (_super) {
    __extends(TileGroup, _super);
    function TileGroup(props) {
        var _this = _super.call(this, props) || this;
        _this.onSelectionChanged = function (ev) {
            var lastValue = _this.state.value;
            var value = ev.target.value;
            if (_this.props.deselectable && lastValue === value) {
                _this.setState({ value: "" });
                if (_this.props.onChange) {
                    _this.props.onChange(ev);
                }
            }
            if (lastValue !== value) {
                _this.setState({
                    value: value
                });
                if (_this.props.onChange) {
                    _this.props.onChange(ev);
                }
            }
        };
        var value = "value" in props ? props.value : getCheckedValue(props.children);
        _this.state = {
            value: value
        };
        return _this;
    }
    TileGroup.prototype.componentWillReceiveProps = function (props) {
        this.setState({
            value: props.value
        });
    };
    TileGroup.prototype.render = function () {
        var _this = this;
        var renderChildren = function () {
            return React.Children.map(_this.props.children, function (child) {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, __assign({}, child.props, { deselectable: _this.props.deselectable, onChange: _this.onSelectionChanged, checked: child.props.value === _this.state.value }));
                }
            });
        };
        return (React.createElement("div", { className: style.tileGroup + " " + (this.props.className ? this.props.className : "") }, renderChildren()));
    };
    TileGroup.defaultProps = {
        deselectable: false
    };
    return TileGroup;
}(React.Component));
export { TileGroup };
//# sourceMappingURL=TileGroup.js.map