import { Box } from "@mui/material";
import ModelData from "./ModelData";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "power Model 001",
    model: "AntiMiner S19 pro",
    rate: "110 TH/s",
    power: "3250 w",
    algorithm: "SHA256",
    estimatedDate: "07/10/2022",
    warrently: "11 Months",
    conditions: "New",
    price: "2000",
    img: "/images/icons/model.svg",
  },
  {
    id: "m2",
    title: "power Model 003",
    model: "AntiMiner S19 pro",
    rate: "110 TH/s",
    power: "3250 w",
    algorithm: "SHA256",
    estimatedDate: "07/10/2022",
    warrently: "11 Months",
    conditions: "New",
    price: "2000",
    img: "/images/icons/model.svg",
  },
];

const Model = ({ activeStepHandler }) => {
  return (
    <Box component="ul">
      {DUMMY_DATA.map((data) => {
        return (
          <ModelData
            activeStepHandler={activeStepHandler}
            key={data.id}
            id={data.id}
            title={data.title}
            model={data.model}
            rate={data.rate}
            power={data.power}
            algorithm={data.algorithm}
            estimatedDate={data.estimatedDate}
            warrenty={data.warrently}
            conditions={data.conditions}
            price={data.price}
            img={data.img}
          />
        );
      })}
    </Box>
  );
};

export default Model;
