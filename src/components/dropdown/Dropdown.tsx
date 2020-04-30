import classnames from "classnames";
import { get } from "lodash";
import React, { ChangeEvent, ReactNode } from "react";
import { Props } from "react-select/lib/Select";
import { Size } from "../EnumValues";
import { Input } from "../input";
import { addLocatedErrorClassname } from "../utils";
import { baseComponents, BaseDropdown } from "./BaseDropdown";
import styles from "./dropdownStyle.scss";

export type DropdownProps<T> = Props<T> & {
  error?: string | boolean;
  label?: string;
  name?: string;
  editable?: boolean;
  size?: Size;
  maxLength?: number;
  textInputValue?: string;
  addonBelow?: ReactNode;
  onTextInputChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

// tslint:disable-next-line:max-classes-per-file
export const dropdownCustomStyles = {
  container: (base: any, state: any) => {
    let borderColor;
    if (get(state, "selectProps.error")) {
      borderColor = "1px solid #dc3545";
    } else if (state.isFocused && !state.isDisabled) {
      borderColor = "1px solid #408";
    } else {
      borderColor = "1px solid #dbdfe4";
    }

    return {
      ...base,
      boxSizing: "border-box",
      borderRadius: "3px",
      border: borderColor,
      backgroundColor: state.isDisabled ? "#f9fafa" : "white"
    };
  },
  control: (base: any) => {
    return {
      ...base,
      border: "none",
      boxShadow: "none",
      "&:hover": {
        border: "none"
      },
      backgroundColor: "transparent"
    };
  },
  menuPortal: (base: any) => ({ ...base, zIndex: 9999 })
};

export const Dropdown = <T extends any>(props: DropdownProps<T>) => {
  const dropdownClassName = classnames(
    styles.field,
    styles.dropdownField,
    styles[props.size || Size.Large]
  );

  const errorClassName = addLocatedErrorClassname(styles.errorMessage);

  const dropdown = (
    <div className={dropdownClassName}>
      <BaseDropdown<T>
        components={{ ...baseComponents }}
        styles={dropdownCustomStyles}
        {...props}
      />
      {props.error ? (
        <p className={errorClassName}>{props.error}</p>
      ) : (
        <div className={styles.addonBelow}>{props.addonBelow}</div>
      )}
    </div>
  );

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onTextInputChange) {
      event.persist();
      props.onTextInputChange(event);
    }
  };

  const input = (
    <Input
      value={props.textInputValue || ""}
      size={Size.Large}
      disabled={props.isDisabled}
      errorMsg={`${props.error}`}
      showError={!!props.error}
      helperMsg={props.addonBelow}
      maxLength={props.maxLength}
      onChange={onInputChange}
    />
  );

  // Wrap select in label for accessibility
  if (props.label) {
    const labelClass = classnames(
      styles.label,
      props.isDisabled ? styles.disabledLabel : ""
    );
    return (
      <label data-scrollpoint={true}>
        <div className={labelClass}>{props.label}</div>
        {props.editable ? input : dropdown}
      </label>
    );
  }

  return dropdown;
};
