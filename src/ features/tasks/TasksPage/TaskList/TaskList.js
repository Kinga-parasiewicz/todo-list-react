import { useSelector, useDispatch } from "react-redux";
import { StyledTasks, TasksButton, Item, Content, StyledLink } from "./styled";
import {
  selectHideDone,
  toggleTaskDone,
  removeTask,
  selectTasksByQuery,
} from "../../tasksSlice";
import { toTask } from "../../../../routes";
import { useQueryParameter } from "./../../queryParameters";
import { searchQueryParamName } from "./../searchQueryParamName";

export const TaskList = () => {
  const query = useQueryParameter(searchQueryParamName);
  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
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
          <Content done={task.done}>
            <StyledLink to={toTask({ id: task.id })}>{task.content}</StyledLink>
          </Content>
          <TasksButton remove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </TasksButton>
        </Item>
      ))}
    </StyledTasks>
  );
};
