import { State, Store } from "@sambego/storybook-state";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import { Button, FileUpload, Size } from "../../components";
import { documentTypes } from "../../components/fileUpload/__tests__/__mocks__/documentTypes";
import { CategoryName } from "../utils";
var store = new Store({
    error: "something wrong"
});
storiesOf(CategoryName.FileUpload, module).addWithJSX("FileUploader", function () { return (React.createElement(State, { store: store },
    React.createElement(FileUpload, { baseUrl: "", subjectId: "1", token: "", documentType: documentTypes.required, onSuccess: action("ok"), error: store.error, 
        // @ts-ignore
        onError: function (res) {
            action("error");
            store.set({
                error: res.error
            });
        }, validateFile: function (file, documentTypeCode) {
            return "duplicate name";
        } }),
    React.createElement(Button, { label: "clear error", onClick: function () { return store.set({ error: undefined }); }, size: Size.Small, key: "button" }))); });
//# sourceMappingURL=FileUpload.stories.js.map