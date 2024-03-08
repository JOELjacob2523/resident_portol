import data from "../database.json";
import { FiMapPin } from "react-icons/fi";
import "../css/carInfoTop.css";

const CarInfoTop = () => {
  return (
    <div className="top-div">
      <div>Welcome, Joel Jacob</div>
      <div className="car-info">
        {/* {data.map((item, index) => (
          <div key={index}>
            <FiMapPin /> {`${item.address}`},
            <br key={`${index}-br`} />{" "}
            {`${item.city} ${item.state} ${item.zip_code}`}
          </div>
        ))} */}
        <FiMapPin /> 7 Karlsburg Rd. #102, <br />
        Monroe NY 10950
      </div>
    </div>
  );
};

export default CarInfoTop;
