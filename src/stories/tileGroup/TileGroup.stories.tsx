import React from "react";

import { State, Store } from "@sambego/storybook-state";
import { TileGroup } from "@src/components";
import { TileTheme } from "@src/components/EnumValues";
import { Tile } from "@src/components/tileGroup/tile";
import { storiesOf } from "@storybook/react";
import { wInfo } from "../utils";

const tileOptions = [
  {
    key: "RESTAURANT",
    icon: "big-icon",
    name: "Restaurant",
    description:
      "Primarily for sale of food with a refreshment area that prepares and serves food, drink or dessert to customers."
  },
  {
    key: "BAR-PUB-NIGHTCLUB",
    icon: "big-icon",
    name: "Bar/Pub/Nightclub",
    description: "Primarily for sale of alcohol, only providing light cooking."
  },
  {
    key: "FOOD-COURT",
    icon: "big-icon",
    name: "Food Court",
    description: "Primarily for sale of food, single operator etc."
  }
];
const selectedTileValue = tileOptions[1];

/**
 * Here define store, we can define our state here.
 */
const store = new Store({
  value: selectedTileValue
});

const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  tileOptions.map(item => {
    if (item.key === event.target.value) {
      store.set({
        premiseTypeSelected: item,
        showEmptySelectionError: false
      });
    }
  });
};

/**
 * State component can use store as a component.
 * Then the stateless component Dropdown get update
 * from store.get("value")
 */
(storiesOf("Components", module) as any).addWithJSX(
  "TileGroup",
  wInfo(``)(() => (
    <div>
      <State store={store}>
        <TileGroup onChange={valueChangeHandler} value={selectedTileValue.key}>
          {tileOptions.map((item, index) => {
            return (
              <Tile
                key={index}
                icon="48-px-store"
                content={item.name}
                description={item.description}
                value={item.key}
                theme={TileTheme.SmallTile}
              />
            );
          })}
        </TileGroup>
      </State>
    </div>
  ))
);
