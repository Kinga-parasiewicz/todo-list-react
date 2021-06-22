import styled from "styled-components";

export const Name = styled.h1`
  color:${({theme}) =>theme.color.black};
  margin-top: 2px;
  margin-bottom: 2px;
  padding: 20px;
  background-color: ${({theme}) =>theme.color.white};
`;
