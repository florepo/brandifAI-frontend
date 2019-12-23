import React, { Component } from "react";
import DetailsCard from "../components/DetailsCard";
import ImageList from "./ImageList";

class ImageContainer extends Component {
  //////////////// ADD UNIQUE KEY

  render() {
    const { selectedProfile, selectImage, selectedImage, deselectImage } = this.props;
    return selectedImage ? (
      <DetailsCard
        selectedProfile={selectedProfile}
        selectImage={selectImage}
        selectedImage={selectedImage}
        deselectImage={deselectImage}
      />
    ) : (
      <ImageList selectImage={selectImage} selectedProfile={selectedProfile} />
    );
  }
}

export default ImageContainer;
