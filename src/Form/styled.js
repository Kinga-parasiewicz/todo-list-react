import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  background: white;
  padding: 15px 15px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  flex-grow: 0.8;
  padding: 10px;
  height: 40px;
  margin-right: 10px;
  border: 1px solid gray;
  padding: 0px 10px;
`;

export const Button = styled.button`
  color: white;
  border: 1px solid teal;
  background: teal;
  font-size: 18px;
  flex-grow: 0.2;
  transition: 2s, transform 1s;

  &:hover {
    background-color: #0c9696;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
    margin: 20px 0;
    padding: 10px;
  }
`;
