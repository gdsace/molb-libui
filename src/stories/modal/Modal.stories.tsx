import React from "react";

import { State, Store } from "@sambego/storybook-state";
import { action } from "@storybook/addon-actions";
import { Icon } from "../../components";
import { Button } from "../../components/button";
import { Modal, ModalTheme } from "../../components/modal";
import { ModalContent } from "../../components/modalContent";

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

const store4 = new Store({
  show: false
});

const store5 = new Store({
  show: false
});

const store6 = new Store({
  show: false
});

export const _Modal = () => (
  <div>
    <div className={styles.container}>
      <State store={store1}>
        <Modal
          key="modal-1"
          theme={ModalTheme.Basic}
          show={!!store1.get("show")}
          onClose={() => store1.set({ show: false })}
        >
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
      <Button label={"Basic Modal"} onClick={() => store1.set({ show: true })} key="modal-button1" />
    </div>

    <div className={styles.container}>
      <State store={store2}>
        <Modal
          key="modal-2"
          theme={ModalTheme.Large}
          show={!!store2.get("show")}
          onClose={() => store2.set({ show: false })}
        >
          <div
            style={{
              width: "750px"
            }}
          >
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
          </div>
        </Modal>
      </State>
      <Button label={"Large Modal"} onClick={() => store2.set({ show: true })} key="modal-button2" />
    </div>

    <div className={styles.container}>
      <State store={store3}>
        <Modal
          key="modal-3"
          theme={ModalTheme.Full}
          show={!!store3.get("show")}
          onClose={() => store3.set({ show: false })}
          footer={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "750px"
              }}
            >
              <label>label</label>
              <Button label={"Apply Now"} onClick={() => ({})} />
            </div>
          }
        >
          <div>
            <h4>Something need to show </h4>
            <p>
              abracadabra a long list.....abracadabra abracadabra abracadabra abracadabra abracadabra abracadabra asldfk
              alskdfjlasdkf asdalsdkfjals asldfkasldfkjalskdfjl alsdkfjalskdj
            </p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>xxxxxxxxxxxxxxx</p>
            <p>xxxxxxxxxxxx</p>
            <p>xxxxxxxxxxxx</p>
            <p>xxxxxxxxxx</p>
          </div>
        </Modal>
      </State>
      <Button label={"Full Modal"} onClick={() => store3.set({ show: true })} key="modal-button3" />
    </div>

    <div className={styles.container}>
      <State store={store4}>
        <Modal
          key="modal-4"
          theme={ModalTheme.Basic}
          show={!!store4.get("show")}
          onClose={() => store4.set({ show: false })}
          hideCloseButton={true}
        >
          <ModalContent
            header="This is Header of Modal Content."
            subheader="This is Sub Header of Modal Content"
            leftButtonLabel="close"
            leftButtonOnClick={() => {
              store4.set({ show: false });
              action("left-button-click");
            }}
            rightButtonLabel="Right Button"
            rightButtonOnClick={action("right-button-click")}
          />
        </Modal>
      </State>
      <Button label={"Basic Modal without close icon"} onClick={() => store4.set({ show: true })} key="modal-button1" />
    </div>

    <div className={styles.container}>
      <State store={store5}>
        <Modal
          key="modal-5"
          theme={ModalTheme.Full}
          show={!!store5.get("show")}
          onClose={() => store5.set({ show: false })}
          onScrollBottomCallback={action("reach to the bottom")}
          footer={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "750px"
              }}
            >
              <label>label</label>
              <Button label={"Apply Now"} onClick={() => ({})} />
            </div>
          }
        >
          <div>
            <h4>Something need to show </h4>
            <p>
              abracadabra a long list.....abracadabra abracadabra abracadabra abracadabra abracadabra abracadabra asldfk
              alskdfjlasdkf asdalsdkfjals asldfkasldfkjalskdfjl alsdkfjalskdj
            </p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>abracadabra</p>
            <p>xxxxxxxxxxxxxxx</p>
            <p>xxxxxxxxxxxx</p>
            <p>xxxxxxxxxxxx</p>
            <p>xxxxxxxxxx</p>
          </div>
        </Modal>
      </State>
      <Button
        label={"Full Modal With Scrollbottom Callback"}
        onClick={() => store5.set({ show: true })}
        key="modal-button3"
      />
    </div>

    <div className={styles.container}>
      <State store={store6}>
        <Modal
          key="modal-6"
          theme={ModalTheme.Basic}
          show={!!store6.get("show")}
          onClose={() => store6.set({ show: false })}
          customIcon={<Icon type="progress" className={styles.progressIcon} />}
        >
          <ModalContent header="This is Header of Modal Content." subheader="This is Sub Header of Modal Content" />
        </Modal>
      </State>
      <Button label="Modal with custom icon" onClick={() => store6.set({ show: true })} key="modal-button1" />
    </div>
  </div>
);

export default {
  title: "Modal",
  component: Modal
};
