import React from "react";
import "./progress.scss";
import propTypes from "prop-types";
const Progressbar = ({ array }) => {
  return (
    <div style={{ display: "flex" }}>
      {array.map((items) => (
        <div className="progessbar-outer">
          <div className="progessbar">
            <div className={`imagebox ${items?.status}`}>
              <img src={items?.icon} className="icon" />
            </div>
            <div className="border">
              <div className={`border1 ${items?.status}`}></div>
              <div className={`border1 ${items.status}`}></div>
              <div className={`border1 ${items.status}`}></div>
              <div className={`border1 ${items.status}`}></div>
            </div>
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

export default Progressbar;
Progressbar.propTypes = {
  value: propTypes.object,
};
