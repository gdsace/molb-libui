import React from "react";
import { Props } from "react-select/lib/Select";
import { baseComponents, BaseDropdown } from "./BaseDropdown";
import styles from "./dropdownStyle.scss";

export const ButtonDropdown = <T extends any>(props: Props<T>) => {
  const buttonDropdown = (
      <BaseDropdown<T> className={styles.buttonDropdown} components={{ ...baseComponents }} {...props} />
  );

  return buttonDropdown;
};
