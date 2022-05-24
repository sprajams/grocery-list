import styles from "./styles.module.scss";

function ListItem({ item, toDelete }) {
  return (
    <div className={styles.outter}>
      <div className={styles.wrapper}>
        <button className={styles.button}>✓</button>
        <div>{item}</div>
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
