import React from "react";
import {
  AiFillEdit,
  AiFillCloseCircle,
  AiOutlineBgColors,
} from "react-icons/ai";

import { StoreContext } from "../App";
function ListTodo({ isUpdate, setIsUpdate }) {
  const [dataTodoList, setdataTodoList] = React.useContext(StoreContext);
  const [contentUpdate, setContentUpdate] = React.useState("");
  const [recordUpdate, setRecordUpdate] = React.useState("");

  const handleUpdateItemTodo = (record) => {
    setRecordUpdate(record);
    setIsUpdate(true);
  };

  const doneUpdateItemTodo = () => {
    setIsUpdate(false);
  };

  const updateItemTodo = async (record) => {
    let temp = dataTodoList.filter((item) => item.content !== record.content);
    let temp2 = temp.concat([
      { content: contentUpdate.toString(), color: "blue" },
    ]);
    console.log("temp2", temp2);

    await setdataTodoList(temp2);
    await doneUpdateItemTodo();
  };

  const handleDeleteItemTodo = (record) => {
    let temp = dataTodoList.filter((item) => item.content !== record.content);
    setdataTodoList(temp);
  };

  return (
    <>
      <ul className="list-todo">
        {dataTodoList.map((item, index) => (
          <li
            className={`item-todo ${item.color} ${
              isUpdate 
                ? "item-update"
                : ""
            }`}
            key={index}
          >
            {isUpdate && recordUpdate.content === item.content ? (
              <>
                <input
                  type="text"
                  className="form-input--update"
                  name="form-input"
                  placeholder="Add a todo"
                  onChange={(e) => setContentUpdate(e.target.value.trim())}
                  suffix={<AiOutlineBgColors />}
                  // value={isUpdate ? item.content : contentUpdate}
                />
                <div className="d-flex">
                  <div
                    className="icon icon-update"
                    onClick={() => {
                      handleUpdateItemTodo(item);
                    }}
                  >
                    <AiOutlineBgColors />
                  </div>
                  <div
                    className="btn-update"
                    onClick={() => {
                      updateItemTodo(item);
                    }}
                  >
                    Update
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="content">{item.content}</div>
                <div className="d-flex">
                  <div
                    className="icon icon-update"
                    onClick={() => {
                      handleUpdateItemTodo(item);
                    }}
                  >
                    <AiFillEdit />
                  </div>
                  <div
                    className="icon"
                    onClick={() => {
                      handleDeleteItemTodo(item);
                    }}
                  >
                    <AiFillCloseCircle />
                  </div>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListTodo;
