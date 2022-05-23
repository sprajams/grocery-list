import Debounce from "./components/Debounce";
import Form from "./components/Form";
import styles from "./App.scss";

function App() {
  return (
    <div className={styles.App}>
      <Debounce />
      <Form />
    </div>
  );
}

export default App;
