import { Size } from "@libui/components/EnumValues";
import _ from "lodash";
import React from "react";
import { Props } from "react-select/lib/Select";
import { Input } from "../input";
import { baseComponents, BaseDropdown } from "./BaseDropdown";

const styles = require("./styles.scss");

export interface IDropdownProps<T> extends Props<T> {
  error?: string | boolean;
  label?: string;
  editable?: boolean;
  size?: Size;
  maxLength?: number;
  onTextInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
}

// This Dropdown has outlining, a label and an error field over BaseDropdown
// tslint:disable-next-line:max-classes-per-file
export class Dropdown<T> extends React.Component<IDropdownProps<T>, {}> {
  public render() {
    const customStyles = {
      container: (base: any, state: any) => {
        let borderColor;
        if (_.get(state, "selectProps.error")) {
          borderColor = "1px solid #dc3545";
        } else if (state.isFocused && !state.isDisabled) {
          borderColor = "1px solid #408";
        } else {
          borderColor = "1px solid #dbdfe4";
        }

        // We don't have a handle to the "container" component
        // so we can't set a className on the outermost component
        // Also, react-select cannot insert --focused classNames
        // therefore we have to use css-in-js to set the styles for focused
        return {
          ...base,
          boxSizing: "border-box",
          borderRadius: state.isFocused ? "3px 3px 0 0" : "3px",
          border: borderColor,
          "&:hover": {
            border: state.isFocused ? "1px solid #408" : "1px solid #647283"
          }
        };
      },
      control: (base: any) => {
        return {
          ...base,
          border: "none",
          boxShadow: "none",
          "&:hover": {
            border: "none"
          }
        };
      }
    };

    const dropdown = (
      <div
        className={`${styles.field} ${styles[this.props.size || Size.Large]}`}
      >
        <BaseDropdown
          components={{
            ...baseComponents
          }}
          styles={customStyles}
          {...this.props}
        />
        {this.props.error && (
          <p className={styles.errorMessage}>{this.props.error}</p>
        )}
      </div>
    );

    const input = (
      <Input
        value={this.props.value || ""}
        size={Size.Large}
        errorMsg={`${this.props.error}`}
        showError={!!this.props.error}
        maxLength={this.props.maxLength}
        onChange={event => {
          if (this.props.onTextInputChange) {
            this.props.onTextInputChange(event);
          }
        }}
      />
    );

    // Wrap select in label for accessibility
    // Todo: use a common Label component
    if (this.props.label) {
      return (
        <label>
          <div className={styles.label}>
            {this.props.label}
            {/* <Icon type="help" /> */}
          </div>
          {this.props.editable ? input : dropdown}
        </label>
      );
    }

    return dropdown;
  }
}
