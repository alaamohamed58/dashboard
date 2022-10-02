import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Stack, Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const MainNavigation = () => {
  const iconStyle = {
    display: "inline-block",
    width: "20.7px",
    height: "20px",
    marginRight: "34.3px",
    marginLeft: "25px",
  };

  const typographyStyle = {
    color: "#9FBADB",
    fontStyle: "normal",
    fontWeight: 700,
    letterSpacing: "0.17px",
    fontSize: "20px",
    lineHeight: "150%",
    cursor: "pointer",
    marginBottom: "12px",
    display: "inline-block",
  };

  const subAccordion = {
    ...typographyStyle,
    padding: "4px 60px",

    "&:hover": {
      backgroundColor: "#1B2B65",
    },
  };

  return (
    <Stack
      sx={{
        justifyContent: "space-between",
        backgroundColor: "#00255B",
        width: "317px",
        minHeight: "1440px",
        paddingTop: "50px",
      }}
    >
      <Box>
        <item>
          <Accordion
            elevation={0}
            sx={{
              backgroundColor: "#00255B",
              color: "#9FBADB",
              fontSize: "20px",
              fontWeight: 700,
              paddingLeft: 0,
            }}
          >
            <AccordionSummary
              expandIcon={
                <img src="/images/icons/expandIcon.svg" alt="expand" />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ paddingLeft: 0 }}
            >
              <Box
                component="img"
                src="/images/icons/cart.svg"
                alt="cart"
                sx={iconStyle}
              />

              <Typography
                sx={{ fontWeight: 700, fontSize: "20px" }}
                component="h5"
              >
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/shop"
                >
                  {" "}
                  Shop{" "}
                </NavLink>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack>
                <item>
                  <Box sx={subAccordion}>ASIC Miners</Box>{" "}
                </item>
                <item>
                  <Box sx={subAccordion}>Shared Miners</Box>
                </item>
              </Stack>
            </AccordionDetails>
          </Accordion>
        </item>

        <item>
          <Box sx={{ marginTop: "34px" }}>
            <Box
              component="img"
              src="/images/icons/dashboard.svg"
              alt="cart"
              sx={iconStyle}
            />

            <Typography sx={typographyStyle} component="h5">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </Typography>
          </Box>{" "}
        </item>
        <Accordion
          elevation={0}
          sx={{
            backgroundColor: "#00255B",
            color: "#9FBADB",
            fontSize: "20px",
            fontWeight: 700,
            marginTop: "34px",
          }}
        >
          <AccordionSummary
            expandIcon={<img src="/images/icons/expandIcon.svg" alt="expand" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ paddingLeft: 0 }}
          >
            <Box
              component="img"
              src="/images/icons/wallet.svg"
              alt="cart"
              sx={iconStyle}
            />

            <Typography
              sx={{ fontWeight: 700, fontSize: "20px" }}
              component="h5"
            >
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/wallet"
              >
                Wallet
              </NavLink>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack>
              <item>
                <Box sx={subAccordion}>BTC Wallet</Box>{" "}
              </item>
              <item>
                <Box sx={subAccordion}>Fiat Wallet</Box>
              </item>
            </Stack>
          </AccordionDetails>
        </Accordion>
        <item>
          <Box sx={{ marginTop: "34px" }}>
            <Box
              component="img"
              src="/images/icons/products.svg"
              alt="cart"
              sx={iconStyle}
            />

            <Typography sx={typographyStyle} component="h5">
              My Products
            </Typography>
          </Box>
        </item>
        <item>
          <Box sx={{ marginTop: "34px" }}>
            <Box
              component="img"
              src="/images/icons/electricity.svg"
              alt="cart"
              sx={iconStyle}
            />

            <Typography sx={typographyStyle} component="h5">
              Electricity Bills
            </Typography>
          </Box>
        </item>
      </Box>

      <Box sx={{ paddingBottom: "50px" }}>
        <item>
          <Box>
            <Box
              component="img"
              src="/images/icons/support.svg"
              alt="cart"
              sx={iconStyle}
            />

            <Typography sx={typographyStyle} component="h5">
              Support
            </Typography>
          </Box>
        </item>
        <item>
          <Box sx={{ marginTop: "34px" }}>
            <Box
              component="img"
              src="/images/icons/logout.svg"
              alt="cart"
              sx={iconStyle}
            />

            <Typography sx={typographyStyle} component="h5">
              Logout
            </Typography>
          </Box>
        </item>
      </Box>
    </Stack>
  );
};

export default MainNavigation;
