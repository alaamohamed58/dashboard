import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
const ElectricityData = ({ data, activeStepHandler }) => {
  const dataHandler = () => {
    activeStepHandler();
    console.log(data);
  };

  return (
    <Box
      component="li"
      sx={{ display: "flex", marginBottom: "51px", background: "#fff" }}
    >
      <Box
        component="img"
        src={data.image}
        alt="plan"
        sx={{ display: "inline-block", width: "354px", marginRight: "22px" }}
      />

      <Stack sx={{ padding: "20px 0" }}>
        <Typography
          component="h2"
          sx={{ fontSize: "35px", fontWeight: 700, color: "#0A194E" }}
        >
          {data.title}
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: "22px",
            color: "#0A194E",
            fontWeight: 700,
            borderBottom: "1px solid #CEDDF2",
            paddingBottom: "24px",
          }}
        >
          {data.detail}
        </Typography>

        <Button
          onClick={dataHandler}
          variant="contained"
          sx={{
            background: "#2776EA",
            width: "203px",
            height: "42px",
            margin: "25px 0 32px",
          }}
        >
          SELECT PACKAGE
        </Button>
      </Stack>
    </Box>
  );
};

export default ElectricityData;
