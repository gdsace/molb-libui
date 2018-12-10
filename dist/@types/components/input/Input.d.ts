import { InputType, Size } from "@libui/components/EnumValues";
import * as React from "react";
export interface IInputProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
    onBlur?: () => any;
    value: any;
    type?: InputType;
    minLength?: number;
    maxLength?: number;
    label?: string;
    disabled?: boolean;
    placeholder?: string;
    className?: string;
    showError?: boolean;
    size?: Size;
    errorMsg?: string;
    showHelper?: boolean;
    helperMsg?: string;
    showTooltip?: boolean;
    suffix?: string;
}
export declare class Input extends React.Component<IInputProps, {}> {
    static defaultProps: Partial<IInputProps>;
    render(): JSX.Element;
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
