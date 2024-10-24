import React from "react";
import Title from "../../components/Title/Index";
import DigitizationField from "../../components/DigitizationField/Index";
import Button from "../../components/Button/Index";

interface Props {
  name: string;
  setName: (value: string) => void;
  cnpj: string;
  setCnpj: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  createPassword: string;
  setCreatePassword: (value: string) => void;
  repeatPassword: string;
  setRepeatPassword: (value: string) => void;
  nextStep: () => void;
}

const FormStepOne: React.FC<Props> = ({
  name,
  setName,
  cnpj,
  setCnpj,
  email,
  setEmail,
  createPassword,
  setCreatePassword,
  repeatPassword,
  setRepeatPassword,
  nextStep,
}) => {
  return (
    <>
      <Title color="#6B6E71">
        Primeiro, alguns dados <br /> básicos:
      </Title>
      <DigitizationField
        valor={name}
        tipo="text"
        placeholder="Insira seu nome"
        onChange={setName}
        label="Nome"
      />
      <DigitizationField
        valor={cnpj}
        tipo="text"
        placeholder="Insira seu CNPJ"
        onChange={setCnpj}
        label="CNPJ"
      />
      <DigitizationField
        valor={email}
        tipo="email"
        placeholder="Insira seu email"
        onChange={setEmail}
        label="Email"
      />
      <DigitizationField
        valor={createPassword}
        tipo="password"
        placeholder="Crie uma senha"
        onChange={setCreatePassword}
        label="Crie uma senha"
      />
      <DigitizationField
        valor={repeatPassword}
        tipo="password"
        placeholder="Repita sua senha"
        onChange={setRepeatPassword}
        label="Repita a senha"
      />
      <Button onClick={nextStep}>Próximo</Button>
    </>
  );
};

export default FormStepOne;