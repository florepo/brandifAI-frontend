import React, { Fragment } from "react";

const Theme = props => {
  return (
    <Fragment>
      <h4 style={{ color: "red" }}>{props.suggestion.tag}</h4>
      <h4>Confidence Score: {props.suggestion.confidence_score}</h4>
    </Fragment>
  );
};

export default Theme;
