import React from "react";
import { storiesOf } from "@storybook/react";
import { Tag } from "../../components";
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
        React.createElement(Tag, { theme: TagTheme.Blue, label: "blue theme" })),
    React.createElement("div", { style: rowStyles },
        React.createElement(Tag, { theme: TagTheme.Green, label: "green theme" })),
    React.createElement("div", { style: rowStyles },
        React.createElement(Tag, { theme: TagTheme.Orange, label: "orange theme" })),
    React.createElement("div", { style: rowStyles },
        React.createElement(Tag, { theme: TagTheme.Red, label: "red theme" })),
    React.createElement("div", { style: rowStyles },
        React.createElement(Tag, { theme: TagTheme.Purple, label: "purple theme" })),
    React.createElement("div", { style: rowStyles },
        React.createElement(Tag, { theme: TagTheme.Grey, label: "grey theme" })))); }));
//# sourceMappingURL=tag.stories.js.map