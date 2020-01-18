import React from "react";
import { Image, Button } from "semantic-ui-react";

const ProfileIcon = ({ profile, clickHandler, removeProfile }) => {
  const removeHandler = profile => {
    removeProfile(profile);
  };

  return (
    <div style={{ display: "inline-block" }}>
      <div>{profile.username + " "}</div>

      <Image
        onClick={() => clickHandler(profile)}
        src={profile.icon_url}
        avatar
        size="tiny"
      />
      <br></br>
      <br></br>
      <Button onClick={() => removeHandler(profile)}>Remove</Button>
    </div>
  );
};

export default ProfileIcon;
