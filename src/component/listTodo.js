import React from "react";
import { AiFillEdit, AiFillCloseCircle } from "react-icons/ai";

import { StoreContext } from "../App";
function ListTodo() {
  const [dataTodoList, setdataTodoList] = React.useContext(StoreContext);

  const updateItemTodo = () => {};

  const deleteItemTodo = (record) => {
    let temp = dataTodoList.filter((item) => item.content !== record.content);
    setdataTodoList(temp);
  };

  return (
    <>
      <ul className="list-todo">
        {dataTodoList.map((item, index) => (
          <li className={`item-todo + ${item.color}`} key={index}>
            <div className="content">{item.content}</div>
            <div className="d-flex">
              <div
                className="icon icon-update"
                onClick={() => {
                  updateItemTodo(item);
                }}
              >
                <AiFillEdit />
              </div>
              <div
                className="icon"
                onClick={() => {
                  deleteItemTodo(item);
                }}
              >
                <AiFillCloseCircle />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListTodo;
