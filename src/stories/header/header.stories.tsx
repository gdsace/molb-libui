import React from "react";

import { Header, HeaderType } from "../../components";
const styles = require("./header.stories.scss");

export const _Header = () => (
  <div>
    <div className={styles.default}>
      <Header className={HeaderType.Demo}>
        <h4>Demo Header</h4>
      </Header>
    </div>
    <div className={styles.main}>
      <Header className={HeaderType.Main}>
        <h4>Main Header</h4>
      </Header>
    </div>
  </div>
);

export default {
  title: "Header",
  component: Header
};
