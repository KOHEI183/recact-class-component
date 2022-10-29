import React from "react";
import "./App.css";

// class component名 extends React.Component
// React.Component サブクラスにはrenderメソッドを定義しなければならない
class Root extends React.Component {
  constructor(props) {
    super(props);
    console.log("class Root");
    this.state = {};
  }

  render() {
    return <div className="Root"></div>;
  }
}
export default Root;
