import classNames from "classnames";
import React from "react";
import { SubFormSectionTheme } from "../EnumValues";
import { Icon } from "../icons/Icon";

const styles = require("./subFormSection.scss");

export interface ISubFormSectionProps {
  id?: string;
  title?: string;
  subTitle?: string;
  optional?: boolean;
  children?: React.ReactNode;
  theme?: SubFormSectionTheme;
  isCollapsible?: boolean;
}

interface ISubFormSectionState {
  isCollapsed: boolean;
}

export class SubFormSection extends React.Component<
  ISubFormSectionProps,
  ISubFormSectionState
> {
  public static defaultProps: Partial<ISubFormSectionProps> = {
    theme: SubFormSectionTheme.Zero
  };

  constructor(props: ISubFormSectionProps) {
    super(props);
    this.state = {
      isCollapsed: false
    };
  }

  public render() {
    const rootContainerClassName = classNames(
      styles.rootContainer,
      this.props.theme ? styles[this.props.theme] : "",
      this.props.isCollapsible ? styles.collapsible : ""
    );
    return (
      <section id={this.props.id} className={rootContainerClassName}>
        {(this.props.title || this.props.subTitle) && (
          <div className={styles.headerSection}>
            <div>
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
            {this.props.isCollapsible && (
              <div
                className={styles.collapsibleButton}
                onClick={this.onClickHandler}
              >
                <Icon
                  type="dropdown"
                  className={
                    this.state.isCollapsed
                      ? styles.dropdownIconCollapsed
                      : styles.dropdownIcon
                  }
                />
              </div>
            )}
          </div>
        )}
        {!this.state.isCollapsed && this.props.children}
      </section>
    );
  }

  private onClickHandler = () => {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    });
  };
}
