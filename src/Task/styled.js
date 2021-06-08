import styled, { css } from "styled-components";

export const StyledTasks = styled.ul`
  background-color: #fff;
  padding: 15px;
  list-style-type: none;
  width: 100%;
  margin: 0 auto;
`;

export const Item = styled.li`
  margin: 12px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const TasksButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-content: center;
  color: #fff;
  border: none;
  padding: 5px;
  width: 28px;
  height: 28px;
  transition: 0.5s;

  ${({ remove }) =>
    remove &&
    css`
      background-color: red;
    `}
  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: green;
    `
  }
`;

export const Content = styled.p`
  margin: 0;
  flex-basis: 100%;
  padding: 0 15px;
  word-break: break-word;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;