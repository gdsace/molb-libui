import * as React from "react";
export interface IRadioProps {
    className?: string;
    text?: string;
    optionList: IOptionValue[];
    value?: string;
    onChange: (e: string) => void;
    disabled?: boolean;
    showError?: boolean;
    errorMsg?: string;
    id?: string;
    disableWidth?: boolean;
    radioTextStyleOverride?: string;
    labelStyleOverride?: string;
    subsequentQuestion?: React.ReactNode | string;
    radioLabelLineBreak?: boolean;
}
export interface IOptionValue {
    value: string;
    label: string;
    disabled?: boolean;
}
export declare const Radio: (props: IRadioProps) => JSX.Element;
