import * as React from "react";
import { Theme } from "../../components";
export interface IDropdownOptionType {
    value: string;
    label: string;
}
export interface ISearchSingleDropdownProps {
    dropdownOptions?: IDropdownOptionType[];
    selectedDropdown: IDropdownOptionType;
    handleDropdownChange: (optionValue: IDropdownOptionType) => any;
    inputText: string;
    handleInputChange: (inputText: string) => any;
    inputPlaceholder?: string;
    inputMaxlength?: number;
    showError?: boolean;
    errorMsg?: string;
    buttonLabel: string;
    handleButtonClick: (inputText: string, selectedDropdown: IDropdownOptionType) => any;
    buttonTheme?: Theme;
}
export declare class SearchSingleDropdown extends React.Component<ISearchSingleDropdownProps, {}> {
    static defaultProps: Partial<ISearchSingleDropdownProps>;
    render(): JSX.Element;
    private handleOnChangeInputText;
    private trimAndSearch;
}
