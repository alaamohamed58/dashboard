import { Typography } from "@mui/material";
import { Box } from "@mui/material";

const Header = () => {
  return (
    <Box
      component="header"
      sx={{ backgroundColor: "#011B41", padding: "0 27px" }}
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

          <Box
            component="li"
            sx={{ display: "flex", alignItems: "center", gap: "18.92px" }}
          >
            <Box
              component="img"
              sx={{
                width: "29.17px",
                height: "26.25px",
                display: "inline-block",
              }}
              src="/images/icons/icon1.svg"
              alt="icon"
            />
            <Box
              component="div"
              sx={{
                width: "110px",
                height: "58px",

                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "28px",
                lineHeight: "24px",

                letterSpacing: "0.4px",

                color: "#FFFFFF",
              }}
            >
              <Box component="span">0</Box>
              <Typography
                component="h6"
                sx={{ color: "#9FBADB", marginTop: "10px" }}
              >
                Shared Miners
              </Typography>
            </Box>
          </Box>

          <Box
            component="li"
            sx={{ display: "flex", alignItems: "center", gap: "18.92px" }}
          >
            <Box
              component="img"
              sx={{
                width: "29.17px",
                height: "26.25px",
                display: "inline-block",
              }}
              src="/images/icons/icon2.svg"
              alt="icon"
            />
            <Box
              component="div"
              sx={{
                width: "110px",
                height: "58px",

                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "28px",
                lineHeight: "24px",

                letterSpacing: "0.4px",

                color: "#FFFFFF",
              }}
            >
              <Box component="span">1</Box>
              <Typography
                component="h6"
                sx={{ color: "#9FBADB", marginTop: "10px" }}
              >
                ASIC
              </Typography>
            </Box>
          </Box>

          <Box
            component="li"
            sx={{ display: "flex", alignItems: "center", gap: "18.92px" }}
          >
            <Box
              component="img"
              sx={{
                width: "29.17px",
                height: "26.25px",
                display: "inline-block",
              }}
              src="/images/icons/icon3.svg"
              alt="icon"
            />
            <Box
              component="div"
              sx={{
                width: "110px",
                height: "58px",

                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "28px",
                lineHeight: "24px",

                letterSpacing: "0.4px",

                color: "#FFFFFF",
              }}
            >
              <Box component="span">₿0.45</Box>
              <Typography
                component="h6"
                sx={{ color: "#9FBADB", marginTop: "10px" }}
              >
                mined BTC
              </Typography>
            </Box>
          </Box>

          <Box
            component="li"
            sx={{ display: "flex", alignItems: "center", gap: "18.92px" }}
          >
            <Box
              component="img"
              sx={{
                width: "29.17px",
                height: "26.25px",
                display: "inline-block",
              }}
              src="/images/icons/icon4.svg"
              alt="icon"
            />
            <Box
              component="div"
              sx={{
                width: "110px",
                height: "58px",

                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "28px",
                lineHeight: "24px",

                letterSpacing: "0.4px",

                color: "#FFFFFF",
              }}
            >
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
    </Box>
  );
};

export default Header;
