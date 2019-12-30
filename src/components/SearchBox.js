import React from "react";
import { Input, Button, Message, Icon, Modal } from "semantic-ui-react";

//API

const API = "https://www.instagram.com/";

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
      fetch(API + searchInput)
        .then(resp => resp.status)
        .then(status => {
          if (status === 404) {
            this.setState({
              invalidSearch: true,
              errorContent: "Instagram username does not exist"
            });
          } else {
            console.log("success");
            this.setState({
              selectedProfile: searchInput,
              invalidSearch: false,
              confirmationModalOpen: true
            });
          }
        });
    }
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
        content="[put profile from front end scrape here]"
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
