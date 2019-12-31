import React from "react";
import { Modal } from "semantic-ui-react";
import SearchBox from "./SearchBox"

const AddModal = (props) => (
  <Modal
    trigger={
      <button className="huge circular ui icon button">
        <i className="icon plus"></i>
      </button>
    }
    header="Enter the username of the profile you would like to analyze"
    content={<SearchBox setPatchID={props.setPatchID} handleConfirm={props.handleConfirm} patchProfile={props.patchProfile}/>}
    actions={[{ key: "done", content: "back", negative: true }]}
  />
);

export default AddModal;
