import classnames from "classnames";
import * as React from "react";
import Popup from "reactjs-popup";
import { TooltipsLocationTheme } from "..";
import { Link, LinkTarget } from "../link";
import { forPhoneOnlyMediaQuery } from "../utils";

const styles = require("./tooltips.scss");

const OFFSET = 11;
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
  trigger: any;
  overrideTrigger: boolean;
  children: JSX.Element;
  position: TooltipsLocationTheme;
  linkLabel?: string;
  linkUrl?: string;
  linkTarget?: LinkTarget;
  linkIcon?: string;
  childrenClassname?: string;
  specializedPosition?: boolean;
}

export interface ITooltipsState {
  show: boolean;
  tooltipRef: any;
}

export class Tooltips extends React.Component<ITooltipsProps, ITooltipsState> {
  public static defaultProps: Partial<ITooltipsProps> = {
    overrideTrigger: false
  };

  constructor(props: ITooltipsProps) {
    super(props);
    this.state = {
      show: false,
      tooltipRef: React.createRef()
    };
    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  public render() {
    const {
      className,
      trigger,
      height,
      width,
      linkLabel,
      childrenClassname,
      specializedPosition,
      overrideTrigger
    } = this.props;
    const specializedStyle = this.calculateSpecializedStyle();
    const desktopContentStyle = {
      border: "none",
      zIndex: "300",
      borderRadius: 5,
      boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.03), 0 7px 25px 0 rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(0, 0, 0, 0.03)",
      width,
      height,
      padding: 0
    };
    const overlayStyle = {
      zIndex: "9999"
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
      <div
        ref={this.state.tooltipRef}
        className={classnames(styles.tooltipsContainer, className)}
        onClick={show ? () => this.closePopup() : () => this.openPopup()}
      >
        <Popup
          arrowStyle={arrowStyle}
          trigger={overrideTrigger ? trigger(this.state.show) : trigger}
          position={this.getCalculatedPosition()}
          open={show}
          contentStyle={desktopContentStyle}
          overlayStyle={overlayStyle}
          closeOnDocumentClick
          onClose={() => this.closePopup()}
          offsetX={specializedStyle.offsetX}
        >
          <div className={childrenClassNames}>{tooltipContent}</div>
        </Popup>
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
    const { specializedPosition } = this.props;
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
    switch (this.getCalculatedPosition()) {
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

  private getCalculatedPosition(): TooltipsLocationTheme {
    if (forPhoneOnlyMediaQuery() && this.state.tooltipRef.current) {
      const tooltipDetails = this.state.tooltipRef.current.getBoundingClientRect();
      const positionFromRight = window.innerWidth - tooltipDetails.left;
      switch (this.props.position) {
        case TooltipsLocationTheme.BottomLeft: {
          // i don't know what size to use, this is just based on trial and error
          if (positionFromRight < 112) {
            return TooltipsLocationTheme.BottomRight;
          }
          if (positionFromRight < 225) {
            return TooltipsLocationTheme.BottomCenter;
          }
          break;
        }
        case TooltipsLocationTheme.BottomRight: {
          if (tooltipDetails.left < 112) {
            return TooltipsLocationTheme.BottomLeft;
          }
          if (tooltipDetails.left < 225) {
            return TooltipsLocationTheme.BottomCenter;
          }
          break;
        }
        case TooltipsLocationTheme.BottomCenter: {
          if (tooltipDetails.left < 112) {
            return TooltipsLocationTheme.BottomLeft;
          }
          if (positionFromRight < 112) {
            return TooltipsLocationTheme.BottomRight;
          }
          break;
        }
      }
    }
    return this.props.position;
  }
}
