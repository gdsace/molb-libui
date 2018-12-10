import * as React from "react";
export interface ICheckboxProps {
    onCheckboxClick: any;
    checked: boolean;
    disabled: boolean;
}
export declare class Checkbox extends React.Component<ICheckboxProps, {}> {
    static defaultProps: Partial<ICheckboxProps>;
    render(): JSX.Element;
    private onCheckboxClick;
}
