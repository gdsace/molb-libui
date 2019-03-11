import * as React from "react";
import { InputType, Size, TooltipsLocationTheme } from "../EnumValues";
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
    inlineElement?: JSX.Element | string;
    iconSignifier?: JSX.Element;
    suffix?: string;
    showCharacterCount?: boolean;
    toolTipsContent?: JSX.Element | string;
    toolTipsPosition?: TooltipsLocationTheme;
    customizedChangesFilterRegex?: RegExp;
}
export declare class Input extends React.Component<IInputProps, any> {
    static defaultProps: Partial<IInputProps>;
    constructor(props: any);
    render(): JSX.Element;
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    private getRightInlineElement;
    private getRawInputType;
}
