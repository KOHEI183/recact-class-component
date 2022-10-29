import React from "react";

class Increments extends React.Component {
  // 初期化関数
  constructor(props) {
    console.debug("class Increments");
    super(props);
    // 子クラスのconstructor()ではsuper()の前でthisを参照することはできない
    this.state = { count: 0 };
  }

  // 関数
  increment = (targetNum) =>
    this.setState({ count: this.state.count + targetNum });
  decrement = (targetNum) =>
    this.setState({ count: this.state.count - targetNum });

  render() {
    return (
      <>
        <p>Increments Class</p>
        <p>count : {this.state.count}</p>
        <div>
          {/* アロー関数にしないと無限描画する */}
          <button onClick={() => this.increment(1)}>increment</button>
          <button onClick={() => this.decrement(1)}>decrement</button>
        </div>
      </>
    );
  }
}

export default Increments;
