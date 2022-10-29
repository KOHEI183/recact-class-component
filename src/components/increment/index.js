import React from "react";

class Increments extends React.Component {
  // 初期化関数
  constructor(props) {
    console.debug("class Increments");
    super(props);
    // 子クラスのconstructor()ではsuper()の前でthisを参照することはできない
    this.state = { wait: 1, count: 0, age: 0 };
  }
  // 関数
  countIncrement = (targetNum) =>
    this.setState({ count: this.state.count + targetNum });
  countDecrement = (targetNum) =>
    this.setState({ count: this.state.count - targetNum });

  ageIncrement = (targetNum) =>
    this.setState((prev) => {
      console.log("prevを用いてageを更新");
      return {
        age: prev.age + targetNum,
      };
    });
  ageDecrement = (targetNum) =>
    this.setState((prev) => {
      console.log("prevを用いてageを更新");
      return {
        age: prev.age - targetNum,
      };
    });

  allIncrement = (targetNum) =>
    this.setState((prev) => {
      console.log("複数の値を更新");
      return {
        count: prev.count + targetNum,
        age: prev.age + targetNum,
      };
    });
  allDecrement = (targetNum) =>
    this.setState((prev) => {
      console.log("複数の値を更新");
      return {
        count: prev.count - targetNum,
        age: prev.age - targetNum,
      };
    });

  render() {
    return (
      <>
        <p>{this.props.pageTitle}</p>
        <div>
          <p>count : {this.state.count}</p>
          {/* アロー関数にしないと無限描画する */}
          <button onClick={() => this.countIncrement(this.state.wait)}>
            count increment
          </button>
          <button onClick={() => this.countDecrement(this.state.wait)}>
            count decrement
          </button>
        </div>
        <div>
          <p>count : {this.state.age}</p>
          <button onClick={() => this.ageIncrement(this.state.wait)}>
            age increment
          </button>
          <button onClick={() => this.ageDecrement(this.state.wait)}>
            age decrement
          </button>
        </div>
        <div>
          <button onClick={() => this.allIncrement(this.state.wait)}>
            all increment
          </button>
          <button onClick={() => this.allDecrement(this.state.wait)}>
            all decrement
          </button>
        </div>
      </>
    );
  }
}

export default Increments;
