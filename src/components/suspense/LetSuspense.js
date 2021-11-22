import React from "react";
import loading from "../../assets/giphy.gif";

const LetSuspense = () => {
  return (
    <div className=" flex justify-center items-center h-screen">
      <h1 className="xs:text-3xl">Loading </h1>
      <img src={loading} alt="loading" className="w-1/2 md:w-1/3" />
    </div>
  );
};

export default LetSuspense;
