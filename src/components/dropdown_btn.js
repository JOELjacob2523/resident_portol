import { useState } from "react";
import { Dropdown, Flex } from "antd";
import CarInfo from "./car_info";
import UnitInfo from "./unit_info";

const DropdownChoose = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const onMenuClick = (e) => {
    setSelectedItem(e.key);
  };

  const items = [
    {
      key: "1",
      label: "Unit info",
    },
    {
      key: "2",
      label: "Car info",
    },
  ];

  return (
    <Flex align="flex-start" gap="small" vertical>
      <Dropdown.Button
        menu={{
          items,
          onClick: onMenuClick,
        }}
      >
        More unit information
      </Dropdown.Button>
      {selectedItem === "2" && <CarInfo />}
      {selectedItem === "1" && <UnitInfo />}
    </Flex>
  );
};
export default DropdownChoose;
