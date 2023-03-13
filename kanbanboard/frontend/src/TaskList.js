import React, { useState } from "react";
import Task from "./Task";


  return (
    <div>
      <ul>
        {stateTasks.map((task) => (
          <Task
            key={task.no}
            no={task.no}
            name={task.name}
            done={task.done}
            callback={changeTaskStatus}
          />
        ))}
      </ul>
    </div>
  );

export default TaskList;
