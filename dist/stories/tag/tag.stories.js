import React from "react";
import { storiesOf } from "@storybook/react";
import { Tag, TagSize } from "../../components";
import { TagTheme } from "../../components/EnumValues";
import { CategoryName, wInfo } from "../utils";
var rowStyles = {
    padding: "20px 0",
    marginRight: "10px"
};
storiesOf(CategoryName.Tags, module).addWithJSX("Tag", wInfo("")(function () { return (React.createElement("div", { style: { padding: "10px" } },
    "Tag Themes",
    React.createElement("br", null),
    React.createElement("div", { style: rowStyles },
        React.createElement(Tag, { theme: TagTheme.Blue, label: "blue theme", showTooltip: true, tooltipContent: "this is the blue theme" })),
    React.createElement("div", { style: rowStyles },
        React.createElement(Tag, { theme: TagTheme.Green, label: "green theme", showTooltip: true, tooltipContent: "this is the green theme" })),
    React.createElement("div", { style: rowStyles },
        React.createElement(Tag, { theme: TagTheme.Orange, label: "orange theme", showTooltip: true, tooltipContent: "this is the orange theme" })),
    React.createElement("div", { style: rowStyles },
        React.createElement(Tag, { theme: TagTheme.Red, label: "red theme", showTooltip: true, tooltipContent: "this is the red theme" })),
    React.createElement("div", { style: rowStyles },
        React.createElement(Tag, { theme: TagTheme.Purple, label: "purple theme", showTooltip: true, tooltipContent: "this is the purple theme" })),
    React.createElement("div", { style: rowStyles },
        React.createElement(Tag, { tagSize: TagSize.Large, label: "grey theme", showTooltip: true, tooltipContent: "this is the grey theme" })))); }));
//# sourceMappingURL=tag.stories.js.map