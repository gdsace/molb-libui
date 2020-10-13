import React from "react";

import { storiesOf } from "@storybook/react";
import { Icon } from "../../components";
import { CategoryName } from "../utils";

const styles = require("./icon.stories.scss");

const icons = [
  { type: "add" },
  { type: "alert" },
  { type: "arrowNext" },
  { type: "arrowPrev" },
  { type: "business" },
  { type: "check" },
  { type: "checkbox" },
  { type: "checkmark" },
  { type: "checkmark-outline" },
  { type: "close" },
  { type: "dashboard" },
  { type: "delete" },
  { type: "document" },
  { type: "dropdown" },
  { type: "email" },
  { type: "error" },
  { type: "external-link" },
  { type: "help" },
  { type: "information" },
  { type: "informational" },
  { type: "lock" },
  { type: "logout" },
  { type: "minus" },
  { type: "new-card" },
  { type: "notification-checkmark" },
  { type: "notification-error" },
  { type: "payment" },
  { type: "plus" },
  { type: "profile" },
  { type: "progress" },
  { type: "radioDisabledUnselected" },
  { type: "radioEnabledUnselected" },
  { type: "radioSelected" },
  { type: "retrieve" },
  { type: "store" },
  { type: "time" },
  { type: "uen" },
  { type: "upload" },
  { type: "verify" },
  { type: "warning" },
  { type: "process" },
  { type: "speech" },
  { type: "steps" },
  { type: "arrowDown" },
  { type: "foodshop-filled" }
];

const licenceIcons = [
  { type: "cot" },
  { type: "cou" },
  { type: "customs-account" },
  { type: "fire-safety" },
  { type: "food-shop" },
  { type: "food-stall" },
  { type: "halal" },
  { type: "import" },
  { type: "liquor" },
  { type: "new-licence" },
  { type: "outdoor" },
  { type: "petroleum-n-flammable" },
  { type: "public-entertainment" },
  { type: "tobacco-retail" },
  { type: "warning" }
];

const shopTypesIcons = [
  { type: "bakery" },
  { type: "bakery-retail" },
  { type: "canteen-without-stalls" },
  { type: "canteen-school" },
  { type: "eating-house" },
  { type: "food-caterer" },
  { type: "takeaway" },
  { type: "restaurant" },
  { type: "in-house-kitchen" },
  { type: "snack-bar" },
  { type: "grilling" },
  { type: "market-produce" },
  { type: "restaurant-cater" },
  { type: "canteen-catering" },
  { type: "food-court" },
  { type: "private-market" },
  { type: "canteen-with-stalls" },
  { type: "canteen-construction" },
  { type: "mobile-food-wagon" },
  { type: "food-cart" },
  { type: "others" },
  { type: "pub-bar" },
  { type: "food-vending-machines" },
  { type: "pets-allowed" },
  { type: "herbal-tea" }
];

storiesOf(CategoryName.Icons, module).add("Icon", () => (
  <div>
    <h6 className={styles.header}>Icons</h6>
    {icons.map((icon, index) => {
      return (
        <div key={index} className={styles.iconWrapper}>
          <div className={styles.icon}>
            <Icon type={icon.type} />
          </div>
          <div>
            <label>{icon.type}</label>
          </div>
        </div>
      );
    })}
    <br />
    <h6 className={styles.header}>Licences Icons</h6>
    {licenceIcons.map((icon, index) => {
      return (
        <div key={index} className={styles.iconWrapper}>
          <div className={styles.icon}>
            <Icon category={"licences"} type={icon.type} />
          </div>
          <div>
            <label>{icon.type}</label>
          </div>
        </div>
      );
    })}
    <h6 className={styles.header}>Shop Types Icons</h6>

    <table className={styles.foodShopIconsTable}>
      <tbody>
        <tr>
          <th>icon type</th>
          <th>default color</th>
        </tr>
        {shopTypesIcons.map((icon, index) => {
          return (
            <tr key={index}>
              <td>{icon.type}</td>
              <td>
                <Icon category={"shoptypes"} type={icon.type} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
));
