import { Typography } from "@mui/material";
import MuiLayout from "../layout/MuiLayout";
import Bills from "./Bills";

const typographyStyle = {
  fontWeight: 700,
  fontSize: "35px",
  lineHeight: "133.4%",
  color: "#0A194E",
};

const MyProducts = () => {
  return (
    <MuiLayout>
      <Typography component="h1" sx={typographyStyle}>
        Products
      </Typography>
      <Bills />
    </MuiLayout>
  );
};

export default MyProducts;
