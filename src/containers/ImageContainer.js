import React, { Component } from "react";
import DetailsCard from "../components/DetailsCard";
import ImageList from "./ImageList";

class ImageContainer extends Component {

  render() {
    const {
      selectedProfile,
      selectImage,
      selectedImage,
      deselectImage
    } = this.props;

    return (
      selectedImage
      ?
      ( <div className="ui centered grid">
          <div className="eleven wide column" >
            <DetailsCard
              selectedProfile={selectedProfile}
              selectImage={selectImage}
              selectedImage={selectedImage}
              deselectImage={deselectImage}
            />
          </div>
        </div>
      )
      : 
      (<ImageList selectImage={selectImage} selectedProfile={selectedProfile} />)
    )
  }
}

export default ImageContainer;
