import React, { Component } from "react";
import ProfileList from "./ProfileList";
import ImageContainer from "./ImageContainer";
import { API } from "../adapters/api";

// Class

export class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      selectedProfile: null,
      selectedImage: null,
      profileImgUrl: null,
      patchID: null
    };
  }

  //Initial Fetch

  getProfilesFromAPI = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(json =>
        this.setState({
          profiles: json
        })
      );
  };

  // Initial Render

  componentDidMount() {
    this.getProfilesFromAPI();
  }

  //Helpers

  setPatchID = id => {
    console.log(id)
    // this.setState({
    //   patchID: id
    // });
  };

  patchProfile = () => {
    // const data = this.state.profileImgUrl;

    // const configObj = {
    //   method: "PATCH",
    //   headers: {
    //     "content-type": "application/json",
    //     accept: "application/json"
    //   },
    //   body: JSON.stringify(data)
    // };

    // fetch(API, configObj);
  };

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

  handleConfirm = obj => {
    console.log("click");
    this.setState({ profileImgUrl: obj.image });
  };

  //Render

  render() {
    const { profiles, selectedProfile, selectedImage } = this.state;
    const {
      selectProfile,
      deselectProfile,
      selectImage,
      deselectImage,
      handleConfirm,
      patchProfile,
      setPatchID
    } = this;
    return (
      <React.Fragment>
        <ProfileList
          setPatchID={setPatchID}
          patchProfile={patchProfile}
          selectProfile={selectProfile}
          deselectProfile={deselectProfile}
          profiles={profiles}
          selectedProfile={selectedProfile}
          handleConfirm={handleConfirm}
          // hadn down funciton here
        />
        <div style={{ backgroundColor: "#F2F2F2", padding: "10px" }}>
          {selectedProfile ? (
            <React.Fragment>
              <br></br>
              <ImageContainer
                selectedImage={selectedImage}
                selectImage={selectImage}
                deselectImage={deselectImage}
                selectedProfile={selectedProfile}
              />
            </React.Fragment>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}
