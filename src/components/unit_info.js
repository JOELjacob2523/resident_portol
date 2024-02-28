import data from "../database.json";
import React, { useState, useEffect } from "react";

const UnitInfo = () => {
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
          <p>{item.user_id}</p>
          <p>{item.address}</p>
          <p>{item.city}</p>
          <p>{item.state}</p>
          <p>{item.zip_code}</p>
        </div>
      ))}
    </div>
  );
};

export default UnitInfo;
