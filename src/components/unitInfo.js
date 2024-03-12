import data from "../database.json";
import React from "react";
import { Descriptions, Card } from "antd";
import "../css/unitInfo.css";

const items = data.flatMap((item) => [
  {
    key: "1",
    label: "Username",
    children: item.name,
  },
  {
    key: "2",
    label: "Address",
    children: item.address,
  },
  {
    key: "3",
    label: "Contact",
    children: item.contact,
  },
  {
    key: "4",
    label: "Mobile",
    children: item.cell,
  },
  {
    key: "5",
    label: "City / State / Zip",
    children: `${item.city}, ${item.state}, ${item.zip_code}`,
  },
]);
const UnitInfo = () => (
  <div className="unit-info-container">
    <Card title="Unit Info" className="description-tag" items={items} />
  </div>
);
export default UnitInfo;
