import { useSelector } from "react-redux";
import { Stepper, Step, StepLabel } from "@mui/material";

const StepperShop = ({ activeStep, setAciveStep }) => {
  const farmTitle = useSelector((state) => state.cartReducer.farm),
    model = useSelector((state) => state.cartReducer.model),
    plan = useSelector((state) => state.cartReducer.plan);

  return (
    <Stepper activeStep={activeStep} sx={{ marginBottom: "61px" }}>
      <Step
        onClick={() => {
          activeStep === 1 ? setAciveStep(0) : setAciveStep(activeStep);
        }}
      >
        <StepLabel>
          {activeStep >= 1 ? farmTitle.title : "Choose Farm"}
        </StepLabel>
      </Step>
      <Step
        onClick={() => {
          activeStep === 2 ? setAciveStep(1) : setAciveStep(activeStep);
        }}
      >
        <StepLabel>
          {activeStep >= 2 ? `${model.model} ($${model.price})` : ""}
          {activeStep === 1 && "<-- Choose Model"}
          {activeStep < 1 && "Choose Model"}
        </StepLabel>
      </Step>
      <Step
        onClick={() => {
          activeStep === 3 ? setAciveStep(2) : setAciveStep(activeStep);
        }}
      >
        <StepLabel>
          {activeStep >= 3 ? `${plan.plan} ($${plan.power})` : ""}
          {activeStep === 2 && " <-- Choose Electricity Plan"}
          {activeStep < 2 && "Choose Electricity Plan"}
        </StepLabel>
      </Step>
      <Step>
        <StepLabel>
          {activeStep === 3 && " <-- Confirm"}
          {activeStep < 2 && "Confirm"}
        </StepLabel>
      </Step>
    </Stepper>
  );
};

export default StepperShop;