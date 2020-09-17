import * as React from "react";

const styles = require("./h7.scss");

interface IH7Props {
  children: React.ReactNode;
}

export const H7 = (props: IH7Props) => <h6 className={styles.h7}>{props.children}</h6>;
