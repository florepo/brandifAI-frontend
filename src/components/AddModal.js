import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import SearchBox from "./SearchBox";

class AddModal extends Component {




  render() {
    return (
      <Modal
        trigger={
          <button className="huge circular ui icon button">
            <i className="icon plus"></i>
          </button>
        }
        header="Enter the username of the profile you would like to analyze"
        content={
          <SearchBox
            setPatchID={this.props.setPatchID}
            handleConfirm={this.props.handleConfirm}
            patchProfile={this.props.patchProfile}
          />
        }
        actions={[{ key: "done", content: "back", negative: true }]}
      />
    );
  }
}

export default AddModal;
