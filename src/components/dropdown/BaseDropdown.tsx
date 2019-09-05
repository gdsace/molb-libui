import classNames from "classnames";
import React from "react";
import Select, { components } from "react-select";
import { SelectComponentsConfig } from "react-select/lib/components";
import { Props } from "react-select/lib/Select";
import { Size } from "../EnumValues";
import { Icon } from "../icons/Icon";
import styles from "./dropdown.scss";
import "./library.scss";

const Menu = (props: any) => (
  <components.Menu className={styles.menu} {...props} />
);

const Control = (props: any) => (
  <components.Control className={styles.dropdownControl} {...props} />
);

const DropdownIndicator = (props: any) =>
  components.DropdownIndicator && (
    <components.DropdownIndicator
      className={styles.dropdownIndicator}
      {...props}
    >
      <Icon type="dropdown" className={styles.dropdownIcon} />
    </components.DropdownIndicator>
  );

const MenuList = (props: any) => (
  <components.MenuList className={styles.menuList} {...props} />
);

const Option = (props: any) => (
  <components.Option className={styles.option} {...props} />
);

const Placeholder = (props: any) => (
  <components.Placeholder className={styles.placeholder} {...props} />
);

const ValueContainer = (props: any) => (
  <components.ValueContainer className={styles.valueContainer} {...props} />
);

const SingleValue = (props: any) => (
  <components.SingleValue className={styles.singleValue} {...props} />
);

export const baseComponents: SelectComponentsConfig<any> = {
  Menu,
  Control,
  DropdownIndicator,
  MenuList,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer
};

export type BaseDropdownProps<T> = Props<T> & {
  components?: SelectComponentsConfig<T>;
  styles?: any;
  size?: Size;
};

export const BaseDropdown = <T extends {}>(props: BaseDropdownProps<T>) => (
  <Select
    className={classNames(styles.dropdown, props.size, props.className)}
    isOptionDisabled={props.isOptionDisabled}
    classNamePrefix="dropdown"
    components={{ ...baseComponents, ...components }}
    styles={props.styles || {}}
    isSearchable={props.isSearchable || false}
    {...props}
  />
);
