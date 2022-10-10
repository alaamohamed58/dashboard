import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
const data = [
  { quarter: 1, kw: 30000 },
  { quarter: 2, kw: 20000 },
  { quarter: 3, kw: 10000 },
  { quarter: 4, kw: 40000 },
  { quarter: 5, kw: 50000 },
  { quarter: 6, kw: 60000 },
  { quarter: 7, kw: 70000 },
  { quarter: 8, kw: 80000 },
  { quarter: 9, kw: 90000 },
  { quarter: 10, kw: 10000 },
  { quarter: 11, kw: 11000 },
  { quarter: 12, kw: 150000 },
];
const Consumption = () => {
  return (
    <Box
      sx={{
        width: { xs: "auto", xl: "1437px" },
        height: "869px",
        border: "2px solid #CEDDF2",
        background: "#Fff",
        padding: "40px 48px",
      }}
    >
      <Typography
        component="h2"
        sx={{
          fontWeight: 700,
          fontSize: "35px",
          lineHeight: "136.9%",
          color: "#0A194E",
        }}
      >
        Monthly Consumption (kW) & Cost ($)
      </Typography>
      <VictoryChart domain={{ x: [0, 12] }}>
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
          tickFormat={[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ]}
        />
        <VictoryAxis dependentAxis tickFormat={(x) => `${x}KW - $100`} />
        <VictoryBar
          data={data}
          x="quarter"
          y="kw"
          style={{
            data: { fill: "#2776EA", width: 20, gap: "30px" },
          }}
        />
      </VictoryChart>
    </Box>
  );
};

export default Consumption;
