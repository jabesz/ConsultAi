import { styled } from "styled-components";

interface Props {
  color?: string;
}

const SubTitle = styled.h3<Props>`
  color: ${(props) => props.color || "#120A8F"};
  font-weight: 700;
  font-size: 20px;
`;

export default SubTitle