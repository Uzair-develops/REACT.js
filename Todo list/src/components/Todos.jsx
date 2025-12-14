import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todoSlice";
import '../App.css';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleSave = (id) => {
    dispatch(updateTodo({ id, text: editText }));
    setEditId(null);
    setEditText("");
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="todo-item"
          
        >
          
          {editId === todo.id ? (
            <input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="et"
            />
          ) : (
            <div className="text-white text-lg font-medium">
              {todo.text}
            </div>
          )}

          <div className="flex items-center gap-3">

            {/* DELETE BUTTON */}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="del"
            >
              🗑
            </button>

            {/* EDIT BUTTON or SAVE BUTTON */}
            {editId === todo.id ? (
              <button
                onClick={() => handleSave(todo.id)}
                className="edit"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => {
                  setEditId(todo.id);
                  setEditText(todo.text);
                }}
                className="edit"
              >
                Edit
              </button>
            )}

          </div>
        </li>
      ))}
    </ul>
  );
}

export default Todos;