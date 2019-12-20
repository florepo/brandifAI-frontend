import React from "react";
import { Image } from "semantic-ui-react";

const ProfileIcon = ({ profile, clickHandler }) => {
  return (
    <React.Fragment>
      <Image
        onClick={() => clickHandler(profile)}
        src={profile.icon_url}
        avatar
      />
      <span>{profile.username + " "}</span>
    </React.Fragment>
  );
};

export default ProfileIcon;
