import React, { Component } from "react";
import DetailsCard from "../components/DetailsCard";
import ImageList from "./ImageList";

class ImageContainer extends Component {
  state = {
    toggleDisplayofDetails: false
  };

  toggleDisplay = () => {
    console.log("clicked");
    this.setState({
      toggleDisplayofDetails: !this.state.toggleDisplayofDetails
    });
  };

  //////////////// ADD UNIQUE KEY

  render() {
    const { selectedProfile } = this.props;
    const { toggleDisplayofDetails } = this.state;
    const { toggleDisplay } = this;
    return toggleDisplayofDetails ? (
      <DetailsCard toggleDisplay={toggleDisplay}/>
    ) : (
      <ImageList
        toggleDisplay={toggleDisplay}
        selectedProfile={selectedProfile}
      />
    );
  }
}

export default ImageContainer;
