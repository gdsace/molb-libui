import * as React from "react";
import { IIconCategory } from "../icons";
export interface INavItem {
    type: string;
    label: string;
    category?: IIconCategory;
    onClick?: () => void;
}
export declare class NavItem extends React.Component<INavItem, {}> {
    render(): JSX.Element;
    private onItemClick;
}
