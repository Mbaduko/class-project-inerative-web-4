import React from "react";

const ValidationMessage = ({ message }) => {
  return (
    <p className="text-red-600 text-sm mt-1">
      {message}
    </p>
  );
};

export default ValidationMessage;
