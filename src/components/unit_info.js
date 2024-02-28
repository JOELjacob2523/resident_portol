import data from "../database.json";
import React, { useState, useEffect } from "react";
import EditUser from "./popup_msg";

const UnitInfo = () => {
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
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <p>
            <strong>Unit ID:</strong> {item.user_id}
          </p>
          <p>
            <strong>Number of Cars:</strong> {item.max_cars}
            <br /> <small>( max cars 2 )</small>
          </p>
          <p>
            <strong>Address:</strong> {item.address}
          </p>
          <p>
            <strong>City/State/Zip:</strong> {item.city} {item.state}{" "}
            {item.zip_code}
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

export default UnitInfo;
