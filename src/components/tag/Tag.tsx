import classnames from "classnames";
import * as React from "react";
import { TagSize, TagTheme, TooltipsLocationTheme } from "../EnumValues";
import { Icon } from "../icons";
import { Tooltips } from "../tooltips";

const styles = require("./tag.scss");

export interface ITagProps {
  label: string;
  theme: TagTheme;
  showTooltip: boolean;
  tooltipContent?: JSX.Element | string;
  toolTipsPosition: TooltipsLocationTheme;
  tagSize: TagSize;
}

export class Tag extends React.Component<ITagProps, {}> {
  public static defaultProps: Partial<ITagProps> = {
    showTooltip: false,
    theme: TagTheme.Blue,
    tagSize: TagSize.Small,
    toolTipsPosition: TooltipsLocationTheme.BottomLeft
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
                position={this.props.toolTipsPosition}
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
