import React from "react";

class LifeCycle extends React.Component {
  constructor() {
    console.debug("class LifeCycle");
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    // コンポーネントがマウント(配置)される直前に呼び出されるメソッド。
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((usersList) => {
        this.setState({ users: usersList });
      });
    console.debug(
      "componentDidMount",
      "コンポーネントのマウント前",
      `users : ${
        this.state.users.length !== 0 ? this.state.users : "取得できてない"
      }`,
      `props : ${
        typeof this.props.pageTitle !== undefined
          ? "受け取れている"
          : "受け取れていない"
      }`
    );
  }
  componentWillUnmount() {
    console.debug(
      "componentWillUnmount",
      "コンポーネントがDOMから削除されるとき",
      `users : ${
        this.state.users.length !== 0 ? this.state.users : "取得できてない"
      }`,
      `props : ${
        typeof this.props.pageTitle !== undefined
          ? "受け取れている"
          : "受け取れていない"
      }`
    );
  }
  componentDidUpdate() {
    console.debug(
      "componentDidUpdate",
      "コンポーネントが再描画されるとき",
      `users : ${
        this.state.users.length !== 0 ? this.state.users : "取得できてない"
      }`,
      `props : ${
        typeof this.props.pageTitle !== undefined
          ? "受け取れている"
          : "受け取れていない"
      }`
    );
  }
  render() {
    return (
      <>
        <p>{this.props.pageTitle}</p>
        {this.state.users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </>
    );
  }
}

export default LifeCycle;
