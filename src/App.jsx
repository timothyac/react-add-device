import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useLocation, useHistory } from "react-router-dom";

import Modal from "./components/Modal";

// Custom hook from react-router-dom
const useQuery = () => new URLSearchParams(useLocation().search);

const App = () => {
  const [modal, setModal] = useState(false);
  let history = useHistory();
  let query = useQuery().get("add");

  // Check for query params on load
  useEffect(() => {
    if (query) {
      setModal(true);
    }
  }, [query]);

  const airpodFlipper = () => {
    if (query === "Airpods Pro") {
      history.push(`/?add=Airpods`);
    } else {
      history.push(`/?add=Airpods+Pro`);
    }
  };

  return (
    <div className="app">
      <div className="phone">
        <div className="header">
          <div className="centerpiece">
            <h1>react-add-device</h1>
            <p>
              Welcome to the demo, you'll notice the frame is based off a typical
              phone size. The demo works by checking for a query param. If it
              detects the query param then it will pop up a modal to walk you
              through the process. If you click the start button below, it will
              refresh the page with a query param in the url.
            </p>
            <button className="button" onClick={airpodFlipper}>
              Start
            </button>
          </div>
        </div>
      </div>
      <CSSTransition
        in={modal}
        unmountOnExit
        timeout={150}
        classNames="modal-bg"
      >
        <Modal setModal={setModal} device={query} />
      </CSSTransition>
    </div>
  );
};

export default App;
