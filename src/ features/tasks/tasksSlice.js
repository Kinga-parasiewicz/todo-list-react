import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload: taskId}) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    setAllDone: ({ tasks }) => {
      for (const task of tasks) {
        task.done = true;
      }
    },
    removeTask: ({ tasks }, { payload }) => {
      const index = tasks.findIndex(({ id }) => id === payload);
      tasks.splice(index, 1);
    },
    fetchExampleTasks:() => {},

    setTasks: (state, {payload: tasks}) => {
      state.tasks = tasks;
    },
  },
});
export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  setAllDone,
  removeTask,
  fetchExampleTasks,
  setTasks,
} = tasksSlice.actions;

export const selectTasks = (state) => state.tasks;
export const selectHideDone = state => selectTasks(state).hideDone;
export const getTaskById = (state, taskId) => selectTasks(state).find(({ id }) => id === taskId);


export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasks(state)

  if (!query || query.trim() === "") {
      return tasks;
  }
  return tasks.filter(({ content }) =>
      content.toUpperCase().includes(query.trim().toUpperCase()))
};
export default tasksSlice.reducer;