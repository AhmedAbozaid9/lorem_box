import { React, useState, useEffect } from "react";
import Select from "react-select";

import Button from "./Button";

function Settings({ getOutput }) {
  const [type, setType] = useState("");
  const [count, setCount] = useState("");

  const options = [
    { value: "paragraphs", label: "Paragraphs" },
    { value: "sentences", label: "Sentences" },
    { value: "words", label: "Words" },
  ];
  const onChange = (e) => {
    const val = e.target.value;
    setCount(val);
  };

  useEffect(() => {
    if (count > 10000) {
      setCount(10000);
    }
    if(Math.sign(count) < 0) {
      setCount(count * -1)
    }
  }, [count]);

  return (
    <form className="settings">
      <input
        type="number"
        min="1"
        max="10000"
        placeholder="Count"
        value={count}
        onChange={(e) => onChange(e)}
      />
      <Select
        options={options}
        placeholder="Select type"
        onChange={(type) => setType(type.value)}
      />
      <Button
        text="Generate"
        action={(e) => {
          e.preventDefault();
          getOutput(type, count);
        }}
      />
    </form>
  );
}

export default Settings;
