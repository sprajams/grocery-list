import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

function Form({ setList }) {
  const [ingredient, setIngredient] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    setIngredient(event.target.value);
  };
  //if user types at least 2 letters of item, fetch suggestions from API
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
    <div className={styles.out}>
      <h1>My shopping list:</h1>

      <form className={styles.form}>
        <input
          type="text"
          id="name"
          value={ingredient}
          onChange={handleChange}
          className={styles.input}
        ></input>
        <button>Search</button>
      </form>

      <ul className={styles.suggestionList}>
        {data.map((x, i) => {
          //clicking on a suggestion adds item to the shopping list, clears out input & other suggestions
          const onClick = () => {
            setList((oldArray) => [...oldArray, x]);
            setData([]);
            setIngredient("");
          };
          return (
            <li key={i}>
              <button className={styles.suggestion} onClick={onClick}>
                {x}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Form;
