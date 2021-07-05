import { useSelector, useDispatch } from "react-redux";
import { StyledTasks, TasksButton, Item, Content } from "./styled";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";

export const TaskList = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <StyledTasks>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <TasksButton
            toggleDone
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✔️" : ""}
          </TasksButton>
          <Content done={task.done}>{task.content}</Content>
          <TasksButton remove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </TasksButton>
        </Item>
      ))}
    </StyledTasks>
  );
};
