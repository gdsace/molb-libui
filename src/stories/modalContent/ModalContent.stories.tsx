import React from "react";

import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { ModalContent } from "../../components";
import { CategoryName, wInfo } from "../utils";

const styles = require("./modalContent.stories.scss");

(storiesOf(CategoryName.Modal, module) as any).addWithJSX(
  "ModalContent",
  wInfo(``)(() => (
    <div>
      <div className={styles.box}>
        <ModalContent
          header="This is Header of Modal Content."
          subheader="This is Sub Header of Modal Content"
          leftButtonLabel="Left Button"
          leftButtonOnClick={action("left-button-click")}
          rightButtonLabel="Right Button"
          rightButtonOnClick={action("left-button-click")}
        />
      </div>
      <div className={styles.box}>
        <ModalContent
          header="Modal Content with Single Button"
          subheader="Sub Header of Modal Content"
          rightButtonLabel="Single Button"
          rightButtonOnClick={action("right-button-click")}
        />
      </div>
      <div className={styles.box}>
        <ModalContent
          header="Modal Content without Sub Header"
          leftButtonLabel="Left Button"
          leftButtonOnClick={action("left-button-click")}
          rightButtonLabel="Right Button"
          rightButtonOnClick={action("right-button-click")}
        />
      </div>
    </div>
  ))
);
