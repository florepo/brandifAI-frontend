import React, { Component } from "react";
import { Modal, Loader } from "semantic-ui-react";
import SearchBox from "./SearchBox";

class AddModal extends Component {
  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.props.handleModalOpen}
          className="huge circular ui icon button"
        >
          <i className="icon plus"></i>
        </button>
        <Modal
          open={this.props.modalOpen}
          onClose={this.props.handleModalClose}
          header="Enter the username of the profile you would like to analyze"
          content={
            this.props.loaderPresent ? (
              <Loader />
            ) : (
              <SearchBox
                setLoader={this.props.setLoader}
                handleConfirm={this.props.handleConfirm}
                patchProfile={this.props.patchProfile}
              />
            )
          }
          actions={[{ key: "done", content: "back", negative: true }]}
        />
      </React.Fragment>
    );
  }
}

export default AddModal;
