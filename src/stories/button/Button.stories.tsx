import React from "react";

import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { Button, Size, Theme } from "../../components";
import { CategoryName, wInfo } from "../utils";

const styles = require("./button.stories.scss");

(storiesOf(CategoryName.Buttons, module) as any).addWithJSX(
  "Button",
  wInfo(``)(() => (
    <div className={styles.rootContainer}>
      <h6 className={styles.groupHeader}>Buttons: ...</h6>
      <div className={styles.itemsContainer}>
        <div className={styles.box}>
          <p className={styles.notes}>default</p>
          <Button label="default" onClick={action("button-click")} />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>disabled</p>
          <Button label="disabled" onClick={action("button-click")} disabled />
        </div>
      </div>

      <h6 className={styles.groupHeader}>Different Size</h6>
      <div className={styles.itemsContainer}>
        <div className={styles.box}>
          <Button
            label="small"
            onClick={action("button-click")}
            size={Size.Small}
          />
        </div>
        <div className={styles.box}>
          <Button
            label="medium"
            onClick={action("button-click")}
            size={Size.Medium}
          />
        </div>
        <div className={styles.box}>
          <Button
            label="large"
            onClick={action("button-click")}
            size={Size.Large}
          />
        </div>
      </div>

      <h6 className={styles.groupHeader}>Different Theme</h6>
      <div className={styles.itemsContainer}>
        <div className={styles.box}>
          <p className={styles.notes}>ghost</p>
          <Button
            label="ghost"
            onClick={action("button-click")}
            theme={Theme.Ghost}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>footer</p>
          <Button
            label="footer"
            onClick={action("button-click")}
            theme={Theme.Footer}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>simple</p>
          <Button
            label="simple"
            onClick={action("button-click")}
            theme={Theme.Simple}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>primary</p>
          <Button
            label="primary"
            onClick={action("button-click")}
            theme={Theme.Primary}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>secondary</p>
          <Button
            label="secondary"
            onClick={action("button-click")}
            theme={Theme.Secondary}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>primary: loading</p>
          <Button
            label="primary"
            onClick={action("button-click")}
            theme={Theme.Primary}
            loading={true}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>secondary: loading</p>
          <Button
            label="secondary"
            onClick={action("button-click")}
            theme={Theme.Secondary}
            loading={true}
          />
        </div>
      </div>

      <h6 className={styles.groupHeader}>With Icon</h6>
      <div className={styles.itemsContainer}>
        <div className={styles.box}>
          <p className={styles.notes}>ghost</p>
          <Button
            label="ghost"
            onClick={action("button-click")}
            theme={Theme.Ghost}
            icon="arrowNext"
            iconAlign="right"
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>primary</p>
          <Button
            label="primary"
            onClick={action("button-click")}
            theme={Theme.Primary}
            icon="arrowPrev"
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>secondary</p>
          <Button
            label="secondary"
            onClick={action("button-click")}
            theme={Theme.Secondary}
            size={Size.Large}
            icon="add"
          />
        </div>
      </div>
    </div>
  ))
);
