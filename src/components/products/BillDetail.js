import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import ActiveBillInform from "./ActiveBillInform";
import InstallingStepper from "./InstallingStepper";
import { MainTitle } from "../../customThemes";
const BillDetail = (props) => {
  const {
    id,
    title,
    loading,
    remainingDays,
    days,
    location,
    status,
    renovation,
    model,
    consumption,
    serialNum,
    hashRate,
    lastMining,
    totalMined,
    nextMining,
    lastPayment,
    nextPayment,
  } = props;

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

        background: "#fff",
        marginTop: "55px",
      }}
    >
      <Stack sx={{ width: 1, padding: "39px 56px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #CEDDF2",
          }}
        >
          <div>
            <MainTitle component="h2" sx={{ textAlign: "left", m: 0 }}>
              {title}{" "}
            </MainTitle>
            <Typography
              component="span"
              sx={{
                fontSize: "22px",
                fontWeight: 700,
                color: "custom.secondary",
              }}
            >
              {location}
            </Typography>
          </div>
          <Box sx={{ display: "flex", alignItems: "center" }}>
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
        <Stack sx={{ marginTop: "15px", background: "#F6FAFF" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{ fontSize: "22px", fontWeight: 700, color: "custom.main" }}
            >
              {remainingDays} Days
            </Typography>
            <Typography
              sx={{ fontSize: "22px", fontWeight: 700, color: "custom.main" }}
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
                paddingTop: "14px",
                background: "#F6FAFF",
              }}
            >
              <Typography
                sx={{
                  fontSize: "22px",
                  color: "custom.secondary",
                  fontWeight: 500,
                }}
              >
                0%
              </Typography>
              <Typography
                sx={{
                  fontSize: "22px",
                  color: "custom.secondary",
                  fontWeight: 500,
                }}
              >
                100%
              </Typography>
            </Stack>
          </Box>
        </Stack>
        <Stack
          sx={{
            flexDirection: "row",
            marginTop: "60px",
            gap: "150px",
          }}
        >
          <Box>
            <Typography
              component="span"
              sx={{ color: "custom.secondary", fontSize: "15px" }}
            >
              Renovation Date
            </Typography>
            <Typography
              component="h3"
              sx={{ color: "custom.main", fontSize: "22px", fontWeight: 700 }}
            >
              {renovation}
            </Typography>
          </Box>
          <Box>
            <Typography
              component="span"
              sx={{ color: "custom.secondary", fontSize: "15px" }}
            >
              Model
            </Typography>
            <Typography
              component="h3"
              sx={{ color: "custom.main", fontSize: "22px", fontWeight: 700 }}
            >
              {model}
            </Typography>
          </Box>
          <Box>
            <Typography
              component="span"
              sx={{ color: "custom.secondary", fontSize: "15px" }}
            >
              Hash Rate
            </Typography>
            <Typography
              component="h3"
              sx={{ color: "custom.main", fontSize: "22px", fontWeight: 700 }}
            >
              {hashRate}
            </Typography>
          </Box>
          <Box>
            <Typography
              component="span"
              sx={{ color: "custom.secondary", fontSize: "15px" }}
            >
              Consumption
            </Typography>
            <Typography
              component="h3"
              sx={{ color: "custom.main", fontSize: "22px", fontWeight: 700 }}
            >
              {consumption}
            </Typography>
          </Box>
          {status !== "pending" && (
            <Box>
              <Typography
                component="span"
                sx={{ color: "custom.secondary", fontSize: "15px" }}
              >
                Serial Number
              </Typography>
              <Typography
                component="h3"
                sx={{ color: "custom.main", fontSize: "22px", fontWeight: 700 }}
              >
                {serialNum}
              </Typography>
            </Box>
          )}
        </Stack>
        {status === "pending" && (
          <Typography
            component="p"
            sx={{
              color: "custom.main",
              fontSize: "22px",
              fontWeight: 500,
              borderTop: "1px solid #CEDDF2",
              padding: "20px 0",
              marginTop: "30px ",
            }}
          >
            You have pending bills that need to be paid to continue. To pay the
            bills,
            <Typography
              component="span"
              sx={{
                color: "#2776EA",
                textDecoration: "underline",
                fontSize: "22px",
                fontWeight: 500,
              }}
            >
              <Link to="/shop">CLICK HERE</Link>
            </Typography>{" "}
            or go to the Expenses section.
          </Typography>
        )}

        {status === "installing" && <InstallingStepper />}

        {status === "active" && (
          <ActiveBillInform
            lastMining={lastMining}
            totalMined={totalMined}
            nextMining={nextMining}
            lastPayment={lastPayment}
            nextPayment={nextPayment}
          />
        )}
      </Stack>
    </Box>
  );
};

export default BillDetail;
