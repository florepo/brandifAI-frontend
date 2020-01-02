import React, { Component } from "react";
import TabContainer from "./TabsContainer";
import { API_STATS } from "../adapters/api";

class ProfileStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  getStatsData = () => {
    const url = API_STATS + this.props.selectedProfile.stat.id;

    fetch(url)
      .then(resp => resp.json())
      .then(json => this.setState({ data: json }));
  };

  componentDidMount() {
    this.getStatsData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedProfile !== prevProps.selectedProfile) {
      this.getStatsData();
    }
  }

  render() {
    return (
      <div className="nav2000">
        <TabContainer data={this.state.data} />
      </div>
    );
  }
}

export default ProfileStats;
