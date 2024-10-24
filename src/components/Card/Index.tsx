import { styled } from "styled-components";
import SubTitle from "../SubTitle/Index";
import Title from "../Title/Index";

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
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #120a8f;
  border-radius: 10px;
  z-index: 1;
`;

interface CardProps {
  image: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ image, title }) => {
  return (
    <CardContainer>
      <BackgroundImage src={image} alt={`imagem do evento ${title}`} />
      <TextOverlay>
        <Title color="white">{title}</Title>
        <SubTitle color="white"></SubTitle>
      </TextOverlay>
    </CardContainer>
  );
};

export default Card;