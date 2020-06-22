import React from "react";

import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import {
  Button,
  FlatButton,
  FlatButtonTheme,
  Size,
  Theme
} from "../../components";
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
        <div className={styles.box}>
          <Button
            label="square"
            onClick={action("button-click")}
            size={Size.Square}
          />
        </div>
      </div>

      <h6 className={styles.groupHeader}>Different Theme</h6>
      <div className={styles.itemsContainer}>
        <div className={styles.box}>
          <p className={styles.notes}>grey</p>
          <Button
            label="grey"
            onClick={action("button-click")}
            theme={Theme.Grey}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>outline</p>
          <Button
            label="outline"
            onClick={action("button-click")}
            theme={Theme.Outline}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>ghost</p>
          <Button
            label="ghost"
            onClick={action("button-click")}
            theme={Theme.Ghost}
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
        <div className={styles.box}>
          <p className={styles.notes}>outline: loading</p>
          <Button
            label="outline"
            onClick={action("button-click")}
            theme={Theme.Outline}
            loading={true}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>dark grey</p>
          <Button
            label="dark grey"
            onClick={action("button-click")}
            theme={Theme.DarkGrey}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>orange</p>
          <Button
            label="orange"
            onClick={action("button-click")}
            theme={Theme.Orange}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>green</p>
          <Button
            label="green"
            onClick={action("button-click")}
            theme={Theme.Green}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>ga green</p>
          <Button
            label="ga green"
            onClick={action("button-click")}
            theme={Theme.GAGreen}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>ga green:loading</p>
          <Button
            label="ga green"
            onClick={action("button-click")}
            theme={Theme.GAGreen}
            loading={true}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>ga grey</p>
          <Button
            label="ga grey"
            onClick={action("button-click")}
            theme={Theme.GAGrey}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>ga ghost</p>
          <Button
            label="ga ghost"
            onClick={action("button-click")}
            theme={Theme.GAGhost}
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
          <p className={styles.notes}>outline</p>
          <Button
            label="outline"
            onClick={action("button-click")}
            theme={Theme.Outline}
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

      <h6 className={styles.groupHeader}>Flat Button(s)</h6>
      <div className={styles.itemsContainer}>
        <div className={styles.box}>
          <p className={styles.notes}>Enabled</p>
          <FlatButton
            label="Flat button"
            onClick={action("button-click")}
            iconType="add"
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>Grey Theme</p>
          <FlatButton
            label="Flat button"
            onClick={action("button-click")}
            iconType="delete"
            theme={FlatButtonTheme.Secondary}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>Disabled</p>
          <FlatButton
            label="Flat button"
            onClick={action("button-click")}
            iconType="add"
            disabled={true}
          />
        </div>
      </div>
    </div>
  ))
);
