import { Typography, Button, Box, Stack } from "@mui/material";
import { SubTitle, BoxContent, CustomSpan } from "../../../customThemes";
import Table from "./Table";

const DUMMY_DATA = [
  {
    id: "d1",
    title: "Available FIAT",
    value: "$300",
    recommended: "Recommended amount in balance $400",
  },
];

const btnStyle = {
  background: "#fff",
  border: "2px solid #2776EA",
  width: { xs: "auto", xl: "195.43px" },
  height: { xs: "auto", xl: "71px" },
  color: "#2776EA",
  fontSize: { xs: "15px", xl: "24px" },
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
          flexDirection: { xs: "column", xl: "row" },
          alignItems: { xs: "flex-start", xl: "center" },
          gap: "36px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "flex-end", gap: "50px" }}>
          {DUMMY_DATA.map((data) => {
            return (
              <BoxContent key={data.id}>
                <SubTitle component="h3">{data.title}</SubTitle>
                <CustomSpan component="span">{data.value}</CustomSpan>
                {data.recommended && (
                  <Typography
                    sx={{
                      color: "#EA2727",
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    {data.recommended}{" "}
                  </Typography>
                )}
              </BoxContent>
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
