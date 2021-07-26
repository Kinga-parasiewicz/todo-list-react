import styled from "styled-components";

export const StyledSection = styled.section`
  margin-bottom: 5px;
  padding: 15px;
  background-color: ${({ theme }) => theme.color.white};
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  padding: 0px 0px 5px 0px;
  margin-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gallery};

  @media (max-width: ${({ theme }) => theme.breakpoint.horizontal}px) {
    flex-direction: column;
  }
`;

export const StyledTitle = styled.h2`
  padding: 15px 17px;
  font-size: 25px;
  margin: 0px;
`;
