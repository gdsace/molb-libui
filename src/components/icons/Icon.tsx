import * as React from "react";

export type IIconCategory = "licences" | "shoptypes";

export interface IIconProps {
  type: string;
  category?: IIconCategory;
  className?: string;
  size?: string;
  viewBox?: string;
}

export const Icon = (props: IIconProps) => {
  if (props.category) {
    require(`./assets/${props.category}/${props.type}.svg`);
  } else {
    require(`./assets/${props.type}.svg`);
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={`dib v-mid ${props.className || ""}`}
      width={props.size || "24"}
      height={props.size || "24"}
      viewBox={props.viewBox || `0 0 24 24`}
    >
      <defs>
        <linearGradient id="linearColor" x1="0%" y1="40.644%" y2="59.356%">
          <stop offset="0%" stopColor="#60F" />
          <stop offset="100%" stopColor="#95E" />
        </linearGradient>
      </defs>
      <use xlinkHref={`#${props.type}`} />
    </svg>
  );
};
