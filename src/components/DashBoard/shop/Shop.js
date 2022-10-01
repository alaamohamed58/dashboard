import { useNavigate } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import MuiLayout from "../../layout/MuiLayout";

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
const typographyStyle = {
  fontWeight: 700,
  fontSize: "35px",
  lineHeight: "133.4%",
  color: "#0A194E",
};

const Shop = () => {
  const navigate = useNavigate();

  //route handler
  const routeHandler = () => {
    navigate("/shop/asic");
  };

  return (
    <MuiLayout>
      <Typography component="h1" sx={typographyStyle}>
        Market Place
      </Typography>

      <Box sx={{ display: "flex", gap: "55px", marginTop: "36px" }}>
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
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    fontSize: "35px",
                    textAlign: "center",
                    color: " #0A194E",
                    margin: "31px 0 21px",
                  }}
                >
                  {data.title}{" "}
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "24px",
                    fontWeight: 500,
                    lineHeight: "133.4%",
                    color: "#0A194E",
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
                    color: "#0A194E",
                    lineHeight: 1,
                  }}
                >
                  {data.miners}
                </Typography>
                <Typography
                  component="span"
                  sx={{ fontWeight: 500, color: "#0A194E" }}
                >
                  Miners
                </Typography>
                <Button
                  onClick={routeHandler}
                  type="submit"
                  variant="contained"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "56px auto 42px",
                    padding: "0px",
                    width: 602,
                    height: "55px",
                    background: "#2776EA",
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "26px",
                    letterSpacing: "0.46px",
                    textTransform: "uppercase",
                  }}
                >
                  Continue
                </Button>
              </Box>
            </Stack>
          );
        })}
      </Box>
    </MuiLayout>
  );
};

export default Shop;
