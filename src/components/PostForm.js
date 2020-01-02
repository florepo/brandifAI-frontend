import React, { Component } from "react";
import { Button, Grid } from "semantic-ui-react";
import Scrape from "../components/Scraper";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = { profileImgUrl: null, isPrivate: true };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(event);
  };

  getBoolean = obj => {
    this.setState({
      isPrivate: obj.status
    });
  };

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <Scrape
            getBoolean={this.getBoolean}
            handleConfirm={this.props.handleConfirm}
            profileName={this.props.profileName}
          />
          <br></br>
          {this.state.isPrivate ? (
            <p>Sorry profile is Private</p>
          ) : (
            <Button type="submit"> Yes </Button>
          )}
        </div>
      </form>
    );
  }
}

export default PostForm;
