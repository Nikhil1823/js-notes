import React, { useReducer, useState } from "react";
const ACTION = {
  ADD: "add_todo",
  REMOVE: "remove_todo",
};

const reducer = (prevState, action) => {
  switch (action.type) {
    case ACTION.ADD:
      return { prevTask: [...prevState.prevTask, action.payload] };

    case ACTION.REMOVE:
      return {
        prevTask: prevState.prevTask.filter((item) => item != action.payload),
      };
  }
};

const [tasks, dispatch] = useReducer(reducer, { prevTask: [], type: "" });
const TodoReducerComp = () => {
  const [newTask, setNewTask] = useState("");
  return (
    <div>
      <div className="input">
        <label htmlFor="">Enter a task :</label>
        <input
          type="text"
          name=""
          id=""
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch({ type: ACTION.ADD, payload: newTask });
            setNewTask("");
          }}
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.prevTask.length > 0
          ? tasks.prevTask.map((task) => {
              return (
                <li>
                  <span>{task}</span>
                  <button
                    onClick={() =>
                      dispatch({ type: ACTION.REMOVE, payload: task })
                    }
                  >
                    Complete
                  </button>
                </li>
              );
            })
          : ""}
      </ul>
    </div>
  );
};

export default TodoReducerComp;
