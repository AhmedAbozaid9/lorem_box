import { React, useState } from "react";

import Settings from "./Settings";

function GenerateLorem() {
  const [lorem, setLorem] = useState("");
  return (
    <div className="loremContainer">
      <h2 className="lorem-header">GENERATE LOREM</h2>

      <Settings />
      <div className="output">
        
      </div>
    </div>
  );
}

export default GenerateLorem;
