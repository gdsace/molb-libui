/// <reference types="react" />
import { TileTheme } from "@libui/components/EnumValues";
export interface ITileProps {
    icon: string;
    content: string;
    description?: string;
    checked?: boolean;
    onChange?: (e: any) => void;
    disabled?: boolean;
    value?: string;
    theme?: TileTheme;
    containerStyle?: string;
}
export declare const Tile: (props: ITileProps) => JSX.Element;
