import React from "react";

function App() {
  return (
    <StyledContainer>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        extraHeaderContent={
        <Buttons tasks={tasks}
        hideDone={hideDone} 
        />}
        body={
        <Tasks tasks={tasks} 
        hideDone={hideDone}
        />}
      />
    </StyledContainer>
  );
}

export default App;
