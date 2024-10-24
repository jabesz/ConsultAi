import { styled } from "styled-components";
import Header from "../../components/Header/Index";
import DigitizationField from "../../components/DigitizationField/Index";
import Button from "../../components/Button/Index";
import { useState } from "react";
import Banner from "../../components/Banner/Index";
import Title from "../../components/Title/Index";
import Card from "../../components/Card/Index";
import Footer from "../../components/Footer/Index";

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
`;

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

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledFooter = styled.footer`
  margin-top: 2rem;
`;


const Events = () => {
  const [events, setEvents] = useState("");

  return (
    <div>
      <Header />
      <BannerContainer>
        <Banner />
        <Title
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
            zIndex: 1,
          }}
        >
          Eventos
        </Title>
      </BannerContainer>
      <Container>
        <FieldsContainer>
          <DigitizationField
            valor={events}
            onChange={setEvents}
            placeholder="Busque por eventos"
            largura="1070px"
            hasIcon={true}
          />
          <Button>Buscar</Button>
        </FieldsContainer>
      </Container>
      <Title style={{ marginBottom: "1.5rem" }}>EVENTOS</Title>
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
      <StyledFooter>
        <Footer/>
      </StyledFooter>
    </div>
  );
};

export default Events;