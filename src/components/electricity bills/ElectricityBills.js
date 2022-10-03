import { Box, Tab, Typography } from "@mui/material";
import MuiLayout from "../layout/MuiLayout";
import BillsCategory from "./BillsCategory";
import Consumption from "./Consumption";
import HistoryBills from "./HistoryBills";
const typographyStyle = {
  fontWeight: 700,
  fontSize: "35px",
  lineHeight: "133.4%",
  color: "#0A194E",
};
const ElectricityBills = () => {
  return (
    <MuiLayout>
      <Typography component="h1" sx={typographyStyle}>
        Electricity Bills
      </Typography>
      <BillsCategory />
      <Consumption />
      <HistoryBills />
    </MuiLayout>
  );
};

export default ElectricityBills;
