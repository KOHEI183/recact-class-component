import React from "react";
import { Child } from "../../components/EntryPoint.tsx";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  propsIncrement = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  render() {
    const { pageTitle } = this.props;

    return (
      <>
        <p>{pageTitle.parent}</p>
        <p>{this.state.count}</p>
        <Child pageTitle={pageTitle.child} callBack={this.propsIncrement} />
      </>
    );
  }
}

export default Parent;
