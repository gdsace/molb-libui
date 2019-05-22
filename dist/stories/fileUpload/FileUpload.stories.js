import React from "react";
import { State, Store } from "@sambego/storybook-state";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { Button, FileUpload, Size } from "../../components";
import { documentTypes } from "../../components/fileUpload/__tests__/__mocks__/documentTypes";
import { CategoryName, wInfo } from "../utils";
var styles = require("./fileUpload.stories.scss");
var store = new Store({
    error: "something wrong"
});
storiesOf(CategoryName.Others, module).addWithJSX("FileUpload", wInfo("")(function () { return (React.createElement("div", null,
    React.createElement("p", null,
        "This component is a thin wrapper around",
        " ",
        React.createElement("a", { href: "https://react-dropzone.netlify.com/#proptypes" }, "react-dropzone"),
        " ",
        "with additional props."),
    React.createElement("div", { className: styles.content },
        React.createElement("div", { className: styles.uploadFile },
            React.createElement(State, { store: store },
                React.createElement(FileUpload, { baseUrl: "", subjectId: "1", token: "", documentType: documentTypes.required, onSuccess: action("ok"), error: store.error, onError: function () {
                        action("error");
                        store.set({
                            error: "something wrong"
                        });
                    }, key: "file-upload" }),
                React.createElement(Button, { label: "clear error", onClick: function () { return store.set({ error: undefined }); }, size: Size.Small, key: "button" }))),
        React.createElement("div", { className: styles.uploadFile },
            React.createElement(State, { store: store },
                React.createElement(FileUpload, { baseUrl: "", subjectId: "", token: "", documentType: documentTypes.required, onSuccess: action("ok"), error: store.error, onError: function () {
                        action("error");
                        store.set({
                            error: "something wrong"
                        });
                    }, key: "file-upload" })))))); }));
//# sourceMappingURL=FileUpload.stories.js.map