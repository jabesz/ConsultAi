import { styled } from "styled-components";
import imageBackGround from "./assets/ImgBackGround.png";

const BannerContainer = styled.div`
  width: 100%;
  height: 50vh;
  overflow: hidden;
  position: relative;
`;

const BannerStyled = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Banner = () => {
  return (
    <BannerContainer>
      <BannerStyled src={imageBackGround} alt="banner" />
    </BannerContainer>
  );
};

export default Banner;
