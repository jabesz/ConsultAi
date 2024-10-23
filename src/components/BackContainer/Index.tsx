import { styled } from "styled-components";
import imageBackGround from "../Logo/assets/ImgBackGround.png";

const MainContainer = styled.div`
  background-image: url(${imageBackGround});
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default MainContainer;
