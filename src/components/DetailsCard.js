import React from "react";
import { Image, Item } from "semantic-ui-react";

const DetailsCard = props => {
  const { selectedImage, deselectImage } = props;
  return (
    <Item>
      <Item.Image size="tiny" src={selectedImage.image_url} />
      <Item.Content>
        <Item.Header as="a">Header</Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Description>
        </Item.Description>
        <Item.Extra>
          <button onClick={deselectImage}>GO BACK</button>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default DetailsCard;
