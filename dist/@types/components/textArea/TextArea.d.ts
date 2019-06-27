import * as React from "react";
export declare type HTMLTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export interface ITextAreaPros extends HTMLTextareaProps {
    onIconMouseOver?: () => any;
    onIconMouseOut?: () => any;
    onIconMouseClick?: () => any;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => any;
    id?: string;
    displayContentWithoutScroll?: boolean;
    title?: string;
    helperText?: string;
    overwrite?: boolean;
    iconType?: string;
    errorMsg?: string;
    warningMsg?: string;
    showError?: boolean;
}
export interface ITextAreaState {
    characterCount?: number;
    isOverwrite?: boolean;
    height?: number;
}
export declare class TextArea extends React.Component<ITextAreaPros, ITextAreaState> {
    static defaultProps: Partial<ITextAreaPros>;
    constructor(props: any);
    componentDidMount(): void;
    render(): JSX.Element;
    private renderHelperText;
    private renderWarningMsg;
    private getStyle;
    private handleTextareaChange;
    private handleIconMouseOver;
    private handleIconMouseOut;
    private handleIconClick;
}
