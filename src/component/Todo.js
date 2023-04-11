import React, {  useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deletTodo, removeTodo } from "../action/index";
import "./newTodo.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
 

  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();
  function handleChange(e) {
    e.preventDefault();
    dispatch(addTodo(inputData), setInputData(""));
  }
    return (
    <>
      <form onSubmit={handleChange} className="new-item-form">
        <div className="form-row">
          <label 
          htmlFor="item"
          className="header"
          >New Item</label>
          <input
            value={inputData}
            placeholder="Enter a value🤘"
            onChange={(event) => {
              setInputData(event.target.value);
            }}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>

      <div className="new-item-form">
        <button className="btn rmbtn" onClick={() => dispatch(removeTodo())}>
          Remove List
        </button>
      </div>

      {list.map((elem) => {
        return (
          <ul className="list">
            <li key={elem.id}>
              <label >{elem.data}</label>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(deletTodo(elem.id))}
              >
                Delete
              </button>
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default Todo;
