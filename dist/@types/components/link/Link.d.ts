import { LinkStatus, Size } from "@libui/components/EnumValues";
import * as React from "react";
export interface ILinkProps {
    onClick: () => any;
    label: string;
    disabled?: boolean;
    className?: string;
    size?: Size;
    icon?: string;
    status?: LinkStatus;
}
export declare class Link extends React.Component<ILinkProps, {}> {
    static defaultProps: Partial<ILinkProps>;
    render(): JSX.Element;
    private handleOnClick;
}
