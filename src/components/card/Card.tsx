import { CardStatus, CardTheme } from "@libui/components/EnumValues";
import classnames from "classnames";
import _ from "lodash";
import * as React from "react";

const styles = require("./card.scss");

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

export class Card extends React.Component<ICardProps> {
  public static defaultProps: Partial<ICardProps> = {
    theme: CardTheme.Normal
  };

  public render() {
    const cardClass = classnames(
      styles.card,
      styles[`${this.props.theme}`],
      this.props.className,
      {
        [styles.cursorClick]: !!this.props.onClick
      }
    );

    const statusClass = classnames(
      styles.status,
      styles[`${_.toLower(this.props.status)}`]
    );

    return (
      <div className={cardClass} onClick={this.handleOnClick}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <h6 className={styles.title}>{this.props.title}</h6>
            {this.props.titleIcon}
          </div>
          {this.props.supportingText && (
            <h6 className={styles.supportingText}>
              {this.props.supportingText}
            </h6>
          )}
        </div>
        <p className={styles.subtitle}>{this.props.subtitle}</p>
        <div className={styles.description}>{this.props.description}</div>
        {this.props.date && (
          <div>
            <div className={styles.date}>{this.props.date}</div>
          </div>
        )}
        {this.props.status && (
          <div className={styles.statusWrapper}>
            <span className={statusClass}>{this.props.status}</span>
          </div>
        )}
        {this.props.actionField && (
          <div className={styles.actionField}>{this.props.actionField}</div>
        )}
      </div>
    );
  }

  private handleOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (this.props.onClick) {
      this.props.onClick();
    }
  };
}
