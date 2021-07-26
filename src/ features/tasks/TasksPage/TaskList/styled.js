import styled, { css } from "styled-components";

export const StyledTasks = styled.ul`
  background-color: ${({ theme }) => theme.color.white};
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
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
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
  color: ${({ theme }) => theme.color.white};
  border: none;
  padding: 5px;
  width: 28px;
  height: 28px;
  transition: 0.5s;

  ${({ remove }) =>
    remove &&
    css`
      background-color: ${({ theme }) => theme.color.red};
    `}
  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: ${({ theme }) => theme.color.green};
    `}
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

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  transition: 0.5s;
  &:hover {
    filter: brightness(115%);
  }
  &:active {
    filter: brightness(130%);
  }
`;
