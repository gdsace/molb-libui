import classnames from "classnames";
import * as React from "react";
import Popup from "reactjs-popup";
import { TooltipsLocationTheme } from "..";
import { Link, LinkTarget } from "../link";

const styles = require("./tooltips.scss");
const OFFSET = 8;
const ARROW_OFFSET = "20px";
const TEXT_COLOR_2 = "#313840";

/**
 * specializedPosition is used for make arrow position
 * to the deisigned position.
 */
export interface ITooltipsProps {
  className?: string;
  arrowStyle?: object;
  width?: number;
  height?: number;
  trigger: JSX.Element;
  children: JSX.Element;
  position: TooltipsLocationTheme;
  linkLabel?: string;
  linkUrl?: string;
  linkTarget?: LinkTarget;
  linkIcon?: string;
  childrenClassname?: string;
  specializedPosition?: boolean;
}

interface ITooltipsState {
  show: boolean;
}

export class Tooltips extends React.Component<ITooltipsProps, ITooltipsState> {
  constructor(props: ITooltipsProps) {
    super(props);
    this.state = {
      show: false
    };
    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }
  public render() {
    const {
      trigger,
      height,
      width,
      position,
      linkLabel,
      childrenClassname,
      specializedPosition
    } = this.props;
    const specializedStyle = this.calculateSpecializedStyle();
    const desktopContentStyle = {
      border: "none",
      zIndex: "300",
      borderRadius: 5,
      boxShadow:
        "0 4px 12px 0 rgba(0, 0, 0, 0.03), 0 7px 25px 0 rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(0, 0, 0, 0.03)",
      width,
      height,
      padding: 0
    };

    let arrowStyle = this.props.arrowStyle || {
      boxShadow: "rgba(0, 0, 0, 0.1) 1px 1px 1px",
      backgroundColor: TEXT_COLOR_2
    };

    if (specializedPosition && specializedStyle.direction !== "") {
      arrowStyle = {
        ...arrowStyle,
        [`${specializedStyle.overwrite}`]: "inherent",
        [`${specializedStyle.direction}`]: specializedStyle.arrowOffset
      };
    }

    const childrenClassNames = classnames(styles.childrenContainer, {
      [`${childrenClassname}`]: childrenClassname,
      [`${styles.withLabelChildren}`]: linkLabel
    });

    const tooltipContent = this.getTooltipContent(this.props);
    const { show } = this.state;
    return (
      <div className={styles.tooltipsContainer}>
        <div onClick={show ? () => this.closePopup() : () => this.openPopup()}>
          <Popup
            arrowStyle={arrowStyle}
            trigger={trigger}
            position={position}
            children={
              <div className={childrenClassNames}>{tooltipContent}</div>
            }
            open={show}
            contentStyle={desktopContentStyle}
            closeOnDocumentClick
            onClose={() => this.closePopup()}
            offsetX={specializedStyle.offsetX}
          />
        </div>
      </div>
    );
  }
  private openPopup() {
    this.setState({ show: true });
  }
  private getTooltipContent(props: ITooltipsProps) {
    const { children, linkLabel, linkUrl, linkTarget, linkIcon } = props;
    if (!linkLabel) {
      return children;
    }

    return (
      <div>
        {children}
        <div className={styles.linkContainer}>
          <Link
            label={linkLabel}
            icon={linkIcon || "arrowNext"}
            onClick={() => {
              return;
            }}
            link={linkUrl}
            target={linkTarget}
          />
        </div>
      </div>
    );
  }

  private closePopup() {
    this.setState({ show: false });
  }
  /**
   * use magic number 22px to fit UX design.
   * You can use tooltip with specializedPosition={false}
   * or just delete this magic calculate logic directly.
   * Or need some help can find Wu Yifan.
   */
  private calculateSpecializedStyle() {
    const { specializedPosition, position } = this.props;
    // director is
    const specializedStyle = {
      direction: "",
      offsetX: 0,
      arrowOffset: "",
      overwrite: ""
    };
    if (!specializedPosition) {
      return specializedStyle;
    }
    switch (position) {
      case TooltipsLocationTheme.BottomLeft: {
        specializedStyle.direction = "left";
        specializedStyle.offsetX = -OFFSET;
        specializedStyle.arrowOffset = ARROW_OFFSET;
        break;
      }
      case TooltipsLocationTheme.BottomRight: {
        specializedStyle.direction = "right";
        specializedStyle.offsetX = OFFSET;
        specializedStyle.arrowOffset = ARROW_OFFSET;
        specializedStyle.overwrite = "left";
        break;
      }
      case TooltipsLocationTheme.BottomCenter: {
        break;
      }
    }

    return specializedStyle;
  }
}
