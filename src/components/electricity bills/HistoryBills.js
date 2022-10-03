import { useMemo, Fragment } from "react";

import { Box, Typography } from "@mui/material";
import HistoryBillsData from "./HistoryBillsData";

const HistoryBills = () => {
  const DUMMY_DATA = useMemo(
    () => [
      {
        id: "d1",
        month: "January",
        amount: 430,
        invoiceNum: 3046464,
      },
      {
        id: "d1",
        month: "February",
        amount: 730,
        invoiceNum: 232422,
      },
    ],
    []
  );

  return (
    <Box
      sx={{
        background: "#fff",
        marginTop: "51px",
        width: "1437px",
        border: " 2px solid #CEDDF2",
        padding: "40px 49px",
      }}
    >
      <Typography
        component="h2"
        sx={{
          fontSize: "35px",
          fontWeight: 700,
          color: "#0A194E",
          marginBottom: "65px",
        }}
      >
        Monthly History Bills Year 2022
      </Typography>

      <Box component="table" sx={{ width: 1 }}>
        <Box
          component="thead"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: "#0A194E",
            fontSize: "22px",
            fontWeight: 600,
            borderBottom: "2px solid #CEDDF2",
            paddingBottom: "10px",
          }}
        >
          <Box
            component="tr"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "1",
            }}
          >
            <Box component="th" sx={{ width: "89px" }}>
              Month
            </Box>
            <Box component="th" sx={{ width: "157px" }}>
              Amount
            </Box>
            <Box component="th" sx={{ width: "174px" }}>
              Invoice Number
            </Box>

            <Box component="th" sx={{ width: "126px" }}>
              Download
            </Box>
          </Box>
        </Box>

        <Box component="tbody">
          {DUMMY_DATA.map((data) => {
            return <HistoryBillsData data={data} key={data.id} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default HistoryBills;
