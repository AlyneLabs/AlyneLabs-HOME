import React from "react";
import "./checklist.css"; //

function CheckList({ items }) {
  return (
    <div className="check-list">
      {items.map((item, index) => (
        <div key={index} className="check-item">
          <i className="fa-solid fa-check" style={{ color: "var(--primary)" }}></i>
          {item}
        </div>
      ))}
    </div>
  );
}

export default CheckList;
