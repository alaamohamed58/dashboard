import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import React from "react";

const MailVerification = ({ message }) => {
  return (
    <Stack
      sx={{
        position: "absolute",
        top: "200px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "450px",
        height: "200px",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#fff",
        border: "1px solid #2776EA",
      }}
    >
      <Typography component="h1" variant="h5">
        Account Activation
      </Typography>
      <Typography component="p"> {message} </Typography>
    </Stack>
  );
};

export default MailVerification;
