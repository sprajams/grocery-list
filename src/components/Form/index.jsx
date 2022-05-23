import { useState, useEffect } from "react";

function Form() {
  const [ingredient, setIngredient] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    setIngredient(event.target.value);
  };
  useEffect(() => {
    if (ingredient.length >= 2) {
      fetch(`https://api.frontendeval.com/fake/food/${ingredient}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    } else {
      setData([]);
    }
  }, [ingredient]);

  return (
    <div>
      <h1>My shopping list:</h1>
      <form>
        <input
          type="text"
          id="name"
          value={ingredient}
          onChange={handleChange}
        ></input>
        <button>Search</button>
      </form>
      <ul>
        {data.map((x, i) => {
          return <li key={i}>{x}</li>;
        })}
      </ul>
    </div>
  );
}

export default Form;
