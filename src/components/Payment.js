import { Stack, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { CustomButton, PageTitle } from "../customThemes";
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

const titleStyle = {
  color: "custom.main",
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
      <PageTitle sx={{ mb: "36px" }} component="h2">
        Select Payment Method
      </PageTitle>
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
          <CustomButton
            variant="contained"
            sx={{ width: "271px", height: "42px" }}
            onClick={notificationPageHandler}
          >
            wire transfer
          </CustomButton>
        </Box>

        <Box sx={BoxStyle}>
          <Box component="img" src="/images/payment/visa.svg" alt="payment" />
          <Typography component="h3" sx={titleStyle}>
            Credit/Debit Card
          </Typography>
          <CustomButton
            variant="contained"
            sx={{ width: "271px", height: "42px" }}
            onClick={notificationPageHandler}
          >
            Card
          </CustomButton>
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
          <CustomButton
            variant="contained"
            sx={{ width: "271px", height: "42px" }}
            onClick={notificationPageHandler}
          >
            BTC
          </CustomButton>
        </Box>

        <Box sx={BoxStyle}>
          <Box component="img" src="/images/payment/tether.svg" alt="payment" />
          <Typography component="h3" sx={titleStyle}>
            tether
          </Typography>
          <CustomButton
            variant="contained"
            sx={{ width: "271px", height: "42px" }}
            onClick={notificationPageHandler}
          >
            USDT
          </CustomButton>
        </Box>
      </Stack>
    </MuiLayout>
  );
};

export default Payment;
