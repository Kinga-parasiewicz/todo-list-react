import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasksState,
  toggleHideDone,
  setAllDone,
  selectHideDone,
} from "../../tasksSlice";
import { Button, StyledButtons } from "./styled";

export const Buttons = () => {
  const { tasks } = useSelector(selectTasksState);
  const { hideDone } = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <StyledButtons>
      {tasks.length > 0 && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaz" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={tasks.every(({ done }) => done)}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </StyledButtons>
  );
};
