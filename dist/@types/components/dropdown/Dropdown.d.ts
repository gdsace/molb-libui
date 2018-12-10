import { Size } from "@libui/components/EnumValues";
import React from "react";
import { Props } from "react-select/lib/Select";
export interface IDropdownProps<T> extends Props<T> {
    error?: string | boolean;
    label?: string;
    editable?: boolean;
    size?: Size;
    maxLength?: number;
    onTextInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
}
export declare class Dropdown<T> extends React.Component<IDropdownProps<T>, {}> {
    render(): JSX.Element;
}
