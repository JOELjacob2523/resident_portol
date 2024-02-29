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
        padding: "15px",
      }}
    >
      {home.map((item, index) => (
        <div
          className="text-center"
          key={index}
          style={{
            display: "grid",
            gap: "10px",
            gridTemplate: "repeat(4, 1fr) / repeat(2, 1fr)",
            gridAutoFlow: "row dense",
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
