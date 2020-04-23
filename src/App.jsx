import React from "react";

import { ReactComponent as CloseBtn } from "./assets/close.svg";

function App() {
  return (
    <div className="app">
      <div className="phone">
        <h1>Add New Device</h1>
        <button>Add</button>
      </div>
      <div className="modal-bg">
        <div className="modal-flex">
          <div className="modal-shell">
            <div className="modal">
              <button className="close-button">
                <CloseBtn />
              </button>
              <div className="modal-header">
                <h1>Add New Device</h1>
              </div>
              <div className="modal-content">
                <p>icon.png</p>
                <button className="button">Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
