import { useState } from "react";
import { Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import BarsIcon from "../icons/BarsIcon";
import ToggleLanguage from "./ToggleLanguage";
const imgStyle = {
  width: { xs: "46px", md: "30px", xl: "32.8px" },
  height: { xs: "23px", xl: "24.79px" },
  display: "inline-block",
};

const dataStyle = {
  width: { sm: "auto", md: "150px", xl: "110px" },
  gap: { sm: "15px" },
  justifyContent: {
    sm: "flex-start",
    xl: "unset",
  },
  alignItems: "center",
  height: {
    xs: "auto",
    lg: "auto",
  },
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "28px",
  lineHeight: "24px",
  letterSpacing: "0.4px",
  color: "#FFFFFF",
  display: { xs: "flex", lg: "unset" },
  gap: { xs: "15px", lg: "0" },
};

const liStyle = {
  display: "flex",
  alignItems: "center",
  padding: { xs: "10px" },
  gap: { sm: "4px", xl: "18.92px" },
  width: 1,
};

const rightIconsStyle = {
  width: { xs: "30px", xl: "29.17px" },
  height: { xs: "30px", xl: "29.17px" },
  cursor: "pointer",
};
const h6Style = {
  color: "#9FBADB",
  marginTop: { sm: 0, xl: "10px" },
  fontSize: { sm: "18px", sm: "11px", md: "15px" },
  marginLeft: { sm: "25px", sm: "0" },
};

const spanStyle = {
  display: { sm: "inline-block", lg: "unset" },
  width: { sm: "60px", xl: "unset" },
  fontSize: {
    xs: "22px",
    sm: "13px",
    md: "18px",
  },
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
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "space-between", lg: "flex-start" },
        height: "95px",
        gap: { sm: "25px", xl: "130px" },
        backgroundColor: "#011B41",
        padding: "0 35px",
        "z-index": 10,
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
        }}
      >
        <Box component="nav" sx={{ display: "flex" }}>
          <Box
            component="ul"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              width: 1,
              gap: { sm: "25px", xl: "50px" },
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
  );
};

export default Header;
