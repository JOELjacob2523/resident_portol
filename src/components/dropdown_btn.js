import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import UnitHome from "./unit_home";
import CarInfo from "./car_info";
import UnitInfo from "./unit_info";

const DropdownChoose = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Home">
        {<UnitHome />}
      </Tab>
      <Tab eventKey="profile" title="Unit info">
        {<UnitInfo />}
      </Tab>
      <Tab eventKey="contact" title="Car info">
        {<CarInfo />}
      </Tab>
    </Tabs>
  );
};
export default DropdownChoose;
