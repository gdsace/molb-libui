import * as React from "react";
import { TooltipsLocationTheme } from "..";
import { LinkTarget } from "../link";
/**
 * specializedPosition is used for make arrow position
 * to the deisigned position.
 */
export interface ITooltipsProps {
    className?: string;
    arrowStyle?: object;
    width?: number;
    height?: number;
    trigger: any;
    overrideTrigger: boolean;
    children: JSX.Element;
    position: TooltipsLocationTheme;
    linkLabel?: string;
    linkUrl?: string;
    linkTarget?: LinkTarget;
    linkIcon?: string;
    childrenClassname?: string;
    specializedPosition?: boolean;
}
export interface ITooltipsState {
    show: boolean;
    tooltipRef: any;
}
export declare class Tooltips extends React.Component<ITooltipsProps, ITooltipsState> {
    static defaultProps: Partial<ITooltipsProps>;
    constructor(props: ITooltipsProps);
    render(): JSX.Element;
    private openPopup;
    private getTooltipContent;
    private closePopup;
    /**
     * use magic number 22px to fit UX design.
     * You can use tooltip with specializedPosition={false}
     * or just delete this magic calculate logic directly.
     * Or need some help can find Wu Yifan.
     */
    private calculateSpecializedStyle;
    private getCalculatedPosition;
}
