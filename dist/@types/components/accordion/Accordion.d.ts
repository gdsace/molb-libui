import React from "react";
import { AccordionTheme } from "../EnumValues";
export interface IAccordionProps {
    collapsed?: boolean;
    onPanelClick?: (collapsed: boolean) => any;
    header?: string | React.ReactNode;
    subHeader?: string[];
    content?: string | React.ReactNode;
    theme: AccordionTheme;
    defaultCollapsed?: boolean;
    displayMode?: boolean;
}
export interface IAccordionState {
    collapsed: boolean;
}
export declare class Accordion extends React.Component<IAccordionProps, IAccordionState> {
    constructor(props: IAccordionProps);
    render(): JSX.Element;
    private getCollapsedStatus;
    private renderSubHeader;
    private onPanelClick;
}
