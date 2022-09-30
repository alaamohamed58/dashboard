import { Fragment } from "react";
import { Box } from "@mui/material";

import Header from "./Header";

const MuiLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Box component="main" sx={{ width: "calc(100% - 317px)" }}>
        {children}
      </Box>
      ;
    </Fragment>
  );
};

export default MuiLayout;
