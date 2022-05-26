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

  //allows user to add ingredients to their shopping list not found in suggestions, clear out input
  const addItem = (e) => {
    e.preventDefault();
    if (ingredient.length > 1) {
      setList((oldArray) => [...oldArray, ingredient]);
      setIngredient("");
    }
  };

  return (
    <div className={styles.out}>
      <h1>My shopping list:</h1>

      <div className={styles.wrap}>
        <form className={styles.form} onSubmit={addItem}>
          <input
            type="text"
            id="name"
            value={ingredient}
            onChange={handleChange}
            className={styles.input}
          ></input>
        </form>

        <ul
          className={
            data.length > 1
              ? `${styles.suggestionList} ${styles.suggestionListOutlined}`
              : `${styles.suggestionList}`
          }
        >
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
    </div>
  );
}

export default Form;
