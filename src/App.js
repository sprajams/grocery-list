import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.scss";

function App() {
  const [list, setList] = useState([]);

  // function to allow user to delete item from the list
  const toDelete = (index) => {
    setList((curr) => {
      // Clone array to avoid directly mutating state variable
      const cloned = [...curr];
      // Do what you need to cloned
      cloned.splice(index, 1);
      return cloned;
    });
  };
  return (
    <div className="outer">
      <div>
        <Form setList={setList} />
        <List list={list} toDelete={toDelete} />
      </div>
    </div>
  );
}

export default App;
