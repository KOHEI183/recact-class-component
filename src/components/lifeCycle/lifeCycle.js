import React from "react";

class LifeCycle extends React.Component {
  constructor() {
    console.debug("class LifeCycle");
    super();
  }
  componentDidMount() {
    console.debug("componentDidMount");
  }
  render() {
    return <p>{this.props.pageTitle}</p>;
  }
}

export default LifeCycle;
