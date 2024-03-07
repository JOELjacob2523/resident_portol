import data from "../database.json";
import { FiMapPin } from "react-icons/fi";

const carInfoTop = () => {
  return (
    <div className="top-div">
      <div>Welcome, Joel Jacob</div>
      <div className="car-info">
        {data.map((item, index) => (
          <div key={index}>
            <FiMapPin /> {`${item.address}`},
            <br key={`${index}-br`} />{" "}
            {`${item.city} ${item.state} ${item.zip_code}`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default carInfoTop;
