import React from "react";
import { Header } from "../../../common/Header/Header";
import { Section } from "../../../common/Section/Section";
import { StyledContainer } from "./../../../common/Container/styled";
import { useParams } from "react-router-dom";
import { getTaskById } from "../tasksSlice";
import { useSelector } from "react-redux";

export const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <StyledContainer>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono zadania!"}
        body={
          task && (
            <>
              <strong>Ukończono:</strong> {task.done ? "tak" : "nie"}
            </>
          )
        }
      />
    </StyledContainer>
  );
};
