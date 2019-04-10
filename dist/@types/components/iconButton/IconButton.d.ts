import * as React from "react";
import { IIconProps } from "../icons";
export interface IIconButtonProps extends IIconProps {
    onClick: () => any;
    disabled?: boolean;
    iconClassName?: string;
}
export declare class IconButton extends React.Component<IIconButtonProps, {}> {
    static defaultProps: Partial<IIconButtonProps>;
    render(): JSX.Element;
    private handleOnClick;
}
