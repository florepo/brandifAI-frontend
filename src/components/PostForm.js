import React, { Component } from "react";
import { Button, Grid } from "semantic-ui-react";
import Scrape from "../components/Scraper";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = { profileImgUrl: null };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(event);
  };

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <Scrape
            handleConfirm={this.props.handleConfirm}
            profileName={this.props.profileName}
          />
          <br></br>
          <Button type="submit"> Yes </Button>
        </div>
      </form>
    );
  }
}

export default PostForm;
