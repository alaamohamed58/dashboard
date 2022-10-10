import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
const BillDetail = (props) => {
  const { id, title, loading, remainingDays, days, location, status } = props;

  let billStaus = "";
  let barStatus = "";
  let statusText = "";
  let barShadow = "";

  if (status === "pending") {
    billStaus = "pending";
    barStatus = "pending";
    statusText = "pendingText";
    barShadow = "pendingBarShadow";
  } else if (status === "active") {
    billStaus = "activeBill";
    barStatus = "activeBill";
    statusText = "activeText";
    barShadow = "activeBarShadow";
  } else {
    billStaus = "installing";
    barStatus = "installing";
    statusText = "installingText";
    barShadow = "installingBarShadow";
  }

  return (
    <Box
      component="li"
      sx={{
        display: "flex",

        height: "auto",
        background: "#fff",
        marginTop: "55px",
      }}
    >
      <Box
        component="img"
        src="/images/icons/bills.svg"
        sx={{
          display: "inline-block",
          width: "142.08px",
          height: "143px",
          margin: { xs: "29px 10px", xl: "69px 36px" },
        }}
      ></Box>
      <Stack sx={{ width: 1, padding: { xs: "29px 10px", xl: "69px 36px" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #CEDDF2",
          }}
        >
          <div>
            <Typography
              component="h3"
              sx={{
                fontSize: { xs: "22px", xl: "35px" },
                fontWeight: 700,
                color: "#0A194E",
              }}
            >
              {title}
            </Typography>
            <Typography
              component="span"
              sx={{
                fontSize: { xs: "12px", xl: "22px" },
                fontWeight: 700,
                color: "#A2BCDC",
              }}
            >
              {location}
            </Typography>
          </div>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {status === "installing" && (
              <Typography
                component="p"
                sx={{ width: "176px", color: "#0A194E", fontWeight: 500 }}
              >
                {remainingDays} days are remaining{" "}
              </Typography>
            )}
            <Button
              sx={{
                textTransform: "capitalize",
                fontSize: "15px",
                width: "118px",
              }}
              variant="contained"
              className={billStaus}
            >
              {status}
            </Button>
          </Box>
        </Box>
        <Stack sx={{ marginTop: "15px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "16px", xl: "22px" },
                fontWeight: 700,
                color: "#0A194E",
              }}
            >
              {remainingDays} Days
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", xl: "22px" },
                fontWeight: 700,
                color: "#0A194E",
              }}
            >
              {days} Day Active
            </Typography>
          </Box>

          <Box
            className={barShadow}
            sx={{
              height: "16px",
              borderRadius: "12px",
              background: "red",
              margin: "40px 0 0px",
            }}
          >
            <Box
              className={barStatus}
              sx={{
                width: `${loading}%`,
                height: 1,
                borderRadius: "12px",
                position: "relative",
              }}
            >
              <Typography
                className={statusText}
                sx={{
                  position: "absolute",
                  right: "-20px",
                  top: "-34px",
                  fontSize: "22px",
                  fontWeight: 700,
                }}
              >
                {loading}%
              </Typography>
            </Box>

            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "14px",
              }}
            >
              <Typography
                sx={{ fontSize: "22px", color: "#A2BCDC", fontWeight: 500 }}
              >
                0%
              </Typography>
              <Typography
                sx={{ fontSize: "22px", color: "#A2BCDC", fontWeight: 500 }}
              >
                100%
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default BillDetail;
