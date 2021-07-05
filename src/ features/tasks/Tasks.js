import React from "react";
import { Header } from "../../common/Header/Header";
import { Form } from "../tasks/Form/Form";
import { Section } from "../../common/Section/Section";
import { StyledContainer } from "../../common/Container/styled";
import { Buttons } from "../tasks/Buttons/Buttons";
import { TaskList } from "../tasks/TaskList/TaskList";

export const Tasks = () => {
  return (
    <StyledContainer>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons />}
        body={<TaskList />}
      />
    </StyledContainer>
  );
};
