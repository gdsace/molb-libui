import * as React from "react";
export interface ICheckboxTypeQuestion {
    checked: boolean;
    disabled: boolean;
    onCheckboxClick: any;
    questionLabel: string;
    questionDescription?: string;
    tooltip?: string;
}
interface ICheckboxTypeQuestionState {
    checked: boolean;
}
export declare class CheckboxTypeQuestion extends React.Component<ICheckboxTypeQuestion, ICheckboxTypeQuestionState> {
    constructor(props: ICheckboxTypeQuestion);
    render(): JSX.Element;
    private onTextClick;
    private onCheckedValueChange;
}
export {};
