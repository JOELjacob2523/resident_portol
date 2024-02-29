import data from "../database.json";
import React, { useState, useEffect } from "react";

const UnitHome = () => {
  const [home, setHome] = useState([]);

  useEffect(() => {
    setHome(data);
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
      {home.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            border: "2px solid #E8E1E1",
            padding: "10px",
            margin: "10px",
            borderRadius: "3px",
          }}
        >
          <p>
            <strong>Condo ID:</strong> {item.condo_id}
          </p>
          <p>
            <strong>Address:</strong> {item.address}
          </p>
          <p>
            <strong>City/State/Zip:</strong> {item.city} {item.state}{" "}
            {item.zip_code}
          </p>
          <p>
            <strong>Last Updated:</strong> {item.last_updated}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UnitHome;
