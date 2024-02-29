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
        padding: "15px",
      }}
    >
      <div>
        {info.map((item, index) => (
          <>
            <div
              className="text-center"
              key={index}
              style={{
                display: "grid",
                gridTemplate: "repeat(4, 1fr) / repeat(2, 1fr)",
                gridAutoFlow: "row dense",
                border: "2px solid #E8E1E1",
                padding: "10px",
                margin: "10px",
                borderRadius: "3px",
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
              <div>
                <EditUser />
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default UnitInfo;
