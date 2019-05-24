import * as React from "react";
import { LinkStatus, Size } from "../EnumValues";
export declare enum LinkTarget {
    Self = "_self",
    Blank = "_blank",
    Parent = "_parent",
    Top = "_top"
}
export interface ILinkProps {
    onClick?: () => any;
    label: string;
    disabled?: boolean;
    className?: string;
    size?: Size;
    icon?: string;
    status?: LinkStatus;
    link?: string;
    target?: LinkTarget;
}
export declare class Link extends React.Component<ILinkProps, {}> {
    static defaultProps: Partial<ILinkProps>;
    render(): JSX.Element;
    private handleOnClick;
}
