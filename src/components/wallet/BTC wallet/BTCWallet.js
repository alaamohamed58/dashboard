import { useState, Fragment } from "react";
import { Typography, Button, Box, Stack } from "@mui/material";
import BTCProfit from "./BTCProfit";
import HistoryProfit from "./HistoryProfit";
import ConvertModel from "../../UI/ConvertModel";
import Model from "../../UI/Model";

const boxStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  border: "2px solid #CEDDF2",
  width: "322px",
  height: "149px",
  background: "#fff",
};
const h3Style = {
  fontSize: "22px",
  color: "#A2BCDC",
  fontWeight: 700,
  lineHeight: "33px",
  marginBottom: "10px",
};

const btnStyle = {
  background: "#fff",
  border: "2px solid #2776EA",
  minWidth: "265px",
  height: "71px",
  color: "#2776EA",
  fontSize: "24px",
  fontWeight: 600,
  "&:hover": {
    background: "unset",
  },
};

const DUMMY_DATA = [
  {
    id: "d1",
    title: "Available BTC",
    value: "₿17.000",
  },
  {
    id: "d2",
    title: "Total Mined BTC",
    value: "₿2.7",
  },
];

const BTCWallet = () => {
  const [toggleModel, setToggleModel] = useState(false);

  const toggleModelHandler = () => {
    setToggleModel(true);
  };
  const hideModelHandler = () => {
    setToggleModel(false);
  };
  return (
    <Fragment>
      {toggleModel && <Model hideModelHandler={hideModelHandler} />}
      <Stack sx={{ width: "1437px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",

            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "flex-end", gap: "50px" }}>
            {DUMMY_DATA.map((data) => {
              return (
                <Box sx={boxStyle} key={data.id}>
                  <Typography component="h3" sx={h3Style}>
                    {data.title}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "35px",
                      color: "#0A194E",
                      fontWeight: 700,
                    }}
                  >
                    {data.value}
                  </Typography>
                </Box>
              );
            })}
          </Box>
          <Box sx={{ display: "flex", gap: "36px" }}>
            <Button sx={btnStyle} variant="contained">
              WITHDRAW
            </Button>
            <Button
              sx={btnStyle}
              variant="contained"
              onClick={toggleModelHandler}
            >
              CONVERT BTC TO BALANCE
            </Button>
          </Box>
        </Box>
        <BTCProfit />
        <HistoryProfit />
      </Stack>
    </Fragment>
  );
};

export default BTCWallet;
