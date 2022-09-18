import React from "react";


function Header() {
  return (
    <header>
      <div className="hero">
        <h1>
          Unleash your creativity with <span className="logo">LoremBox</span>
        </h1>
        <p>
          Lorem box is your best solution to generate random text for your
          designs!
        </p>
      </div>
      <img src={require("../assets/headerImage.png")} alt="startup life" draggable="false"/>
    </header>
  );
}

export default Header;
