import { useEffect, useState, useMemo, Fragment } from "react";
import ReactPaginate from "react-paginate";

import { Box } from "@mui/material";
import Conversiondata from "./Conversiondata";

const Conversions = () => {
  const DUMMY_DATA = useMemo(
    () => [
      {
        id: "d1",
        "date & time": "01/09/2022 - 9:00",
        amount: 130,
        via: "Wire Transfer",
      },
      {
        id: "d2",
        "date & time": "06/10/2022 - 10:46",
        amount: 790,
        via: "Wire Transfer",
      },
      {
        id: "d3",
        "date & time": "05/07/2022 - 10:46",
        amount: 600,
        via: "Wire Transfer",
      },
      {
        id: "d4",
        "date & time": "05/07/2022 - 10:46",
        amount: 410,
        via: "Wire Transfer",
      },
      {
        id: "d5",
        "date & time": "05/07/2022 - 10:46",
        amount: 200,
        via: "Wire Transfer",
      },
      {
        id: "d6",
        "date & time": "05/07/2022 - 10:46",
        amount: 430,
        via: "Wire Transfer",
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
    <Fragment>
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
            <Box component="th" sx={{ width: "143px" }}>
              Date & Time
            </Box>
            <Box component="th" sx={{ width: "157px" }}>
              Amount
            </Box>
            <Box component="th" sx={{ width: "174px" }}>
              Via
            </Box>

            <Box component="th" sx={{ width: "65px" }}>
              Details
            </Box>
            <Box component="th" sx={{ width: "65px" }}>
              Download
            </Box>
          </Box>
        </Box>

        <tbody>
          {currentItems.map((data) => {
            return <Conversiondata data={data} key={data.id} />;
          })}
        </tbody>
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
    </Fragment>
  );
};

export default Conversions;
