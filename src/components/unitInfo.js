// import data from "../database.json";
// import React, { useEffect, useState } from "react";
// import { Card, Col, Row, Typography } from "antd";
// import "../css/unitInfo.css";

// const { Paragraph } = Typography;

// const UnitInfo = () => {
//   // const [userInfo, setUserInfo] = useState([]);
//   const [editableStr, setEditableStr] = useState("");

//   useEffect(() => {
//     setEditableStr(data);
//   }, []);

//   return (
//     <div className="unit-info-container">
//       {data.map((item, index) => (
//         <div key={index} className="unit-info-inner">
//           <Row className="unit-info-row">
//             <Col className="unit-info-col">
//               <Card
//                 title={`Unit Info for: ${item.name}`}
//                 bordered={true}
//                 className="unit-info-card"
//               >
//                 <div>
//                   <Paragraph
//                     editable={{
//                       onChange: setEditableStr,
//                     }}
//                   >
//                     {`Name: ${item.name}`}
//                     {editableStr}
//                   </Paragraph>
//                   <br />
//                   <Paragraph
//                     editable={{
//                       onChange: setEditableStr,
//                     }}
//                   >
//                     {`Address: ${item.address}`}
//                     {editableStr}
//                   </Paragraph>
//                   <br />
//                   <Paragraph
//                     editable={{
//                       onChange: setEditableStr,
//                     }}
//                   >
//                     {`City / State / Zip code: ${item.city}, ${item.state}, ${item.zip_code}`}
//                     {editableStr}
//                   </Paragraph>
//                   <br />
//                   <Paragraph
//                     editable={{
//                       onChange: setEditableStr,
//                     }}
//                   >
//                     {`Contact: ${item.contact}`}
//                     {editableStr}
//                   </Paragraph>
//                   <br />
//                   <Paragraph
//                     editable={{
//                       onChange: setEditableStr,
//                     }}
//                   >
//                     {`Mobile: ${item.cell}`}
//                     {editableStr}
//                   </Paragraph>
//                 </div>
//               </Card>
//             </Col>
//           </Row>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default UnitInfo;

import React, { useEffect, useState } from "react";
import { Card, Col, Row, Typography } from "antd";
import data from "../database.json";
import "../css/unitInfo.css";

const { Paragraph } = Typography;

const UnitInfo = () => {
  const [editableStr, setEditableStr] = useState([]);

  useEffect(() => {
    setEditableStr(data);
  }, []);

  const handleEdit = (index, field, value) => {
    const lables = data.map((obj) => Object.keys(obj));

    let maxLength;

    switch (lables) {
      case "name":
        maxLength = 5;
        break;
      case "address":
        maxLength = 8;
        break;
      case "City / State / Zip code":
        maxLength = 23;
        break;
      case "contact":
        maxLength = 8;
        break;
      case "cell":
        maxLength = 5;
        break;
      default:
        maxLength = 0;
    }

    const newData = [...editableStr];
    newData[index][field] = value.substring(maxLength);
    console.log(value);
    setEditableStr(newData);
  };

  return (
    <div className="unit-info-container">
      {editableStr.map((item, index) => (
        <div key={index} className="unit-info-inner">
          <Row className="unit-info-row">
            <Col className="unit-info-col">
              <Card
                title={`Unit Info for: ${item.name}`}
                bordered={true}
                className="unit-info-card"
              >
                <div>
                  <Paragraph
                    editable={{
                      onChange: (text) => handleEdit(index, "name", text),
                    }}
                  >
                    {`Name: ${item.name}`}
                  </Paragraph>
                  <br />
                  <Paragraph
                    editable={{
                      onChange: (text) => handleEdit(index, "address", text),
                    }}
                  >
                    {`Address: ${item.address}`}
                  </Paragraph>
                  <br />
                  <Paragraph
                    editable={{
                      onChange: (text) => handleEdit(index, "city", text),
                    }}
                  >
                    {`City / State / Zip code: ${item.city}, ${item.state}, ${item.zip_code}`}
                  </Paragraph>
                  <br />
                  <Paragraph
                    editable={{
                      onChange: (text) => handleEdit(index, "contact", text),
                    }}
                  >
                    {`Contact: ${item.contact}`}
                  </Paragraph>
                  <br />
                  <Paragraph
                    editable={{
                      onChange: (text) => handleEdit(index, "cell", text),
                    }}
                  >
                    {`Mobile: ${item.cell}`}
                  </Paragraph>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
};
export default UnitInfo;
