import React from "react";

import { storiesOf } from "@storybook/react";
import { Panel, PanelTheme, PanelType } from "../../components";
import { CategoryName, wInfo } from "../utils";

const styles = require("./panel.stories.scss");

(storiesOf(CategoryName.Others, module) as any).addWithJSX(
  "Panel",
  wInfo(``)(() => (
    <div className={styles.rootContainer}>
      <h6 className={styles.groupHeader}>Panel type: Onepage,</h6>
      <div className={styles.itemsContainer}>
        <div className={styles.box}>
          <p className={styles.notes}>Normal</p>
          <Panel containerStyle={styles.containerStyle} type={PanelType.Onepage} theme={PanelTheme.Normal}>
            <p className={styles.content}>Sample Content</p>
          </Panel>
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>Bottomless</p>
          <Panel containerStyle={styles.containerStyle} type={PanelType.Onepage} theme={PanelTheme.Bottomless}>
            <p className={styles.content}>Sample Content</p>
          </Panel>
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>Topless</p>
          <Panel containerStyle={styles.containerStyle} type={PanelType.Onepage} theme={PanelTheme.Topless}>
            <p className={styles.content}>Sample Content</p>
          </Panel>
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>Holing</p>
          <Panel containerStyle={styles.containerStyle} type={PanelType.Onepage} theme={PanelTheme.Holing}>
            <p className={styles.content}>Sample Content</p>
          </Panel>
        </div>
      </div>

      <h6 className={styles.groupHeader}>Panel type: Sidebar,</h6>
      <div className={styles.itemsContainer}>
        <div className={styles.box}>
          <p className={styles.notes}>Normal</p>
          <Panel containerStyle={styles.containerStyle} type={PanelType.Sidebar} theme={PanelTheme.Normal}>
            <p className={styles.content}>Sample Content</p>
          </Panel>
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>Bottomless</p>
          <Panel containerStyle={styles.containerStyle} type={PanelType.Sidebar} theme={PanelTheme.Bottomless}>
            <p className={styles.content}>Sample Content</p>
          </Panel>
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>Topless</p>
          <Panel containerStyle={styles.containerStyle} type={PanelType.Sidebar} theme={PanelTheme.Topless}>
            <p className={styles.content}>Sample Content</p>
          </Panel>
        </div>
        <div className={styles.box}>
          <p className={styles.notes}>Holing</p>
          <Panel containerStyle={styles.containerStyle} type={PanelType.Sidebar} theme={PanelTheme.Holing}>
            <p className={styles.content}>Sample Content</p>
          </Panel>
        </div>
      </div>
    </div>
  ))
);
