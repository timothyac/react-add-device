import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import ConnectScreen from "./ConnectScreen";
import DeviceAddedScreen from "./DeviceAddedScreen";

const Modal = ({ setModal, device }) => {
  const [activeScreen, setActiveScreen] = useState("add");

  // Ignore touch events inside modal, but close on events from bg
  const closeFromBg = (e) => e.target === e.currentTarget && setModal(false);

  return (
    <div className="modal-bg">
      <div className="modal-flex" onClick={closeFromBg}>
        <div className="modal-shell" onClick={closeFromBg}>
          <div className="modal">
            <CSSTransition
              in={activeScreen === "add"}
              unmountOnExit
              timeout={150}
              classNames="screen-primary"
            >
              <ConnectScreen
                setActiveScreen={setActiveScreen}
                setModal={setModal}
              />
            </CSSTransition>
            <CSSTransition
              in={activeScreen === "finish"}
              unmountOnExit
              timeout={150}
              classNames="screen-primary"
            >
              <DeviceAddedScreen setModal={setModal} />
            </CSSTransition>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
