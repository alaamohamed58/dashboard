import React, { useEffect, useState, useMemo } from "react";
import ReactPaginate from "react-paginate";

import HistoryProfitData from "./HistoryProfitData";
import { Box, Typography } from "@mui/material";

const HistoryProfit = () => {
  const DUMMY_DATA = useMemo(
    () => [
      {
        id: "d1",
        BTC: "0.13",
        "data & time": "05/07/2022 - 10:46",
        ASIC: "03",
        "shared miners": "60",
      },
      {
        id: "d2",
        BTC: "0.15",
        "data & time": "05/07/2022 - 12:46",
        ASIC: "03",
        "shared miners": "60",
      },
      {
        id: "d3",
        BTC: "0.18",
        "data & time": "05/09/2022 - 10:55",
        ASIC: "63",
        "shared miners": "60",
      },
      {
        id: "d4",
        BTC: "0.18",
        "data & time": "05/09/2022 - 10:55",
        ASIC: "63",
        "shared miners": "60",
      },
      {
        id: "d5",
        BTC: "0.17",
        "data & time": "05/09/2022 - 07:55",
        ASIC: "63",
        "shared miners": "60",
      },
      {
        id: "d6",
        BTC: "0.2",
        "data & time": "05/09/2022 - 10:55",
        ASIC: "70",
        "shared miners": "70",
      },
    ],
    []
  );
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);
  let itemsPerPage = 2;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(DUMMY_DATA.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(DUMMY_DATA.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, DUMMY_DATA]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % DUMMY_DATA.length;

    setItemOffset(newOffset);
  };

  return (
    <Box
      sx={{
        background: "#fff",
        margin: "51px auto",
        width: {
          sm: "auto",
          md: "700px",
          xl: "900px",
        },
        border: " 2px solid #CEDDF2",
        padding: { xs: "40px 10px", xl: "40px 49px" },
      }}
    >
      <Typography
        sx={{
          fontSize: "35px",
          fontWeight: 700,
          color: "#0A194E",
          marginBottom: "65px",
        }}
      >
        Mining History Profits
      </Typography>

      <Box component="table" sx={{ width: 1 }}>
        <Box component="tr" sx={{ display: "flex", gap: "45px" }}>
          <Box component="th">BTC</Box>
          <Box component="th">Date & Time</Box>
          <Box component="th">ASIC</Box>
          <Box component="th">Shared Miners</Box>
          <Box component="th">Details</Box>
          <Box component="th">Download</Box>
        </Box>

        <Box component="tbody">
          {currentItems.map((data) => {
            return <HistoryProfitData data={data} key={data.id} />;
          })}
        </Box>
      </Box>
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="activeLink"
      />
    </Box>
  );
};

export default HistoryProfit;
