import classNames from "classnames";
import React from "react";
import { FormSectionSpacing } from "../EnumValues";

const styles = require("./formSection.scss");

export interface IFormSectionProps {
  header?: string;
  subheader?: string;
  caption?: string;
  children?: React.ReactNode;
  id?: string;
  reviewModel?: boolean;
  theme?: FormSectionSpacing;
}

export class FormSection extends React.Component<IFormSectionProps, {}> {
  public static defaultProps: Partial<IFormSectionProps> = {
    theme: FormSectionSpacing.Large
  };

  public render() {
    const headerSectionClassName = classNames(
      styles.headerSection,
      this.props.theme ? styles[this.props.theme] : styles.large
    );
    return (
      <section
        id={this.props.id}
        className={classNames(
          styles.section,
          this.props.theme ? styles[this.props.theme] : undefined
        )}
      >
        {this.props.caption && (
          <div className={styles.caption}>{this.props.caption}</div>
        )}

        <div
          className={
            this.props.header || this.props.subheader
              ? headerSectionClassName
              : ""
          }
        >
          {this.props.header && (
            <h3 className={styles.header}>{this.props.header}</h3>
          )}
          {this.props.subheader && !this.props.reviewModel && (
            <h6 className={styles.subheader}>{this.props.subheader}</h6>
          )}
        </div>
        {this.props.children}
      </section>
    );
  }
}
