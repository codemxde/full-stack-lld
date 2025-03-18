const DisplayData = ({ fruits, person }) => {
  const test = ["<li>Keshav</li>", "li>Manvi</li>", "li>Vaishnavi</li>"];
  return (
    <div>
      <h2>Fruits List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <h2>Person info:</h2>
      <p>Name: {person.fname}</p>
      <p>Age: {person.age}</p>
    </div>
  );
};

export default DisplayData;
