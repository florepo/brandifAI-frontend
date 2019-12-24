import React from "react";
import { Input } from "semantic-ui-react";

//API

const API = "https://www.instagram.com/";

//Class

class SearchBox extends React.Component {
  state = {
    searchInput: ""
  };

  //Helpers

  handleChange = e => {
    let searchInput = e.target.value;
    this.setState({ searchInput });
  };

  getProfile = () => {
    fetch(API + this.state.searchInput)
      .then(resp => resp.status)
      .then(status => {
        if (status === 404) {
          alert('Instagram username does not exist');
        } else {
          console.log("success")
          this.setState({selectedProfile: this.state.searchInput})
        }
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.getProfile();
  };

  render() {
    const { searchInput } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <form onSubmit={handleSubmit} style={{ padding: "10px" }}>
        <Input
          style={{ display: "inline" }}
          placeholder="Instagram Profile Name"
          onChange={handleChange}
          value={searchInput}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default SearchBox;
