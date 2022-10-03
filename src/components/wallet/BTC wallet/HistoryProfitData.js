import { Link } from "react-router-dom";
import { Box } from "@mui/material";
const HistoryProfitData = ({ data }) => {
  return (
    <Box
      component="tr"
      sx={{
        display: "flex",
        color: "#0A194E",
        fontSize: "22px",
        fontWeight: 400,
        paddingTop: "23px",
        paddingBottom: "10px",
        borderBottom: "2px solid #CEDDF2",
      }}
    >
      <Box component="td" sx={{ marginRight: "147px", width: "91px" }}>
        {data.BTC}
      </Box>
      <Box component="td" sx={{ marginRight: "90px", width: "193px" }}>
        {data["data & time"]}
      </Box>
      <Box component="td" sx={{ marginRight: "128px", width: "110px" }}>
        {data.ASIC}
      </Box>
      <Box component="td" sx={{ marginRight: "180px", width: "65px" }}>
        {data["shared miners"]}
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

export default HistoryProfitData;
