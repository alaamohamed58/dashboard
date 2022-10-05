import { Box } from "@mui/material";
import ElectricityData from "./ElectricityData";

const DUMMY_DATA = [
  {
    id: "d1",
    title: "Monthly Plan",
    detail:
      "The electricity cost will be deducted every month from your balance. 1 Month deposit paid in advance.",
    power: "$0.099/kW",
    image: "/images/icons/monthlyplan.svg",
  },
  {
    id: "d2",
    title: "Half Year Plan",
    detail:
      "electricity cost will be deducted every 6 months from your balance. No deposit required.",
    power: "$0.095/kW",
    image: "/images/icons/halfyear.svg",
  },
  {
    id: "d3",
    title: "Year Plan",
    detail:
      "he electricity cost will be deducted every 6 months from your balance. No deposit required.",
    power: "$0.09/kW",
    image: "/images/icons/yearplan.svg",
  },
];

const ElectricityPlan = ({ activeStepHandler }) => {
  return (
    <Box component="ul">
      {DUMMY_DATA.map((data) => {
        return (
          <ElectricityData
            key={data.id}
            data={data}
            activeStepHandler={activeStepHandler}
          />
        );
      })}
    </Box>
  );
};

export default ElectricityPlan;
