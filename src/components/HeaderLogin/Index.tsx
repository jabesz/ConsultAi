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
  height: 125px;
`;

const Logo = styled.img`
  height: 190px;
  width: auto;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProfileIcon = styled.img`
  height: 40px;
  width: auto;
`;

const UserName = styled.span`
  font-size: 18px;
  color: #000;
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
          <UserName>{user ? user.name : "Visitante"}</UserName>{" "}
        </ProfileContainer>
        <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
      </Container>
    </HeaderStyles>
  );
};

export default HeaderLogin;