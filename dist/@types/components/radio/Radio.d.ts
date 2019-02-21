/// <reference types="react" />
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
    labelStyleOverride?: any;
}
export interface IOptionValue {
    value: string;
    label: string;
    disabled?: boolean;
}
export declare const Radio: (props: IRadioProps) => JSX.Element;
