import * as React from "react";
import {
  Button,
  Dropdown,
  Input,
  InputType,
  Size,
  Theme
} from "../../components";

const styles = require("./searchBarSingleDropdown.scss");

export interface IDropdownOptionType {
  value: string;
  label: string;
}

export interface ISearchSingleDropdownProps {
  // dropdown props
  dropdownOptions?: IDropdownOptionType[];
  selectedDropdown: IDropdownOptionType;
  handleDropdownChange: (optionValue: IDropdownOptionType) => any;

  // input props
  inputText: string;
  handleInputChange: (inputText: string) => any;
  inputPlaceholder?: string;
  inputMaxlength?: number;
  showError?: boolean;
  errorMsg?: string;

  // button props
  buttonLabel: string;
  handleButtonClick: (
    inputText: string,
    selectedDropdown: IDropdownOptionType
  ) => any;
}

export class SearchSingleDropdown extends React.Component<
  ISearchSingleDropdownProps,
  {}
> {
  public render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.searchSection}>
          <Dropdown
            options={this.props.dropdownOptions}
            className={styles.searchTypeDropdown}
            value={this.props.selectedDropdown}
            onChange={optionValue => {
              const option = optionValue as IDropdownOptionType;
              this.props.handleDropdownChange(option);
            }}
            textInputValue={this.props.selectedDropdown.label}
          />
          <div className={styles.searchTextInputWrapper}>
            <Input
              size={Size.Large}
              type={InputType.Text}
              value={this.props.inputText}
              placeholder={this.props.inputPlaceholder}
              maxLength={this.props.inputMaxlength || 100}
              onChange={e => {
                this.props.handleInputChange(e.target.value);
              }}
              showError={this.props.showError || false}
              errorMsg={this.props.errorMsg || ""}
            />
          </div>
          <Button
            className={styles.searchButton}
            label={this.props.buttonLabel}
            size={Size.Medium}
            theme={Theme.Primary}
            type="button"
            onClick={() => {
              this.props.handleButtonClick(
                this.props.inputText,
                this.props.selectedDropdown
              );
            }}
          />
        </div>
      </div>
    );
  }
}
