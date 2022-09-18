import React from "react";

import Button from "./Button";

const LoremInfo = () => {
  return (
    <section className="loremInfo" id="LoremInfo">
      <h2>What is lorem ?</h2>
      <p>
        Lorem ipsum is a placeholder text commonly used to demonstrate the
        visual form of a document or a typeface without relying on meaningful
        content. Lorem ipsum may be used as a placeholder before final copy is
        available. It is also used to temporarily replace text in a process
        called greeking, which allows designers to consider the form of a
        webpage or publication, without the meaning of the text influencing the
        design.
      </p>
      <Button text="Generate lorem"/>
    </section>
  );
};

export default LoremInfo;
