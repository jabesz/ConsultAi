import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./assets/Logo.png";

const HeaderStyles = styled.header`
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 8em;
  height: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1em;
    height: auto;
  }

  @media (max-width: 480px) {
    padding: 0.5em;
  }
`;

const Logo = styled.img`
  height: 190px;
  width: auto;

  @media (max-width: 768px) {
    height: 150px;
  }

  @media (max-width: 480px) {
    height: 100px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-grow: 0.1;
  gap: 2em;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1em;
  }
`;

const ButtonStyled = styled.button`
  background-color: #120a8f;
  border-radius: 8px;
  padding: 17px 30px;
  color: #fff;
  border: none;
  margin-top: 1em;
  font-weight: 700;
  line-height: 19px;
  margin: 2px;

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

interface FieldProps {
  largura?: string;
  hasIcon?: boolean;
}

const Field = styled.input<FieldProps>`
  background: #f0f0f0;
  margin: 1em 0;
  box-sizing: border-box;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;
  width: ${({ largura }) => largura || "100%"};
  padding: 16px 16px 16px ${({ hasIcon }) => (hasIcon ? "40px" : "16px")};
  border: 1px solid;

  @media (max-width: 480px) {
    padding: 12px 14px;
    width: 100%;
  }
`;

const SubTitle = styled.h3`
  color: #120a8f;
  font-weight: 700;
  font-size: 20px;
  margin: 0px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Header = () => {
  return (
    <HeaderStyles>
      <Link to="/">
        <Logo src={logo} alt="Logo da empresa" />
      </Link>
      <Container>
        <Link to="/sobre" style={{ textDecoration: "none" }}>
          <SubTitle role="link" aria-label="Sobre">
            Sobre
          </SubTitle>
        </Link>
        <Link to="/cadastro" style={{ textDecoration: "none" }}>
          <SubTitle role="link" aria-label="Cadastro">
            Cadastro
          </SubTitle>
        </Link>
        <Field type="text" placeholder="Digite sua busca" />
        <Link to="/login" style={{ textDecoration: "none" }}>
          <ButtonStyled>Login</ButtonStyled>
        </Link>
      </Container>
    </HeaderStyles>
  );
};

export default Header;