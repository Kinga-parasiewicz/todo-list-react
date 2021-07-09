import styled from "styled-components";

export const StyledSection = styled.section`
  margin-bottom: 10px;
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  padding-right: 10px;
  margin: 0 0 1px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.horizontal}px) {
    flex-direction: column;
  }
`;

export const StyledTitle = styled.h2`
  padding: 15px 17px;
  font-size: 25px;
  margin: 0px;
`;
