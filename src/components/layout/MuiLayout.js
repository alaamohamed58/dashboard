import { Fragment } from "react";
import { Box } from "@mui/material";

import Header from "./Header";
import MainNavigation from "./MainNavigation";

const MuiLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Box component="main" sx={{ display: "flex" }}>
        <MainNavigation />
        <Box
          component="section"
          sx={{ padding: "50px 60px", width: "calc(100% - 317px)" }}
        >
          {children}
        </Box>
      </Box>
      ;
    </Fragment>
  );
};

export default MuiLayout;
