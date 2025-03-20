export default function Logger(Component) {
  return function (props) {
    console.log("These are the props:", props);
    return <Component {...props} />;
  };
}
