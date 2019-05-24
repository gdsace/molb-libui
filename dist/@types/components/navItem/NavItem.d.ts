import * as React from "react";
export interface INavItem {
    type: string;
    label: string;
    onClick?: () => void;
}
export declare class NavItem extends React.Component<INavItem, {}> {
    render(): JSX.Element;
    private onItemClick;
}
