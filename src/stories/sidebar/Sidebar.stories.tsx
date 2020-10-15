import React from "react";

import { State, Store } from "@sambego/storybook-state";
import { Indicator, Sidebar } from "../../components";

const store1 = new Store({
  activeIndex: 1
});

const store2 = new Store({
  activeIndex: 1
});

const onSidebarItemClick = (value: number) => {
  store2.set({ activeIndex: value + 1 });
};

const indicatorList1 = [
  {
    title: (
      <State store={store1}>
        <Indicator activeIndex={store1.activeIndex} index={1} label="Label 1" />
      </State>
    )
  },
  {
    title: (
      <State store={store1}>
        <Indicator activeIndex={store1.activeIndex} index={2} label="Label 2" />
      </State>
    )
  },
  {
    title: (
      <State store={store1}>
        <Indicator activeIndex={store1.activeIndex} index={3} label="Label 3" />
      </State>
    )
  }
];

const indicatorList2 = [
  {
    title: (
      <State store={store2}>
        <Indicator activeIndex={store2.activeIndex} index={1} label="Label 1" />
      </State>
    )
  },
  {
    title: (
      <State store={store2}>
        <Indicator activeIndex={store2.activeIndex} index={2} label="Label 2" />
      </State>
    )
  },
  {
    title: (
      <State store={store2}>
        <Indicator activeIndex={store2.activeIndex} index={3} label="Label 3" />
      </State>
    )
  }
];

export const _Sidebar = () => (
  <div style={{ padding: "10px" }}>
    <h6 style={{ color: "grey" }}>This is indicator Sidebar</h6>
    <State store={store1}>
      <Sidebar list={indicatorList1} type="indicator" selectedIndex={store1.activeIndex - 1} />
    </State>
    <br />

    <h6 style={{ color: "grey" }}>This is menu Sidebar</h6>
    <State store={store2}>
      <Sidebar
        list={indicatorList2}
        type="menu"
        onItemClick={onSidebarItemClick}
        selectedIndex={store1.activeIndex - 1}
      />
    </State>
  </div>
);

export default {
  title: "Sidebar",
  component: Sidebar
};
