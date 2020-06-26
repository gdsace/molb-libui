import * as React from "react";
import { InputType, Size, TooltipsLocationTheme } from "../EnumValues";
export interface IInputProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
    onBlur?: () => any;
    onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => any;
    value: any;
    name?: string;
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
    helperMsg?: string | React.ReactNode;
    showTooltip?: boolean;
    inlineElement?: JSX.Element | string;
    iconSignifier?: JSX.Element;
    loading?: boolean;
    suffix?: string;
    showCharacterCount?: boolean;
    toolTipsContent?: JSX.Element | string;
    toolTipsPosition?: TooltipsLocationTheme;
    gaGreenStyling?: boolean;
    customizedChangesFilterRegex?: RegExp;
    isUncontrolled?: boolean;
    uncontrolledRef?: React.RefObject<any> | ((ref: any) => void);
    uncontrolledDefaultValue?: any;
    fooBar: void;
}
export declare class Input extends React.Component<IInputProps, any> {
    static defaultProps: Partial<IInputProps>;
    constructor(props: any);
    render(): JSX.Element;
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    private getRightInlineElement;
    private getRawInputType;
}
