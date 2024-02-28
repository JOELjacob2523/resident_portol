import data from "../database.json";
import React, { useState, useEffect } from "react";

const CarInfo = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setInfo(data);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%",
        border: "2px solid #E8E1E1",
        padding: "10px",
        borderRadius: "3px",
      }}
    >
      {info.map((item, index) => (
        <div key={index}>
          <p>{item.plate_number}</p>
          <p>{item.car_color}</p>
          <p>{item.car_make}</p>
          <p>{item.car_model}</p>
          <p>{item.car_pic}</p>
        </div>
      ))}
    </div>
  );
};

export default CarInfo;
