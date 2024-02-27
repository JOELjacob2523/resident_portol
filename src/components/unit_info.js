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
