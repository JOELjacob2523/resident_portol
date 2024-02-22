import React, { useState } from "react";

const EditButton = ({ onPlateNumberChange }) => {
  const [editableStr, setEditableStr] = useState("");
  const [editing, setEditing] = useState(false);

  const handleChange = (value) => {
    setEditableStr(value);
    onPlateNumberChange(value);
  };

  return <></>;
};

export default EditButton;
