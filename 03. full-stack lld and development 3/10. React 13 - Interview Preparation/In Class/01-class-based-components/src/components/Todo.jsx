import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputValue: "",
    };
  }

  componentDidMount() {
    // simulating an asynchronous function
    setTimeout(() => {
      this.setState({
        todos: [...this.state.todos, "Go for jog", "Complete react module"],
      });
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("I just got updated babiiii!");
  }

  componentWillUnmount() {
    console.log("I'm finna go off!");
  }

  updateInputValue = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  addTodo = () => {
    if (this.state.inputValue !== "") {
      this.setState({
        todos: [...this.state.todos, this.state.inputValue],
      });
      this.setState({
        inputValue: "",
      });
    }
  };

  render() {
    return (
      <div>
        <h1 className="text-xl">Get these Done</h1>
        <ul>
          {this.state.todos.map((todo, index) => {
            return <li key={index}>{todo}</li>;
          })}
        </ul>

        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.updateInputValue}
        />
        <button className="p-2 bg-blue-50" onClick={this.addTodo}>
          Add todo
        </button>
      </div>
    );
  }
}

export default Todo;
