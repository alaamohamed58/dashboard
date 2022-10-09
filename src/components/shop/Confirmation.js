import { useSelector, useDispatch } from "react-redux";

import { Typography, Box, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../store/cart-slice";

const summaryStyle = {
  fontWeight: 700,
  fontSize: { xs: "20px", xl: "30px" },
  color: "custom.main",
};

const Confirmation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let model = useSelector((state) => state.cartReducer.model);
  let plan = useSelector((state) => state.cartReducer.plan);
  let farm = useSelector((state) => state.cartReducer.farm);

  let powerPrice = plan.power.replace(/[^0-9 .]/g, "");

  let total = +farm.setupFee + +model.price + +powerPrice;
  const checkoutPageHandler = () => {
    dispatch(cartActions.addCartItems());

    navigate("/shop/checkout");
  };
  return (
    <Stack
      sx={{
        alignItems: "center",
        flexDirection: { xs: "column", lg: "row" },
        gap: { xs: 0, xl: "30px" },
      }}
    >
      <Box
        component="img"
        src="/images/as.svg"
        alt="ac"
        sx={{ width: { xs: "325px", xl: "664px" } }}
      />

      <Stack sx={{ width: { xs: "400px", xl: "662px" } }}>
        <Box
          sx={{
            background: "white",
            height: "643",
            border: "2px solid #CEDDF2",
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "25px", xl: "35px" },
              fontWeight: 700,
              color: "custom.main",
              margin: "26px 47px 0",
              borderBottom: "1px solid #CEDDF2",
              paddingBottom: "21px",
            }}
          >
            Order Summary
          </Typography>

          <Stack>
            <Box
              sx={{
                borderBottom: "1px dashed #CEDDF2",
                marginBottom: "10px",
                padding: "10px 47px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <Typography component="h3" sx={summaryStyle}>
                  {model.model}
                </Typography>
                <Typography component="span" sx={summaryStyle}>
                  ${model.price}
                </Typography>
              </Box>
              <Typography
                component="span"
                sx={{
                  color: "custom.secondary",
                  fontSize: "22px",
                  fontWeight: 500,
                }}
              >
                Model
              </Typography>
            </Box>

            <Box
              sx={{
                borderBottom: "1px dashed #CEDDF2",
                padding: "47px",
                marginBottom: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <Typography component="h3" sx={summaryStyle}>
                  {plan.plan}
                </Typography>
                <Typography component="span" sx={summaryStyle}>
                  {plan.power}
                </Typography>
              </Box>
              <Typography
                component="span"
                sx={{
                  color: "custom.secondary",
                  fontSize: "22px",
                  fontWeight: 500,
                }}
              >
                Electricity Plan
              </Typography>
            </Box>

            <Box
              sx={{
                padding: "47px 47px 47px",
                marginBottom: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <Typography component="h3" sx={summaryStyle}>
                  Installement Charges
                </Typography>
                <Typography component="span" sx={summaryStyle}>
                  ${farm.setupFee}
                </Typography>
              </Box>
              <Typography
                component="span"
                sx={{
                  color: "custom.secondary",
                  fontSize: "22px",
                  fontWeight: 500,
                }}
              >
                Setup Fee
              </Typography>
            </Box>

            <Box sx={{ background: "#CEDDF2", padding: "6px 47px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <Typography component="h3" sx={summaryStyle}>
                  Total
                </Typography>
                <Typography component="span" sx={summaryStyle}>
                  ${total}
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Box>
        <Button
          variant="contained"
          sx={{
            background: "custom.main",
            width: 1,
            height: "55px",
            margin: "17px 0",
            fontSize: { xs: "14px", xl: "23px" },
          }}
        >
          Add to cart and continue buying{" "}
        </Button>
        <Button
          onClick={checkoutPageHandler}
          variant="contained"
          sx={{
            background: "#fff",
            width: 1,
            height: "55px",
            fontSize: { xs: "14px", xl: "23px" },
            color: "custom.main",
            border: "2px solid custom.main",
          }}
        >
          Proceed to checkout{" "}
        </Button>
      </Stack>
    </Stack>
  );
};

export default Confirmation;
