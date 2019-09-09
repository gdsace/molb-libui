import classnames from "classnames";
import React from "react";
import { components } from "react-select";
import { Props } from "react-select/lib/Select";
import { ValueType } from "react-select/lib/types";
import { Size } from "../EnumValues";
import { Icon } from "../icons";
import { addLocatedErrorClassname } from "../utils";
import { baseComponents, BaseDropdown } from "./BaseDropdown";
import { dropdownCustomStyles } from "./Dropdown";
import styles from "./dropdownStyle.scss";

type MultiSelectProps<T> = Props<T> & {
  label?: string;
  size?: Size;
  error?: string;
  placeholder?: string;
  selectedValue?: T[];
  options: T[];
  onChange?: (data: ValueType<T>) => void;
  onFocus?: () => void;
};

const MultiValueRemove = (props: any) => (
  <components.MultiValueRemove {...props}>
    <Icon type="close" size="12" />
  </components.MultiValueRemove>
);

const multiSelectCustomStyles = {
  ...dropdownCustomStyles,
  multiValueRemove: (base: any) => ({
    ...base,
    "&:hover": {
      backgroundColor: "#dbdfe4",
      color: "#313840"
    }
  }),
  multiValue: (base: any) => ({
    ...base,
    margin: "4px 0 4px 8px"
  }),
  valueContainer: (base: any) => ({
    ...base,
    padding: "9px 8px"
  }),
  placeholder: (base: any) => ({
    ...base,
    fontWeight: 400,
    fontFamily: "HK Nova",
    fontSize: "14px",
    color: "#647283 "
  }),
  clearIndicator: () => ({ display: "none" })
};

export const MultiSelect = <T extends {}>(props: MultiSelectProps<T>) => {
  const multiSelectClassName = classnames(
    styles.field,
    styles.multiSelectField,
    styles[props.size || Size.Large]
  );

  const errorClassName = addLocatedErrorClassname(styles.errorMessage);

  return (
    <div className={multiSelectClassName}>
      <BaseDropdown<T>
        isMulti
        styles={multiSelectCustomStyles}
        closeMenuOnSelect={false}
        onChange={props.onChange}
        onFocus={props.onFocus}
        components={{ ...baseComponents, MultiValueRemove }}
        value={props.selectedValue}
        options={props.options}
        placeholder={props.placeholder}
        {...props}
      />
      {props.error && <p className={errorClassName}>{props.error}</p>}
    </div>
  );
};

MultiSelect.defaultProps = {
  selectedValue: []
};
