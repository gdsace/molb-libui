import { InputType, Size, TooltipsLocationTheme } from "@libui/components/EnumValues";
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
    showCharacterCount?: boolean;
    toolTipsContent?: string;
    toolTipsPosition?: TooltipsLocationTheme;
    customizedChangesFilterRegex?: RegExp;
}
export declare class Input extends React.Component<IInputProps, any> {
    static defaultProps: Partial<IInputProps>;
    constructor(props: any);
    render(): JSX.Element;
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
