import { Stepper, Step, StepLabel } from "@mui/material";

const StepperShop = ({ activeStep, setAciveStep }) => {
  return (
    <Stepper activeStep={activeStep} sx={{ marginBottom: "61px" }}>
      <Step
        onClick={() => {
          activeStep === 1 ? setAciveStep(0) : setAciveStep(0);
        }}
      >
        <StepLabel>Choose Farm</StepLabel>
      </Step>
      <Step>
        <StepLabel>Choose Model</StepLabel>
      </Step>
      <Step onClick={() => setAciveStep(2)}>
        <StepLabel>Choose Electricity Plan</StepLabel>
      </Step>
      <Step onClick={() => setAciveStep(3)}>
        <StepLabel>Confirm</StepLabel>
      </Step>
    </Stepper>
  );
};

export default StepperShop;
