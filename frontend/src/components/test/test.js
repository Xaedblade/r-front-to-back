import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: "",
  };
  // where you should call for data
  componentDidMount() {
    console.log("Component did mount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          title: data.title,
          body: data.body,
        })
      );
  }
  // UNSAFE_componentWillMount() {
  //   console.log("will mount");
  // }
  // componentDidUpdate() {
  //   console.log("updated");
  // }
  // componentWillUpdate() {
  //   console.log("aobut to ubdate");
  // }
  // componentWillReceiveProps(nextProps, nexState) {
  //   console.log("about to get props");
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
