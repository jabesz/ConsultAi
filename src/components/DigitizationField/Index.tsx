import styled from "styled-components";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";

interface FieldProps {
  largura?: string;
  hasIcon?: boolean;
}

const FieldContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Field = styled.input<FieldProps>`
  background: #f0f0f0;
  margin: 1em 0;
  box-sizing: border-box;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;
  width: ${({ largura }) => largura || "100%"};
  padding: 16px 16px 16px ${({ hasIcon }) => (hasIcon ? "40px" : "16px")};
`;

const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  color: black;
  font-size: 30px;
`;

const Rotule = styled.label`
  display: block;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #0b3b60;
`;

const Container = styled.div`
  width: 90%;
`;

interface Props {
  valor: string;
  tipo?: string;
  placeholder?: string;
  onChange: (valor: string) => void;
  label?: string;
  largura?: string;
  hasIcon?: boolean;
  iconType?: "search" | "location";
}

export default function DigitizationField({
  valor,
  tipo,
  placeholder,
  onChange,
  label,
  largura,
  hasIcon = false,
  iconType = "location",
}: Props) {
  const renderIcon = () => {
    switch (iconType) {
      case "search":
        return <FaSearch />;
      case "location":
      default:
        return <FaMapMarkerAlt />;
    }
  };

  return (
    <Container>
      {label && <Rotule>{label}</Rotule>}
      <FieldContainer>
        {hasIcon && (
          <IconContainer>
            {renderIcon()}
          </IconContainer>
        )}
        <Field
          type={tipo}
          value={valor}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          largura={largura}
          hasIcon={hasIcon}
          required
        />
      </FieldContainer>
    </Container>
  );
}
