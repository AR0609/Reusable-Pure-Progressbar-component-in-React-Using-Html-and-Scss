import React from "react";
import Progress from "./progressbar1";
const Example2 = () => {
  const array = [
    {
      title: "Success",
      Description: "It values defention",
      isprogess: false,
      status: "success",
      textcolor: "bluecolor",
    },
    {
      title: "Success",
      Description: "It values defention",
      isprogess: false,
      status: "success",
      textcolor: "bluecolor",
    },
    {
      title: "Disable",
      Description: "It values defention",
      isprogess: false,
      status: "disable",
      textcolor: "disable",
    },
  ];
  return (
    <div>
      <Progress array={array} />
    </div>
  );
};

export default Example2;
