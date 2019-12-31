import React from "react";
import ProfileIcon from "../components/ProfileIcon";
import AddModal from "../components/AddModal"
import Scraper from "../components/Scraper"

const ProfileList = ({
  profiles,
  selectProfile,
  deselectProfile,
  selectedProfile
}) => {
  return (
    <div className="backdrop">
      <p>Instagram Profiles Analyzed: </p>
        {profiles.map(profile =>
          profile === selectedProfile ?
          (
            <ProfileIcon
              key={profile.id}
              clickHandler={deselectProfile}
              profile={profile}
            />
          )
          :
          (
            <ProfileIcon
              key={profile.id}
              clickHandler={selectProfile}
              profile={profile}
            />
          )
        )}
        <AddModal/>
        <Scraper
        />
      
    </div>
  );
};

export default ProfileList;
