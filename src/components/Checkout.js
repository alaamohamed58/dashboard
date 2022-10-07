import { Typography, Box, Stack, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckoutData from "./CheckoutData";
import MuiLayout from "./layout/MuiLayout";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "power Model 001",
//     model: "AntiMiner S19 pro",
//     quantity: 2,
//     electricityPlan: "Monthly $0.099",
//     location: "texas 2 US",
//     electricityDeposit: "60",
//     setupCharges: "60",
//     price: "2000",
//     img: "/images/icons/model.svg",
//     total: "65464",
//   },
//   {
//     id: "m2",
//     title: "power Model 001",
//     model: "AntiMiner S19 pro",
//     quantity: 2,
//     electricityPlan: "Monthly $0.099",
//     location: "texas 2 US",
//     electricityDeposit: "60",
//     setupCharges: "60",
//     price: "2000",
//     img: "/images/icons/model.svg",
//     total: "65464",
//   },
// ];
const summaryStyle = { color: "#A2BCDC", fontSize: "22px", fontWeight: 500 };

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
          flexDirection: "row",
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
        <Stack>
          <Box
            sx={{
              background: "white",
              width: "409px",
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
                  sx={{ color: "#0A194E", fontSize: "25px", fontWeight: 600 }}
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
                  sx={{ color: "#0A194E", fontSize: "25px", fontWeight: 600 }}
                >
                  $400
                </Typography>
              </Box>

              <Stack
                sx={{
                  background: "#CEDDF2",
                  padding: "6px 47px",
                  height: "125px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Stack sx={{}}>
                  <Typography
                    component="h3"
                    sx={{ color: "0A194E", fontSize: "22px", fontWeight: 700 }}
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
              width: "409px",
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
