import * as React from "react";
var styles = require("./icon.scss");
export var Icon = function (props) {
    if (props.category) {
        require("./assets/" + props.category + "/" + props.type + ".svg");
    }
    else {
        require("./assets/" + props.type + ".svg");
    }
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", className: "dib v-mid " + (props.type !== "delete" &&
            styles.pointerEvent) + " " + (props.className || ""), width: props.size || "24", height: props.size || "24", viewBox: props.viewBox || "0 0 24 24" },
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "linearColor", x1: "0%", y1: "40.644%", y2: "59.356%" },
                React.createElement("stop", { offset: "0%", stopColor: "#60F" }),
                React.createElement("stop", { offset: "100%", stopColor: "#95E" }))),
        React.createElement("use", { xlinkHref: "#" + props.type })));
};
//# sourceMappingURL=Icon.js.map