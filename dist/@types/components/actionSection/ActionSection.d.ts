import React from "react";
export interface IActionSectionProps {
    onPreviousClick?: () => any;
    onNextClick?: () => any;
    showPrevious?: boolean;
    showNext?: boolean;
    history?: any;
    disableNext?: boolean;
    onPreviousLabel?: string;
    onNextLabel?: string;
    className?: string;
}
export declare class ActionSection extends React.Component<IActionSectionProps, {}> {
    render(): JSX.Element;
}
