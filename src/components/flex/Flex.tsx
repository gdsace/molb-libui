import classnames from "classnames";
import * as React from "react";
import { FlexDirectionType } from "../EnumValues";

const styles = require("./flex.scss");

export interface IFlexProps {
  flexDirection: FlexDirectionType;
  children: React.ReactNode;
}

export class Flex extends React.Component<IFlexProps, {}> {
  public static defaultProps: Partial<IFlexProps> = {
    flexDirection: FlexDirectionType.ROW
  };

  public render() {
    const flexClass = classnames(styles.flex, styles[this.props.flexDirection]);
    return <div className={flexClass}>{this.props.children}</div>;
  }
}
