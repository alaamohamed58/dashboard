import { useDispatch } from "react-redux";
import { Typography, Stack, Box } from "@mui/material";
import { cartActions } from "../store/cart-slice";

let h3Style = { color: "#0A194E", fontSize: "22px", fontWeight: 700 };

const CheckoutData = (props) => {
  const dispatch = useDispatch();

  const deleteItemHandler = () => {
    dispatch(cartActions.removeItem(props.id));
  };

  //console.log(props.price);

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
        position: "relative",
      }}
    >
      <Box
        component="span"
        sx={{
          position: "absolute",
          top: "30px",
          right: "30px",
          cursor: "pointer",
        }}
        onClick={deleteItemHandler}
      >
        {" "}
        <Box component="img" src="/images/icons/close.svg" />
      </Box>
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
          {props.model}{" "}
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
          <Box sx={{ width: "122PX" }}>
            <Typography
              component="span"
              sx={{
                color: "#A2BCDC",
                fontSize: "15px",
                fontWeight: 700,
              }}
            >
              quantity
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {props.quantity}
            </Typography>
          </Box>

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
              $60
            </Typography>
          </div>

          <Box sx={{ width: "159px" }}>
            <Typography
              component="span"
              sx={{
                color: "#A2BCDC",
                fontSize: "15px",
                fontWeight: 700,
              }}
            >
              Setup Charges
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {" "}
              ${props.setupCharges}{" "}
            </Typography>
          </Box>

          <div>
            <Typography
              component="span"
              sx={{ color: "#A2BCDC", fontSize: "15px", fontWeight: 700 }}
            >
              Price
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {" "}
              ${props.price}{" "}
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
