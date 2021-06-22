import styled from "styled-components";

export const StyledButtons = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.horizontal}px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  color: teal;
  font-size: 18px;
  background-color: ${({ theme }) => theme.color.white};
  border: none;
  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.color.lightTeal};
  }

  &:active {
    color: ${({ theme }) => theme.color.darkTeal};
  }
  &:disabled {
    color: ${({ theme }) => theme.color.gallery};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.horizontal}px) {
    flex-basis: 100%;
    margin: 10px 0;
  }
`;
