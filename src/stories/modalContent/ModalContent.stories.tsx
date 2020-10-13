import React from "react";

import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { ModalContent } from "../../components";
import { CategoryName } from "../utils";

const styles = require("./modalContent.stories.scss");

storiesOf(CategoryName.Modal, module).add("ModalContent", () => (
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
    <div className={styles.box}>
      <ModalContent
        header="Modal subheader with link subheader"
        subheader={
          <p>
            Modal subheader with link{" "}
            <a target="_blank" rel="noreferrer" href="http://google.com">
              Sub Header
            </a>
          </p>
        }
        leftButtonLabel="Left Button"
        leftButtonOnClick={action("left-button-click")}
        rightButtonLabel="Right Button"
        rightButtonOnClick={action("right-button-click")}
      />
    </div>
    <div className={styles.box}>
      <ModalContent
        notification="This is very long notification. This is very long notification. This is very long notification. important things need to repeat at least 3 times. And this is just description with a new font size 20px."
        rightButtonLabel="Right Button"
        rightButtonOnClick={action("right-button-click")}
      />
    </div>
  </div>
));
