import * as React from "react";
export interface ICheckboxProps {
    onCheckboxClick: any;
    checked: boolean;
    disabled: boolean;
    clickableElement?: JSX.Element | string;
}
interface ICheckboxState {
    checked: boolean;
}
export declare class Checkbox extends React.Component<ICheckboxProps, ICheckboxState> {
    static defaultProps: Partial<ICheckboxProps>;
    constructor(props: ICheckboxProps);
    render(): JSX.Element;
    private onCheckboxClick;
    private onClickableElementClick;
    private onCheckedValueChange;
}
export {};
