import Auth from "./Auth";

function Dashboard({ name }) {
  return (
    <div>
      <h1>Welcome to the Dashboard {name}</h1>
    </div>
  );
}

export default Auth(Dashboard);
