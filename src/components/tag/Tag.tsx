import classnames from "classnames";
import * as React from "react";
import { TagSize, TagTheme, TooltipsLocationTheme } from "../EnumValues";
import { Icon } from "../icons";
import { ITooltipsState, Tooltips } from "../tooltips";

const styles = require("./tag.scss");

export interface ITagProps {
  label: string;
  theme: TagTheme;
  showTooltip: boolean;
  tooltipContent?: JSX.Element | string;
  toolTipsPosition: TooltipsLocationTheme;
  tagSize: TagSize;
  helperMsg?: string | React.ReactNode;
  specializedPosition?: boolean;
}

export class Tag extends React.Component<ITagProps, {}> {
  public static defaultProps: Partial<ITagProps> = {
    showTooltip: false,
    theme: TagTheme.Blue,
    tagSize: TagSize.Small,
    toolTipsPosition: TooltipsLocationTheme.BottomLeft,
    specializedPosition: false
  };

  public render() {
    const tagClass = classnames(
      styles[`${this.props.tagSize}`],
      this.props.tagSize === TagSize.Large
        ? styles.grey
        : styles[`${this.props.theme}`]
    );
    return (
      <section>
        <div className={tagClass}>
          <span>
            {this.props.label}
            {this.props.showTooltip && (
              <div className={styles.tooltip}>
                <Tooltips
                  trigger={(show: ITooltipsState) => (
                    <Icon
                      type="help"
                      size="16"
                      className={show ? styles.purpleIcon : styles.helpIcon}
                    />
                  )}
                  overrideTrigger
                  width={250}
                  position={this.props.toolTipsPosition}
                  specializedPosition={this.props.specializedPosition}
                >
                  <div>{this.props.tooltipContent}</div>
                </Tooltips>
              </div>
            )}
          </span>
        </div>
        <div className={styles.helperMsgContainer}>{this.props.helperMsg}</div>
      </section>
    );
  }
}
