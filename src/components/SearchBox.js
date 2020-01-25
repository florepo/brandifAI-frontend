import React from "react";
import PostForm from "./PostForm";
import { API } from "../adapters/api";
import { Input, Button, Message, Icon, Modal } from "semantic-ui-react";

//API

const INSTA_API = "https://www.instagram.com/";

//Class

class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      invalidSearch: false,
      errorContent: "",
      confirmationModalOpen: false
    };
  }

  //Helpers

  handleChange = e => {
    let searchInput = e.target.value;
    this.setState({ searchInput });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.checkProfile();
  };

  handleSecondModalClose = () => {
    this.setState({ confirmationModalOpen: false });
  };

  // Check if profile is real and activate confirmation modal

  checkProfile = () => {
    const { searchInput } = this.state;

    ///add confirmation fgor instagram site down with fetch to base api url

    if (searchInput === "") {
      this.setState({
        invalidSearch: true,
        errorContent: "The text field cannot be empty!"
      });
    } else {
      fetch(INSTA_API + searchInput)
        .then(resp => resp.status)
        .then(status => {
          if (status === 404) {
            this.setState({
              invalidSearch: true,
              errorContent: "Instagram username does not exist"
            });
          } else {
            this.setState({
              selectedProfile: searchInput,
              invalidSearch: false,
              confirmationModalOpen: true
            });
          }
        });
    }
  };

  // Add new profile to backend with post

  postNewProfile = e => {
    e.preventDefault();

    const data = this.state.searchInput;

    const configObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify(data)
    };

    fetch(API, configObj)
      .then(resp => resp.json())
      .then(id => this.props.patchProfile(id))
      .then(
        this.setState({
          confirmationModalOpen: false
        })
      )
      .then(this.props.setLoader());
  };

  // JSX for render

  get confirmationModal() {
    return (
      <Modal
        basic
        centered={false}
        open={this.state.confirmationModalOpen}
        onClose={this.handleSecondModalClose}
        header="Is this the correct instagram profile?"
        content={
          <PostForm
            patchProfile={this.props.patchProfile}
            handleConfirm={this.props.handleConfirm}
            handleSubmit={this.postNewProfile}
            profileName={this.state.searchInput}
          />
        }
        actions={[{ key: "done", content: "Done", positive: true }]}
      />
    );
  }

  get form() {
    const { searchInput, invalidSearch, errorContent } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
        <React.Fragment>
        <form onSubmit={handleSubmit} style={{ padding: "10px" }}>
          <Input
            iconPosition="left"
            error={invalidSearch}
            style={{ display: "inline" }}
            placeholder="Instagram Profile Name"
            onChange={handleChange}
            value={searchInput}
          >
            <Icon name="at" />
            <input />
          </Input>
          <Button type="submit">Submit</Button>
        </form>
        {invalidSearch ? <Message error>{errorContent}</Message> : null}
        </React.Fragment>
    );
  }

  // Render

  render() {
    return (
      <React.Fragment>
        {this.form}
        {this.confirmationModal}
      </React.Fragment>
    );
  }
}

export default SearchBox;
