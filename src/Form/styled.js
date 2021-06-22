import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.color.white};
  padding: 15px 15px;

  @media (max-width: ${({ theme }) => theme.breakpoint.horizontal}px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  flex-grow: 0.8;
  padding: 10px;
  height: 40px;
  margin-right: 10px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  padding: 0px 10px;
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.teal};
  background: ${({ theme }) => theme.color.teal};
  font-size: 18px;
  flex-grow: 0.2;
  transition: 2s, transform 1s;

  &:hover {
    background-color: ${({ theme }) => theme.color.lightTeal};
    transform: scale(1.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.horizontal}px) {
    flex-basis: 100%;
    margin: 20px 0;
    padding: 10px;
  }
`;
