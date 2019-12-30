import React from "react";
import { Button, Item } from "semantic-ui-react";

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
        <Item.Header style={{fontSize: "25px"}} as="a">Model: {model}</Item.Header>
        <Item.Description style={{fontSize: "15px"}}>
          {selectedImage.image_details.map(detail => (
            <div key={detail.tag}>
              {detail.tag} - {detail.value}
            </div>
          ))}
        </Item.Description>
        <Item.Extra>
          <Button negative onClick={deselectImage}>GO BACK</Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default DetailsCard;
