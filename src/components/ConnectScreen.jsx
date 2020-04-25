import React, { useState } from "react";

import { ReactComponent as CloseBtn } from "../assets/close.svg";
import airpods from "../assets/airpods-pro-cleaner.JPG";
import "./Spinner.scss";

const Screen = ({ setModal, setActiveScreen }) => {
  const [connecting, setConnecting] = useState(false);

  const connectAndTransition = () => {
    // Show connecting
    setConnecting(true);

    // Wait for 1.5 second
    setTimeout(() => {
      // Transition to final screen
      setActiveScreen("finish");
    }, 1500);
  };

  return (
    <div className="screen">
      <div className="screen-contents">
        <button className="close-button">
          <CloseBtn onClick={() => setModal(false)} />
        </button>
        <div className="modal-header">
          <h1>AirPods Pro</h1>
        </div>
        <div className="modal-content">
          <div className="modal-image">
            <img src={airpods} alt="airpods" />
          </div>
          {connecting ? (
            <div className="connecting">
              <Spinner />
              <p>Connecting</p>
            </div>
          ) : (
            <button className="button" onClick={connectAndTransition}>
              Connect
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Spinner = () => (
  <div className="spinner">
    <div className="bar1"></div>
    <div className="bar2"></div>
    <div className="bar3"></div>
    <div className="bar4"></div>
    <div className="bar5"></div>
    <div className="bar6"></div>
    <div className="bar7"></div>
    <div className="bar8"></div>
    <div className="bar9"></div>
    <div className="bar10"></div>
    <div className="bar11"></div>
    <div className="bar12"></div>
  </div>
);

export default Screen;
