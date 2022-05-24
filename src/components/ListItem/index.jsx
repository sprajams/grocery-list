import { useState } from "react";
import styles from "./styles.module.scss";

function ListItem({ item, toDelete }) {
  const [check, setCheck] = useState(false);

  return (
    <div
      className={check ? ` ${styles.disabled} ${styles.outter}` : styles.outter}
    >
      <div className={styles.wrapper}>
        <button
          className={`${styles.button} ${styles.checkButton}`}
          onClick={() => {
            setCheck(!check);
          }}
        >
          ✓
        </button>
        <div className={check ? styles.strike : null}>{item}</div>
      </div>
      <button
        className={`${styles.button} ${styles.deleteButton}`}
        onClick={toDelete}
      >
        x
      </button>
    </div>
  );
}
export default ListItem;
