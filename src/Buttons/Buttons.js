import React from "react";
import { Button, StyledButtons } from "./styled";

export const Buttons = ({ tasks, hideDone,}) => (
  <StyledButtons>
    {tasks.length > 0 && (
      <>
        <Button >{hideDone ? "Pokaz" : "Ukryj"} ukończone</Button>
        <Button  disabled={tasks.every(({ done }) => done)}>
          Ukończ wszystkie
        </Button>
      </>
    )}
  </StyledButtons>
);