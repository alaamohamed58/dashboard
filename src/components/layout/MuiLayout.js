import { Fragment } from "react";
import { Box } from "@mui/material";

import Header from "./Header";
import MainNavigation from "./MainNavigation";

const MuiLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />

      <Box sx={{ display: "flex" }}>
        <MainNavigation />

        <Box
          component="main"
          sx={{ marginLeft: "317px", width: "calc(100% - 317px)" }}
        >
          <Box component="section" sx={{ padding: "50px 60px" }}>
            {children}
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default MuiLayout;
