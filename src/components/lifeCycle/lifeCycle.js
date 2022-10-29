/* eslint-disable valid-typeof */
import React from "react";

// 呼び刺される順番
// 1. constructor()
// 2. static getDerivedStateFromProps()
// 3. render()
// 4. componentDidMount()
class LifeCycle extends React.Component {
  constructor() {
    console.debug("class LifeCycle");
    super();
    this.state = {
      users: [],
      date: new Date(),
    };
  }

  componentDidMount() {
    // コンポーネントがコンポーネントがマウントされた直後呼び出されるメソッド。
    // すぐに setState() を呼び出すことができる

    // userを取得してみてライフサイクルではどうなるのか見る
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((usersList) => {
        this.setState({ users: usersList });
      });

    // componentDidUpdateを試してみる
    const timer = setInterval(() => {
      this.setState({ date: new Date() });
    }, 5000);
    this.setState({ timer });

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
    // コンポーネントがアンマウントされて破棄される直前に呼び出される
    // 画面遷移直前

    clearInterval(this.state.timer);
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
        <p>{this.state.date.toString()}</p>
        {this.state.users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </>
    );
  }
}

export default LifeCycle;
