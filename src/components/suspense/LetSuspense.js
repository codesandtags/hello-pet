import React from "react";
import loading from "../../assets/giphy.gif";

const LetSuspense = () => {
  return (
    <div className=" flex justify-center items-center h-screen">
      <h1 className="2xl:text-5xl  lg:text-5xl xl:text-5xl md:text-5xl sm:text-4  xl xs:text-4xl 2xs:text-3xl">
        Loading{" "}
      </h1>
      <img
        src={loading}
        alt="loading"
        className="2xl:w-2/12 lg:w-2/12 xl:w-2/12 md:w-40 sm:w-40 xs:w-40 2xs:w-40 "
      />
    </div>
  );
};

export default LetSuspense;
