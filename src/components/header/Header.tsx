import * as React from "react";

const styles = require("./header.scss");

export interface IHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export class Header extends React.Component<IHeaderProps, {}> {
  public render() {
    return (
      <div className={`${styles.header} ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}
