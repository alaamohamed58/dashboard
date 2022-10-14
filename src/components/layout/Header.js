import { useState } from "react";
import { Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import BarsIcon from "../icons/BarsIcon";
import ToggleLanguage from "./ToggleLanguage";
const imgStyle = {
  width: { xs: "fit-content", md: "30px", xl: "32.8px" },
  height: { xs: "23px", xl: "24.79px" },
  display: "inline-block",
  position: { xs: "absolute", lg: "unset" },
  left: { xs: "41%", sm: "44%", md: "45%", lg: "46%" },
};

const dataStyle = {
  width: { sm: "auto", md: "150px", xl: "110px" },
  justifyContent: {
    xs: "center",
    xl: "unset",
  },
  alignItems: "center",
  height: {
    xs: "auto",
    lg: "auto",
  },
  textAlign: "center",
  flexDirection: { xs: "column", xl: "unset" },
  flexWrap: "wrap",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "28px",
  lineHeight: "24px",
  letterSpacing: "0.4px",
  color: "#FFFFFF",
  display: { xs: "flex", xl: "unset" },
  gap: { xs: "15px", xl: "0" },
};

const liStyle = {
  display: "flex",
  alignItems: { xs: "flex-start", lg: "center" },
  justifyContent: "center",
  padding: { xs: "10px" },
  width: 1,
  "&:first-of-type img": {
    left: { xs: "46%", sm: "48%", lg: "unset" },
  },
  "&:nth-child(2) img": {
    left: { xs: "43%", sm: "45%", md: "46%" },
  },
  "&:first-child span": {
    marginLeft: { xs: "41px", lg: "unset" },
  },
  "&:nth-child(2) span": {
    marginLeft: { xs: "15px", lg: "unset" },
  },
};

const rightIconsStyle = {
  width: { xs: "30px", xl: "29.17px" },
  height: { xs: "30px", xl: "29.17px" },
  cursor: "pointer",
};
const h6Style = {
  color: "#9FBADB",
  marginTop: { sm: 0, xl: "10px" },
  fontSize: { xs: "18px", lg: "15px" },
};

const spanStyle = {
  display: { sm: "inline-block", xl: "unset" },
  width: { xs: "fit-content" },
  textAlign: "center",
  fontSize: {
    xs: "22px",
    lg: "18px",
  },
  marginLeft: { xs: "25px", xl: "0" },
};

const Header = () => {
  const [showIcons, setShowIcons] = useState(false);
  const navigate = useNavigate();

  const toggleNavHandler = () => {
    setShowIcons((currPos) => !currPos);
  };

  const notificationPageHandler = () => {
    navigate("/notification");
  };

  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: "0",
        "z-index": 10,
      }}
    >
      <Box
        sx={{
          background: "red",
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "space-between", xl: "flex-start" },
          height: "95px",
          gap: { xs: "25px", xl: "130px" },
          backgroundColor: "#011B41",
          padding: "0 35px",
        }}
      >
        <Box
          sx={{
            width: { xs: "250px", md: "264px" },
            marginRight: { xl: "110px" },
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <Link to="/dashboard">
            <Box
              component="img"
              sx={{ width: 1 }}
              src="/images/logo.png"
              alt="logo"
            />
          </Link>
        </Box>
        <Box
          component="nav"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            width: 1,
            gap: { sm: 0, xl: "50px" },
            alignItems: "center",
            position: { xs: "absolute", lg: "unset" },
            top: showIcons ? "100%" : "-600%",
            left: 0,
            backgroundColor: { xs: "custom.main", lg: "unset" },
            transition: "0.2s",
            "z-index": { xs: "-5", lg: "1" },
          }}
        >
          <Box component="nav" sx={{ display: "flex" }}>
            <Box
              component="ul"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                width: 1,
                gap: { xs: "25px" },
                padding: { xs: "10px", lg: "0" },
                alignItems: "center",
                position: { xs: "absolute", lg: "unset" },
                top: showIcons ? "100%" : "-600%",
                left: 0,
                backgroundColor: { xs: "custom.main", lg: "unset" },
                transition: "0.2s",
              }}
            >
              <Box component="li" sx={liStyle}>
                <Box
                  component="img"
                  sx={imgStyle}
                  src="/images/icons/icon1.svg"
                  alt="icon"
                />
                <Box component="div" sx={dataStyle}>
                  <Box component="span" sx={spanStyle}>
                    0
                  </Box>
                  <Typography component="h6" sx={h6Style}>
                    Shared Miners
                  </Typography>
                </Box>
              </Box>

              <Box component="li" sx={liStyle}>
                <Box
                  component="img"
                  sx={imgStyle}
                  src="/images/icons/icon2.svg"
                  alt="icon"
                />
                <Box component="div" sx={dataStyle}>
                  <Box component="span" sx={spanStyle}>
                    1
                  </Box>
                  <Typography component="h6" sx={h6Style}>
                    ASIC
                  </Typography>
                </Box>
              </Box>

              <Box component="li" sx={liStyle}>
                <Box
                  component="img"
                  sx={imgStyle}
                  src="/images/icons/icon3.svg"
                  alt="icon"
                />
                <Box component="div" sx={dataStyle}>
                  <Box component="span" sx={spanStyle}>
                    ₿0.45
                  </Box>
                  <Typography component="h6" sx={h6Style}>
                    mined BTC
                  </Typography>
                </Box>
              </Box>

              <Box component="li" sx={liStyle}>
                <Box
                  component="img"
                  sx={imgStyle}
                  src="/images/icons/icon4.svg"
                  alt="icon"
                />
                <Box component="div" sx={dataStyle}>
                  <Box component="span" sx={spanStyle}>
                    $300
                  </Box>
                  <Typography component="h6" sx={h6Style}>
                    Fiat Balance
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* second NAV */}
          <Box component="nav" sx={{ width: 1 }}>
            <Box
              component="ul"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: { xs: "35px", xl: "59.33px" },
                backgroundColor: { xs: "#2776EA", lg: "unset" },
                padding: { xs: "10px", lg: "0" },
                width: "100%",
              }}
            >
              <li>
                <Box sx={rightIconsStyle}>
                  <Box
                    component="img"
                    src="/images/icons/icon7.svg"
                    alt="icon"
                    sx={{ width: 1 }}
                  />
                </Box>
              </li>

              <li>
                <Box sx={rightIconsStyle}>
                  <Box
                    component="img"
                    src="/images/icons/icon6.svg"
                    alt="icon"
                    sx={{ width: 1 }}
                  />
                </Box>
              </li>

              <li onClick={notificationPageHandler}>
                <Box sx={rightIconsStyle}>
                  <Box
                    component="img"
                    src="/images/icons/icon5.svg"
                    alt="icon"
                    sx={{ width: 1 }}
                  />
                </Box>
              </li>
              <li>
                <Box sx={rightIconsStyle}>
                  <Box
                    component="img"
                    src="/images/icons/user.svg"
                    alt="icon"
                    sx={{ width: 1 }}
                  />
                </Box>
              </li>
            </Box>
          </Box>
        </Box>
        <Box
          onClick={toggleNavHandler}
          sx={{
            color: "#fff",
            display: { xs: "block", lg: "none" },
            width: "30px",
          }}
        >
          <BarsIcon />
        </Box>
        <ToggleLanguage />
      </Box>
    </Box>
  );
};

export default Header;
