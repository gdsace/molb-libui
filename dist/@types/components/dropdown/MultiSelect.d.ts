import React from "react";
import { ValueType } from "react-select/lib/types";
import { Size } from "../EnumValues";
interface IMultiSelectProps<T> {
    size?: Size;
    error?: string;
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
