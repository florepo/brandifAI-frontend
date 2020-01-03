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
  modalOpen,
  handleModalClose,
  handleModalOpen,
  setLoader,
  loaderPresent,
  removeProfile
}) => {
  return (
    <div className="backdrop" >
      <p>Instagram Profiles Analyzed: </p>
      {profiles.map(profile =>
        profile === selectedProfile ? (
          <ProfileIcon
            removeProfile={removeProfile}
            key={profile.id}
            clickHandler={deselectProfile}
            profile={profile}
          />
        ) : (
          <ProfileIcon
            removeProfile={removeProfile}
            key={profile.id}
            clickHandler={selectProfile}
            profile={profile}
          />
        )
      )}
      <AddModal
        loaderPresent={loaderPresent}
        setLoader={setLoader}
        handleModalOpen={handleModalOpen}
        handleModalClose={handleModalClose}
        modalOpen={modalOpen}
        handleConfirm={handleConfirm}
        patchProfile={patchProfile}
      />
    </div>
  );
};

export default ProfileList;
