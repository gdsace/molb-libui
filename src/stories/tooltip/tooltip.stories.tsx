import React from "react";

import { Icon, Tooltips, TooltipsLocationTheme } from "../../components";

const styles = require("./tooltip.stories.scss");

export const _Tooltips = () => (
  <div className={styles.rootContainer}>
    <h6 className={styles.groupHeader}>Tooltips Themes: ...</h6>
    <div className={styles.itemsContainer}>
      <div className={styles.box}>
        <p className={styles.notes}>Position: BottomLeft</p>
        <Tooltips
          className={styles.tooltipsColor}
          trigger={<Icon type={"help"} size={"16"} />}
          position={TooltipsLocationTheme.BottomLeft}
          specializedPosition={true}
        >
          <div>When use specializedPosition, component will just the arrow position</div>
        </Tooltips>
      </div>

      <div className={styles.box}>
        <p className={styles.notes}>Position: BottomLeft</p>
        <Tooltips
          trigger={<Icon type={"help"} size={"16"} />}
          position={TooltipsLocationTheme.BottomLeft}
          specializedPosition={true}
        >
          <div>When use specializedPosition, component will just the arrow position</div>
        </Tooltips>
      </div>

      <div className={styles.box}>
        <p className={styles.notes}>Position: BottomCenter</p>
        <Tooltips
          trigger={<Icon type={"help"} size={"16"} />}
          position={TooltipsLocationTheme.BottomCenter}
          specializedPosition={true}
        >
          <div>center position won&apos;t change</div>
        </Tooltips>
      </div>

      <div className={styles.box}>
        <p className={styles.notes}>Position: BottomRight</p>
        <Tooltips
          trigger={<Icon type={"help"} size={"16"} />}
          position={TooltipsLocationTheme.BottomRight}
          specializedPosition={true}
        >
          <div>When use specializedPosition, component will just the arrow position</div>
        </Tooltips>
      </div>

      <div className={styles.box}>
        <p className={styles.notes}>Position: BottomLeft, customized size+icon</p>
        <Tooltips
          trigger={<Icon type={"payment"} size={"16"} />}
          position={TooltipsLocationTheme.BottomLeft}
          width={250}
          height={128}
        >
          <div>You can custom the height and width with props</div>
        </Tooltips>
      </div>

      <div className={styles.box}>
        <p className={styles.notes}>Position: BottomRight</p>
        <Tooltips
          trigger={<Icon type={"help"} size={"16"} />}
          position={TooltipsLocationTheme.BottomRight}
          width={240}
          linkLabel={"Link Button"}
          linkUrl={"http://www.baidu.com"}
        >
          <div>Tooltip Label</div>
        </Tooltips>
      </div>
    </div>
  </div>
);

export default {
  title: "Tooltips",
  component: Tooltips
};
