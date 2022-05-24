import { useState } from "react";
import styles from "./styles.module.scss";

function ListItem({ item, toDelete, index }) {
  const [check, setCheck] = useState(false);

  return (
    <div
      className={check ? ` ${styles.disabled} ${styles.outter}` : styles.outter}
    >
      <div className={styles.wrapper}>
        <button
          className={`${styles.button} ${styles.checkButton}`}
          // user can click to cross out and disable/gray out the item
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
        onClick={() => {
          toDelete(index);
        }}
      >
        x
      </button>
    </div>
  );
}
export default ListItem;
