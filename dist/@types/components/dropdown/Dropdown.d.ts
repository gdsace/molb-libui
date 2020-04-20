import { ChangeEvent, ReactNode } from "react";
import { Props } from "react-select/lib/Select";
import { Size } from "../EnumValues";
export declare type DropdownProps<T> = Props<T> & {
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
export declare const dropdownCustomStyles: {
    container: (base: any, state: any) => any;
    control: (base: any) => any;
    menuPortal: (base: any) => any;
};
export declare const Dropdown: <T extends any>(props: DropdownProps<T>) => JSX.Element;
