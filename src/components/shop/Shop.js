import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import MuiLayout from "../layout/MuiLayout";
import { CustomButton, MainTitle, PageTitle } from "../../customThemes";

const DUMMY_DATA = [
  {
    id: "d1",
    image: "/images/_placeholderImage.svg",
    title: "Shared Miners",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing  and typesetting industry.",
    miners: "1462",
  },
  {
    id: "d2",
    image: "/images/_placeholderImage (1).svg",
    title: "ASIC",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing  and typesetting industry.",
    miners: "576",
  },
];

//style

const Shop = () => {
  const navigate = useNavigate();

  //route handler
  const routeHandler = () => {
    navigate("/shop/asic");
  };

  return (
    <MuiLayout>
      <PageTitle component="h1">Market Place</PageTitle>

      <Box
        sx={{ display: "flex", gap: "55px", marginTop: "36px", width: "692px" }}
      >
        {DUMMY_DATA.map((data) => {
          return (
            <Stack key={data.id}>
              <Box
                component="img"
                src={data.image}
                alt={data.title}
                sx={{ width: "688px", height: "205px" }}
              />
              <Box sx={{ background: "#fff", textAlign: "center" }}>
                <MainTitle component="h3">{data.title}</MainTitle>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "24px",
                    fontWeight: 500,
                    lineHeight: "133.4%",
                    color: "custom.main",
                    marginBottom: "31px",
                  }}
                >
                  {data.paragraph}{" "}
                </Typography>

                <Typography
                  component="h5"
                  sx={{
                    fontSize: 60,
                    fontWeight: 400,
                    color: "custom.main",
                    lineHeight: 1,
                  }}
                >
                  {data.miners}
                </Typography>
                <Typography
                  component="span"
                  sx={{ fontWeight: 500, color: "custom.main" }}
                >
                  Miners
                </Typography>
                <CustomButton
                  onClick={data.title === "ASIC" ? routeHandler : ""}
                  type="submit"
                  variant="contained"
                  sx={{
                    width: 602,
                    m: "54px 45px 42px",
                  }}
                >
                  Continue
                </CustomButton>
              </Box>
            </Stack>
          );
        })}
      </Box>
    </MuiLayout>
  );
};

export default Shop;
