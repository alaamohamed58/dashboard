import { Typography, Stack, Box } from "@mui/material";

let h3Style = { color: "#0A194E", fontSize: "22px", fontWeight: 700 };

const CheckoutData = (props) => {
  return (
    <Box
      component="li"
      sx={{
        padding: "30px",
        display: "flex",
        alignItems: "center",
        gap: "30px",
        border: "2px solid #CEDDF2",
        background: "#fff",
        marginBottom: "51px",
        width: "995px",
      }}
    >
      <Box
        component="img"
        src={props.img}
        sx={{ display: "inline-block", width: "263.18px" }}
      />

      <Stack>
        <Typography
          component="h2"
          sx={{
            color: "#0A194E",
            fontSize: "35px",
            fontWeight: 700,
            marginBottom: "12px",
          }}
        >
          {props.title}{" "}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            gap: "30px 112px",
            border: "1px solid #CEDDF2",
            borderLeft: "none",
            borderRight: "none",
            padding: "20px 0",
          }}
        >
          <div>
            <Typography
              component="span"
              sx={{ color: "#A2BCDC", fontSize: "15px", fontWeight: 700 }}
            >
              quantity
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {props.quantity}
            </Typography>
          </div>

          <div>
            <Typography
              component="span"
              sx={{ color: "#A2BCDC", fontSize: "15px", fontWeight: 700 }}
            >
              Electricity Plan
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {" "}
              {props.electricityPlan}{" "}
            </Typography>
          </div>

          <div>
            <Typography
              component="span"
              sx={{ color: "#A2BCDC", fontSize: "15px", fontWeight: 700 }}
            >
              location
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {" "}
              {props.location}{" "}
            </Typography>
          </div>

          <div>
            <Typography
              component="span"
              sx={{ color: "#A2BCDC", fontSize: "15px", fontWeight: 700 }}
            >
              Electricity Deposit
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {" "}
              ${props.electricityDeposit}{" "}
            </Typography>
          </div>

          <div>
            <Typography
              component="span"
              sx={{ color: "#A2BCDC", fontSize: "15px", fontWeight: 700 }}
            >
              Setup Charges
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {" "}
              ${props.setupCharges}{" "}
            </Typography>
          </div>

          <div>
            <Typography
              component="span"
              sx={{ color: "#A2BCDC", fontSize: "15px", fontWeight: 700 }}
            >
              Price
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {" "}
              {props.price}{" "}
            </Typography>
          </div>
        </Box>
        <Box
          sx={{
            fontSize: "30px",
            color: "#0A194E",
            fontWeight: 700,
            marginTop: "21px",
          }}
        >
          Total - ${props.total}
        </Box>
      </Stack>
    </Box>
  );
};

export default CheckoutData;
