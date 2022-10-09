import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const tdStyle = {
  marginRight: { xs: 0, xl: "90px" },
  width: "auto",
  color: "#000",
};
const HistoryProfitData = ({ data }) => {
  return (
    <Box
      component="tr"
      sx={{
        display: "flex",
        gap: {
          xs: "47px",
          md: "70px",
          lg: "63px",
        },
        color: "#0A194E",
        fontSize: { sm: "12px", lg: "15px" },
        fontWeight: 400,
        paddingTop: "23px",
        paddingBottom: "10px",
        borderBottom: "2px solid #CEDDF2",
      }}
    >
      <Box component="td" sx={tdStyle}>
        {data.BTC}
      </Box>
      <Box component="td" sx={tdStyle}>
        {data["data & time"]}
      </Box>
      <Box component="td" sx={tdStyle}>
        {data.ASIC}
      </Box>
      <Box component="td" sx={tdStyle}>
        {data["shared miners"]}
      </Box>
      <Box component="td" sx={tdStyle}>
        <Link to="wallet"> Detail </Link>
      </Box>
      <Box component="td" sx={tdStyle}>
        <Link to="wallet"> Download </Link>
      </Box>
    </Box>
  );
};

export default HistoryProfitData;
