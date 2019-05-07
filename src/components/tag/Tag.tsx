import classnames from "classnames";
import * as React from "react";
import { TagTheme, TooltipsLocationTheme } from "../EnumValues";
import { Icon } from "../icons";
import { Tooltips } from "../tooltips";

const styles = require("./tag.scss");

export interface ITagProps {
  label: string;
  theme?: TagTheme;
  className?: string;
  showTooltip?: boolean;
  tooltipContent?: JSX.Element | string;
  toolTipsPosition?: TooltipsLocationTheme;
  tagSize?: TagSize;
}

export enum TagSize {
  Small = "small",
  Large = "large"
}

export class Tag extends React.Component<ITagProps, {}> {
  public static defaultProps: Partial<ITagProps> = {
    theme: TagTheme.Blue,
    tagSize: TagSize.Small
  };

  public render() {
    const tagClass = classnames(
      styles[`${this.props.tagSize}`],
      styles[`${this.props.theme}`]
    );
    return (
      <div className={tagClass}>
        <span>
          {this.props.label}
          {this.props.showTooltip && (
            <div className={styles.tooltip}>
              <Tooltips
                trigger={
                  <Icon type="help" size="16" className={styles.helpIcon} />
                }
                width={250}
                position={
                  this.props.toolTipsPosition
                    ? this.props.toolTipsPosition
                    : TooltipsLocationTheme.BottomLeft
                }
                specializedPosition={false}
              >
                <div>{this.props.tooltipContent}</div>
              </Tooltips>
            </div>
          )}
        </span>
      </div>
    );
  }
}
