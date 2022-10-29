import React from "react";

class Bind extends React.Component {
  constructor(props) {
    console.debug("class Bind");
    super();
    this.state = { isOn: true };
    this.toggle = this.toggle.bind(this);
  }

  arrowToggle = () => {
    this.setState((state) => ({
      isOn: !state.isOn,
    }));
  };

  toggle() {
    this.setState((state) => ({
      isOn: !state.isOn,
    }));
  }

  render() {
    console.debug("render Bind");
    // thisを展開する
    const { state, toggle } = this;
    console.log(state, this.state.isOn);

    return (
      <>
        <p>{this.props.pageTitle}</p>
        <h3>{state.isOn ? "ON" : "OFF"}</h3>
        <button type="button" onClick={this.arrowToggle}>
          ArrowToggle
        </button>
        <button type="button" onClick={toggle}>
          toggle
        </button>
      </>
    );
  }
}
export default Bind;
