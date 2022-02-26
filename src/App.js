import React from "react";

import { AiOutlineBgColors } from "react-icons/ai";
import logo from "./logoPhong.jpg";
import "./App.css";
import ListTodo from "./component/listTodo";

export const StoreContext = React.createContext();
export const initialTodoList = [];

function App() {
  const [dataTodoList, setdataTodoList] = React.useState(initialTodoList);
  const [todo, setTodo] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [todoColor, setTodoColor] = React.useState("blue");

  const addItemTodo = () => {
    if (todo !== "") {
      setIsError(false);
      let temp = dataTodoList.concat([
        { content: todo.toString(), color: todoColor },
      ]);
      setdataTodoList(temp);
    } else setIsError(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>App Todo List</div>
        <div className="my_logo">
          <img className="logo" src={logo} alt=""></img>
        </div>
      </header>
      <div className="main">
        <div className="form">
          <div className="form-title">Todo List</div>

          <StoreContext.Provider value={dataTodoList}>
            <div className="action">
              <input
                type="text"
                className="form-input"
                name="form-input"
                placeholder="Add a todo"
                onChange={(e) => setTodo(e.target.value.trim())}
                suffix={<AiOutlineBgColors />}
              />
              <button className="form-button" onClick={addItemTodo}>
                Add
              </button>
            </div>
            {isError && <div className="error">Enter something !!!</div>}
            <ListTodo />
          </StoreContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
