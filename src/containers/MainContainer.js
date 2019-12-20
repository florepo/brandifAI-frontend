import React, { Component } from "react";
import ProfileList from "../components/ProfileList";
import ImageContainer from "./ImageContainer";

//API

const API = "http://localhost:3000/profiles";

//Initial Fetch

const getProfilesFromAPI = parent => {
  fetch(API)
    .then(resp => resp.json())
    .then(json =>
      parent.setState({
        profiles: json
      })
    );
};

// Class

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      selectedProfile: null
    };
  }

  // Initial Render

  componentDidMount() {
    getProfilesFromAPI(this);
  }

  //Helpers

  selectProfile = selectedProfile => {
    this.setState({ selectedProfile })
  };

  deselectProfile = () => {
    this.setState({ selectedProfile: null });
  };

  //Render

  render() {
    const { profiles, selectedProfile } = this.state;
    const { selectProfile, deselectProfile } = this;
    return (
      <React.Fragment>
        <div>
          <ProfileList
            selectProfile={selectProfile}
            deselectProfile={deselectProfile}
            profiles={profiles}
            selectedProfile={selectedProfile}
          />
        </div>
        <div>
          {selectedProfile ? (
            <React.Fragment>
              <br></br>
              <ImageContainer selectedProfile={selectedProfile} />
            </React.Fragment>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

export default MainContainer;
