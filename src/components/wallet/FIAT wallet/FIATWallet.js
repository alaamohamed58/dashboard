import { Typography, Button, Box, Stack, Tab } from "@mui/material";
import Deposits from "./deposit/Deposits";

import Table from "./Table";
import Withdrawal from "./withdrawal/Withdrawal";

const DUMMY_DATA = [
  {
    id: "d1",
    title: "Available FIAT",
    value: "$300",
    recommended: "Recommended amount in balance $400",
  },
  {
    id: "d2",
    title: "Advertisement",
    value: "$150",
  },
];
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
  width: "195.43px",
  height: "71px",
  color: "#2776EA",
  fontSize: "24px",
  fontWeight: 600,
  "&:hover": {
    background: "unset",
  },
};

const FIATWallet = () => {
  return (
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
                {data.recommended && (
                  <Typography
                    sx={{
                      color: "#EA2727",
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    {data.recommended}{" "}
                  </Typography>
                )}
              </Box>
            );
          })}
        </Box>
        <Box sx={{ display: "flex", gap: "36px" }}>
          <Button sx={btnStyle} variant="contained">
            DEPOSIT
          </Button>
          <Button sx={btnStyle} variant="contained">
            INVEST
          </Button>
          <Button sx={btnStyle} variant="contained">
            WITHDRAW
          </Button>
        </Box>
      </Box>

      <Table />
    </Stack>
  );
};

export default FIATWallet;
