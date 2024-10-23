import { useState } from "react";
import { Link } from "react-router-dom";
import DigitizationField from "../DigitizationField/Index";
import Button from "../Button/Index";
import styled from "styled-components";
import chart from "./assets/chart.png";
import eventos from "./assets/star.png";
import library from "./assets/book.png";
import agendar from "./assets/agendar.png";

const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin: 2rem auto;
  max-width: 1120px;
  width: 90%;
`;

const FieldsContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin: 2rem auto;
  justify-content: center;
  max-width: 100%;
`;

const StyledButton = styled(Button)`
  background-color: #e7ebef;
  color: #120a8f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 14rem;
  padding: 1rem;
  text-align: center;
  border-radius: 8px;
  text-decoration: none;
  border: none;

  img {
    margin-bottom: 0.625rem;
    width: 48px;
    height: 48px;
  }

  @media (max-width: 768px) {
    width: 12rem;
    padding: 0.75rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.5rem;
  }
`;

const StyledParagraph = styled.p`
  background-color: #f0f0f0f0;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5;
  margin: 2rem auto;
  max-width: 60%;
  color: #333;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    max-width: 90%;
  }
`;

const Main = () => {
  const [espec, setEspec] = useState("");
  const [loc, setLoc] = useState("");

  return (
    <>
      <Container>
        <FieldsContainer>
          <DigitizationField
            valor={espec}
            onChange={setEspec}
            placeholder="Digite sua especialidade"
            largura="110%"
            hasIcon={true}
            iconType="search"
          />
          <DigitizationField
            valor={loc}
            onChange={setLoc}
            placeholder="Digite sua localidade"
            largura="110%"
            hasIcon={true}
          />
          <Button
            style={{
              padding: "1rem ",
              fontSize: "14px",
              margin: "10px",
              minWidth: "8rem",
            }}
          >
            Buscar
          </Button>
        </FieldsContainer>
      </Container>

      <ButtonContainer>
        <StyledButton as={Link} to="/agendar-postagem">
          <img src={agendar} alt="Encontre especialista" />
          Agendar Postagem
        </StyledButton>
        <StyledButton as={Link} to="/Events">
          <img src={eventos} alt="Agende Consulta" />
          Eventos
        </StyledButton>
        <StyledButton as={Link} to="/Engagement">
          <img src={chart} alt="Análise de engajamento" />
          Análise de Engajamento
        </StyledButton>
        <StyledButton as={Link} to="/Library">
          <img src={library} alt="Avalie Serviço" />
          Biblioteca de conteúdo
        </StyledButton>
      </ButtonContainer>
      <StyledParagraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </StyledParagraph>
    </>
  );
};

export default Main;
