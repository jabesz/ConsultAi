import { styled } from "styled-components";
import SubTitle from "../SubTitle/Index";
import Title from "../Title/Index";
import siara from "./assets/siaratech.jpg";

const CardContainer = styled.div`
  position: relative;
  max-width: 1120px;
  width: 100%;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
`;

const TextOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza horizontalmente */
  justify-content: center; /* Centraliza verticalmente */
  padding: 1rem;
  background-color: #120a8f;
  border-radius: 10px;
  z-index: 1;
`;

const Card = () => {
  return (
    <CardContainer>
      <BackgroundImage src={siara} alt="imagem do evento siara tech summit" />
      <TextOverlay>
        <Title color="white">Siara Tech Summit</Title>
        <SubTitle color="white">Data: 25 de Julho, 2024</SubTitle>
      </TextOverlay>
    </CardContainer>
  );
};

export default Card;
