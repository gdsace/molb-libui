import classnames from "classnames";
import * as React from "react";
import { CardTheme, TagTheme } from "../EnumValues";
import { Tag } from "../tag";

const styles = require("./card.scss");

export interface ICardProps {
  header?: React.ReactNode;
  title: string;
  titleIcon?: React.ReactNode;
  subtitle: string;
  supportingText?: string;
  description?: React.ReactNode;
  status?: string;
  statusTheme?: TagTheme;
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
    const titleWrapperClass = classnames(styles.titleWrapper, {
      [styles.noSupportingText]: !this.props.supportingText
    });

    return (
      <div className={cardClass} onClick={this.handleOnClick}>
        {this.props.header && (
          <div className={styles.headerWrapper}>{this.props.header}</div>
        )}
        <div className={styles.titleWithSupportingText}>
          <div className={titleWrapperClass}>
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
            <Tag label={this.props.status} theme={this.props.statusTheme} />
          </div>
        )}
        {this.props.actionField && (
          <div className={styles.actionField}>{this.props.actionField}</div>
        )}
      </div>
    );
  }

  private handleOnClick = (e: React.MouseEvent) => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  };
}
