import React from "react";
import App from "./App";

const Points = ({ pointed, click }) => {
  const getBtnStyles = (point) => ({
    borderRadius: "50%",
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "24px",
    letterSpacing: "0.175px",
    border: "none",
    cursor: "pointer",
    backgroundColor: pointed === point ? '#7C8798' : '',
    color: pointed === point ? "#FFF" : ''
  });

  return (
    <div className="point-section">
      {[1, 2, 3, 4, 5].map((point) => (
        <button
          style={getBtnStyles(point)}
          onClick={() => click(point)}
          key={point}
        >
          {point}
        </button>
      ))}
    </div>
  );
};

export default Points;


