import React, { Component } from "react";
import ProfileList from "./ProfileList";
import ImageContainer from "./ImageContainer";

//API

export const API = "http://localhost:3000/profiles/";

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

export class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      selectedProfile: null,
      selectedImage: null,
      profileImgUrl: null
    };
  }

  // Initial Render

  componentDidMount() {
    getProfilesFromAPI(this);
  }

  //Helpers

  selectImage = image => {
    this.setState({ selectedImage: image });
  };

  deselectImage = () => {
    this.setState({ selectedImage: null });
  };

  selectProfile = selectedProfile => {
    const id = selectedProfile.id;
    fetch(API + id)
      .then(resp => resp.json())
      .then(profile =>
        this.setState({ selectedProfile: profile, selectedImage: null })
      );
  };

  deselectProfile = () => {
    this.setState({ selectedProfile: null });
  };

  handleConfirm = (image_url) => {
    console.log("click");
    this.setState({ profileImgUrl: image_url });
  };

  //Render

  render() {
    const { profiles, selectedProfile, selectedImage } = this.state;
    const { selectProfile, deselectProfile, selectImage, deselectImage, handleConfirm } = this;
    return (
      <React.Fragment>
        <ProfileList
          selectProfile={selectProfile}
          deselectProfile={deselectProfile}
          profiles={profiles}
          selectedProfile={selectedProfile}
          handleConfirm={handleConfirm}
          // hadn down funciton here
        />
        <div style={{ backgroundColor: "#F2F2F2", padding: "10px" }}>
          {selectedProfile
          ?
          ( <React.Fragment>
              <br></br>
              <ImageContainer
                selectedImage={selectedImage}
                selectImage={selectImage}
                deselectImage={deselectImage}
                selectedProfile={selectedProfile}
              />
            </React.Fragment>
          )
          :
          null}
        </div>
      </React.Fragment>
    );
  }
}
