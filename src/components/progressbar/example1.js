import React from "react";
import Progressbar from "./index";
import tick from "./tick.svg";
import loading from "./loading.svg";
import alert from "./alert.svg";
import greytick from "./greytick.svg";
const Example1 = () => {
  const array = [
    {
      title: "Success",
      Description: "It values defention",
      icon: tick,
      isprogess: false,
      status: "success",
      textcolor: "bluecolor",
    },
    {
      title: "Error",
      Description: "It values defention",
      icon: alert,
      isprogess: false,
      status: "error",
      textcolor: "bluecolor",
    },
    {
      title: "Pending",
      Description: "It values defention",
      icon: loading,
      isprogess: false,
      status: "pending",
      textcolor: "bluecolor",
    },
    {
      title: "Disable",
      Description: "It values defention",
      icon: greytick,
      isprogess: false,
      status: "disable",
      textcolor: "disable",
    },
  ];
  return (
    <div>
      <Progressbar array={array} />
    </div>
  );
};

export default Example1;
