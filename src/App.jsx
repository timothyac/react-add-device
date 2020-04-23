import React, { useState, Fragment } from "react";
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

  const createScreen = {
    closeable: true,
    header: "Add New Device",
    icon: "icon.png",
    buttonText: "Continue",
  };

  const finishScreen = {
    closeable: false,
    header: "New Device",
    icon: "finish.png",
    buttonText: "Finish",
  };

  function Screen({ props, callback }) {
    return (
      <div className="screen">
        <div className="screen-contents">
          {props.closeable && (
            <button className="close-button">
              <CloseBtn onClick={() => setModal(false)} />
            </button>
          )}
          <div className="modal-header">
            <h1>{props.header}</h1>
          </div>
          <div className="modal-content">
            <p>{props.icon}</p>
            <button className="button" onClick={callback}>
              {props.buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-bg">
      <div className="modal-flex">
        <div className="modal-shell">
          <div className="modal">
            <CSSTransition
              in={activeScreen === "add"}
              unmountOnExit
              timeout={200}
              classNames="screen-primary"
            >
              <Screen
                props={createScreen}
                callback={() => setActiveScreen("finish")}
              />
            </CSSTransition>

            <CSSTransition
              in={activeScreen === "finish"}
              unmountOnExit
              timeout={200}
              classNames="screen-primary"
            >
              <Screen props={finishScreen} callback={() => setModal(false)} />
            </CSSTransition>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
