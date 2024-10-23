import Banner from "../../components/Banner/Index";
import Footer from "../../components/Footer/Index";
import Header from "../../components/Header/Index";
import TagPost from "../../components/Post/Index";
import Title from "../../components/Title/Index";

const Post = () => {
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
        MOTIVACIONAL
      </Title>
      <TagPost />
      <Footer />
    </>
  );
}

export default Post;
