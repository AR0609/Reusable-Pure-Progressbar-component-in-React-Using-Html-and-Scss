import React from "react";

import "./progressbar1.scss";
const Progressbar1 = ({ array }) => {
  return (
    <div style={{ display: "flex" }}>
      {array.map((items) => (
        <div className="progessbar-inner">
          <div className="progessbar">
            <div className={`border ${items?.status}`}></div>
          </div>
          <div>
            <p
              className={items.status !== "disable" ? "title" : "disable-title"}
            >
              {items.title}
            </p>
            <p className={items.status !== "disable" ? "desc" : "disable"}>
              {items.Description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Progressbar1;
