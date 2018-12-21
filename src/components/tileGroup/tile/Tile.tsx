import { TileTheme } from "@libui/components/EnumValues";
import classNames from "classnames";
import _ from "lodash";
import * as React from "react";
import { Icon } from "../../icons/index";

const styles = require("./tile.scss");

export interface ITileProps {
  icon?: string;
  content: string;
  subContent?: string;
  description?: string;
  checked?: boolean;
  onChange?: (e: any) => void;
  disabled?: boolean;
  value?: string;
  theme?: TileTheme;
  containerStyle?: string;
  deselectable?: boolean;
  imgSrc?: string;
  imgAlt?: string;
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
            onChange={!props.deselectable ? props.onChange : _.noop}
            onClick={props.deselectable ? props.onChange : _.noop}
            checked={props.checked}
            disabled={props.disabled}
          />
        </span>
        <div className={`${styles.itemsContent}`}>
          {props.theme !== TileTheme.BasicTile &&
            (props.icon && (
              <Icon className={styles.tileIcon} type={props.icon} size="48" />
            ))}
          {props.theme !== TileTheme.BasicTile &&
            (props.imgSrc && (
              <img
                className={styles.imgWrapper}
                src={props.imgSrc}
                alt={props.imgAlt}
              />
            ))}
          {props.theme !== TileTheme.BasicTile && (
            <span className={styles.tileHeader}>{props.content}</span>
          )}
          {props.theme !== TileTheme.BasicTile &&
            (props.subContent && (
              <span className={styles.subContent}>{props.subContent}</span>
            ))}
          {props.theme !== TileTheme.SmallTile && (
            <span className={styles.tileDescription}>{props.description}</span>
          )}
        </div>
      </label>
    </div>
  );
};
