import * as React from "react";
export interface ICheckboxTypeQuestion {
    checked: boolean;
    disabled: boolean;
    onCheckboxClick: any;
    questionLabel: string;
    questionDescription?: string;
    tooltip?: string;
}
export declare class CheckboxTypeQuestion extends React.Component<ICheckboxTypeQuestion, {}> {
    render(): JSX.Element;
}
