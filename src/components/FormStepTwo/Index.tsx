import React from "react";
import Title from "../../components/Title/Index";
import DigitizationField from "../../components/DigitizationField/Index";
import Button from "../../components/Button/Index";
import FieldRow from "../FieldRow/Index";

interface Props {
  phone: string;
  setPhone: (value: string) => void;
  cep: string;
  setCep: (value: string) => void;
  address: string;
  setAddress: (value: string) => void;
  number: string;
  setNumber: (value: string) => void;
  complement: string;
  setComplement: (value: string) => void;
  state: string;
  setState: (value: string) => void;
  prevStep: () => void;
  handleRegisterComplete: () => void;
}

const FormStepTwo: React.FC<Props> = ({
  phone,
  setPhone,
  cep,
  setCep,
  address,
  setAddress,
  number,
  setNumber,
  complement,
  setComplement,
  state,
  setState,
  prevStep,
  handleRegisterComplete,
}) => {
  return (
    <>
      <Title color="#6B6E71">
        Agora, precisamos de <br /> seu endereço:
      </Title>
      <DigitizationField
        valor={phone}
        tipo="text"
        placeholder="(DDD) xxxxx-xxxx"
        onChange={setPhone}
        label="Telefone"
      />
      <DigitizationField
        valor={cep}
        tipo="text"
        placeholder="Insira o CEP"
        onChange={setCep}
        label="CEP"
        hasIcon={true}
      />
      <DigitizationField
        valor={address}
        tipo="text"
        placeholder="Rua"
        onChange={setAddress}
        label="Endereço"
      />
      <FieldRow>
        <DigitizationField
          valor={number}
          tipo="number"
          placeholder="Número"
          onChange={setNumber}
          largura="150px"
        />
        <DigitizationField
          valor={complement}
          tipo="text"
          placeholder="Complemento"
          onChange={setComplement}
          largura="100%"
        />
      </FieldRow>
      <DigitizationField
        valor={state}
        tipo="text"
        placeholder="Estado"
        onChange={setState}
        largura="150px"
      />
      <Button onClick={prevStep}>Retornar</Button>
      <Button onClick={handleRegisterComplete}>Finalizar</Button>{" "}
    </>
  );
};

export default FormStepTwo;
