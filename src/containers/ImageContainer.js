import React, { Component } from "react";
import DetailsCard from "../components/DetailsCard";
import ImageList from "./ImageList";

class ImageContainer extends Component {

  //////////////// ADD UNIQUE KEY

  render() {
    const { selectedProfile, toggleDisplay, toggleDisplayofDetails } = this.props;
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
