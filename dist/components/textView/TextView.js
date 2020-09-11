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
import _ from "lodash";
import * as React from "react";
var styles = require("./textView.scss");
var TextView = /** @class */ (function (_super) {
    __extends(TextView, _super);
    function TextView(props) {
        var _this = _super.call(this, props) || this;
        _this.onScrollHandler = function () {
            var scrollTop = _this.textViewDiv.scrollTop;
            var clientHeight = _this.textViewDiv.clientHeight;
            var scrollHeight = _this.textViewDiv.scrollHeight;
            // when we zoom the screen, scrollHeight and scrollTop + clientHeight
            // are not strictly equal. scrollTop will be a decimal not an integer.
            var didReachBottom = Math.abs(scrollHeight - (scrollTop + clientHeight)) <= 3;
            if (didReachBottom) {
                _this.props.callbackAfterReachBottom();
            }
        };
        _this.textViewDivRef = React.createRef();
        _this.debouncedScrollHanlder = _.debounce(
        // tslint:disable-next-line: unnecessary-bind
        _this.onScrollHandler.bind(_this), 50);
        return _this;
    }
    TextView.prototype.createMarkup = function (html) {
        if (!html) {
            return;
        }
        var htmlString = typeof html !== "string" ? html.toString() : html;
        return { __html: htmlString };
    };
    TextView.prototype.componentDidMount = function () {
        // only listen scroll when needed
        if (this.props.callbackAfterReachBottom) {
            this.textViewDiv = this.textViewDivRef.current;
            this.textViewDiv.addEventListener("scroll", this.debouncedScrollHanlder);
            // window resize is other kind of scoll the scrollbar.
            // becasue the content box will change.
            window.addEventListener("resize", this.debouncedScrollHanlder);
            // when first mount, should check that is already reaching the bottom
            // when the decalration is very short.
            this.onScrollHandler();
        }
    };
    TextView.prototype.componentWillUnmount = function () {
        if (this.props.callbackAfterReachBottom) {
            this.textViewDiv.removeEventListener("scroll", this.debouncedScrollHanlder);
            window.removeEventListener("resize", this.debouncedScrollHanlder);
        }
    };
    TextView.prototype.render = function () {
        var _a = this.props, children = _a.children, shouldRenderWithHTMLString = _a.shouldRenderWithHTMLString;
        var renderWithInnerHTMLComponent = (React.createElement("div", { ref: this.textViewDivRef, className: styles.textarea, dangerouslySetInnerHTML: this.createMarkup(children) }));
        var renderWithReactComponent = (React.createElement("div", { ref: this.textViewDivRef, className: styles.textarea }, children));
        var renderComponent = shouldRenderWithHTMLString
            ? renderWithInnerHTMLComponent
            : renderWithReactComponent;
        var containerClassName = classnames(styles.textViewContainer, this.props.className);
        return React.createElement("div", { className: containerClassName }, renderComponent);
    };
    TextView.defaultProps = {
        children: undefined,
        callbackAfterReachBottom: undefined,
        className: undefined,
        shouldRenderWithHTMLString: false
    };
    return TextView;
}(React.Component));
export { TextView };
//# sourceMappingURL=TextView.js.map