import * as React from "react";
export var Icon = function (props) {
    if (props.category) {
        require("./assets/" + props.category + "/" + props.type + ".svg");
    }
    else {
        require("./assets/" + props.type + ".svg");
    }
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", className: "dib v-mid " + (props.className || ""), width: props.size || "24", height: props.size || "24", viewBox: props.viewBox || "0 0 24 24" },
        React.createElement("use", { xlinkHref: "#" + props.type })));
};
//# sourceMappingURL=Icon.js.map