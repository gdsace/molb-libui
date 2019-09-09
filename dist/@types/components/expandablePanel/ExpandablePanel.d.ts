import { Component, ReactNode, ReactNodeArray } from "react";
import { ExpandablePanelTheme } from "../EnumValues";
export declare type ExpandablePanelProps = {
    theme: ExpandablePanelTheme;
    defaultDisplay: number;
    collapsed?: boolean;
    title?: ReactNode;
    subTitle?: ReactNode;
    children?: ReactNodeArray;
    onPanelClick?: (collapsed: boolean) => void;
};
export declare type ExpandablePanelState = {
    collapsed: boolean;
};
export declare class ExpandablePanel extends Component<ExpandablePanelProps, ExpandablePanelState> {
    state: {
        collapsed: boolean;
    };
    render(): JSX.Element;
    onPanelClick: () => void;
}
