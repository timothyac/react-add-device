import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import { ReactComponent as CloseBtn } from "./assets/close.svg";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div className="app">
      <div className="phone">
        <h1>Add New Device</h1>
        <button className="button" onClick={() => setModal(true)}>
          Add
        </button>
      </div>
      {modal && <Modal setModal={setModal} />}
    </div>
  );
}

const Modal = ({ setModal }) => {
  const [activeScreen, setActiveScreen] = useState("add");

  // Ignore touch events inside modal, but close on events from bg
  const closeFromBg = (e) => e.target === e.currentTarget && setModal(false);

  const device = "deviceName";

  const screens = [
    {
      screen: "add",
      closeable: true,
      header: "Add New Device",
      description: `Would you like to add ${device} to your account?`,
      icon: "icon.png",
      buttonText: "Continue",
      callback: () => setActiveScreen("finish"),
    },
    {
      screen: "finish",
      closeable: false,
      header: "Device Added",
      description: `${device} has been added to your account!`,
      icon: "finish.png",
      buttonText: "Done",
      callback: () => setModal(false),
    },
  ];

  const Screen = ({ props }) => {
    return (
      <CSSTransition
        in={activeScreen === props.screen}
        unmountOnExit
        timeout={200}
        classNames="screen-primary"
      >
        <div className="screen">
          <div className="screen-contents">
            {props.closeable && (
              <button className="close-button">
                <CloseBtn onClick={() => setModal(false)} />
              </button>
            )}
            <div className="modal-header">
              <h1>{props.header}</h1>
              <p>{props.description}</p>
            </div>
            <div className="modal-content">
              <p>{props.icon}</p>
              <button className="button" onClick={props.callback}>
                {props.buttonText}
              </button>
            </div>
          </div>
        </div>
      </CSSTransition>
    );
  };

  return (
    <div className="modal-bg">
      <div className="modal-flex" onClick={closeFromBg}>
        <div className="modal-shell" onClick={closeFromBg}>
          <div className="modal">
            {screens.map((obj, i) => (
              <Screen key={i} props={obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
