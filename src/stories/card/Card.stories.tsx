import React from "react";

import { storiesOf } from "@storybook/react";

import { action } from "@storybook/addon-actions";
import { Card, CardTheme, Icon, Link, TagTheme } from "../../components";
import { CategoryName, wInfo } from "../utils";

const header = (
  <div>
    <Icon type="clock" size="16" /> I'm the header of this card
  </div>
);
const title = "This is title";

const subtitle = "This is subtitle";
const longSubtitle =
  "This is loooooooooog loooooooooog loooooooooog loooooooooog loooooooooog loooooooooog subtitle";

const description = (
  <div>
    This is description for this card. You can inject any content as a react
    node into this description patr.{" "}
  </div>
);

const price = "S$800.00";
const actionField = (
  <Link
    label="link button"
    icon={"arrowNext"}
    onClick={action("link-click")}
    link="https://www.google.com"
  />
);
const date = "10 Jan 2010 to 10 Jan 2020";

const rowStyles = {
  padding: "20px 0"
};

(storiesOf(CategoryName.Cards, module) as any).addWithJSX(
  "Card",
  wInfo(``)(() => (
    <div style={{ padding: "10px" }}>
      Description Cards
      <div style={rowStyles}>
        <Card
          title={title}
          subtitle={subtitle}
          description={description}
          theme={CardTheme.Normal}
          supportingText={price}
          status={"In Processing"}
          statusTheme={TagTheme.Blue}
        />
        <Card
          title={title}
          subtitle={subtitle}
          description={description}
          theme={CardTheme.Warning}
          supportingText={price}
        />
        <Card
          title={title}
          subtitle={subtitle}
          description={description}
          theme={CardTheme.Green}
        />
        <Card
          title={title}
          subtitle={subtitle}
          description={description}
          theme={CardTheme.Purple}
        />
        <Card
          title={title}
          subtitle={subtitle}
          description={description}
          theme={CardTheme.Normal}
          supportingText={price}
          status={"Pending Payment"}
          statusTheme={TagTheme.Green}
          date={date}
        />
        <Card
          title={title}
          subtitle={subtitle}
          description={description}
          theme={CardTheme.Normal}
          supportingText={price}
          status={"Draft"}
          statusTheme={TagTheme.Grey}
          date={date}
        />
      </div>
      Clickable Cards
      <div style={rowStyles}>
        <Card
          title={title}
          subtitle={subtitle}
          description={description}
          theme={CardTheme.Clickable}
          supportingText={price}
          onClick={action("card-click")}
          actionField={actionField}
        />
      </div>
      Long title & description
      <div style={rowStyles}>
        <Card
          title={title}
          subtitle={longSubtitle}
          description={description}
          supportingText={price}
          theme={CardTheme.Normal}
        />
      </div>
      With a specific Header
      <div style={rowStyles}>
        <Card
          header={header}
          title={title}
          subtitle={subtitle}
          description={description}
          supportingText={price}
          theme={CardTheme.Normal}
        />
      </div>
    </div>
  ))
);
