import * as React from "react";
import { CheckboxTheme } from "../EnumValues";
export interface ICheckboxProps {
    onCheckboxClick: any;
    checked: boolean;
    disabled: boolean;
    clickableElement?: JSX.Element | string;
    theme?: CheckboxTheme;
    addonBelow?: React.ReactNode;
    fieldName?: string;
}
interface ICheckboxState {
    checked: boolean;
}
export declare class Checkbox extends React.Component<ICheckboxProps, ICheckboxState> {
    static defaultProps: Partial<ICheckboxProps>;
    static getDerivedStateFromProps: (props: ICheckboxProps, state: ICheckboxState) => {
        checked: boolean;
    } | null;
    constructor(props: ICheckboxProps);
    render(): JSX.Element;
    private onCheckboxClick;
    private onClickableElementClick;
    private onCheckedValueChange;
}
export {};
