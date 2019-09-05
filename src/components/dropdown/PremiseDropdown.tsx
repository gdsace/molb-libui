import { get } from "lodash";
import React from "react";
import { components } from "react-select";
import { Props } from "react-select/lib/Select";
import { baseComponents, BaseDropdown } from "./BaseDropdown";
import styles from "./dropdown.scss";

const PremiseAutoLabel = (props: any) => {
  const postalCode = get(props, "data.value.address.postalCode");
  const label = get(props, "data.label", props.label);

  if (postalCode) {
    return (
      <components.Option {...props}>
        <div className={styles.premiseLabel}>
          <div className={styles.addressLabel}>
            <div className={styles.addressText}>{label}</div>
            <div className={styles.addressPostal}>&nbsp;({postalCode})</div>
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

export const PremiseDropdown = <T extends any>(props: Props<T>) => (
  <div className={styles.premise}>
    <BaseDropdown<T>
      components={{
        ...baseComponents,
        Option: PremiseAutoLabel,
        SingleValue: PremiseSingleValue
      }}
      {...props}
    />
  </div>
);
