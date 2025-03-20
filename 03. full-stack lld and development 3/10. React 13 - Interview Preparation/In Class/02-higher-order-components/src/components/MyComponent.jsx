import Logger from "./Logger";

function MyComponent(props) {
  return (
    <div>
      <h1>I am the Wrapped Component</h1>
    </div>
  );
}

export default Logger(MyComponent);
