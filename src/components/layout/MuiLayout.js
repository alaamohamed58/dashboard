import { Fragment } from "react";
import { Box, Container } from "@mui/material";

import Header from "./Header";
import MainNavigation from "./MainNavigation";

const MuiLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />

      <Box sx={{ display: "flex" }}>
        <MainNavigation />

        <Container
          component="main"
          maxWidth={false}
          sx={{
            marginLeft: { lg: "350px", sm: 0 },
            maxWidth: { lg: "1437px  !important" },
          }}
        >
          <Box component="section" sx={{ padding: "50px 0px" }}>
            {children}
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
};

export default MuiLayout;
