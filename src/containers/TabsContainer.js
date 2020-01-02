import React from "react";
import { Tab } from "semantic-ui-react";

const TabBar = props => {

  const panes = [
    {
      menuItem: "Profile Stats list",
      render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>
    },
    {
      menuItem: "Profilew word cloud",
      render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>
    },
    {
      menuItem: "brand suggestion",
      render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
    }
  ];

  return <Tab panes={panes} />;
};

export default TabBar;
