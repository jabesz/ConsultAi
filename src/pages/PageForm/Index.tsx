import { useState, useContext } from "react";
import { AuthContext } from "../../context/Context";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../components/Logo/assets/LogoMenor.png";
import Button from "../../components/Button/Index";
import SubTitle from "../../components/SubTitle/Index";
import Title from "../../components/Title/Index";
import Logo from "../../components/Logo/Index";
import MainContainer from "../../components/BackContainer/Index";
import Container from "../../components/FrontContainer/Index";
import DigitizationField from "../../components/DigitizationField/Index";

const BlueText = styled.span`
  color: #120a8f;
`;

export default function PageForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (email && password) {
      try {
        await login(email, password);
        navigate("/home");
      } catch (error) {
        console.error("Falha no login. Verifique as credenciais.", error);
      }
    }
  };

  return (
    <MainContainer>
      <Container>
        <Link to="/home">
          <Logo src={logo} alt="Logo da empresa" />
        </Link>
        <Title color="#6B6E71">Faça login em sua conta</Title>
        <DigitizationField
          valor={email}
          tipo="text"
          placeholder="Insira seu endereço de email"
          onChange={setEmail}
          label="Email"
        />
        <DigitizationField
          valor={password}
          tipo="password"
          placeholder="Insira sua senha"
          onChange={setPassword}
          label="Senha"
        />
        <Button onClick={handleLogin}>Entrar</Button>
        <SubTitle color="#000000">
          <a
            href="/esqueci-senha"
            style={{ color: "#000000", textDecoration: "none" }}
          >
            Esqueceu sua senha?
          </a>
        </SubTitle>
        <SubTitle color="#000000">
          Ainda não tem conta?
          <a
            href="/cadastro"
            style={{ color: "#120a8f", textDecoration: "none" }}
          >
            <BlueText> Faça seu cadastro!</BlueText>
          </a>
        </SubTitle>
      </Container>
    </MainContainer>
  );
}