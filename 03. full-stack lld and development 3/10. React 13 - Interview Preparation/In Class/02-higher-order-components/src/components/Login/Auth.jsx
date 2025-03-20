export default function Auth(Component) {
  return function (props) {
    const isLoggedIn = false;

    return isLoggedIn ? (
      <Component {...props} />
    ) : (
      <div>
        <h1>You need to be logegd in First!</h1>
      </div>
    );
  };
}
