import React from "react";
import ReactLoading from "react-loading";

function LoadingScreen() {
  return (
    <div>
      <ReactLoading type="spin" color="#0000FF" height={100} width={50} />
    </div>
  );
}

export default LoadingScreen;
