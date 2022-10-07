import { useDispatch } from "react-redux";

import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import { cartActions } from "../../../store/cart-slice";
import { MainTitle } from "../../../customThemes";

const ElectricityData = ({ data, activeStepHandler }) => {
  const dispatch = useDispatch();

  const dataHandler = () => {
    dispatch(cartActions.addPlan({ plan: data.title, power: data.power }));
    activeStepHandler();
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

      <Stack sx={{ padding: "20px 0", width: "1058px" }}>
        <Typography
          component="h2"
          sx={{ fontSize: "35px", fontWeight: 700, color: "custom.main" }}
        >
          {data.title}
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: "22px",
            color: "custom.main",
            fontWeight: 700,
            borderBottom: "1px solid #CEDDF2",
            paddingBottom: "24px",
          }}
        >
          {data.detail}
        </Typography>

        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
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

          <MainTitle> {data.power} </MainTitle>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ElectricityData;
