import React, { useState } from "react";
import { Header } from "./Header/Header";
import { Form } from "./Form/Form";
import { Section } from "./Section/Section";
import { StyledContainer } from "./Container/styled";
import { Buttons } from "./Buttons/Buttons";
import { Tasks } from "./Task/Tasks";
import { useTasks } from "./useTasks";
function App() {
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
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
      />
    </StyledContainer>
  );
}

export default App;
