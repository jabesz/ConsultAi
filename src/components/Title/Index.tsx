import { styled } from "styled-components";

interface Props {
  color?: string;
}

const Title = styled.h3<Props>`
  color: ${(props) => props.color || "#120A8F"};
  font-weight: 700;
  font-size: 28px;
  text-align: center;
`;

export default Title;