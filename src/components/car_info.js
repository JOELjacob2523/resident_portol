import data from "../database.json";
import React, { useState, useEffect } from "react";
import EditUser from "./popup_msg";

const CarInfo = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setInfo(data);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        border: "2px solid #E8E1E1",
        padding: "25px",
        borderRadius: "3px",
      }}
    >
      {info.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <p>
            <strong>Plate number:</strong> {item.plate_number}
          </p>
          <p>
            <strong>Car color:</strong> {item.car_color}
          </p>
          <p>
            <strong>Car make:</strong> {item.car_make}
          </p>
          <p>
            <strong>Car model:</strong> {item.car_model}
          </p>
          <p>
            <strong>Car image:</strong> {item.car_pic}
          </p>
        </div>
      ))}
      <div
        style={{
          float: "right",
          marginTop: "10px",
        }}
      >
        <EditUser />
      </div>
    </div>
  );
};

export default CarInfo;
