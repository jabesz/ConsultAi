import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Index";
import DigitizationField from "../DigitizationField/Index";
import SubTitle from "../SubTitle/Index";
import Title from "../Title/Index";

const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 15px;
  }
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

const TitleStyled = styled(Title)`
  margin-top: 40px;
  margin-bottom: 20px;
`;

const ButtonStyled = styled(Button)`
  padding: 1rem;
  font-size: 14px;
  min-width: 8rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 12px;
    width: 100%;
  }
`;

const TagPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <>
      <TitleStyled>Agendar Postagem</TitleStyled>
      <Container>
        <FieldsContainer>
          <SubTitle>Título da postagem</SubTitle>
          <DigitizationField
            valor={title}
            onChange={setTitle}
            placeholder="Insira o título"
            largura="110%"
          />
          <SubTitle>Descrição</SubTitle>
          <DigitizationField
            valor={description}
            onChange={setDescription}
            placeholder="Insira a descrição"
            largura="110%"
          />
          <SubTitle>Data</SubTitle>
          <DigitizationField
            tipo="date"
            valor={date}
            onChange={setDate}
            largura="110%"
          />
          <SubTitle>Hora</SubTitle>
          <DigitizationField
            tipo="time"
            valor={time}
            onChange={setTime}
            placeholder="Digite sua localidade"
            largura="110%"
          />
          <ButtonStyled
            style={{
              padding: "1rem ",
              fontSize: "14px",
              margin: "10px",
              minWidth: "8rem",
            }}
          >
            Agendar
          </ButtonStyled>
        </FieldsContainer>
      </Container>
    </>
  );
};

export default TagPost;