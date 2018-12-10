import { TagTheme } from "@libui/components/EnumValues";
import classnames from "classnames";
import * as React from "react";

const styles = require("./tag.scss");

export interface ITagProps {
  label: string;
  theme?: TagTheme;
  className?: string;
}

export class Tag extends React.Component<ITagProps, {}> {
  public static defaultProps: Partial<ITagProps> = {
    theme: TagTheme.Blue
  };

  public render() {
    const tagClass = classnames(styles.tag, styles[`${this.props.theme}`]);
    return (
      <div className={tagClass}>
        <span>{this.props.label}</span>
      </div>
    );
  }
}
