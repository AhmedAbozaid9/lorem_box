import { React, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import getLorem from "../utils/getLorem";

import Settings from "./Settings";

function GenerateLorem() {
  const [lorem, setLorem] = useState("");
  const getOutput = (type, count) => {
    setLorem(getLorem(type, count));
  };
  return (
    <div className="loremContainer">
      <h2 className="lorem-header">GENERATE LOREM</h2>

      <Settings getOutput={getOutput} />
      <div className="output-wrapper">
        <div className="output">{lorem}</div>
      </div>
      <button
        className="copy"
        onClick={() => {
          navigator.clipboard.writeText(lorem);
          toast.success("Lorem has been copied to your clipboard!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1800,
          });
        }}
      >
        Copy
      </button>
      <ToastContainer />
    </div>
  );
}

export default GenerateLorem;
