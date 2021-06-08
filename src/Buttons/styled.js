import styled from "styled-components";

export const StyledButtons = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  color: teal;
  font-size: 18px;
  background-color: #fff;
  border: none;
  transition: 0.5s;

  &:hover {
    color: hsl(180, 100%, 40%);
  }

  &:active {
    color: hsl(180, 100%, 15%);
  }
  &:disabled {
    color: #ccc;
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
    margin: 10px 0;
  }
`;
