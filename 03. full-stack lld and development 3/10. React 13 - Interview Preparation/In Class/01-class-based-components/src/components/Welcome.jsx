import React from "react";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Welcome to Class Based Components!</h1>
        <p>Counter: {this.state.count}</p>
        <button
          className="bg-violet-200 p-3 rounded-lg"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Welcome;
