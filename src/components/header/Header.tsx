import * as React from "react";

const styles = require("./header.scss");

export interface IHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export class Header extends React.Component<IHeaderProps, {}> {
  public render() {
    const propsClassName = styles[`${this.props.className}`];
    return (
      <div className={`${styles.header} ${propsClassName}`}>
        {this.props.children}
      </div>
    );
  }
}
