import React from "react";
import "./PreLoader.css";

const PageLoader = () => {
  return (
    <div className="page-loader">
      <div className="page-loader-background"></div>
      <div className="loader"></div>
    </div>
  );
};

export default PageLoader;
