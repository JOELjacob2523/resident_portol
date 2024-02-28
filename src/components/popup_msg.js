import ReactModal from "react-modal";
import { useState } from "react";
import { Button } from "antd";
import { EditTwoTone } from "@ant-design/icons";

const EditUser = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        ariaHideApp={false}
        contentLabel="Example Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          },
          content: {
            maxWidth: "400px",
            margin: "auto",
            marginTop: "15%",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            position: "relative",
          },
        }}
      >
        <h1>This is a pop-up message!</h1>
      </ReactModal>
      <Button type="link" onClick={toggleModal}>
        <EditTwoTone />
        Edit
      </Button>
    </div>
  );
};

export default EditUser;
