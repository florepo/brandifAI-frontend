import React from "react";
import ProfileIcon from "./ProfileIcon";

const ProfileList = ({
  profiles,
  selectProfile,
  deselectProfile,
  selectedProfile
}) => {
  return (
    <div>
      <p>Instagram Profiles Analyzed: </p>
      {profiles.map(profile =>
        profile === selectedProfile ? (
          <ProfileIcon
            key={profile.id}
            clickHandler={deselectProfile}
            profile={profile}
          />
        ) : (
          <ProfileIcon
            key={profile.id}
            clickHandler={selectProfile}
            profile={profile}
          />
        )
      )}
    </div>
  );
};

export default ProfileList;
