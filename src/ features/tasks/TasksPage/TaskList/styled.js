import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

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

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 17px;
  color: ${({ theme }) => theme.color.darkTeal};
  transition: 0.5s;
  &:hover {
    filter: brightness(185%);
  }
  &:active {
    filter: brightness(130%);
  }
`;
