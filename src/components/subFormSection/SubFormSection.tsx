import classNames from "classnames";
import React from "react";
import { SubFormSectionTheme, TooltipsLocationTheme } from "../EnumValues";
import { Icon } from "../icons/Icon";
import { Tooltips } from "../tooltips";

const styles = require("./subFormSection.scss");

export interface ISubFormSectionProps {
  id?: string;
  title?: string;
  subTitle?: string;
  optional?: boolean;
  children?: React.ReactNode;
  theme?: SubFormSectionTheme;
  isCollapsible?: boolean;
  tooltip?: string;
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
      styles[this.props.theme!],
      { [`${styles.collapsible}`]: this.props.isCollapsible }
    );
    return (
      <section id={this.props.id} className={rootContainerClassName}>
        {(this.props.title || this.props.subTitle) && (
          <div className={styles.headerSection}>
            <div>
              {this.props.title && (
                <div className={styles.titleContainer}>
                  <span className={styles.title}>{this.props.title}</span>
                  {!!this.props.tooltip && (
                    <div className={styles.tooltip}>
                      <Tooltips
                        trigger={
                          <Icon
                            type={"help"}
                            size={"16"}
                            className={styles.helpIcon}
                          />
                        }
                        width={250}
                        position={TooltipsLocationTheme.BottomRight}
                        specializedPosition={true}
                      >
                        <div>{this.props.tooltip}</div>
                      </Tooltips>
                    </div>
                  )}
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
