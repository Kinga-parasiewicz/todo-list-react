import React from "react";
import { Button, StyledButtons } from "./styled";

export const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <StyledButtons>
    {tasks.length > 0 && (
      <>
        <Button onClick={toggleHideDone}>
          {hideDone ? "Pokaz" : "Ukryj"} ukończone
        </Button>
        <Button onClick={setAllDone} disabled={tasks.every(({ done }) => done)}>
          Ukończ wszystkie
        </Button>
      </>
    )}
  </StyledButtons>
);
