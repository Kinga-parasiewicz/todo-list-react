import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { TasksPage } from "./ features/tasks/TasksPage";
import { TaskPage } from "./ features/tasks/TaskPage";
import { Author } from "./ features/author/Author";
import { toTask, toTasks, toAuthor } from "./routes";
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
