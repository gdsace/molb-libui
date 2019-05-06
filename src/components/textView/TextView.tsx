import classnames from "classnames";
import _ from "lodash";
import * as React from "react";
const styles = require("./textView.scss");

export interface ITextViewProps {
  children: string | React.ReactChild;
  callbackAfterReachBottom?: () => any;
  className?: string;
  shouldRenderWithHTMLString?: boolean;
}

export class TextView extends React.Component<ITextViewProps, any> {
  public static defaultProps: Partial<ITextViewProps> = {
    children: undefined,
    callbackAfterReachBottom: undefined,
    className: undefined,
    shouldRenderWithHTMLString: false
  };

  public textViewDivRef: React.RefObject<HTMLDivElement>;
  public textViewDiv: HTMLDivElement | null | undefined;
  public debouncedScrollHanlder: ((e: any) => void) & _.Cancelable;
  public constructor(props: ITextViewProps) {
    super(props);
    this.textViewDivRef = React.createRef<HTMLDivElement>();
    this.debouncedScrollHanlder = _.debounce(
      this.onScrollHandler.bind(this),
      50
    );
  }

  public onScrollHandler = () => {
    const scrollTop = this.textViewDiv!.scrollTop;
    const clientHeight = this.textViewDiv!.clientHeight;
    const scrollHeight = this.textViewDiv!.scrollHeight;
    // when we zoom the screen, scrollHeight and scrollTop + clientHeight
    // are not strictly equal. scrollTop will be a decimal not an integer.
    const didReachBottom =
      Math.abs(scrollHeight - (scrollTop + clientHeight)) <= 3;
    if (didReachBottom) {
      this.props.callbackAfterReachBottom!();
    }
  };

  public createMarkup(html: string | React.ReactChild) {
    if (!html) {
      return;
    }
    const htmlString: string =
      typeof html !== "string" ? html.toString() : html;
    return { __html: htmlString };
  }

  public componentDidMount() {
    // only listen scroll when needed
    if (this.props.callbackAfterReachBottom) {
      this.textViewDiv = this.textViewDivRef.current;
      this.textViewDiv!.addEventListener("scroll", this.debouncedScrollHanlder);
      // window resize is other kind of scoll the scrollbar.
      // becasue the content box will change.
      window.addEventListener("resize", this.debouncedScrollHanlder);
      // when first mount, should check that is already reaching the bottom
      // when the decalration is very short.
      this.onScrollHandler();
    }
  }

  public componentWillUnmount() {
    if (this.props.callbackAfterReachBottom) {
      this.textViewDiv!.removeEventListener(
        "scroll",
        this.debouncedScrollHanlder
      );
      window.removeEventListener("resize", this.debouncedScrollHanlder);
    }
  }

  public render() {
    const { children, shouldRenderWithHTMLString } = this.props;
    const renderWithInnerHTMLComponent = (
      <div
        ref={this.textViewDivRef}
        className={styles.textarea}
        dangerouslySetInnerHTML={this.createMarkup(children)}
      />
    );

    const renderWithReactComponent = (
      <div ref={this.textViewDivRef} className={styles.textarea}>
        {children}
      </div>
    );

    const renderComponent = shouldRenderWithHTMLString
      ? renderWithInnerHTMLComponent
      : renderWithReactComponent;

    const containerClassName = classnames(
      styles.textViewContainer,
      this.props.className
    );
    return <div className={containerClassName}>{renderComponent}</div>;
  }
}
