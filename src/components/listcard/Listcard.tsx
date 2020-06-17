import * as React from "react";

import classnames from "classnames";
import { Button } from "../button";
import { ListcardStatus, Size, Theme } from "../EnumValues";

const styles = require("./listcard.scss");

export interface IListcardPros {
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  description?: React.ReactNode;
  tag?: string;
  supportingText?: string;
  buttonText?: string;
  buttonIcon?: string;
  status?: ListcardStatus;
  onButtonClick?: () => void;
  twoContainers?: boolean;
  buttonTheme?: Theme;
  buttonSize?: Size;
}

export class Listcard extends React.Component<IListcardPros, any> {
  public static defaultProps: Partial<IListcardPros> = {
    title: "Licence Title",
    subTitle: "subTitle",
    description: "description",
    tag: "warning",
    supportingText: "supportingText",
    status: ListcardStatus.Normal,
    buttonIcon: "",
    buttonTheme: Theme.Primary,
    buttonSize: Size.Small
  };

  public render() {
    const {
      onButtonClick,
      status,
      buttonText,
      twoContainers,
      title,
      subTitle,
      description,
      tag,
      supportingText,
      buttonIcon,
      buttonTheme,
      buttonSize
    } = this.props;
    const buttonClick = onButtonClick ? onButtonClick : () => null;

    const statusClassnames = classnames(styles[`${status}`]);
    const dispear = buttonText ? "" : classnames(styles[`dispear`]);
    return (
      <div className={styles.container}>
        <div
          className={
            twoContainers ? styles.leftContainer : styles.titleContainer
          }
        >
          <div className={styles.title}>{title}</div>
          <div className={styles.subTitle}>{subTitle}</div>
          <div className={styles.description}>{description}</div>
        </div>
        {!twoContainers && (
          <>
            <div className={styles.tagContainer}>
              <div className={styles.label}>STATUS</div>
              <div className={styles.tag}>
                <span className={`${styles.tagText} ${statusClassnames}`}>
                  {tag}
                </span>
              </div>
            </div>
            <div className={styles.labelContainer}>
              <div className={styles.label}>FEES</div>
              <div className={styles.supportingText}>{supportingText}</div>
            </div>
          </>
        )}
        <div
          className={
            twoContainers ? styles.rightContainer : styles.buttonContainer
          }
        >
          {buttonText && (
            <Button
              className={`${styles.button} ${dispear}`}
              size={buttonSize}
              theme={buttonTheme}
              label={buttonText}
              onClick={buttonClick}
              icon={buttonIcon}
              iconAlign="right"
            />
          )}
        </div>
      </div>
    );
  }
}
