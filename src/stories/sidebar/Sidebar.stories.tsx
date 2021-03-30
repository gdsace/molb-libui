import React from "react";

import { State, Store } from "@sambego/storybook-state";
import { Indicator, NavItem, Sidebar, SidebarTheme } from "../../components";

const store = new Store({
  activeIndex: 1,
  activeNavIndex: 0,
  activeGreenNavIndex: 0,
  activeBlueNavIndex: 0
});

const store2 = new Store({
  activeIndex: 1
});

const onSidebarItemClick = (value: number) => {
  store2.set({ activeIndex: value + 1 });
};

const onNavBarItemClick = (value: number) => {
  store.set({ activeNavIndex: value });
};

const onGreenSidebarItemClick = (value: number) => {
  store.set({ activeGreenNavIndex: value });
};

const onBlueSidebarItemClick = (value: number) => {
  store.set({ activeBlueNavIndex: value });
};

const indicatorList1 = [
  {
    title: (
      <State store={store}>
        <Indicator activeIndex={store.activeIndex} index={1} label="Label 1" />
      </State>
    )
  },
  {
    title: (
      <State store={store}>
        <Indicator activeIndex={store.activeIndex} index={2} label="Label 2" />
      </State>
    )
  },
  {
    title: (
      <State store={store}>
        <Indicator activeIndex={store.activeIndex} index={3} label="Label 3" />
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

const navList1 = [
  {
    title: <NavItem type={"dashboard"} label="Label 1" />
  },
  {
    title: "Section Header",
    isSectionHeader: true
  },
  {
    title: "Label 2"
  }
];

const navList2 = [
  {
    title: <NavItem type={"dashboard"} label="Label 1" />
  },
  {
    title: <NavItem type={"dashboard"} label="Label 2" />
  }
];

export const _Sidebar = () => (
  <div style={{ padding: "10px" }}>
    <h6 style={{ color: "grey" }}>This is indicator Sidebar</h6>
    <State store={store}>
      <Sidebar list={indicatorList1} type="indicator" selectedIndex={store.activeIndex - 1} />
    </State>
    <br />

    <h6 style={{ color: "grey" }}>This is menu Sidebar</h6>
    <State store={store2}>
      <Sidebar
        list={indicatorList2}
        type="menu"
        onItemClick={onSidebarItemClick}
        selectedIndex={store.activeIndex - 1}
      />
    </State>

    <div>
      <h6 style={{ color: "grey" }}>This is Sidebar with NavItem</h6>
      <State store={store}>
        <Sidebar list={navList1} onItemClick={onNavBarItemClick} selectedIndex={store.activeNavIndex} />
      </State>
    </div>
    <div>
      <h6 style={{ color: "grey" }}>This is Sidebar with NavItem with green theme</h6>
      <State store={store}>
        <Sidebar
          theme={SidebarTheme.GREEN}
          list={navList2}
          onItemClick={onGreenSidebarItemClick}
          selectedIndex={store.activeGreenNavIndex}
        />
      </State>
    </div>
    <div>
      <h6 style={{ color: "grey" }}>This is Sidebar with NavItem with blue theme</h6>
      <State store={store}>
        <Sidebar
          theme={SidebarTheme.BLUE}
          list={navList2}
          onItemClick={onBlueSidebarItemClick}
          selectedIndex={store.activeBlueNavIndex}
        />
      </State>
    </div>
  </div>
);

export default {
  title: "Sidebar",
  component: Sidebar
};
