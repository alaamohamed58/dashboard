import { Stack, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import MuiLayout from "./layout/MuiLayout";

const BoxStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "13px 28px 0px",
  gap: "22px",
  width: "327px",
  height: "261px",
  background: "#FFFFFF",
  border: "2px solid #CEDDF2",
};

const btnStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",

  width: "271px",
  height: "42px",

  background: "#2776EA",
};
const titleStyle = {
  color: "#0A194E",
  fontSize: "22px",
  fontWeight: 500,
};

const Payment = () => {
  const navigate = useNavigate();
  const notificationPageHandler = () => {
    navigate("/notification");
  };

  return (
    <MuiLayout>
      <Typography
        component="h2"
        sx={{
          color: "#0A194E",
          fontSize: "35px",
          marginBottom: "40px",
          fontWeight: 700,
        }}
      >
        Select Payment Method
      </Typography>
      <Stack sx={{ flexDirection: "row", gap: "40px" }}>
        <Box sx={BoxStyle}>
          <Box
            component="img"
            src="/images/payment/wireTransfer.svg"
            alt="payment"
          />
          <Typography component="h3" sx={titleStyle}>
            Wire Transfer
          </Typography>
          <Button
            variant="contained"
            sx={btnStyle}
            onClick={notificationPageHandler}
          >
            wire transfer
          </Button>
        </Box>

        <Box sx={BoxStyle}>
          <Box component="img" src="/images/payment/visa.svg" alt="payment" />
          <Typography component="h3" sx={titleStyle}>
            Credit/Debit Card
          </Typography>
          <Button
            variant="contained"
            sx={btnStyle}
            onClick={notificationPageHandler}
          >
            Card
          </Button>
        </Box>

        <Box sx={BoxStyle}>
          <Box
            component="img"
            src="/images/payment/bitcoin.svg"
            alt="payment"
          />
          <Typography component="h3" sx={titleStyle}>
            Bitcoin
          </Typography>
          <Button
            variant="contained"
            sx={btnStyle}
            onClick={notificationPageHandler}
          >
            BTC
          </Button>
        </Box>

        <Box sx={BoxStyle}>
          <Box component="img" src="/images/payment/tether.svg" alt="payment" />
          <Typography component="h3" sx={titleStyle}>
            tether
          </Typography>
          <Button
            variant="contained"
            sx={btnStyle}
            onClick={notificationPageHandler}
          >
            USDT
          </Button>
        </Box>
      </Stack>
    </MuiLayout>
  );
};

export default Payment;
