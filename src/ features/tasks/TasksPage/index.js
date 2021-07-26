import { Header } from "../../../common/Header/Header";
import { Form } from "./Form/Form";
import { Section } from "../../../common/Section/Section";
import { StyledContainer } from "../../../common/Container/styled";
import { Buttons } from "./Buttons/Buttons";
import { TaskList } from "./TaskList/TaskList";
import  { ApiButton }from "./ApiButton/index";
import { Search } from "./Search/index";

export const TasksPage = () => {
  return (
    <StyledContainer>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        sampleTasks={<ApiButton />}
        body={<Form />}
      />
        <Section
        title="Wyszukiwarka"
        body={<Search />}
      />

      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons />}
        body={<TaskList />}
      />
    </StyledContainer>
  );
};
