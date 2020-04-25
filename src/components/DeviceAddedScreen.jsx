import React from "react";
import { useHistory } from "react-router-dom";

import airpods from "../assets/airpods-pro-cleaner.JPG";

const Screen = ({ setModal }) => {
  const history = useHistory();

  const closeAndRedirect = () => {
    // Close modal
    setModal(false);

    // Redirect to home with query
    history.push("/");
  };

  return (
    <div className="screen">
      <div className="screen-contents">
        <div className="modal-header">
          <h1>Device Added</h1>
        </div>
        <div className="modal-content">
          <div className="modal-image">
            <img src={airpods} alt="airpods" />
            <p>'Airpods Pro successfully synced!'</p>
          </div>
          <button className="button" onClick={closeAndRedirect}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default Screen;
