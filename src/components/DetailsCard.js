import React from "react";
import { Image, Item } from "semantic-ui-react";

const DetailsCard = props => {
  const { selectedImage, deselectImage } = props;

  //catching lack of model attribute when no concepts linked
  let model = [];
  if (selectedImage.image_details[0]) {
    model = selectedImage.image_details[0].model;
  }

  return (
    <Item
      style={{
        borderRadius: "10px",
        backgroundColor: "#FFFFFF",
        border: "1px solid grey",
        padding: "30px"
      }}
    >
      <Item.Image size="small" src={selectedImage.image_url} />
      <Item.Content>
        <Item.Header as="a">Model: {model}</Item.Header>
        <Item.Description>
          {selectedImage.image_details.map(detail => (
            <div key={detail.tag}>
              {detail.tag} - {detail.value}
            </div>
          ))}
        </Item.Description>
        <Item.Extra>
          <button onClick={deselectImage}>GO BACK</button>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default DetailsCard;
