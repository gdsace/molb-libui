import { TileTheme } from "@libui/components/EnumValues";
import classNames from "classnames";
import * as React from "react";
import { Icon } from "../../icons/index";

const styles = require("./tile.scss");

export interface ITileProps {
  icon: string;
  content: string;
  description?: string;
  checked?: boolean;
  onChange?: (e: any) => void;
  disabled?: boolean;
  value?: string;
  theme?: TileTheme;
  containerStyle?: string;
  error?: string;
}

export const Tile = (props: ITileProps) => {
  const tileWrapperClass = classNames(
    props.containerStyle || "",
    styles.tileWrapper,
    styles[`${props.theme}`]
  );
  const tileContentClass = classNames(styles.tileContent, {
    [styles.tileContentChecked]: props.checked,
    [styles.tileContentDisabled]: props.disabled
  });
  const selectionIcon = props.checked ? (
    <Icon type="checkmark" size="20" />
  ) : (
    <Icon type="checkbox" size="20" />
  );

  return (
    <div className={tileWrapperClass}>
      <label className={tileContentClass}>
        <span className={styles.checkBoxIcon}>
          <div>{selectionIcon}</div>
          <input
            type="radio"
            value={props.value}
            onChange={props.onChange}
            checked={props.checked}
            disabled={props.disabled}
          />
        </span>
        <div className={`${styles.itemsContent}`}>
          {props.theme !== TileTheme.MediumTile &&
            props.theme !== TileTheme.BasicTile && (
              <Icon className={styles.tileIcon} type={props.icon} size="48" />
            )}
          {props.theme !== TileTheme.BasicTile && (
            <span className={styles.tileHeader}>{props.content}</span>
          )}
          {props.theme !== TileTheme.SmallTile && (
            <span className={styles.tileDescription}>{props.description}</span>
          )}
          {props.theme === TileTheme.LargeTile && props.error && (
            <div className={styles.errorContent}>
              <Icon className={styles.errorIcon} type="error" />
              <span>{props.error}</span>
            </div>
          )}
        </div>
      </label>
    </div>
  );
};
