import React from "react";
import { Image } from "semantic-ui-react";

const ImageList = ({ selectedProfile, selectImage }) => {
  return (
    <Image.Group size="small">
      {selectedProfile.images.map((image, index) => (
        <React.Fragment key={index}>
          <Image
            fluid
            key={index}
            onClick={() => selectImage(image)}
            src={image.image_url}
          />
          {/* <Divider hidden /> */}
        </React.Fragment>
      ))}
    </Image.Group>
  );
};

export default ImageList;
