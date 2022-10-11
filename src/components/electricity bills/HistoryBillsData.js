import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const tdStyle = {
  marginRight: { xs: 0, xl: "90px" },
  width: "auto",
  color: "#000",
};
const HistoryBillsData = ({ data }) => {
  return (
    <Box
      component="tr"
      sx={{
        display: "flex",
        gap: {
          xs: "40px",
          sm: "70px",
          md: "70px",
          lg: "63px",
        },
        justifyContent: "center",
        color: "#0A194E",
        fontSize: { sm: "12px", lg: "15px" },
        fontWeight: 400,
        paddingTop: "23px",
        paddingBottom: "10px",
        borderBottom: "2px solid #CEDDF2",
      }}
    >
      <Box component="td" sx={tdStyle}>
        {data.month}
      </Box>
      <Box component="td" sx={tdStyle}>
        ${data.amount}
      </Box>
      <Box component="td" sx={tdStyle}>
        {data.invoiceNum}
      </Box>

      <Box component="td" sx={tdStyle}>
        <Link to="wallet"> Download </Link>
      </Box>
    </Box>
  );
};

export default HistoryBillsData;
