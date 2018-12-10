import { CardStatus, CardTheme } from "@libui/components/EnumValues";
import * as React from "react";
export interface ICardProps {
    title: string;
    titleIcon?: React.ReactNode;
    subtitle: string;
    supportingText?: string;
    description?: React.ReactNode;
    status?: CardStatus;
    actionField?: React.ReactNode;
    theme?: CardTheme;
    className?: string;
    date?: string;
    onClick?: () => void;
}
export declare class Card extends React.Component<ICardProps> {
    static defaultProps: Partial<ICardProps>;
    render(): JSX.Element;
    private handleOnClick;
}
