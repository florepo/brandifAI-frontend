import React, { Component } from "react";
import TabContainer from "./TabsContainer";
import { API_STATS } from "../adapters/api";

class ProfileStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      suggestions: []
    };
  }

  getStatsData = () => {
    const url = API_STATS + this.props.selectedProfile.stat.id;

    fetch(url)
      .then(resp => resp.json())
      .then(json => this.setState({ data: json }));
  };

  getStatsTheme = () => {
    const url = API_STATS + this.props.selectedProfile.stat.id + "?extend=true";
    console.log(url);

    fetch(url)
      .then(resp => resp.json())
      .then(json => this.setState({ suggestions: json }));
  };

  componentDidMount() {
    this.getStatsData();
    this.getStatsTheme();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedProfile !== prevProps.selectedProfile) {
      this.getStatsData();
      console.log("mounted");
      this.getStatsTheme();
    }
  }

  render() {
    return (
      <div className="nav2000">
        <TabContainer
          suggestions={this.state.suggestions}
          data={this.state.data}
        />
      </div>
    );
  }
}

export default ProfileStats;
