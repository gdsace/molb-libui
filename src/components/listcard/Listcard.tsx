import * as React from "react";

import { Button } from "@libui/components/button";
import { ListcardStatus, Size, Theme } from "@libui/components/EnumValues";
import classnames from "classnames";

const styles = require("./listcard.scss");

export interface IListcardPros {
  title?: string;
  subTitle?: string;
  description?: string;
  tag?: string;
  supportingText?: string;
  buttonText?: string;
  status?: ListcardStatus;
  onButtonClick?: () => void;
}

export class Listcard extends React.Component<IListcardPros, any> {
  public static defaultProps: Partial<IListcardPros> = {
    title: "Licence Title",
    subTitle: "subTitle",
    description: "description",
    tag: "warning",
    supportingText: "supportingText",
    status: ListcardStatus.Normal
  };

  public render() {
    const onButtonClick = this.props.onButtonClick
      ? this.props.onButtonClick
      : () => null;

    const statusClassnames = classnames(styles[`${this.props.status}`]);
    const dispear = this.props.buttonText ? "" : classnames(styles[`dispear`]);
    return (
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>{this.props.title}</div>
          <div className={styles.subTitle}>{this.props.subTitle}</div>
          <div className={styles.description}>{this.props.description}</div>
        </div>
        <div className={styles.tagContainer}>
          <div className={styles.label}>STATUS</div>
          <div className={styles.tag}>
            <span className={`${styles.tagText} ${statusClassnames}`}>
              {this.props.tag}
            </span>
          </div>
        </div>
        <div className={styles.labelContainer}>
          <div className={styles.label}>FEES</div>
          <div className={styles.supportingText}>
            {this.props.supportingText}
          </div>
        </div>
        <div className={styles.buttonContainer}>
          {this.props.buttonText && (
            <Button
              className={`${styles.button} ${dispear}`}
              size={Size.Medium}
              theme={Theme.Primary}
              label={this.props.buttonText}
              onClick={onButtonClick}
            />
          )}
        </div>
      </div>
    );
  }
}
