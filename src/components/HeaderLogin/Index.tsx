import { useContext } from "react";
import { AuthContext } from "../../context/Context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./assets/Logo.png";
import perfil from "./assets/account_circle.png";

const HeaderStyles = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 8em;
  height: 100px;

  @media (max-width: 768px) {
    padding: 1em 2em;
    flex-direction: column;
    height: auto;
    gap: 10px;
  }
`;

const Logo = styled.img`
  height: 190px;
  width: auto;

  @media (max-width: 768px) {
    height: 120px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5em;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`;

const ProfileIcon = styled.img`
  height: 40px;
  width: auto;

  @media (max-width: 768px) {
    height: 30px;
  }
`;

const UserName = styled.span`
  font-size: 18px;
  color: #000;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const LogoutButton = styled.button`
  background-color: #120a8f;
  border-radius: 8px;
  padding: 10px 20px;
  color: #fff;
  border: none;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: #0f0781;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;

const HeaderLogin = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <HeaderStyles>
      <Link to="/home">
        <Logo src={logo} alt="Logo da empresa" />
      </Link>
      <Container>
        <ProfileContainer>
          <ProfileIcon src={perfil} alt="Ícone de Perfil" />
          <UserName>{user ? user.name : "Visitante"}</UserName>
        </ProfileContainer>
        <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
      </Container>
    </HeaderStyles>
  );
};

export default HeaderLogin;