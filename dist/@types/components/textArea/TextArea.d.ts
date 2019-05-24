import * as React from "react";
export declare type HTMLTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export interface ITextAreaPros extends HTMLTextareaProps {
    onIconMouseOver?: () => any;
    onIconMouseOut?: () => any;
    onIconMouseClick?: () => any;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => any;
    title?: string;
    helperText?: string;
    overwrite?: boolean;
    iconType?: string;
    errorMsg?: string;
    showError?: boolean;
}
export declare class TextArea extends React.Component<ITextAreaPros, any> {
    static defaultProps: Partial<ITextAreaPros>;
    constructor(props: any);
    render(): JSX.Element;
    private handleTextareaChange;
    private handleIconMouseOver;
    private handleIconMouseOut;
    private handleIconClick;
}
