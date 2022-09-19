import { React, useState } from "react";

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
        <button className="copy">Copy</button>
    </div>
  );
}

export default GenerateLorem;
