import React from "react";
import { StyledForm, Button, Input } from "./styled";

export const Form = () => {
  return (
    <StyledForm>
      <Input
        placeholder="Co jest do zrobienia"   
      />
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  );
};