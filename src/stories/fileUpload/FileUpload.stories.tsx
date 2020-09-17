import { State, Store } from "@sambego/storybook-state";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import { Button, FileUpload, Size } from "../../components";
import { documentTypes } from "../../components/fileUpload/__tests__/__mocks__/documentTypes";
import { CategoryName } from "../utils";

const store = new Store({
  error: "something wrong"
});

(storiesOf(CategoryName.FileUpload, module) as any).addWithJSX("FileUploader", () => (
  <State store={store}>
    <FileUpload
      baseUrl=""
      subjectId="1"
      token=""
      documentType={documentTypes.required}
      onSuccess={action("ok")}
      error={store.error}
      // @ts-ignore
      onError={(res: { error: any }) => {
        action("error");
        store.set({
          error: res.error
        });
      }}
      validateFile={() => {
        return "duplicate name";
      }}
    />
    <Button label="clear error" onClick={() => store.set({ error: undefined })} size={Size.Small} key="button" />
  </State>
));
