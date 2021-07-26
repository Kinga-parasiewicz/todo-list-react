import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { TasksPage } from "./ features/tasks/TasksPage/index";
import { TaskPage } from "./ features/tasks/TaskPage/index";
import { Author } from "./ features/author/Author";
import { toTasks, toAuthor, toTask } from "./routes";
import { Navigation } from "./Navigation/index";

export const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path={toTask()}>
        <TaskPage />
      </Route>
      <Route path={toTasks()}>
        <TasksPage />
      </Route>
      <Route path={toAuthor()}>
        <Author />
      </Route>
      <Route>
        <Redirect to={toTasks()} />
      </Route>
    </Switch>
  </HashRouter>
);
