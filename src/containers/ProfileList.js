import React from "react";
import ProfileIcon from "../components/ProfileIcon";
import AddModal from "../components/AddModal";

const ProfileList = ({
  profiles,
  selectProfile,
  deselectProfile,
  selectedProfile,
  handleConfirm,
  patchProfile,
  setPatchID
}) => {
  return (
    <div className="backdrop">
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
      <AddModal
        setPatchID={setPatchID}
        handleConfirm={handleConfirm}
        patchProfile={patchProfile}
      />
    </div>
  );
};

export default ProfileList;
