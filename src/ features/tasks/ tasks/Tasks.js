import React, { useState } from "react";
import { Header } from "../../../common/Header/Header";
import { Form } from "../ tasks/Form/Form";
import { Section } from "../../../common/Section/Section";
import { StyledContainer } from "../../../common/Container/styled";
import { Buttons } from "../ tasks/Buttons/Buttons";
import { TaskList } from "../ tasks/TaskList/TaskList";
import { useTasks } from "../ tasks/useTasks";


export const Tasks = () => {
  const [hideDone, setHideDone] = useState(false);
 
  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

 const {
   tasks,
   removeTask, 
   toggleTaskDone,
   setAllDone,
   addNewTask
 } = useTasks();

  return (
    <StyledContainer>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
        body={
          <TaskList
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
      />
    </StyledContainer>
  );
};


