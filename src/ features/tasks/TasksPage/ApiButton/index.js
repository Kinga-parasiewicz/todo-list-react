import { useSelector, useDispatch } from "react-redux";
import { Button } from "../Buttons/styled";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";

export const ApiButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <Button isdisabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
      {loading ? "loading..." : "Pokaż przykładowe zadania"}
    </Button>
  );
};
