import { Box, Typography, Button, Stack } from "@mui/material";
const titleStyle = {
  fontSize: "16px",
  color: "#A2BCDC",
  fontWeight: 600,
};

const detailStyle = {
  letterSpacing: "0.17px",
  color: "#0A194E",
  fontSize: "22px",
  fontWeight: 600,
};
const Farm = ({ data }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "23px",
        marginTop: "61px",
        background: "#fff",
        marginBottom: "31px",
      }}
    >
      <Stack
        sx={{
          background:
            "linear-gradient(91.12deg, rgba(39, 118, 234, 0.3) 0.93%, rgba(39, 118, 234, 0) 99.04%)",
          padding: "40px",
          width: "354px",
          textAlign: "center",
        }}
      >
        <Box
          component="img"
          src={data.image}
          alt="data.title"
          sx={{
            width: "282.33px",
            height: "151.4px",
            display: "inline-block",
          }}
        />
        <Box
          sx={{
            width: "280px",
            height: "10px",
            borderRadius: "33px",
            margin: "41px 0 13px",
            backgroundColor: "#A9C8F7",
          }}
        >
          <Box
            component="div"
            sx={{
              width: `${data.filled}%`,
              backgroundColor: "#2776EA",
              height: 1,
              borderRadius: "33px",
            }}
          ></Box>
        </Box>
        <Typography
          component="h4"
          sx={{ fontSize: 15, color: "#2776EA", fontWeight: 600 }}
        >
          {" "}
          Filled {data.filled}%
        </Typography>
      </Stack>

      <Box sx={{ background: "#fff", width: 1058, marginTop: "20px" }}>
        <Typography
          component="h2"
          sx={{
            fontSize: 35,
            fontWeight: 700,
            color: "#0A194E",
            borderBottom: "1px solid #CEDDF2",
          }}
        >
          {data.title}{" "}
        </Typography>

        <Box>
          <Stack
            sx={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "50px",
              marginTop: "10px",
            }}
          >
            <div>
              <Typography compenent="span" sx={titleStyle}>
                Location
              </Typography>
              <Typography compenent="h4" sx={detailStyle}>
                {" "}
                {data.location}{" "}
              </Typography>
            </div>

            <div>
              <Typography compenent="span" sx={titleStyle}>
                Electricity Prices
              </Typography>
              <Typography compenent="h4" sx={detailStyle}>
                {" "}
                {data["electricity-price"]}{" "}
              </Typography>
            </div>

            <div>
              <Typography compenent="span" sx={titleStyle}>
                Maintainance Fee
              </Typography>
              <Typography compenent="h4" sx={detailStyle}>
                {" "}
                {data["maintainance-fee"]}{" "}
              </Typography>
            </div>

            <div>
              <Typography compenent="span" sx={titleStyle}>
                Guarantee
              </Typography>
              <Typography compenent="h4" sx={detailStyle}>
                {" "}
                {data.guarantee}{" "}
              </Typography>
            </div>

            <div>
              <Typography compenent="span" sx={titleStyle}>
                security
              </Typography>
              <Typography compenent="h4" sx={detailStyle}>
                {" "}
                {data.security}{" "}
              </Typography>
            </div>

            <div>
              <Typography compenent="span" sx={titleStyle}>
                Setup Period
              </Typography>
              <Typography compenent="h4" sx={detailStyle}>
                {" "}
                {data["setup-period"]}{" "}
              </Typography>
            </div>

            <div>
              <Typography compenent="span" sx={titleStyle}>
                Guaranteed Uptime
              </Typography>
              <Typography compenent="h4" sx={detailStyle}>
                {" "}
                {data["guaranteed-uptime"]}{" "}
              </Typography>
            </div>

            <div>
              <Typography compenent="span" sx={titleStyle}>
                Mines To External Wallet
              </Typography>
              <Typography compenent="h4" sx={detailStyle}>
                {" "}
                {data["mines-to-external-wallet"]}{" "}
              </Typography>
            </div>

            <div>
              <Typography compenent="span" sx={titleStyle}>
                Setup Fee
              </Typography>
              <Typography compenent="h4" sx={detailStyle}>
                {" "}
                ${data["setup-fee"]}{" "}
              </Typography>
            </div>
          </Stack>

          <Box
            sx={{
              display: "flex",
              gap: "20px",
              marginTop: "22px",
              marginBottom: "31px",
            }}
          >
            <Button variant="contained" sx={{ width: "203px", height: "42px" }}>
              SELECT FARM
            </Button>
            <Button variant="outlined" sx={{ width: "203px", height: "42px" }}>
              VIEW GALLERY
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Farm;
