import React from "react";

import { State, Store } from "@sambego/storybook-state";
import { Button, FileUpload, Size } from "@src/components";
import { documentTypes } from "@src/components/fileUpload/__tests__/__mocks__/documentTypes";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { wInfo } from "../utils";

const store = new Store({
  error: "something wrong"
});

(storiesOf("Components", module) as any).addWithJSX(
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
      <div>
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
          />
          <Button
            label="clear error"
            onClick={() => store.set({ error: undefined })}
            size={Size.Small}
          />
        </State>
      </div>
    </div>
  ))
);
