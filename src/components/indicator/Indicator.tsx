import * as React from "react";

const styles = require("./indicator.scss");

export interface IIndicator {
  activeIndex: number;
  index: number;
  label: string;
}

export class Indicator extends React.Component<IIndicator, {}> {
  public render() {
    const isActive = this.props.activeIndex === this.props.index;
    const isDisabled = this.props.activeIndex < this.props.index;

    const navStatusClass = isActive
      ? styles.active
      : isDisabled
      ? styles.disabled
      : styles.enabled;

    return (
      <div className={`${styles.navLabel} ${navStatusClass}`}>
        <label className={styles.label}>
          <span className={styles.index}>{this.props.index}</span>
          {this.props.label}
        </label>
      </div>
    );
  }
}
