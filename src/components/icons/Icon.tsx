import * as React from "react";

const styles = require("./foodShopTypeIcon.scss");

export type IIconCategory = "licences" | "shoptypes";

export interface IIconProps {
  type: string;
  category?: IIconCategory;
  className?: string;
  size?: string;
  viewBox?: string;
  id?: string;
}

export const Icon = (props: IIconProps) => {
  if (props.category) {
    require(`./assets/${props.category}/${props.type}.svg`);
  } else {
    require(`./assets/${props.type}.svg`);
  }

  return (
    <svg
      id={props.id}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={`dib v-mid ${
        styles.foodShopIconDefaultColor
      } ${props.className || ""}`}
      width={props.size || "24"}
      height={props.size || "24"}
      viewBox={props.viewBox || `0 0 24 24`}
    >
      <use xlinkHref={`#${props.type}`} />
    </svg>
  );
};
