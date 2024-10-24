import styled from "styled-components";

interface ButtonProps {
  width?: string;
}

const Button = styled.button<ButtonProps>`
  background-color: #120a8f;
  border-radius: 8px;
  padding: 20px 30px;
  color: #fff;
  border: none;
  margin-top: 1em;
  font-weight: 700;
  line-height: 19px;
  width: ${({ width }) => width || "auto"};
`;

export default Button;