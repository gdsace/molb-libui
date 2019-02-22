import React from "react";
import { FormSectionSpacing } from "../EnumValues";
export interface IFormSectionProps {
    header?: string;
    subheader?: string;
    caption?: string;
    children?: React.ReactNode;
    id?: string;
    reviewModel?: boolean;
    theme?: FormSectionSpacing;
}
export declare class FormSection extends React.Component<IFormSectionProps, {}> {
    static defaultProps: Partial<IFormSectionProps>;
    render(): JSX.Element;
}
