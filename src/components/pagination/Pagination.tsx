import _ from "lodash";
import React from "react";

import { Button } from "../button";
import { Dropdown } from "../dropdown";
import { Size, Theme } from "../EnumValues";
import { IDataSource } from "../table/Table";
import { isMobile } from "../utils";
import classNames from "classnames";

const styles = require("./pagination.scss");

export interface IPaginationProps {
  onPageChange: (newPage: number) => any;
  history?: any;
  disablePrev?: boolean;
  disableNext?: boolean;
  className?: string;
  dataSource?: IDataSource[];
  showTotalResultsAvailable?: boolean;
  canJumpToPages?: boolean;
  totalResultsCount: number;
  rowsPerPage: number;
  currentPage: number;
  titleOverride?: React.ReactElement<any>;
  buttonTheme?: Theme;
}

export enum Results {
  IsOneOrLess = "result available",
  IsMultiple = "results available"
}

export class Pagination extends React.Component<IPaginationProps, {}> {
  public static defaultProps: Partial<IPaginationProps> = {
    showTotalResultsAvailable: true
  };

  public onChangePrevPage = () => {
    const { currentPage } = this.props;
    if (currentPage > 0) {
      this.props.onPageChange(currentPage - 1);
    }
  };

  public onChangeNextPage = () => {
    const { currentPage, totalResultsCount, rowsPerPage } = this.props;

    const lastItemIndex = (currentPage + 1) * rowsPerPage;
    if (lastItemIndex < totalResultsCount) {
      this.props.onPageChange(currentPage + 1);
    }
  };

  public render() {
    const {
      totalResultsCount,
      rowsPerPage,
      currentPage,
      disablePrev,
      disableNext,
      showTotalResultsAvailable,
      titleOverride,
      buttonTheme
    } = this.props;

    const resultsAvailable =
      totalResultsCount > 1
        ? `${totalResultsCount} ${Results.IsMultiple}`
        : `${totalResultsCount} ${Results.IsOneOrLess}`;
    const currentPageRange: React.ReactNode = this.props.canJumpToPages
      ? this.getPageRangesDropdown(totalResultsCount, rowsPerPage, currentPage)
      : this.getPageRangeLabel(totalResultsCount, rowsPerPage, currentPage);

    const title = titleOverride || "";

    const lastItemIndex = (currentPage + 1) * rowsPerPage;

    const renderMobileView = isMobile();

    return (
      <div
        className={classNames(styles.paginationContainer, {
          [styles.mobilePaginationContainer]: renderMobileView
        })}
      >
        <div className={classNames(styles.countContainer)}>{showTotalResultsAvailable ? resultsAvailable : title}</div>
        <div className={styles.paginationDetails}>
          {currentPageRange}
          <div className={styles.ofCountContainer}>
            of <div className={styles.totalResultsCount}>{totalResultsCount}</div> items
          </div>
          <div className={styles.btnContainer}>
            <Button
              className={styles.prevButton}
              size={Size.Square}
              theme={buttonTheme ? buttonTheme : Theme.Grey}
              icon={"left"}
              iconAlign="center"
              disabled={!_.isNil(disablePrev) ? disablePrev : currentPage === 0 || totalResultsCount === 0}
              onClick={
                this.onChangePrevPage ||
                (() => {
                  /* noop */
                })
              }
            />
            <Button
              className={styles.nextButton}
              size={Size.Square}
              theme={buttonTheme ? buttonTheme : Theme.Grey}
              icon={"right"}
              iconAlign="center"
              disabled={!_.isNil(disableNext) ? disableNext : lastItemIndex >= totalResultsCount}
              onClick={
                this.onChangeNextPage ||
                (() => {
                  /* noop */
                })
              }
            />
          </div>
        </div>
      </div>
    );
  }

  private getPageRangeLabel(totalResultsCount: number, rowsPerPage: number, currentPage: number) {
    return (
      <div className={styles.pageRangeLabel}>{this.getPageRange(totalResultsCount, rowsPerPage, currentPage)}</div>
    );
  }

  private getPageRange(totalResultsCount: number, rowsPerPage: number, currentPage: number): string {
    if (totalResultsCount < 1) {
      return `0`;
    }

    const firstNumber = currentPage * rowsPerPage + 1;
    const lastItemIndex = (currentPage + 1) * rowsPerPage;
    const secondNumber = Math.min(lastItemIndex, totalResultsCount);

    return `${firstNumber}-${secondNumber}`;
  }

  private getPageRangesDropdown(totalResultsCount: number, rowsPerPage: number, currentPage: number): React.ReactNode {
    const lastPageNumber = totalResultsCount / rowsPerPage;
    const pageRanges = _.range(lastPageNumber).map(page => ({
      label: this.getPageRange(totalResultsCount, rowsPerPage, page),
      value: page
    }));
    return (
      <Dropdown
        className={styles.pageRangeDropdown}
        options={pageRanges}
        onChange={(optionValue: any) => optionValue && this.props.onPageChange(optionValue.value)}
        value={pageRanges.find(elem => elem.value === currentPage)}
      />
    );
  }
}
