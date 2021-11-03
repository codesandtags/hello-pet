import React from "react";
import loading from "../../assets/giphy.gif";

const LetSuspense = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1>Loading </h1>
      <img src={loading} alt="loading" />
    </div>
  );
};

export default LetSuspense;
