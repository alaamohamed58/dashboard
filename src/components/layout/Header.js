import { Typography } from "@mui/material";
import { Box } from "@mui/material";

const Header = () => {
  const imgStyle = {
    width: "32.8px",
    height: "24.79px",
    display: "inline-block",
  };

  const dataStyle = {
    width: "110px",
    height: "58px",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "28px",
    lineHeight: "24px",
    letterSpacing: "0.4px",
    color: "#FFFFFF",
  };

  const liStyle = {
    display: "flex",
    alignItems: "center",
    gap: "18.92px",
  };

  const rightIconsStyle = {
    width: "29.17px",
    height: "29.17px",
  };

  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "213.92px",
        backgroundColor: "#011B41",
        padding: "0 27px",
        "z-index": 10,
      }}
    >
      <nav>
        <Box
          component="ul"
          sx={{ display: "flex", gap: "119.29px", alignItems: "center" }}
        >
          <Box component="li" sx={{ width: "246px", height: "93px" }}>
            <Box
              component="img"
              sx={{ width: 1 }}
              src="/images/logo.png"
              alt="logo"
            />
          </Box>

          <Box component="li" sx={liStyle}>
            <Box
              component="img"
              sx={imgStyle}
              src="/images/icons/icon1.svg"
              alt="icon"
            />
            <Box component="div" sx={dataStyle}>
              <Box component="span">0</Box>
              <Typography
                component="h6"
                sx={{ color: "#9FBADB", marginTop: "10px" }}
              >
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
              <Box component="span">1</Box>
              <Typography
                component="h6"
                sx={{ color: "#9FBADB", marginTop: "10px" }}
              >
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
              <Box component="span">₿0.45</Box>
              <Typography
                component="h6"
                sx={{ color: "#9FBADB", marginTop: "10px" }}
              >
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
              <Box component="span">$300</Box>
              <Typography
                component="h6"
                sx={{ color: "#9FBADB", marginTop: "10px" }}
              >
                Fiat Balance
              </Typography>
            </Box>
          </Box>
        </Box>
      </nav>

      {/* second NAV */}
      <nav>
        <Box
          component="ul"
          sx={{ display: "flex", alignItems: "center", gap: "59.33px" }}
        >
          <li>
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
                src="/images/icons/icon6.svg"
                alt="icon"
                sx={{ width: 1 }}
              />
            </Box>
          </li>

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
                src="/images/icons/avatar.svg"
                alt="icon"
                sx={{ width: 1 }}
              />
            </Box>
          </li>
        </Box>
      </nav>
    </Box>
  );
};

export default Header;
