import { styled } from "styled-components";
import Header from "../../components/Header/Index";
import DigitizationField from "../../components/DigitizationField/Index";
import Button from "../../components/Button/Index";
import { useState } from "react";
import Banner from "../../components/Banner/Index";
import Title from "../../components/Title/Index";
import Card from "../../components/Card/Index";
import Footer from "../../components/Footer/Index";
import siara from "../../components/Card/assets/SiaraTech.jpeg";
import rdsummit from "../../components/Card/assets/rdsummit.jpeg";
import firefestival from "../../components/Card/assets/firefestival.png";
import websummit from "../../components/Card/assets/websummit.jpeg";
import { useAuth } from "../../context/Context";
import HeaderLogin from "../../components/HeaderLogin/Index";

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

const StyledDigitizationField = styled(DigitizationField)`
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
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

const StyledTitle = styled(Title)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  z-index: 1;
  font-size: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    top: 40%;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    top: 32%;
  }
`;

const Events = () => {
  const [events, setEvents] = useState("");
  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated ? <HeaderLogin /> : <Header />}
      <BannerContainer>
        <Banner />
        <StyledTitle>Eventos</StyledTitle>
      </BannerContainer>
      <Container>
        <FieldsContainer>
          <StyledDigitizationField
            valor={events}
            onChange={setEvents}
            placeholder="Busque por eventos"
            hasIcon={true}
          />
          <Button>Buscar</Button>
        </FieldsContainer>
      </Container>
      <Title style={{ marginBottom: "1.5rem" }}>EVENTOS</Title>
      <CardContainer>
        <Card image={siara} title="Siara Tech Summit" />
        <Card image={rdsummit} title="Rd Summit" />
        <Card image={firefestival} title="Brasil Summit" />
        <Card image={websummit} title="Web Summit" />
      </CardContainer>
      <StyledFooter>
        <Footer />
      </StyledFooter>
    </>
  );
};

export default Events;