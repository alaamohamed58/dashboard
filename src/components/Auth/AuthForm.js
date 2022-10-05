import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

import CancleIcon from "../icons/CancleIcon";

const AuthForm = () => {
  const navigate = useNavigate();

  //main page route
  const routeHandler = () => {
    navigate("/shop");
  };

  const containerCss = {
    padding: "16px 20px",
    width: "597px",
    height: "88px",
  };

  const inputCss = {
    "& input::placeholder": {
      fontStyle: "normal",
      fontweight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.15px",
      color: "#D9D9D9",
    },
  };

  const container = {
    padding: "20px 25px 0px",
    position: "relative",
    width: "647px",
    height: "614px",
    margin: "150px auto",

    background: "#FFFFFF",
    border: " 2px solid #2776EA",
  };

  return (
    <Box component="section" sx={container}>
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          right: "20px",
          width: "20px",
          height: "20px",
        }}
      >
        <CancleIcon />
      </Box>
      <Typography
        variant="h5"
        component="h1"
        sx={{
          color: "#0A194E",
          fontSize: "30px",
          fontWeight: 700,
          textAlign: "center",
          padding: "36px 16px 36px 16px",
          lineHeight: "133.4%",
        }}
      >
        Create an Account
      </Typography>
      <form>
        <Box sx={containerCss}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            placeholder="Enter here"
            sx={inputCss}
            fullWidth
            focused
          />
        </Box>
        <Box sx={containerCss}>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            placeholder="Enter here"
            sx={inputCss}
            fullWidth
            focused
          />
        </Box>
        <Box sx={containerCss}>
          <TextField
            id="confirm-password"
            label="Confirm Password"
            variant="outlined"
            type="password"
            placeholder="Enter here"
            sx={inputCss}
            fullWidth
            focused
          />
        </Box>
        <Box sx={containerCss}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: 1,
              height: "55px",
              background: "#2776EA",
              fontSize: "20px",
              fontWeight: "600",
              lineHeight: "26px",
              letterSpacing: "0.46px",
              textTransform: "uppercase",
            }}
          >
            SIGN UP
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            padding: "0px 20px",
            width: "597px",
            height: "55px",
          }}
        >
          <Link
            onClick={routeHandler}
            underline="always"
            sx={{
              textAlign: "center",
              letterSpacing: "0.46px",
              color: "#0A194E",
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "26px",
              margin: "auto",
              cursor: "pointer",
            }}
          >
            Already have an account?
          </Link>
        </Box>
      </form>
    </Box>
  );
};

export default AuthForm;
