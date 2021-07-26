import { useDispatch } from "react-redux";
import { Button } from "../Buttons/styled";
import { fetchExampleTasks } from "../../tasksSlice";

export const ApiButton = () => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(fetchExampleTasks())}>
      Pokaż przykładowe zadania
    </Button>
  );
};
