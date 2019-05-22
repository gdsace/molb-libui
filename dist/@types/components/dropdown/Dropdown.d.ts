import React from "react";
import { Props } from "react-select/lib/Select";
import { Size } from "../EnumValues";
export interface IDropdownProps<T> extends Props<T> {
    error?: string | boolean;
    label?: string;
    editable?: boolean;
    size?: Size;
    maxLength?: number;
    onTextInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
    textInputValue?: string;
}
export declare const dropdownCustomStyles: {
    container: (base: any, state: any) => any;
    control: (base: any) => any;
    menu: (base: any) => any;
    option: (base: any) => any;
    menuPortal: (base: any) => any;
};
export declare class Dropdown<T> extends React.Component<IDropdownProps<T>, {}> {
    render(): JSX.Element;
}
