import React from "react";
import { storiesOf } from "@storybook/react";
import { Listcard, ListcardStatus } from "../../components";
import { CategoryName, wInfo } from "../utils";
storiesOf(CategoryName.Cards, module).addWithJSX("Listcard", wInfo("default")(function () { return (React.createElement("div", { style: { margin: "20px" } },
    React.createElement(Listcard, { buttonText: "Action Button", status: ListcardStatus.Normal }),
    React.createElement(Listcard, { buttonText: "Action Button", tag: "Expires on 8 Oct 2018", status: ListcardStatus.Expries }))); }));
//# sourceMappingURL=Listcard.stories.js.map