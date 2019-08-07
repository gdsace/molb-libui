import React from "react";
import { Props } from "react-select/lib/Select";
import { ValueType } from "react-select/lib/types";
import { Size } from "../EnumValues";
interface IMultiSelectProps<T> extends Props<T> {
    size?: Size;
    error?: string;
    placeholder?: string;
    selectedValue?: T[];
    options: T[];
    onChange?: (data: ValueType<T>) => void;
    onFocus?: () => void;
}
export declare class MultiSelect<T> extends React.Component<IMultiSelectProps<T>, {}> {
    static defaultProps: {
        selectedValue: never[];
    };
    render(): JSX.Element;
}
export {};
