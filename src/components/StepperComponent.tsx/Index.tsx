import { Step, StepLabel, Stepper } from "@mui/material";
import styled from "styled-components";

interface Props {
  activeStep: number;
}

const StepCustom = styled.div<{ isActive: boolean }>`
  background-color: ${({ isActive }) => (isActive ? "#120a8f" : "lightgray")};
  width: 16px;
  height: 16px;
  border-radius: 50%;
`;

const StepperComponent: React.FC<Props> = ({ activeStep }) => {
  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      <Step>
        <StepLabel
          StepIconComponent={() => <StepCustom isActive={activeStep >= 0} />}
        />
      </Step>
      <Step>
        <StepLabel
          StepIconComponent={() => <StepCustom isActive={activeStep >= 1} />}
        />
      </Step>
    </Stepper>
  );
};

export default StepperComponent;