import React from "react";
import { StyledSection, StyledHeaderContainer, StyledTitle } from "./styled";

export const Section = ({ title, body, extraHeaderContent, sampleTasks }) => {
  return (
    <StyledSection>
      <StyledHeaderContainer>
        <StyledTitle>{title}</StyledTitle>
        {sampleTasks}
        {extraHeaderContent}
      </StyledHeaderContainer>
      {body}
    </StyledSection>
  );
};
