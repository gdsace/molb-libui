import classNames from "classnames";
import React from "react";
import { SubFormSectionTheme } from "../EnumValues";

const styles = require("./subFormSection.scss");

export interface ISubFormSectionProps {
  id?: string;
  title?: string;
  subTitle?: string;
  optional?: boolean;
  children?: React.ReactNode;
  theme?: SubFormSectionTheme;
}

export class SubFormSection extends React.Component<ISubFormSectionProps, {}> {
  public static defaultProps: Partial<ISubFormSectionProps> = {
    theme: SubFormSectionTheme.Zero
  };

  public render() {
    const rootContainerClassName = classNames(
      styles.rootContainer,
      this.props.theme ? styles[this.props.theme] : ""
    );
    return (
      <section id={this.props.id} className={rootContainerClassName}>
        {(this.props.title || this.props.subTitle) && (
          <div className={styles.headerSection}>
            {this.props.title && (
              <div className={styles.titleContainer}>
                <span className={styles.title}>{this.props.title}</span>
                {this.props.optional && (
                  <span className={styles.optional}>(Optional)</span>
                )}
              </div>
            )}
            {this.props.subTitle && (
              <h6 className={styles.subTitle}>{this.props.subTitle}</h6>
            )}
          </div>
        )}
        {this.props.children}
      </section>
    );
  }
}
