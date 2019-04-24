import React from "react";
import { SubFormSectionTheme } from "../EnumValues";
export interface ISubFormSectionProps {
    id?: string;
    title?: string;
    subTitle?: string;
    optional?: boolean;
    children?: React.ReactNode;
    theme?: SubFormSectionTheme;
    isCollapsable?: boolean;
}
interface ISubFormSectionState {
    isCollapsed: boolean;
}
export declare class SubFormSection extends React.Component<ISubFormSectionProps, ISubFormSectionState> {
    static defaultProps: Partial<ISubFormSectionProps>;
    constructor(props: ISubFormSectionProps);
    render(): JSX.Element;
    private onClickHandler;
}
export {};
