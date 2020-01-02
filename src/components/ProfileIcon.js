import React from "react";
import { Image } from "semantic-ui-react";

const ProfileIcon = ({ profile, clickHandler }) => {
  return (
    <div style={{ display: "inline-block" }}>
      <div>{profile.username + " "}</div>

      <Image
        onClick={() => clickHandler(profile)}
        src={profile.icon_url}
        avatar
        size="tiny"
      />
      
    </div>
  );
};

export default ProfileIcon;
