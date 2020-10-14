import React from "react";
import { dataSource, rfaDataSource } from "../../data/tableData";

import { Table, TableTheme } from "../../components/index";

const styles = require("./table.stories.scss");

const tableColumns = [
  {
    title: "Name",
    key: "name"
  },
  {
    title: "Age",
    key: "age"
  },
  {
    title: "Address<BR>Line-break-in-title",
    key: "address",
    hiddenInlineTitle: true
  },
  {
    title: "Tags",
    key: "tags"
  }
];

export const _Table = () => (
  <div className={styles.rootContainer}>
    <section className={styles.section}>
      <h6>RFA Search Table</h6>
      <Table columns={tableColumns} dataSource={rfaDataSource} theme={TableTheme.Basic} clickableRow={true} />
    </section>

    <h6 className={styles.groupHeader}>Table type: themes</h6>
    <div className={styles.itemsContainer}>
      <div className={styles.box}>
        <p className={styles.notes}>Showing &quot;No data available&quot;:</p>
        <Table columns={tableColumns} dataSource={[]} theme={TableTheme.Basic} />
      </div>
      <div className={styles.box}>
        <p className={styles.notes}>Striped table with border:</p>
        <Table columns={tableColumns} dataSource={dataSource} bordered={true} theme={TableTheme.Striped} />
      </div>
      <div className={styles.box}>
        <p className={styles.notes}>Basic table:</p>
        <Table columns={tableColumns} dataSource={dataSource} theme={TableTheme.Basic} />
      </div>
      <div className={styles.box}>
        <p className={styles.notes}>Basic expandable table:</p>
        <Table
          columns={tableColumns}
          dataSource={dataSource}
          theme={TableTheme.Expandable}
          expandable={true}
          onExpandButtonClick={() => true}
          // @ts-ignore
          expandableRowTemplate={(props: { index: number }) => <div>TEST with index:{props.index}</div>}
        />
      </div>
    </div>
  </div>
);

export default {
  title: "Table",
  component: Table
};
