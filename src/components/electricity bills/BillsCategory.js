import { Stack, Typography } from "@mui/material";
import { BoxContent, SubTitle } from "../../customThemes";

const BillsCategory = () => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        gap: "50px",
        marginBottom: "55px",
        marginTop: "40px",
      }}
    >
      <BoxContent>
        <SubTitle component="h3">Expected Bill</SubTitle>

        <Typography
          component="span"
          sx={{
            fontSize: "35px",
            color: "#0A194E",
            fontWeight: 700,
          }}
        >
          ₿17.000
        </Typography>
      </BoxContent>
      <BoxContent>
        <SubTitle component="h3">Next Payment</SubTitle>

        <Typography
          component="span"
          sx={{
            fontSize: "35px",
            color: "#0A194E",
            fontWeight: 700,
          }}
        >
          05/07/2022
        </Typography>
      </BoxContent>
      <BoxContent>
        <SubTitle component="h3">Last Bill</SubTitle>

        <Typography
          component="span"
          sx={{
            fontSize: "35px",
            color: "#0A194E",
            fontWeight: 700,
          }}
        >
          $15783
        </Typography>
      </BoxContent>
      <BoxContent>
        <SubTitle component="h3">Unpaid Bill</SubTitle>

        <Typography
          component="span"
          sx={{
            fontSize: "35px",
            color: "#EA2727",
            fontWeight: 700,
          }}
        >
          $500
        </Typography>
        <Typography
          component="span"
          sx={{ fontSize: "15px", color: "#EA2727", fontWeight: 600 }}
        >
          Due to Date 05/05/2023
        </Typography>
      </BoxContent>
    </Stack>
  );
};

export default BillsCategory;
