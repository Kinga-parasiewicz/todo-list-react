import { StyledContainer } from "../../common/Container/styled";
import { Header } from "../../common/Header/Header";
import { Section } from "../../common/Section/Section";

export const Author = () => (
  <StyledContainer>
    <Header title="O mnie" />
    <Section
      title="Kinga Parasiewicz"
      body={
        <>
          <p>
            Obecnie skończyłam studia na kierunku <strong>Filologia Włoska</strong>.
          </p>
          <p>Od października zaczynam studia podyplomowe na kierunku <strong> Cloud Solution Architect</strong>.</p>
          <p>
            Programowanie aplikacji webowych sprawia mi dużą frajdę i to w tym
            kierunku chciałabym iść.
          </p>
          <p>
            W wolnym czasie biegam, uprawiam rośliny, staram się spędzać czas na
            świeżym powietrzu.
          </p>
        </>
      }
    />
  </StyledContainer>
);
