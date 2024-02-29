import ReactModal from "react-modal";
import { useState } from "react";
import EditForm from "./edit_form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilSquare } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

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
            backgroundColor: "transparent",
            zIndex: 1000,
          },
          content: {
            maxWidth: "50%",
            margin: "auto",
            marginTop: "15%",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            position: "relative",
          },
        }}
      >
        <div>
          <h1
            style={{
              textAlign: "center",
            }}
          >
            Edit Form
          </h1>
          <div>
            <EditForm />
          </div>
        </div>
      </ReactModal>
      <Button variant="outline-primary" onClick={toggleModal}>
        <FontAwesomeIcon icon={faPencilSquare} /> Edit
      </Button>
    </div>
  );
};

export default EditUser;
