import * as React from "react";
import { Button, Dropdown, Icon, Input, InputType, Size, Theme } from "../../components";

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
  handleButtonClick: (inputText: string, selectedDropdown: IDropdownOptionType) => any;
}

export class SearchSingleDropdown extends React.Component<ISearchSingleDropdownProps, {}> {
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
              helperMsg="Only alphabets, numbers, and spaces are allowed."
              onChange={e => this.handleOnChangeInputText(e.target.value)}
              iconSignifier={<Icon size="16" className={styles.iconSignifier} type={"search"} />}
              showError={this.props.showError || false}
              errorMsg={this.props.errorMsg || ""}
              onKeyPress={e => {
                if (e.key === "Enter") {
                  this.trimAndSearch();
                }
              }}
            />
          </div>
          <Button
            className={styles.searchButton}
            label={this.props.buttonLabel}
            size={Size.Medium}
            theme={Theme.Primary}
            type="button"
            onClick={() => {
              this.trimAndSearch();
            }}
          />
        </div>
      </div>
    );
  }

  private handleOnChangeInputText(inputText: string) {
    if (!/^[a-zA-Z0-9\s]*$/g.test(inputText)) {
      inputText = inputText.replace(/[^a-zA-Z0-9\s]/g, "");
    }
    this.props.handleInputChange(inputText);
  }

  private trimAndSearch() {
    const { handleInputChange, inputText, handleButtonClick, selectedDropdown } = this.props;
    const trimmedInputText = inputText.trim();
    handleInputChange(trimmedInputText);
    handleButtonClick(trimmedInputText, selectedDropdown);
  }
}
