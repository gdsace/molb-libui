import React from "react";

import { storiesOf } from "@storybook/react";
import { CategoryName, wInfo } from "../utils";
import { Modal, ModalTheme } from "../../components/modal";
import { Button } from "../../components/button";
import { State, Store } from "@sambego/storybook-state";
import { ModalContent } from "../../components/modalContent";
import { action } from "@storybook/addon-actions";

const styles = require("./modal.stories.scss");
const store1 = new Store({
  show: false
});

const store2 = new Store({
  show: false
});

const store3 = new Store({
  show: false
});

(storiesOf(CategoryName.Modal, module) as any).addWithJSX(
  "Modal",
  wInfo(``)(() => (
    <div>
      <div className={styles.container}>
        <State store={store1}>
          <Modal
            key="modal-1"
            theme={ModalTheme.Basic}
            show={!!store1.get("show")}
            onClose={() => store1.set({ show: false })}>
            <ModalContent
              header="This is Header of Modal Content."
              subheader="This is Sub Header of Modal Content"
              leftButtonLabel="Left Button"
              leftButtonOnClick={action("left-button-click")}
              rightButtonLabel="Right Button"
              rightButtonOnClick={action("left-button-click")}
            />
          </Modal>
        </State>
        <Button label={"Basic Modal"} onClick={() => store1.set({ show: true })} key="modal-button1"/>
      </div>

      <div  className={styles.container}>
        <State store={store2}>
          <Modal
            key="modal-2"
            theme={ModalTheme.Large}
            show={!!store2.get("show")}
            onClose={() => store2.set({ show: false })}>
            <ModalContent
              header="This is Header of Modal Content."
              subheader="This is Sub Header of Modal Content"
              leftButtonLabel="Left Button"
              leftButtonOnClick={action("left-button-click")}
              rightButtonLabel="Right Button"
              rightButtonOnClick={action("left-button-click")}
            />
          </Modal>
        </State>
        <Button label={"Large Modal"} onClick={() => store2.set({ show: true })} key="modal-button2"/>
      </div>

      <div  className={styles.container}>
        <State store={store3}>
          <Modal
            key="modal-3"
            theme={ModalTheme.Full}
            show={!!store3.get("show")}
            onClose={() => store3.set({ show: false })}>
            <div>
              <h4>Something need to show </h4>
              <p>abracadabra a long list.....abracadabra abracadabra abracadabra abracadabra abracadabra abracadabra</p>
              <p>abracadabra</p>
              <p>abracadabra</p>
              <p>abracadabra</p>
              <p>abracadabra</p>
            </div>
          </Modal>
        </State>
        <Button label={"Full Modal"} onClick={() => store3.set({ show: true })} key="modal-button3"/>
      </div>
    </div>
  ))
);