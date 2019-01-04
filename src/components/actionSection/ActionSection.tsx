import classNames from "classnames";
import React from "react";
import { Button } from "../button";
import { Size, Theme } from "../EnumValues";

const styles = require("./actionSection.scss");
const PREVIOUS = "Prev";
const NEXT = "Next";

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

export class ActionSection extends React.Component<IActionSectionProps, {}> {
  public render() {
    const rowStyle = classNames(styles.row, styles.actionSectionRow, {
      [styles.onlyPrevious]: this.props.showPrevious && !this.props.showNext,
      [styles.onlyNext]: !this.props.showPrevious && this.props.showNext
    });
    const sectionClassName = classNames(
      this.props.className ? this.props.className : ""
    );
    return (
      <section className={`${styles.section} ${sectionClassName}`}>
        <div className={rowStyle}>
          {this.props.showPrevious && (
            <Button
              label={
                this.props.onPreviousLabel
                  ? this.props.onPreviousLabel
                  : PREVIOUS
              }
              size={Size.Medium}
              theme={Theme.Secondary}
              icon="arrowPrev"
              onClick={
                this.props.onPreviousClick ||
                (() => {
                  /* noop */
                })
              }
            />
          )}
          {this.props.showNext && (
            <Button
              className={styles.nextButton}
              label={this.props.onNextLabel ? this.props.onNextLabel : NEXT}
              size={Size.Medium}
              theme={Theme.Primary}
              icon="arrowNext"
              iconAlign="right"
              disabled={this.props.disableNext}
              onClick={
                this.props.onNextClick ||
                (() => {
                  /* noop */
                })
              }
            />
          )}
        </div>
      </section>
    );
  }
}
