import React, { Component } from "react";

export class ExampleClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Test",
      age: 12,
    };
  }
  handleClick = () => {
    this.setState({ name: "Updated" });
  };

  render() {
    return (
      <div>
        <pre>Class Component</pre>
        <p>{JSON.stringify(this.state)}</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default ExampleClass;
