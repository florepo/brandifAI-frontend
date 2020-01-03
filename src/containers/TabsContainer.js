import React from "react";
import { Tab } from "semantic-ui-react";
import WordCloud from "../components/WordCloud";
import ApexChart from "../components/Graph";

const TabContainer = props => {
  // const wordList= [{text: "hello", value: 4},{text: "yo", value: 2},{text: "goodmorn", value: 10},{text: "pie", value: 1}]
  const wordList = props.data;

  const formatedArray = wordList.map(item => {
    return { text: Object.keys(item)[0], value: Object.values(item)[0] };
    // return {item}
  });

  const labels = wordList.map(item => {
    return Object.keys(item)[0];
  });

  const data = wordList.map(item => {
    return Object.values(item)[0];
  });

  const panes = [
    {
      menuItem: "Stats Chart",
      render: () => (
        <Tab.Pane>
          <ApexChart labels={labels} data={data} />
        </Tab.Pane>
      )
    },
    {
      menuItem: "Word Cloud",
      render: () => (
        <Tab.Pane>
          <WordCloud wordList={formatedArray} />
        </Tab.Pane>
      )
    },
    {
      menuItem: "Brand Analysis",
      render: () => <Tab.Pane>Brand analysis - In development!</Tab.Pane>
    }
  ];

  return <Tab panes={panes} />;
};

export default TabContainer;
