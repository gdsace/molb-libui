/// <reference types="react" />
import { SelectComponentsConfig } from "react-select/lib/components";
import { Props } from "react-select/lib/Select";
import { Size } from "../EnumValues";
import "./library.scss";
export declare const baseComponents: SelectComponentsConfig<any>;
export declare type BaseDropdownProps<T> = Props<T> & {
    components?: SelectComponentsConfig<T>;
    styles?: any;
    size?: Size;
};
export declare const BaseDropdown: <T extends {}>(props: BaseDropdownProps<T>) => JSX.Element;
