import _ from "lodash";
import * as React from "react";
export interface ITextViewProps {
    children: string | React.ReactChild;
    callbackAfterReachBottom?: () => any;
    className?: string;
    shouldRenderWithHTMLString?: boolean;
}
export declare class TextView extends React.Component<ITextViewProps, any> {
    static defaultProps: Partial<ITextViewProps>;
    textViewDivRef: React.RefObject<HTMLDivElement>;
    textViewDiv: HTMLDivElement | null | undefined;
    debouncedScrollHanlder: ((e: any) => void) & _.Cancelable;
    constructor(props: ITextViewProps);
    onScrollHandler: () => void;
    createMarkup(html: string | React.ReactChild): {
        __html: string;
    } | undefined;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
