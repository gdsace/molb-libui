import _ from "lodash";
import React from "react";
import { components } from "react-select";
import { Props } from "react-select/lib/Select";
import {
  baseComponentMenuListStyles,
  baseComponentMenuStyles,
  baseComponentOptionStyles,
  baseComponents,
  BaseDropdown
} from "./BaseDropdown";

const styles = require("./styles.scss");

const PremiseAutoLabel = (props: any) => {
  const postalCode = _.get(props, "data.value.address.postalCode");
  const label = _.get(props, "data.label", props.label);

  if (postalCode) {
    // This is an address!
    return (
      <components.Option {...props}>
        <div className={styles.premiseLabel}>
          <div className={styles.addressLabel}>
            <div className={styles.addressText}>{label}</div>
            <div className={styles.addressPostal}>
              &nbsp;(
              {postalCode})
            </div>
          </div>
        </div>
      </components.Option>
    );
  }

  return (
    <components.Option {...props}>
      <div className={styles.premiseLabel}>{label}</div>
    </components.Option>
  );
};

const PremiseSingleValue = (props: any) => (
  <PremiseAutoLabel className={styles.value} {...props} />
);

export class PremiseDropdown<T> extends React.Component<Props<T>, {}> {
  public render() {
    return (
      <div className={styles.premise}>
        <BaseDropdown
          styles={{
            option: baseComponentOptionStyles,
            menuList: baseComponentMenuListStyles,
            menu: baseComponentMenuStyles
          }}
          components={{
            ...baseComponents,
            Option: PremiseAutoLabel,
            SingleValue: PremiseSingleValue
          }}
          {...this.props}
        />
      </div>
    );
  }
}
