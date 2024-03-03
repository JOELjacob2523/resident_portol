import { Tabs } from "antd";
import CarInfo from "./car_info";

const items = [
  {
    label: `Apt #${1}`,
    key: 1,
    children: <CarInfo />,
  },
  {
    label: `Apt #${2}`,
    key: 2,
    children: `Content of Tab Pane ${2}`,
  },
  {
    label: `Apt #${3}`,
    key: 3,
    children: `Content of Tab Pane ${3}`,
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
