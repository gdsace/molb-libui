import { State, Store } from "@sambego/storybook-state";
import { action } from "@storybook/addon-actions";
import React from "react";
import { Button, FileUpload, Size } from "../../components";
import { documentTypes } from "../../components/fileUpload/__tests__/__mocks__/documentTypes";

const store = new Store({
  error: "something wrong"
});

export const FileUploader = () => (
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
);

export default {
  title: "FileUpload",
  component: FileUpload
};
