import React from "react";
import { Image } from "semantic-ui-react";

const ImageList = ({ selectedProfile, toggleDisplay }) => {
  return (
    <Image.Group size="small">
      {selectedProfile.images.map((image, index) => (
        <React.Fragment key={index}>
          <Image
            key={index}
            onClick={toggleDisplay}
            src={image.image_url}
          />
          {/* <Divider hidden /> */}
        </React.Fragment>
      ))}
    </Image.Group>
  );
};

export default ImageList
