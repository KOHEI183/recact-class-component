import React from "react";

class Child extends React.Component {
  render() {
    return (
      <>
        <p>{this.props.pageTitle}</p>
        {/* Parentからの関数を受け取る */}
        <button onClick={() => this.props.callBack()}>
          親のincrement関数をclick
        </button>
        {/* ChildからParentに値を送る */}
        <input onChange={(e) => this.props.onChangeInput(e)} />
      </>
    );
  }
}

export default Child;
