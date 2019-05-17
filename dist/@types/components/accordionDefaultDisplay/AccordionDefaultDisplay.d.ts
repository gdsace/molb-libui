import React from "react";
import { AccordionTheme } from "../EnumValues";
export interface IAccordionProps {
    collapsed?: boolean;
    onPanelClick?: (collapsed: boolean) => any;
    title?: string | React.ReactNode;
    content?: React.ReactNode[] | string[] | React.ReactNode;
    theme: AccordionTheme;
    defaultDisplay?: number;
}
export interface IAccordionState {
    collapsed: boolean;
}
export declare class AccordionDefaultDisplay extends React.Component<IAccordionProps, IAccordionState> {
    constructor(props: IAccordionProps);
    render(): JSX.Element;
    private onPanelClick;
    private renderPanelContent;
    private renderContent;
}
