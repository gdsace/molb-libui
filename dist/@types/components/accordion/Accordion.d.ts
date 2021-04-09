import { Component, ReactNode } from "react";
import { AccordionTheme, ColourTheme } from "../EnumValues";
export declare type AccordionProps = {
    theme: AccordionTheme;
    collapsed?: boolean;
    header?: ReactNode;
    subHeader?: string[];
    content?: ReactNode;
    defaultCollapsed?: boolean;
    displayMode?: boolean;
    onPanelClick?: (collapsed: boolean) => void;
    colourTheme?: ColourTheme;
};
export declare type AccordionState = {
    collapsed: boolean;
};
export declare class Accordion extends Component<AccordionProps, AccordionState> {
    state: {
        collapsed: boolean;
    };
    render(): JSX.Element;
    getCollapsedStatus: () => boolean;
    renderSubHeader: (subHeader: string[] | undefined, collapsed: boolean) => JSX.Element;
    onPanelClick: () => void;
}
