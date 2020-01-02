import React, { Component } from "react";
import Cheerio from "cheerio";

class Scrape extends Component {
  constructor(props) {
    super(props);
    this.image = React.createRef();
    this.state = {};
  }

  url = `https://www.instagram.com/${this.props.profileName}?hl=en`;

  profileImgUrl = () =>
    fetch(this.url)
      .then(res => res.text())
      .then(body => {
        const $ = Cheerio.load(body);
        const image = $('meta[property="og:image"]');
        const status =
          $["_root"].children[1].children[2].children[9].children[0]["data"];

        const boolean = status.includes('"is_private":true');

        return { image: image[0].attribs.content, status: boolean };
      });

  componentDidMount() {
    this.profileImgUrl()
      .then(obj => {
        this.image.current.src = obj.image;
        return obj;
      })
      .then(obj => {
        this.props.handleConfirm(obj);
        return obj;
      })
      .then(obj => this.props.getBoolean(obj))
  }

  render() {
    return <img style={{ borderRadius: "50%" }} ref={this.image} />;
  }
}

export default Scrape;
