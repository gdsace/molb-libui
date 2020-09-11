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
import React, { Component } from "react";
import ReactDom from "react-dom";
var scrollTo = function (element, to, duration) {
    var requestAnimationFrame = window.requestAnimationFrame ||
        function requestAnimationFrameTimeout() {
            return setTimeout(arguments[0], 10);
        };
    // jump to target if duration zero
    if (duration <= 0) {
        element.scrollTop = to;
        return;
    }
    var difference = to - element.scrollTop;
    var perTick = (difference / duration) * 10;
    requestAnimationFrame(function () {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) {
            return;
        }
        scrollTo(element, to, duration - 10);
    });
};
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select(props) {
        var _this = _super.call(this, props) || this;
        _this.onItemSelect = function (event) {
            var _a = _this.props, onSelect = _a.onSelect, type = _a.type;
            if (onSelect) {
                onSelect(type, event);
            }
        };
        _this.handleMouseEnter = function (e) {
            _this.setState({ active: true });
            if (_this.props.onMouseEnter) {
                _this.props.onMouseEnter(e);
            }
        };
        _this.handleMouseLeave = function () {
            _this.setState({ active: false });
        };
        _this.saveListRef = React.createRef();
        _this.state = {
            active: false
        };
        return _this;
    }
    Select.prototype.componentDidMount = function () {
        // jump to selected option
        this.scrollToSelected(0);
    };
    Select.prototype.componentDidUpdate = function (prevProps) {
        // smooth scroll to selected option
        if (prevProps.selectedIndex !== this.props.selectedIndex) {
            this.scrollToSelected(120);
        }
    };
    Select.prototype.getOptions = function () {
        var _this = this;
        var _a = this.props, options = _a.options, selectedIndex = _a.selectedIndex, prefixCls = _a.prefixCls;
        return options.map(function (item, index) {
            var _a;
            var cls = classnames((_a = {},
                _a[prefixCls + "-select-option-selected"] = selectedIndex === index,
                _a[prefixCls + "-select-option-disabled"] = item.disabled,
                _a));
            var onItemClick = function () {
                return;
            };
            if (!item.disabled) {
                onItemClick = _this.onItemSelect.bind(_this, item.value);
            }
            return (React.createElement("li", { className: cls, key: index, onClick: onItemClick }, item.value));
        });
    };
    Select.prototype.scrollToSelected = function (duration) {
        // move to selected item
        var select = ReactDom.findDOMNode(this);
        var list = this.saveListRef.current;
        if (!list) {
            return;
        }
        var index = this.props.selectedIndex || 0;
        if (index && index < 0) {
            index = 0;
        }
        var topOption = list.children[index];
        var to = topOption.offsetTop;
        scrollTo(select, to, duration);
    };
    Select.prototype.render = function () {
        var _a;
        if (this.props.options.length === 0) {
            return null;
        }
        var prefixCls = this.props.prefixCls;
        var cls = classnames((_a = {},
            _a[prefixCls + "-select"] = 1,
            _a[prefixCls + "-select-active"] = this.state.active,
            _a));
        return (React.createElement("div", { className: cls, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave },
            React.createElement("ul", { ref: this.saveListRef }, this.getOptions())));
    };
    return Select;
}(Component));
export { Select };
export default Select;
//# sourceMappingURL=Select.js.map