import { Typography, Box, Stack, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckoutData from "./CheckoutData";
import MuiLayout from "./layout/MuiLayout";

const summaryStyle = {
  color: "#A2BCDC",
  fontSize: { xs: "16px", xl: "22px" },
  fontWeight: 500,
};

const Checkout = () => {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  const itemsLength = cartItems.length;

  const total = cartItems.reduce(
    (acc, item) => (+item.setupFee + +item.price) * item.quantity,
    0
  );

  const subTotal = itemsLength * total;

  const paymentPageHandler = () => {
    navigate("/shop/payment");
  };

  return (
    <MuiLayout>
      <Stack
        sx={{
          flexDirection: { xl: "row" },
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <Box component="ul">
          {cartItems.map((data, i) => {
            return (
              <CheckoutData
                key={data.id}
                id={data.id}
                title={data.title}
                quantity={data.quantity}
                model={data.model}
                electricityPlan={data.plan}
                location={data.location}
                setupCharges={data.setupFee}
                warrently={data.warrently}
                price={data.price}
                img={data.image}
                total={total}
              />
            );
          })}
        </Box>
        <Stack sx={{ order: "-1" }}>
          <Box
            sx={{
              background: "white",
              width: { xs: "auto", xl: "409px" },
              border: "2px solid #CEDDF2",
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontSize: "35px",
                fontWeight: 700,
                color: "#0A194E",
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
                  marginBottom: "33px",
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
                    Sub Total--------------------------x{itemsLength}
                  </Typography>
                </Box>
                <Typography
                  component="span"
                  sx={{
                    color: "#0A194E",
                    fontSize: { xs: "22px", xl: "25px" },
                    fontWeight: 600,
                  }}
                >
                  ${subTotal}
                </Typography>
              </Box>

              <Box
                sx={{
                  borderBottom: "1px dashed #CEDDF2",
                  marginBottom: "33px",
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
                    Sub Tax--------------------------x{itemsLength}
                  </Typography>
                </Box>
                <Typography
                  component="span"
                  sx={{
                    color: "#0A194E",
                    fontSize: { xs: "22px", xl: "25px" },
                    fontWeight: 600,
                  }}
                >
                  $400
                </Typography>
              </Box>

              <Stack
                sx={{
                  background: "#CEDDF2",
                  padding: "6px 47px",
                  height: { xs: "74px", xl: "125px" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Stack>
                  <Typography
                    component="h3"
                    sx={{
                      color: "0A194E",
                      fontSize: { xs: "22px", xl: "22px" },
                      fontWeight: 700,
                    }}
                  >
                    Grand Total
                  </Typography>
                  <Typography
                    component="span"
                    sx={{ color: "0A194E", fontSize: "30px", fontWeight: 700 }}
                  >
                    $3200.095
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>
          <Button
            onClick={paymentPageHandler}
            variant="contained"
            sx={{
              background: "#2776EA",
              width: { xs: "auto", xl: "409px" },
              height: "55px",
              margin: "17px 0",
              fontSize: "24px",
            }}
          >
            pay now
          </Button>
        </Stack>
      </Stack>
    </MuiLayout>
  );
};

export default Checkout;
