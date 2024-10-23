import { useState } from "react";
import logo from "./assets/Logo.png";
import Logo from "../../components/Logo/Index";
import MainContainer from "../../components/BackContainer/Index";
import Container from "../../components/FrontContainer/Index";
import styled from "styled-components";
import FormStepOne from "../../components/FormStepOne/Index";
import FormStepTwo from "../../components/FormStepTwo/Index";
import StepperComponent from "../../components/StepperComponent.tsx/Index";
import { Link, useNavigate } from "react-router-dom";

const MainStyledContainer = styled(MainContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Register = () => {
  const navigate = useNavigate();
  const [stepActive, setStepActive] = useState(0);
  const [name, setName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");
  const [complement, setComplement] = useState("");

  const nextStep = () => {
    if (stepActive < 1) {
      setStepActive((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (stepActive > 0) {
      setStepActive((prev) => prev - 1);
    }
  };

  const handleRegisterComplete = () => {
    navigate("/login");
  };

  return (
    <MainStyledContainer>
      <Container>
        <Link to="/">
          <Logo src={logo} alt="Logo da empresa" />
        </Link>
        <StepperComponent activeStep={stepActive} />

        {stepActive === 0 && (
          <FormStepOne
            name={name}
            setName={setName}
            cnpj={cnpj}
            setCnpj={setCnpj}
            email={email}
            setEmail={setEmail}
            createPassword={createPassword}
            setCreatePassword={setCreatePassword}
            repeatPassword={repeatPassword}
            setRepeatPassword={setRepeatPassword}
            nextStep={nextStep}
          />
        )}

        {stepActive === 1 && (
          <FormStepTwo
            phone={phone}
            setPhone={setPhone}
            cep={cep}
            setCep={setCep}
            address={address}
            setAddress={setAddress}
            number={number}
            setNumber={setNumber}
            complement={complement}
            setComplement={setComplement}
            state={state}
            setState={setState}
            prevStep={prevStep}
            handleRegisterComplete={handleRegisterComplete}
          />
        )}
      </Container>
    </MainStyledContainer>
  );
};

export default Register;