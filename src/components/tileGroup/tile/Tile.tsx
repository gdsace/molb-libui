import classNames from "classnames";
import _ from "lodash";
import * as React from "react";
import { TileTheme, TooltipsLocationTheme } from "../../EnumValues";
import { Icon, IIconCategory } from "../../icons/index";
import { Tooltips } from "../../tooltips";

const styles = require("./tile.scss");

export interface ITileProps {
  icon?: string;
  iconCategory?: IIconCategory;
  content: string;
  subContent?: string;
  description?: string;
  checked?: boolean;
  onChange?: (e: any) => void;
  disabled?: boolean;
  value?: string;
  theme?: TileTheme;
  containerStyle?: string;
  error?: string;
  deselectable?: boolean;
  imgSrc?: string;
  imgAlt?: string;
  validationToolTip?: string;
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
  let selectionIcon;
  if (props.disabled && props.validationToolTip) {
    selectionIcon = (
      <Icon className={styles.disabledCheckIcon} type="error" size="20" />
    );
  } else if (props.checked) {
    selectionIcon = <Icon type="checkmark" size="20" />;
  } else {
    selectionIcon = <Icon type="checkbox" size="20" />;
  }
  let selection;
  if (props.disabled && props.validationToolTip) {
    selection = (
      <Tooltips
        trigger={selectionIcon}
        position={TooltipsLocationTheme.BottomCenter}
        specializedPosition={true}
        width={256}
        height={69}
      >
        <div>{props.validationToolTip}</div>
      </Tooltips>
    );
  } else {
    selection = selectionIcon;
  }
  console.log("TILE PROPS", props)
  return (
    <div className={tileWrapperClass}>
      <label className={tileContentClass}>
        <span className={styles.checkBoxIcon}>
          <div>{selection}</div>
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
              <Icon
                className={styles.tileIcon}
                category={props.iconCategory}
                type={props.icon}
                size="48"
              />
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
