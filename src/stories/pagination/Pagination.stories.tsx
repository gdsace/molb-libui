import React from "react";

import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { Pagination } from "../../components";
import { dataSource } from "../table/table.stories";
import { CategoryName } from "../utils";

const styles = require("./pagination.stories.scss");

storiesOf(CategoryName.Others, module)
  .add("Pagination", () => (
    <div>
      <h6>Pagination with previous and next button</h6>
      <div className={styles.box}>
        <Pagination
          onPageChange={action("prev-button-click")}
          dataSource={dataSource}
          disablePrev={false}
          disableNext={false}
          totalResultsCount={30}
          rowsPerPage={10}
          currentPage={1}
        />
      </div>
      <h6>Pagination with disabled previous button</h6>
      <div className={styles.box}>
        <Pagination
          disablePrev={true}
          disableNext={false}
          onPageChange={action("prev-button-click")}
          dataSource={dataSource}
          totalResultsCount={30}
          rowsPerPage={10}
          currentPage={0}
        />
      </div>
      <h6>Pagination with disabled next button</h6>
      <div className={styles.box}>
        <Pagination
          disablePrev={false}
          disableNext={true}
          onPageChange={action("prev-button-click")}
          dataSource={dataSource}
          totalResultsCount={30}
          rowsPerPage={10}
          currentPage={2}
        />
      </div>
    </div>
  ))
  .add("Pagination with dropdown", () => (
    <Pagination
      disablePrev={false}
      disableNext={false}
      canJumpToPages={boolean("canJumpToPages", true)}
      onPageChange={action("prev-button-click")}
      dataSource={dataSource}
      totalResultsCount={30}
      rowsPerPage={10}
      currentPage={number("currentPage", 2)}
    />
  ));
