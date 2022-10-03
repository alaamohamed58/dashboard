import { Stack, Box, Typography } from "@mui/material";

const contentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#FFFFFF",
  border: "2px solid #CEDDF2",
  width: "322px",
  height: "149px",
};

const h3Style = {
  fontSize: "22px",
  color: "#A2BCDC",
  fontWeight: 700,
  lineHeight: "33px",
  marginBottom: "10px",
};
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
      <Box sx={contentStyle}>
        <Typography component="h3" sx={h3Style}>
          Expected Bill
        </Typography>

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
      </Box>
      <Box sx={contentStyle}>
        <Typography component="h3" sx={h3Style}>
          Next Payment
        </Typography>

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
      </Box>
      <Box sx={contentStyle}>
        <Typography component="h3" sx={h3Style}>
          Last Bill
        </Typography>

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
      </Box>
      <Box sx={contentStyle}>
        <Typography component="h3" sx={h3Style}>
          Unpaid Bill
        </Typography>

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
      </Box>
    </Stack>
  );
};

export default BillsCategory;
