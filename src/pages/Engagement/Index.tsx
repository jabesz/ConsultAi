import Footer from "../../components/Footer/Index"
import Header from "../../components/Header/Index"
import Chart from '../../components/Chart/Index';
import Banner from "../../components/Banner/Index";
import Title from "../../components/Title/Index";

const Engagement = () => {
  return (
    <>
      <Header />
      <Banner />
      <Title
        style={{
          position: "absolute",
          top: "36%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      >
        Análise de engajamento
      </Title>
      <Chart />
      <Footer />
    </>
  );
}

export default Engagement