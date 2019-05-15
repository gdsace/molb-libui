import classnames from "classnames";
import _ from "lodash";
import React from "react";
import { components } from "react-select";
import { ValueType } from "react-select/lib/types";
import { Size } from "../EnumValues";
import { Icon } from "../icons";
import { addLocatedErrorClassname } from "../utils";
import { baseComponents, BaseDropdown } from "./BaseDropdown";
import { dropdownCustomStyles } from "./Dropdown";

const styles = require("./styles.scss");

interface IMultiSelectProps<T> {
  size?: Size;
  error?: string;
  selectedValue?: T[];
  options: T[];
  onChange?: (data: ValueType<T>) => void;
  onFocus?: () => void;
}

const ClearIndicator = () => {
  return <></>;
};
const MultiValueRemove = (props: any) => {
  return (
    <components.MultiValueRemove {...props}>
      <Icon type="close" size="12" />
    </components.MultiValueRemove>
  );
};
const MultiValueContainer = (props: any) => {
  return <components.MultiValueContainer {...props} />;
};

const ValueContainer = (props: any) => {
  return (
    <components.ValueContainer {...props}>
      {props.children}
    </components.ValueContainer>
  );
};

const multiSelectCustomComponents = {
  ...baseComponents,
  ClearIndicator,
  MultiValueRemove,
  MultiValueContainer,
  ValueContainer
};

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
  })
};

export class MultiSelect<T> extends React.Component<IMultiSelectProps<T>, {}> {
  public static defaultProps = {
    selectedValue: []
  };

  public render() {
    const multiSelectClassName = classnames(
      styles.field,
      styles.multiSelectField,
      styles[this.props.size || Size.Large]
    );
    return (
      <div className={multiSelectClassName}>
        <BaseDropdown<T>
          isMulti
          styles={multiSelectCustomStyles}
          closeMenuOnSelect={false}
          onChange={this.props.onChange}
          onFocus={this.props.onFocus}
          components={multiSelectCustomComponents}
          value={this.props.selectedValue}
          options={this.props.options}
          {...this.props}
        />
        {this.props.error && (
          <p className={addLocatedErrorClassname(styles.errorMessage)}>
            {this.props.error}
          </p>
        )}
      </div>
    );
  }
}
