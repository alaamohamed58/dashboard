import { useState } from "react";
import { Box, Tab, Typography } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";

import MuiLayout from "../layout/MuiLayout";
import BTCWallet from "./BTC wallet/BTCWallet";
import FIATWallet from "./FIAT wallet/FIATWallet";
const typographyStyle = {
  fontWeight: 700,
  fontSize: "35px",
  lineHeight: "133.4%",
  color: "#0A194E",
};

const Wallet = () => {
  const [tabValue, setTabValue] = useState("1");

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <MuiLayout>
      <Typography component="h1" sx={typographyStyle}>
        Wallet
      </Typography>

      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: "2px solid #CEDDF2" }}>
          <TabList aria-label="wallet" onChange={handleChange}>
            <Tab label="BTC Wallet" value="1" />
            <Tab label="FIAT Wallet" value="2" />
          </TabList>
        </Box>

        <TabPanel
          value="1"
          sx={{ height: 1, width: 1, padding: 0, marginTop: "51px" }}
        >
          <BTCWallet />
        </TabPanel>
        <TabPanel
          value="2"
          sx={{ height: 1, width: 1, padding: 0, marginTop: "51px" }}
        >
          <FIATWallet />
        </TabPanel>
      </TabContext>
    </MuiLayout>
  );
};

export default Wallet;
