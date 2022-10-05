import { useState } from "react";
import {
  Typography,
  Stack,
  Box,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { Button } from "@mui/material";

let h3Style = { color: "#0A194E", fontSize: "22px", fontWeight: 700 };

const ModelData = (props) => {
  const [quantity, setQuantity] = useState(1);

  const quantityChangeHandler = (e) => {
    setQuantity(e.target.value);
  };
  return (
    <Box
      component="li"
      sx={{
        padding: "30px",
        display: "flex",
        alignItems: "center",
        gap: "30px",
        border: "2px solid #CEDDF2",
        background: "#fff",
        marginBottom: "51px",
      }}
    >
      <Box
        component="img"
        src={props.img}
        sx={{ display: "inline-block", width: "263.18px" }}
      />

      <Stack>
        <Typography
          component="h2"
          sx={{
            color: "#0A194E",
            fontSize: "35px",
            fontWeight: 700,
            marginBottom: "12px",
          }}
        >
          {props.title}{" "}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            gap: "30px 112px",
            border: "1px solid #CEDDF2",
            borderLeft: "none",
            borderRight: "none",
            padding: "20px 0",
          }}
        >
          <div>
            <Typography
              component="span"
              sx={{ color: "#A2BCDC", fontSize: "15px", fontWeight: 700 }}
            >
              Model
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {props.model}
            </Typography>
          </div>

          <div>
            <Typography
              component="span"
              sx={{ color: "#A2BCDC", fontSize: "15px", fontWeight: 700 }}
            >
              Hash Rate
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {" "}
              {props.rate}{" "}
            </Typography>
          </div>

          <div>
            <Typography
              component="span"
              sx={{ color: "#A2BCDC", fontSize: "15px", fontWeight: 700 }}
            >
              Power
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {" "}
              {props.power}{" "}
            </Typography>
          </div>

          <div>
            <Typography
              component="span"
              sx={{ color: "#A2BCDC", fontSize: "15px", fontWeight: 700 }}
            >
              Algorithm
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {" "}
              {props.algorithm}{" "}
            </Typography>
          </div>

          <div>
            <Typography
              component="span"
              sx={{ color: "#A2BCDC", fontSize: "15px", fontWeight: 700 }}
            >
              Estimated Online Date
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {" "}
              {props.estimatedDate}{" "}
            </Typography>
          </div>

          <div>
            <Typography
              component="span"
              sx={{ color: "#A2BCDC", fontSize: "15px", fontWeight: 700 }}
            >
              Warrenty
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {" "}
              {props.warrenty}{" "}
            </Typography>
          </div>

          <div>
            <Typography
              component="span"
              sx={{ color: "#A2BCDC", fontSize: "15px", fontWeight: 700 }}
            >
              Conditions
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {" "}
              {props.conditions}{" "}
            </Typography>
          </div>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <FormControl sx={{ m: 1 }} variant="standard">
              <Select
                sx={{
                  height: 40,
                  width: "50px",
                  textAlign: "center",
                  border: "1px solid #2776EA",
                  color: "#2776EA",
                  fontSize: "18px",
                  "& .MuiSvgIcon-root": {
                    color: "#2776EA",
                  },
                }}
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={quantity}
                onChange={quantityChangeHandler}
                autoWidth
                label="quantity"
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>4</MenuItem>
                <MenuItem value={4}>5</MenuItem>
                <MenuItem value={5}>6</MenuItem>
              </Select>
            </FormControl>
            <Button
              onClick={props.activeStepHandler}
              type="button"
              variant="contained"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "203px",
                height: "42px",
                background: "#2776EA",
                fontSize: "13px",
                fontWeight: "600",
                lineHeight: "22PX",
                letterSpacing: "0.46px",
                textTransform: "uppercase",
              }}
            >
              SELECT MODEL
            </Button>
          </Box>

          <div>
            <Typography
              sx={{ fontSize: "35px", fontWeight: 700, color: "#0A194E" }}
            >
              {" "}
              ${props.price}{" "}
            </Typography>
          </div>
        </Box>
      </Stack>
    </Box>
  );
};

export default ModelData;
