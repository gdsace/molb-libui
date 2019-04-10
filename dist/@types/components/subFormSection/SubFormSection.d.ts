import React from "react";
import { SubFormSectionTheme } from "../EnumValues";
export interface ISubFormSectionProps {
    id?: string;
    title?: string;
    subTitle?: string;
    optional?: boolean;
    children?: React.ReactNode;
    theme?: SubFormSectionTheme;
}
export declare class SubFormSection extends React.Component<ISubFormSectionProps, {}> {
    static defaultProps: Partial<ISubFormSectionProps>;
    render(): JSX.Element;
}
