import * as React from "react";
import { TooltipsLocationTheme } from "../EnumValues";
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
    subsequentQuestion?: React.ReactNode;
    radioLabelLineBreak?: boolean;
    showTooltip?: boolean;
    toolTipsContent?: JSX.Element | string;
    toolTipsPosition?: TooltipsLocationTheme;
    label?: string;
    promptMessage?: IPromptMessage;
    addOnBelowText?: React.ReactNode;
}
interface IPromptMessage {
    display: boolean;
    message: string;
}
export interface IOptionValue {
    value: string;
    label: string;
    disabled?: boolean;
}
export declare const Radio: (props: IRadioProps) => JSX.Element;
export {};
