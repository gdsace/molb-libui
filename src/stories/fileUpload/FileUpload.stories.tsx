import React from "react";

import { FileUpload } from "@src/components";
import { documentTypes } from "@src/components/fileUpload/__tests__/__mocks__/documentTypes";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { wInfo } from "../utils";

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
