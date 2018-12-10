import React from "react";

import { wInfo } from "../utils";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { documentTypes } from "@src/components/fileUpload/__tests__/__mocks__/documentTypes";
import { FileUpload } from "@src/components";

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
      <FileUpload
        baseUrl=""
        subjectId=""
        token=""
        documentType={documentTypes.required}
        onSuccess={action("ok")}
        onError={action("error")}
      />
    </div>
  ))
);
