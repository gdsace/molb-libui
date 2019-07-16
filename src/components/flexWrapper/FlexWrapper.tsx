import classnames from "classnames";
import * as React from "react";
import { FlexDirectionType } from "../EnumValues";

const styles = require("./flexWrapper.scss");

export interface IFlexWrapperProps {
  flexDirection: FlexDirectionType;
  children: React.ReactNode;
}

export class FlexWrapper extends React.Component<IFlexWrapperProps, {}> {
  public static defaultProps: Partial<IFlexWrapperProps> = {
    flexDirection: FlexDirectionType.ROW
  };

  public render() {
    const flexClass = classnames(styles.flex, styles[this.props.flexDirection]);
    return <div className={flexClass}>{this.props.children}</div>;
  }
}
