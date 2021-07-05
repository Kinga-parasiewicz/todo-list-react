import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { StyledForm, Button, Input } from "./styled";
import { addTask } from "../tasksSlice";

export const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const inputRef = useRef(null);
  const inputFocus = () => {
    inputRef.current.focus();
  };
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() === "") {
      return;
    }
    setNewTaskContent("");
    inputFocus();
    dispatch(
      addTask({
        content: newTaskContent.trim(),
        done: false,
        id: nanoid(),
      })
    );
  };
  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        placeholder="Co jest do zrobienia"
        ref={inputRef}
      />
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  );
};
