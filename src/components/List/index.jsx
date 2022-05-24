import ListItem from "../ListItem";
import styles from "./styles.module.scss";

function List({ list }) {
  return (
    <div className={styles.outter}>
      <div>List:</div>
      <ul className={styles.list}>
        {list.map((elem, i) => {
          return (
            <li key={i}>
              <ListItem item={elem} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
