import React, { useState } from "react";

function Filter() {
  const [buttonGroup, setButtonGroup] = useState([
    { id: 1, text: "Хиты продаж" },
    { id: 2, text: "Для города" },
    { id: 3, text: "Для взрослых" },
    { id: 4, text: "Для детей" },
  ]);
  const [activeButton, setActiveButton] = useState({ 1: true });

  const onToogle = (id) => {
    setActiveButton({ [id]: true });
  };

  return (
    <div className="filter-wrapper">
      <div className="container">
        <div className="filter-text">
          <h1>ЭЛЕКТОСАМОКАТЫ</h1>
        </div>
        <div className="filter-buttons">
          {buttonGroup.map((btn) => (
            <button
              className={activeButton[btn.id] ? "active" : ""}
              style={{
                backgroundColor: activeButton[btn.id] ? "#6F73EE" : "#f4f7fb",
                color: activeButton[btn.id] ? "white" : "#5d6c7b",
              }}
              onClick={() => onToogle(btn.id)}
              key={btn.id}
            >
              {btn.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filter;
