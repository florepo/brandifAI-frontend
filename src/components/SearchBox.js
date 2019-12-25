import React from "react";
import { Input, Button, Message, Icon } from "semantic-ui-react";

//API

const API = "https://www.instagram.com/";

//Class

class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      invalidSearch: false,
      errorContent: ""
    };
  }

  //Helpers

  handleChange = e => {
    let searchInput = e.target.value;
    this.setState({ searchInput });
  };

  getProfile = () => {
    const { searchInput, errorContent } = this.state;
    fetch(API + searchInput)
      .then(resp => resp.status)
      .then(status => {
        if (status === 404) {
          this.setState({
            invalidSearch: true,
            errorContent: "Instagram username does not exist"
          });
        } else if (searchInput === "") {
          this.setState({
            invalidSearch: true,
            errorContent: "The text field cannot be empty!"
          });
        } else {
          console.log("success"); //////////// ADD FUNCTION FOR NEW MODAL TO CONFIRM
          this.setState({ selectedProfile: searchInput, invalidSearch: false });
        }
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.getProfile();
  };

  render() {
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
}

export default SearchBox;
