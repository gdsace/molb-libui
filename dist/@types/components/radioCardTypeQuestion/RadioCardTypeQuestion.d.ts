import * as React from "react";
export interface IRadioCardTypeQuestionProps {
    question: string;
    options: IOption[];
    onChange: (value: string) => any;
    selectedAnswer: string;
    showError?: boolean;
    errorMsg?: string;
    id?: string;
}
export interface IOption {
    label: string;
    description: string;
    value: string;
}
export declare class RadioCardTypeQuestion extends React.Component<IRadioCardTypeQuestionProps, {}> {
    static defaultProps: Partial<IRadioCardTypeQuestionProps>;
    render(): JSX.Element;
    private onChange;
}
