import { useEffect, useState } from "react";

export default function User() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const uri = "https://jsonplaceholder.typicode.com/users/1";
    const options = {
      "Content-type": "application/json",
    };

    fetch(uri, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  if (error) {
    return <h1 className="text-2xl text-red-400">Unable to fetch user details</h1>;
  } else if (loading) {
    return <h1 className="text-2xl tedt-green-600">Loading ...</h1>;
  }

  return (
    <div>
      <h1 className="text-2xl">User Component</h1>
      <p className="text-xl">Name: {user.name}</p>
      <p className="text-xl">Phone: {user.phone}</p>
    </div>
  );
}
