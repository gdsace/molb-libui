import React from "react";

import { State, Store } from "@sambego/storybook-state";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { Button, FileUpload, Size } from "../../components";
import { documentTypes } from "../../components/fileUpload/__tests__/__mocks__/documentTypes";
import { CategoryName, wInfo } from "../utils";

const styles = require("./fileUpload.stories.scss");

const store = new Store({
  error: "something wrong"
});

(storiesOf(CategoryName.Others, module) as any).addWithJSX(
  "FileUpload",
  wInfo(``)(() => (
    <div>
      <p>
        This component is a thin wrapper around{" "}
        <a href="https://react-dropzone.netlify.com/#proptypes">
          react-dropzone
        </a>{" "}
        with additional props.
      </p>
      <div className={styles.content}>
        <div className={styles.uploadFile}>
          <State store={store}>
            <FileUpload
              baseUrl=""
              subjectId="1"
              token=""
              documentType={documentTypes.required}
              onSuccess={action("ok")}
              error={store.error}
              onError={() => {
                action("error");
                store.set({
                  error: "something wrong"
                });
              }}
              key="file-upload"
            />
            <Button
              label="clear error"
              onClick={() => store.set({ error: undefined })}
              size={Size.Small}
              key="button"
            />
          </State>
        </div>
        <div className={styles.uploadFile}>
          <State store={store}>
            <FileUpload
              baseUrl=""
              subjectId=""
              token=""
              documentType={documentTypes.required}
              onSuccess={action("ok")}
              error={store.error}
              onError={() => {
                action("error");
                store.set({
                  error: "something wrong"
                });
              }}
              key="file-upload"
            />
          </State>
        </div>
      </div>
    </div>
  ))
);
