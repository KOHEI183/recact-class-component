import React from "react";
import "./App.css";
import { Increments } from "./components/EntryPoint.tsx";

// class component名 React.Componentを継承する
// React.Component サブクラスにはrenderメソッドを定義しなければならない
class Root extends React.Component {
  constructor(props) {
    console.debug("class Root");
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Root">
        <Increments />
      </div>
    );
  }
}
export default Root;
