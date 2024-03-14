import { Tabs } from "antd";
import CarInfo from "./car_info";
import UnitInfo from "./unitInfo";
import Payments from "./payments";

const items = [
  {
    label: `Apt #${1}`,
    key: 1,
    children: <CarInfo />,
  },
  {
    label: `Apt #${2}`,
    key: 2,
    children: <UnitInfo />,
  },
  {
    label: `Apt #${3}`,
    key: 3,
    children: <Payments />,
  },
];

const CarPage = () => {
  return (
    <div className="car-page-container">
      <Tabs type="card" items={items} />
    </div>
  );
};

export default CarPage;
