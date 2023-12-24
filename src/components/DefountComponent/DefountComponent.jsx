import React from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";

const DefountComponent = (children) => {
  return (
    <div>
      <HeaderComponent />
      {children}
    </div>
  );
};

export default DefountComponent;
