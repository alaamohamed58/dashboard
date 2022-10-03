import { Link } from "react-router-dom";
import { Box } from "@mui/material";
const HistoryBillsData = ({ data }) => {
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
        {data.month}
      </Box>
      <Box component="td" sx={{ width: "157px" }}>
        ${data.amount}
      </Box>
      <Box component="td" sx={{ width: "273px" }}>
        {data.invoiceNum}
      </Box>

      <Box
        component="td"
        sx={{
          width: "111px",
          color: "#2776EA",
          textDecoration: "underline",
        }}
      >
        <Link to="wallet"> Download </Link>
      </Box>
    </Box>
  );
};

export default HistoryBillsData;
