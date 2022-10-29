import React from "react";
import "./App.css";
import { Increments, LifeCycle } from "./components/EntryPoint.tsx";

// class component名 React.Componentを継承する
// React.Component サブクラスにはrenderメソッドを定義しなければならない
// state の初期化もメソッドのバインドもしないのであれば、React コンポーネントのコンストラクタを実装する必要はない
class Root extends React.Component {
  constructor(props) {
    console.debug("class Root");
    super(props);
    this.state = {
      pageTitle: {
        increments: "Increments component",
        lifeCycle: "lifeCycle component",
      },
    };
  }

  render() {
    return (
      <div className="Root">
        {/* 子コンポーネントのconstructor(props)のpropsに流れる */}
        <Increments pageTitle={this.state.pageTitle.increments} />
        <br />
        <LifeCycle pageTitle={this.state.pageTitle.lifeCycle} />
      </div>
    );
  }
}
export default Root;
