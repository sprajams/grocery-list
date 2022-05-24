import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.scss";

function App() {
  const [list, setList] = useState([]);
  console.log(list, "list");
  return (
    <div className="outer">
      <div>
        <Form setList={setList} />
        <List list={list} />
      </div>
    </div>
  );
}

export default App;
