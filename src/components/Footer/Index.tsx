import facebook from './assets/facebook.png'
import instagram from './assets/instagram.png'
import whatsapp from './assets/whatsapp.png'
import google from "./assets/google.png";
import styled from 'styled-components';

const RodapeStyled = styled.footer`
  height: 100%;
  color: #fff;
  padding: 1em;
  background-color: #120a8f;
  text-align: center;
`;

const ListaStyled = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 20%;
  margin: 1em auto;
`

const ItemStyled = styled.li`
  list-style-type: none;
`

const ImagemStyled = styled.img`
  margin: 0 15px;
`;

const Footer = () => {
  return (
    <RodapeStyled>
      <ListaStyled>
        <ItemStyled>
          <a href="#">
            <ImagemStyled src={facebook} alt="logo facebook" />
            <ImagemStyled src={instagram} alt="logo instagram" />
            <ImagemStyled src={google} alt="logo e-mail" />
            <ImagemStyled src={whatsapp} alt="logo whatsapp" />
          </a>
        </ItemStyled>
      </ListaStyled>
      <p>
        2024 © Desenvolvido por ConsultAi
      </p>
    </RodapeStyled>
  );
}

export default Footer