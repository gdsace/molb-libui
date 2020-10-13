import React from "react";

import { storiesOf } from "@storybook/react";
import { Listcard, ListcardStatus, Size, Theme } from "../../components";
import { CategoryName } from "../utils";
const styles = require("./Listcard.stories.scss");

const listCardTitle = (text: string) => <p className={styles.listCardTitle}>{text}</p>;
const listCardSubtitle = (text: string) => <p className={styles.listCardSubtitle}>{text}</p>;
storiesOf(CategoryName.Cards, module).add("Listcard", () => (
  <div style={{ margin: "20px" }}>
    <Listcard buttonText="Action Button" status={ListcardStatus.Normal} />
    <Listcard buttonText="Action Button" tag={"Expires on 8 Oct 2018"} status={ListcardStatus.Expries} />
    <Listcard
      title={listCardTitle("Custom styled component")}
      subTitle={listCardSubtitle(`Custom styled quotation no. 12345`)}
      twoContainers={true}
      buttonTheme={Theme.GAGreen}
      buttonIcon="external-link"
      buttonSize={Size.Small}
      onButtonClick={() => window.open("www.google.com", "_blank")}
      description={
        <div className={styles.cardColumn}>
          <div>
            <p className={styles.columnTitle}>Styled Column 1</p>
            <p className={styles.columnValue}>Styled column value</p>
          </div>
          <div>
            <p className={styles.columnTitle}>Styled Column 2</p>
            <p className={styles.columnValue}>Styled column value</p>
          </div>
          <div>
            <p className={styles.columnTitle}>Styled Column 3</p>
            <p className={styles.columnValue}>Styled column value</p>
          </div>
        </div>
      }
      buttonText="View Details"
    />
  </div>
));
