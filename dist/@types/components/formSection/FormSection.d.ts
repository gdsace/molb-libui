import { FormSectionSpacing } from "@libui/components/EnumValues";
import React from "react";
export interface IFormSectionProps {
    header?: string;
    subheader?: string;
    caption?: string;
    children?: React.ReactNode;
    id?: string;
    theme?: FormSectionSpacing;
}
export declare class FormSection extends React.Component<IFormSectionProps, {}> {
    static defaultProps: Partial<IFormSectionProps>;
    render(): JSX.Element;
}
