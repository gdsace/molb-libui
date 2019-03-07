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
              baseUrl="http://localhost:8080"
              subjectId="1"
              token="eyJhbGciOiJSUzUxMiJ9.eyJpc3MiOiJDb3JwcGFzcyIsInVzZXJJbmZvIjp7ImFjY291bnRUeXBlIjoiVXNlciIsInVzZXJJZCI6IlM3MTQ1Mjc0QyIsInVzZXJDb3VudHJ5IjoiU0ciLCJ1c2VyRnVsbE5hbWUiOiJQZXRlciBQYW4gU2luZyBTb25nIiwidXNlck5hbWUiOiJwZXRlcnRhbiIsInNpbmdwYXNzSG9sZGVyIjp0cnVlLCJlbnRpdHlJZCI6IlQxNVNTMDEwOEYiLCJlbnRpdHlTdGF0dXMiOiJSZWdpc3RlcmVkIiwiZW50aXR5VHlwZSI6IlVFTiIsImVudGl0eVJlZ05vIjpudWxsLCJlbnRpdHlDb3VudHJ5IjpudWxsLCJlbnRpdHlOYW1lIjpudWxsfSwiYXV0aEFjY2VzcyI6eyJhdXRocyI6W119LCJ0aGlyZFBhcnR5QXV0aEFjY2VzcyI6eyJlbnRpdHlJZCI6IlQxNVNTMDEwOEYiLCJlbnRpdHlTdGF0dXMiOiJSZWdpc3RlcmVkIiwiZW50aXR5VHlwZSI6IlVFTiIsImNsaWVudHMiOltdfSwiZXhwIjoxNTUyMjMwODgxfQ.M2cC0ZphWrIQaGK8HrGLDB8ypKc9vb9CeEiGHEIRaxn-bEZFq1ZcSPlwMaHzhQX-DRFfIKiYWEHdu6LRpHEj-4BhSf6G2e_C8CdnJJNSWfmhEOPqTulzxLEQn66UrdDT8XDnIDqpoet3RdNsv8WhoxkJe8o-bjpnCBYcK6JNeRXcIhGHRTXIK5uOKZWapAGg0VVHU1U9faXnUA0q4g43nwT3XIkPDeoUrkwb1ioP1DwZaEuKuxW4eqG6d6Mbcv5_nFJ6GDqMm57kCScSASw5FPxjlUFuNCTYCXmS9zI7Qr_Sm1dtPT-oy1UoKtfXQh8ECGFNroTQek9Z5QDULteY6w"
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
