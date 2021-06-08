import React from "react";
import { StyledSection, StyledHeaderContainer, StyledTitle } from "./styled";

export const Section = ({ title, body, extraHeaderContent }) => {
  return (
    <StyledSection>
      <StyledHeaderContainer>
        <StyledTitle>{title}</StyledTitle>
        {extraHeaderContent}
      </StyledHeaderContainer>
      {body}
    </StyledSection>
  );
};