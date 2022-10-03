import { Link } from "react-router-dom";
import { Box } from "@mui/material";
const Conversiondata = ({ data }) => {
  return (
    <Box
      component="tr"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        color: "#0A194E",
        fontSize: "22px",
        fontWeight: 400,
        paddingTop: "23px",
        paddingBottom: "10px",
        borderBottom: "2px solid #CEDDF2",
      }}
    >
      <Box component="td" sx={{ width: "300px" }}>
        {data["date & time"]}
      </Box>
      <Box component="td" sx={{ width: "157px" }}>
        ${data.amount}
      </Box>
      <Box component="td" sx={{ width: "273px" }}>
        {data.via}
      </Box>

      <Box
        component="td"
        sx={{
          marginRight: "90px",
          width: "65px",
          color: "#2776EA",
          textDecoration: "underline",
        }}
      >
        <Link to="wallet"> Detail </Link>
      </Box>
      <Box
        component="td"
        sx={{
          width: "65px",
          color: "#2776EA",
          textDecoration: "underline",
        }}
      >
        <Link to="wallet"> Download </Link>
      </Box>
    </Box>
  );
};

export default Conversiondata;
