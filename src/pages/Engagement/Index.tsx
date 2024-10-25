import Footer from "../../components/Footer/Index";
import Header from "../../components/Header/Index";
import HeaderLogin from "../../components/HeaderLogin/Index";
import Chart from "../../components/Chart/Index";
import Banner from "../../components/Banner/Index";
import Title from "../../components/Title/Index";
import { styled } from "styled-components";
import { useAuth } from "../../context/Context"; 

const StyledTitle = styled(Title)`
  position: absolute;
  top: 36%;
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
    top: 50%;
  }
`;

const Engagement = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated ? <HeaderLogin /> : <Header />}{" "}
      <Banner />
      <StyledTitle>Análise de engajamento</StyledTitle>
      <Chart />
      <Footer />
    </>
  );
};

export default Engagement;
