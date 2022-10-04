import { useState, useMemo, useCallback, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { Box, Typography } from "@mui/material";
import HistoryBillsData from "./HistoryBillsData";
import { Stack } from "@mui/material";

const HistoryBills = () => {
  const [year, setYear] = useState(2022);
  const [filteredItems, setFilteredItems] = useState([]);

  const filterChangeHandler = (e) => {
    setYear(e.target.value);
  };

  const DUMMY_DATA = useMemo(
    () => [
      {
        id: "d1",
        month: "January",
        amount: 730,
        invoiceNum: 3046464,
        year: 2022,
      },
      {
        id: "d2",
        month: "February",
        amount: 430,
        invoiceNum: 232422,
        year: 2020,
      },
      {
        id: "d3",
        month: "August",
        amount: 500,
        invoiceNum: 232422,
        year: 2021,
      },
      {
        id: "d4",
        month: "May",
        amount: 790,
        invoiceNum: 654646,
        year: 2022,
      },
    ],
    []
  );

  const filterHandeler = useCallback(() => {
    switch (year) {
      case "2020":
        return setFilteredItems(
          DUMMY_DATA.filter((data) => data.year === 2020)
        );
      case "2021":
        return setFilteredItems(
          DUMMY_DATA.filter((data) => data.year === 2021)
        );
      // eslint-disable-next-line no-duplicate-case
      case "2022":
        return setFilteredItems(
          DUMMY_DATA.filter((data) => data.year === 2022)
        );
      default:
        return setFilteredItems(DUMMY_DATA);
    }
  }, [DUMMY_DATA, year]);

  useEffect(() => {
    filterHandeler();
  }, [filterHandeler, year, DUMMY_DATA]);

  return (
    <Box
      sx={{
        background: "#fff",
        marginTop: "51px",
        width: "1437px",
        border: " 2px solid #CEDDF2",
        padding: "40px 49px",
      }}
    >
      <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Typography
          component="h2"
          sx={{
            fontSize: "35px",
            fontWeight: 700,
            color: "#0A194E",
            marginBottom: "65px",
          }}
        >
          Monthly History Bills Year 2022
        </Typography>
        <FormControl sx={{ width: "135px" }} variant="standard">
          <NativeSelect
            defaultValue={year}
            labelId="demo-simple-select-label"
            onChange={filterChangeHandler}
            value={year}
            id="demo-simple-select"
            label="Year"
            sx={{ color: "#0A194E", fontWeight: "700" }}
          >
            <option value={2022}>Year 2022</option>
            <option value={2021}>Year 2021</option>
            <option value={2020}>Year 2020</option>
          </NativeSelect>
        </FormControl>
      </Stack>

      <Box component="table" sx={{ width: 1 }}>
        <Box
          component="thead"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: "#0A194E",
            fontSize: "22px",
            fontWeight: 600,
            borderBottom: "2px solid #CEDDF2",
            paddingBottom: "10px",
          }}
        >
          <Box
            component="tr"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "1",
            }}
          >
            <Box component="th" sx={{ width: "89px" }}>
              Month
            </Box>
            <Box component="th" sx={{ width: "157px" }}>
              Amount
            </Box>
            <Box component="th" sx={{ width: "174px" }}>
              Invoice Number
            </Box>

            <Box component="th" sx={{ width: "126px" }}>
              Download
            </Box>
          </Box>
        </Box>

        <Box component="tbody">
          {filteredItems.map((data) => {
            return <HistoryBillsData data={data} key={data.id} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default HistoryBills;
