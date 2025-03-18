import { useEffect, useState } from "react";
import { Routes, Route, Link, useParams, Navigate } from "react-router-dom";

function About() {
  return <h1>About Page</h1>;
}

function Home() {
  return <h1>Home Page</h1>;
}

function Listing() {
  return <h1>Listing Page</h1>;
}

function PageNotFound() {
  return <h1>404 Page Not Found</h1>;
}

function User(props) {
  console.log(props.role);
  const params = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUser(data.name.firstname);
      });
  }, [user]);
  return user ? (
    <h3>
      This is the User's role: {props.role}, first name: {user}
    </h3>
  ) : (
    <h3>Loading...</h3>
  );
}

function Routing() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/listing">Listing</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/users/:id" element={<User role={"dev"} />} />
        <Route path="/abcd" element={<Navigate to="/" />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default Routing;
