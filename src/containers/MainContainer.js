import React, { Component } from "react";
import ProfileList from "./ProfileList";
import ImageContainer from "./ImageContainer";
import ProfileStats from "./ProfileStats";
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
      modalOpen: false,
      loaderPresent: false
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

  patchProfile = id => {
    const data = { icon_url: this.state.profileImgUrl };

    const configObj = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify(data)
    };

    fetch(API + id, configObj)
      .then(resp => resp.json())
      .then(profile => {
        this.setState({
          profiles: [...this.state.profiles, profile]
        });
      })
      .then(this.closeModal);
  };

  setLoader = () => {
    this.setState({ loaderPresent: true });
  };

  //modal

  closeModal = () => {
    this.setState({
      modalOpen: false,
      loaderPresent: false
    });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  handleModalOpen = () => {
    this.setState({ modalOpen: true });
  };

  //

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
    this.setState({ profileImgUrl: obj.image });
  };

  removeProfile = (profile) => {
    const profileArray = [...this.state.profiles]
    const fileredArray = profileArray.filter(el => el.id !== profile.id)
    // console.log(profileArray)
    // console.log(fileredArray)
    this.setState({
      profiles: fileredArray
    })

    const configObj = {
      method: "DELETE"
    }

    fetch(API+profile.id, configObj)
    .then(resp => resp.json())
    .then(console.log)
  }

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
      removeProfile
    } = this;
    return (
      <React.Fragment>
        <ProfileList
          removeProfile={removeProfile}
          handleModalClose={this.handleModalClose}
          loaderPresent={this.state.loaderPresent}
          setLoader={this.setLoader}
          handleModalOpen={this.handleModalOpen}
          modalOpen={this.state.modalOpen}
          patchProfile={patchProfile}
          selectProfile={selectProfile}
          deselectProfile={deselectProfile}
          profiles={profiles}
          selectedProfile={selectedProfile}
          handleConfirm={handleConfirm}
        />
        <div style={{ backgroundColor: "#F2F2F2", padding: "10px" }}>
          {selectedProfile ? (
            <React.Fragment>
              <br></br>
              <ProfileStats selectedProfile={selectedProfile} />
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
