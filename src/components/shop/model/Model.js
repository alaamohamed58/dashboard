import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ModelData from "./ModelData";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "power Model 001",
//     model: "AntiMiner S19 pro",
//     rate: "110 TH/s",
//     power: "3250 w",
//     algorithm: "SHA256",
//     estimatedDate: "07/10/2022",
//     warrently: "11 Months",
//     conditions: "New",
//     price: "2000",
//     img: "/images/icons/model.svg",
//   },
//   {
//     id: "m2",
//     title: "power Model 003",
//     model: "AntiMiner S19 pro",
//     rate: "110 TH/s",
//     power: "3250 w",
//     algorithm: "SHA256",
//     estimatedDate: "07/10/2022",
//     warrently: "11 Months",
//     conditions: "New",
//     price: "2000",
//     img: "/images/icons/model.svg",
//   },
// ];

const Model = ({ activeStepHandler }) => {
  const [model, setModel] = useState([]);
  //fetch model
  useEffect(() => {
    let token;
    if (localStorage.getItem("token")) {
      token = localStorage.getItem("token");
    }
    const farm = async () => {
      const response = await fetch(`${window.domain}power-model/`, {
        method: "GET",
        headers: {
          Authorization: `Token ${token}`,
        },
        redirect: "follow",
      });

      const data = await response.json();

      setModel(data);
    };

    farm();
  }, []);

  return (
    <Box component="ul">
      {model.map((data) => {
        return (
          <ModelData
            activeStepHandler={activeStepHandler}
            key={data.id}
            id={data.id}
            title={data.title}
            model={data.model}
            rate={data["hash_rate"]}
            power={data.power}
            algorithm={data.algorithm}
            estimatedDate={data["estimated_online_date"]}
            warrenty={data.warranty}
            conditions={data.conditions}
            price={data.price}
            image="/images/icons/model.svg"
          />
        );
      })}
    </Box>
  );
};

export default Model;
