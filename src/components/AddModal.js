import React from "react";
import { Button, Modal } from "semantic-ui-react";
import SearchBox from "./SearchBox"

const AddModal = () => (
  <Modal
    trigger={
      <button className="huge circular ui icon button">
        <i className="icon plus"></i>
      </button>
    }
    header="Reminder!"
    content={<SearchBox/>}
    actions={[{ key: "done", content: "back", negative: true }]}
  />
);

export default AddModal;
