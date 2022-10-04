import { useState } from "react";
import MuiLayout from "../layout/MuiLayout";
import StepperShop from "./StepperShop";
import Farm from "./farm/Farm";
import { Box } from "@mui/material";
import Model from "./Model";
const DUMMY_DATA = [
  {
    id: "d1",
    title: "Farm 001 - ASIC",
    location: "Texas 1: US",
    "electricity-price": "$3/kWh",
    "maintainance-fee": "Percentage BTC",
    guarantee: "11 Months",
    security: "Physical 24/4",
    "setup-period": "3 Weeks",
    "guaranteed-uptime": "95%",
    "mines-to-external-wallet": "Yes",
    "setup-fee": 300,
    filled: 30,
    image: "/images/icons/group.svg",
  },
  {
    id: "d2",
    title: "Farm 002 - ASIC",
    location: "California 1: US",
    "electricity-price": "$5/kWh",
    "maintainance-fee": "Percentage BTC",
    guarantee: "14 Months",
    security: "Physical 24/4",
    "setup-period": "2 Weeks",
    "guaranteed-uptime": "95%",
    "mines-to-external-wallet": "Yes",
    "setup-fee": 300,
    filled: 60,
    image: "/images/icons/group.svg",
  },
];

const ASIC = () => {
  const [activeStep, setAciveStep] = useState(1);

  const activeStepHandler = () => {
    if (activeStep !== -1) {
      setAciveStep((currentStep) => currentStep - 1);
    }

    if (activeStep < 3) {
      setAciveStep((currentStep) => currentStep + 1);
    }
  };

  return (
    <MuiLayout>
      <StepperShop activeStep={activeStep} setAciveStep={setAciveStep} />

      {activeStep === 0 && (
        <Box>
          {DUMMY_DATA.map((data) => {
            return <Farm key={data.id} data={data} />;
          })}
        </Box>
      )}

      {activeStep === 1 && <Model />}
    </MuiLayout>
  );
};

export default ASIC;
