import React from "react";
import { StyledTasks, TasksButton, Item, Content } from "./styled";
export const Tasks = ({ tasks, hideDone }) => (
  <StyledTasks>
    {tasks.map((task) => (
      <Item key={task.id} hidden={task.done && hideDone}>
        <TasksButton toggleDone >{task.done ? "✔️" : ""}</TasksButton>
        <Content done={task.done}>{task.content}</Content>
        <TasksButton remove >🗑</TasksButton>
      </Item>
    ))}
  </StyledTasks>
);