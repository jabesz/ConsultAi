import Header from "../../components/Header/Index";
import MainLibrary from "../../components/MainLibrary/Index";
import Footer from "../../components/Footer/Index";
import Banner from "../../components/Banner/Index";
import Title from "../../components/Title/Index";

const PageLibrary = () => {
  return (
    <>
      <Header />
      <Banner />
      <Title
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      >
        Biblioteca de conteúdo
      </Title>
      <MainLibrary />
      <Footer />
    </>
  );
};

export default PageLibrary;
