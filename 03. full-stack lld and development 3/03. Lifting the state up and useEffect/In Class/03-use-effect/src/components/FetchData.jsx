import { useState, useEffect } from "react";

export default function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return data ? <p>Data has been loaded: {data[0].name} </p> : <p>Loading ...</p>;
}
