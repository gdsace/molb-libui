import { Size } from "@libui/components/EnumValues";
import React from "react";
import { SelectComponentsConfig } from "react-select/lib/components";
import { Props } from "react-select/lib/Select";
import "./library.scss.nomangle";
export declare const baseComponents: SelectComponentsConfig<any>;
export interface IBaseDropdownProps<T> extends Props<T> {
    components?: SelectComponentsConfig<T>;
    styles?: any;
    size?: Size;
}
export declare class BaseDropdown<T> extends React.Component<IBaseDropdownProps<T>, {}> {
    static defaultProps: Partial<IBaseDropdownProps<any>>;
    render(): JSX.Element;
}
