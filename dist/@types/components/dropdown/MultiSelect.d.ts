/// <reference types="react" />
import { Props } from "react-select/lib/Select";
import { ValueType } from "react-select/lib/types";
import { Size } from "../EnumValues";
declare type MultiSelectProps<T> = Props<T> & {
    label?: string;
    size?: Size;
    error?: string;
    placeholder?: string;
    selectedValue?: T[];
    options: T[];
    onChange?: (data: ValueType<T>) => void;
    onFocus?: () => void;
};
export declare const MultiSelect: {
    <T extends {}>(props: MultiSelectProps<T>): JSX.Element;
    defaultProps: {
        selectedValue: never[];
    };
};
export {};
