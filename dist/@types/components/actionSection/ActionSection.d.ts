import React from "react";
export interface IActionSectionProps {
    onPreviousClick?: () => any;
    onNextClick?: () => any;
    showPrevious?: boolean;
    showPreviousIcon?: boolean;
    showNext?: boolean;
    showNextIcon?: boolean;
    loading?: boolean;
    history?: any;
    disableNext?: boolean;
    onPreviousLabel?: string;
    onNextLabel?: string;
    className?: string;
}
export declare class ActionSection extends React.Component<IActionSectionProps, {}> {
    static defaultProps: Partial<IActionSectionProps>;
    render(): JSX.Element;
}
