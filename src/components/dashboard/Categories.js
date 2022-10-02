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
const Categories = () => {
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
          Avilable BTC
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
          Next Payout
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
          Total Expenses
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
          Total Earn
        </Typography>

        <Typography
          component="span"
          sx={{
            fontSize: "35px",
            color: "#0A194E",
            fontWeight: 700,
          }}
        >
          $25698
        </Typography>
      </Box>
    </Stack>
  );
};

export default Categories;
