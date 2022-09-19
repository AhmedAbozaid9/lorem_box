import { React, useState } from "react";
import Select from "react-select";

import Button from "./Button";

function Settings() {
  const [type, setType] = useState("paragraphs");
  const [count, setCount] = useState((val) => (val > 10000 ? 10000 : val));

  const options = [
    { value: "paragraphs", label: "Paragraphs" },
    { value: "sentences", label: "Sentences" },
    { value: "words", label: "Words" },
  ];
  const onChange = (e) => {
    const val = e.target.value;
    setCount(val);
  };
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
        onChange={(type) => setType(type)}
      />
      <Button text="Generate"/>
    </form>
  );
}

export default Settings;
