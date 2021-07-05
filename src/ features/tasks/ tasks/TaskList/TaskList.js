import React from "react";
import { StyledTasks, TasksButton, Item, Content } from "./styled";
export const TaskList = ({ tasks, hideDone, toggleTaskDone, removeTask }) => (
  <StyledTasks>
    {tasks.map((task) => (
      <Item key={task.id} hidden={task.done && hideDone}>
        <TasksButton toggleDone onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✔️" : ""}
        </TasksButton>
        <Content done={task.done}>{task.content}</Content>
        <TasksButton remove onClick={() => removeTask(task.id)}>
          🗑
        </TasksButton>
      </Item>
    ))}
  </StyledTasks>
);
