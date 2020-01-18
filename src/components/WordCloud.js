import React, { Component } from "react";
import ReactWordcloud from "react-wordcloud";
import { Loader, Dimmer } from "semantic-ui-react";

class WordCloud extends Component {
  state = {
    loaderPresent: true
  };

  options = {
    // colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
    enableTooltip: true,
    deterministic: false,
    fontFamily: "impact",
    fontSizes: [20, 60],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 3,
    rotationAngles: [0, 50],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 3000
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaderPresent: false
      });
    }, 100);
  }

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <h2>Profile Word Cloud</h2>
        <ReactWordcloud options={this.options} words={this.props.wordList} />
        {this.state.loaderPresent ? (
          <Dimmer active>
            <Loader />
          </Dimmer>
        ) : null}
      </div>
    );
  }
}

export default WordCloud;
